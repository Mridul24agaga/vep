"use client"

import { useState } from "react"
import { Shield, Check, Wallet } from "lucide-react"
import { motion } from "framer-motion"
import type { Plan } from "@/types/pricing"

const plans: Plan[] = [
  {
    name: "Free Plan",
    price: "Free",
    features: [
      "Basic VPN Protection",
      "Limited Server Locations",
      "Standard Speed",
      "Basic Security Features",
      "No Bandwidth Limit",
    ],
    buttonClass: "bg-[#40C057] hover:bg-[#40C057]/90",
    cardClass: "bg-[#0B1221]",
    badge: "Free Forever",
  },
  {
    name: "Premium Plan",
    buttonClass: "bg-[#40C057] hover:bg-[#40C057]/90",
    cardClass: "bg-[#0B1221] border-2 border-[#40C057]",
    badge: "Most Popular",
  },
]

export function Pricing() {
  const [isWalletConnected, setIsWalletConnected] = useState(false)

  const handleConnectWallet = () => {
    // Implement your wallet connection logic here
    setIsWalletConnected(true)
  }

  return (
    <div className="pricing-background py-20 relative overflow-hidden">
      <div className="perspective-grid opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-[#40C057]" />
            <span className="text-lg font-medium text-[#40C057]">Pricing Plan</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white glow-text">Choose Your Perfect Plan</h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`${plan.cardClass} rounded-2xl p-8 space-y-6 relative overflow-hidden`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Popular Badge */}
              <div className="absolute top-6 right-6">
                <span className="bg-[#40C057]/20 text-[#40C057] py-1 px-3 rounded-full text-sm">{plan.badge}</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                {index === 0 && plan.price && (
                  <p className="text-3xl font-bold text-[#40C057] glow-text">{plan.price}</p>
                )}
              </div>

              {index === 0 ? (
                <>
                  {plan.features && (
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <Check className="w-5 h-5 mr-3 text-[#40C057]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <button
                    className={`${plan.buttonClass} w-full py-3 rounded-lg text-white font-medium transition-colors hover:shadow-glow-sm`}
                  >
                    Get Started Free
                  </button>
                </>
              ) : (
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white">Get Premium</h4>
                  <p className="text-sm text-gray-400">Connect your wallet to prove your holdings of $XYZ token</p>
                  <button
                    onClick={handleConnectWallet}
                    className={`${plan.buttonClass} w-full py-3 rounded-lg text-white font-medium transition-colors hover:shadow-glow-sm flex items-center justify-center gap-2`}
                  >
                    <Wallet className="w-5 h-5" />
                    {isWalletConnected ? "Wallet Connected" : "Connect Wallet"}
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#40C057] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#FFA500] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
    </div>
  )
}

