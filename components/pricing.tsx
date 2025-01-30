"use client"

import { Shield, Check } from "lucide-react"

const plans = [
  {
    name: "Free Plan",
    price: "0",
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
    price: "10 Tokens",
    features: [
      "Advanced VPN Protection",
      "All Server Locations",
      "Ultra-Fast Speed",
      "Advanced Security Suite",
      "Priority Support 24/7",
    ],
    buttonClass: "bg-[#40C057] hover:bg-[#40C057]/90",
    cardClass: "bg-[#0B1221] border-2 border-[#40C057]",
    badge: "Most Popular",
  },
]

export function Pricing() {
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
            <div
              key={plan.name}
              className={`${plan.cardClass} rounded-2xl p-8 space-y-6 relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-glow`}
            >
              {/* Popular Badge */}
              <div className="absolute top-6 right-6">
                <span className="bg-[#40C057]/20 text-[#40C057] py-1 px-3 rounded-full text-sm">{plan.badge}</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <p className="text-sm text-gray-400">What you will get in this plan</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-baseline gap-1">
                  {plan.price === "0" ? (
                    <span className="text-5xl font-bold text-[#40C057] glow-text">Free</span>
                  ) : (
                    <>
                      <span className="text-5xl font-bold text-[#40C057] glow-text">{plan.price}</span>
                      <span className="text-lg text-gray-400">/month</span>
                    </>
                  )}
                </div>
               
              </div>

              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 mr-3 text-[#40C057]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`${plan.buttonClass} w-full py-3 rounded-lg text-white font-medium transition-colors hover:shadow-glow-sm`}
              >
                {index === 0 ? "Get Started Free" : "Get Premium Access"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#40C057] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#FFA500] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
    </div>
  )
}

