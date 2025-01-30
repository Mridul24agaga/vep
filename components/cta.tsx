import { Shield, Download, CheckCircle, Smartphone, Laptop, Tv } from "lucide-react"
import Image from "next/image"

export function CTA() {
  return (
    <div className="bg-[#0B1221] py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="bg-[#40C057] rounded-2xl overflow-hidden relative">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0">
            <div className="perspective-grid opacity-20" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-6 sm:p-8 md:p-12 gap-8">
            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <div className="relative w-6 h-6">
                  <Image
            src="/logo.png"
            alt="VPN Shield Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <span className="text-base sm:text-lg font-medium text-black">Secure Your Digital Life</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
                Download Obsidian Guard Now
                <br className="hidden sm:inline" />
                Start Protecting Yourself
              </h2>

              <div className="space-y-4">
                <button className="w-full sm:w-auto bg-[#FFA500] hover:bg-[#FFA500]/90 text-black px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Now
                </button>

                <div className="flex items-center justify-center lg:justify-start gap-2 text-black/80">
                  <Shield className="w-4 h-4" />
                  <span className="text-xs sm:text-sm">Get Started Today</span>
                </div>
              </div>
            </div>

            {/* App Download UI Mockup */}
            <div className="w-full lg:w-auto bg-[#0B1221] p-4 sm:p-6 rounded-xl shadow-2xl">
              <div className="w-full max-w-[380px] mx-auto space-y-4 sm:space-y-6">
                {/* Download Progress */}
                <div className="bg-[#162033] p-3 sm:p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm sm:text-base font-medium">Downloading Obsidian Guard</span>
                    <span className="text-[#40C057] text-sm sm:text-base">80%</span>
                  </div>
                  <div className="w-full bg-[#0B1221] rounded-full h-2">
                    <div className="bg-[#40C057] h-2 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3 text-white">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#40C057]" />
                    <span className="text-sm sm:text-base">Instant Protection</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-white">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#40C057]" />
                    <span className="text-sm sm:text-base">Access to All Servers</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-white">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#40C057]" />
                    <span className="text-sm sm:text-base">Ad Blocker Included</span>
                  </div>
                </div>

                {/* Supported Devices */}
                <div className="bg-[#162033] p-3 sm:p-4 rounded-lg">
                  <p className="text-white mb-2 sm:mb-3 text-sm sm:text-base font-medium">Supported Devices</p>
                  <div className="flex justify-around">
                    <div className="flex flex-col items-center">
                      <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-[#40C057] mb-1 sm:mb-2" />
                      <span className="text-white text-xs sm:text-sm">Mobile</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Laptop className="w-6 h-6 sm:w-8 sm:h-8 text-[#40C057] mb-1 sm:mb-2" />
                      <span className="text-white text-xs sm:text-sm">Desktop</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Tv className="w-6 h-6 sm:w-8 sm:h-8 text-[#40C057] mb-1 sm:mb-2" />
                      <span className="text-white text-xs sm:text-sm">Smart TV</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

