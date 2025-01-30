import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#0B1221] border-t border-white/10">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image src="/logo.png" alt="VPN Shield Logo" width={40} height={40} className="w-full h-full" />
              </div>
            </Link>
            <p className="text-gray-400 text-sm text-center md:text-left max-w-xs">
              Fortify your digital presence with military-grade VPN protection. Stay anonymous, secure, and
              unrestricted.
            </p>
            <a
              href="mailto:obsidianguard@support.com"
              className="text-gray-400 hover:text-[#40C057] transition-colors text-sm mt-2"
            >
              obsidianguard@support.com
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <Link href="/about" className="text-gray-400 hover:text-[#40C057] transition-colors text-sm">
              About Us
            </Link>
            <Link href="/features" className="text-gray-400 hover:text-[#40C057] transition-colors text-sm">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-400 hover:text-[#40C057] transition-colors text-sm">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-[#40C057] transition-colors text-sm">
              Contact
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center md:text-left">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Obsidian Guard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

