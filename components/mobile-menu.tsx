"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface MobileMenuProps {
  isHomePage: boolean
}

export function MobileMenu({ isHomePage }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      <button
        className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
          isHomePage ? "text-white hover:bg-white/20" : "text-black hover:bg-black/10"
        }`}
        onClick={() => setIsOpen(true)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsOpen(false)} />}

      {/* Slide-out menu */}
      <div
        className={`fixed top-0 right-0 w-[300px] h-full bg-gradient-to-b from-[#2C3E50] to-[#4CA1AF] z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <button
            className="absolute top-4 right-4 text-white hover:text-[#FFA500] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-3 mb-8">
            <div className="relative w-16 h-16">
              <Image
                src="/logo.png"
                alt="Obsidian Guard Logo"
                width={64}
                height={64}
                className="w-full h-full filter invert"
              />
            </div>
            <span className="text-xl font-bold text-white">
              <span className="text-2xl">O</span>BSIDIAN <span className="text-2xl">G</span>UARD
            </span>
          </div>

          <div className="mt-8">
            <Link
              href="/get-started"
              className="block w-full px-6 py-3 rounded-full bg-[#FFA500] text-black hover:bg-[#FFA500]/80 font-medium text-center transition-colors text-lg"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

