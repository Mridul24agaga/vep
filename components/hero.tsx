"use client"

import Image from "next/image"
import { Shield, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="relative h-screen bg-black overflow-hidden pb-0">
      {/* Sparkling effect */}
      <div className="absolute inset-0">
        <div className="stars-container">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="star"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            ></motion.div>
          ))}
        </div>
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className={`floating-dot floating-dot-${i}`}
            animate={{
              y: ["0%", "100%", "0%"],
              x: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Comets */}
      <div className="absolute inset-0 overflow-hidden">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className={`comet comet-${i}`}
            initial={{ x: "-100%", y: "-100%" }}
            animate={{ x: "200%", y: "200%" }}
            transition={{
              duration: 10 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: i * 3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative container mx-auto flex flex-col items-center justify-start pt-20 md:pt-32 h-full text-center z-10 px-4 pb-12 md:pb-0"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <motion.div className="flex items-center justify-center mb-6" variants={fadeInUp}>
          <motion.div
            className="bg-gradient-to-r from-[#40C057]/20 to-[#40C057]/10 backdrop-blur-sm px-6 py-3 rounded-full border border-[#40C057]/20 shadow-lg flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-5 h-5 text-[#40C057]" />
            <span className="text-lg md:text-xl font-medium bg-gradient-to-r from-[#40C057] to-[#FFA500] bg-clip-text text-transparent">
              VPN Protection
            </span>
            <Shield className="w-5 h-5 text-[#40C057]" />
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 text-white leading-tight"
          variants={fadeInUp}
        >
          Your Cyber Life Is
          <br />
          Our <span className="text-[#FFA500]">Security</span>
        </motion.h1>

        <motion.p className="max-w-2xl text-gray-400 mb-6 md:mb-8 text-sm md:text-base px-4" variants={fadeInUp}>
          Fortify your digital presence with Obsidian Guard VPN. Military-grade encryption, lightning-fast speeds, and
          unwavering protection for your online privacy.
        </motion.p>

        <motion.button
          className="bg-[#40C057] hover:bg-[#40C057]/90 text-white px-8 md:px-10 py-2.5 md:py-3 rounded-full text-base md:text-lg font-medium transition-colors duration-300 shadow-lg shadow-[#40C057]/20"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Protected Now
        </motion.button>
      </motion.div>

      {/* Globe */}
      <div className="absolute -bottom-4 md:-bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="relative w-[600px] h-[280px] md:w-[800px] md:h-[400px]">
          <Image src="/globe.png" alt="Globe" fill className="object-contain" priority />
        </div>
      </div>
    </div>
  )
}

