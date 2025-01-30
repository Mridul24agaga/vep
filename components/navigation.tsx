"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MobileMenu } from "./mobile-menu"

export function Navigation() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <nav className="w-full z-50 py-4 bg-transparent">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-16 h-16 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Obsidian Guard Logo"
              width={64}
              height={64}
              className={`w-full h-full ${isHomePage ? "filter invert" : ""}`}
            />
          </div>
          <span
            className={`text-2xl font-extrabold transition-all duration-300 ${isHomePage ? "text-white" : "text-black"} group-hover:text-[#FFA500]`}
          >
            <span className="text-3xl">O</span>BSIDIAN <span className="text-3xl">G</span>UARD
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            href="/get-started"
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              isHomePage ? "bg-[#FFA500] text-black hover:bg-[#FFA500]/80" : "bg-black text-white hover:bg-black/80"
            } font-medium text-lg`}
          >
            Get Started
          </Link>
        </div>

       
      </div>
    </nav>
  )
}

