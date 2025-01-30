"use client"

import Image from "next/image"
import { Shield, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <div className="relative h-screen bg-black overflow-hidden pb-0">
      {/* Sparkling effect */}
      <div className="absolute inset-0">
        <div className="stars-container">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-dot floating-dot-1" />
        <div className="floating-dot floating-dot-2" />
        <div className="floating-dot floating-dot-3" />
        <div className="floating-dot floating-dot-4" />
      </div>

      {/* Comets */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="comet comet-1" />
        <div className="comet comet-2" />
        <div className="comet comet-3" />
        <div className="comet comet-4" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto flex flex-col items-center justify-start pt-20 md:pt-32 h-full text-center z-10 px-4 pb-12 md:pb-0">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-gradient-to-r from-[#40C057]/20 to-[#40C057]/10 backdrop-blur-sm px-6 py-3 rounded-full border border-[#40C057]/20 shadow-lg flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#40C057]" />
            <span className="text-lg md:text-xl font-medium bg-gradient-to-r from-[#40C057] to-[#FFA500] bg-clip-text text-transparent">
              VPN Protection
            </span>
            <Shield className="w-5 h-5 text-[#40C057]" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 text-white leading-tight">
          Your Cyber Life Is
          <br />
          Our <span className="text-[#FFA500]">Security</span>
        </h1>

        <p className="max-w-2xl text-gray-400 mb-6 md:mb-8 text-sm md:text-base px-4">
          Fortify your digital presence with Obsidian Guard VPN. Military-grade encryption, lightning-fast speeds, and
          unwavering protection for your online privacy.
        </p>

        <button className="bg-[#40C057] hover:bg-[#40C057]/90 text-white px-8 md:px-10 py-2.5 md:py-3 rounded-full text-base md:text-lg font-medium transition-colors duration-300 shadow-lg shadow-[#40C057]/20">
          Get Protected Now
        </button>
      </div>

      {/* Globe */}
      <div className="absolute -bottom-4 md:-bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="relative w-[600px] h-[280px] md:w-[800px] md:h-[400px]">
          <Image src="/globe.png" alt="Globe" fill className="object-contain" priority />
        </div>
      </div>
    </div>
  )
}

