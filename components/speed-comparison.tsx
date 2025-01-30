"use client"

import { useState, useEffect } from "react"
import { Zap, Activity, ArrowRight } from "lucide-react"

export function SpeedComparison() {
  const [regularProgress, setRegularProgress] = useState(0)
  const [fastProgress, setFastProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setRegularProgress(30)
      setFastProgress(90)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-[#0B1221] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-[#40C057]" />
              <span className="text-lg font-medium text-[#40C057]">Lightning Fast</span>
              <Zap className="w-5 h-5 text-[#40C057]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience Unmatched Speed</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our advanced technology ensures blazing-fast connection speeds while maintaining your privacy and
              security.
            </p>
          </div>

          {/* Speed Comparison UI */}
          <div className="bg-[#162033] rounded-2xl p-6 md:p-8 space-y-8">
            {/* Regular Connection */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-gray-400" />
                  <span className="text-white font-medium">Regular Connection</span>
                </div>
                <span className="text-gray-400">50 Mbps</span>
              </div>
              <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-gray-400 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${regularProgress}%` }}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-[#40C057]" />
                  <span className="text-white font-medium">Obsidian Guard Connection</span>
                </div>
                <span className="text-[#40C057]">150 Mbps</span>
              </div>
              <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-[#40C057] rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${fastProgress}%` }}
                />
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-4 pt-4">
              <div className="bg-[#0B1221] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#40C057]/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#40C057]" />
                  </div>
                  <span className="text-white font-medium">3x Faster</span>
                </div>
                <p className="text-sm text-gray-400">Experience speeds up to 3 times faster than regular connections</p>
              </div>
              <div className="bg-[#0B1221] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#40C057]/20 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-[#40C057]" />
                  </div>
                  <span className="text-white font-medium">Optimized</span>
                </div>
                <p className="text-sm text-gray-400">Smart routing technology for the best possible performance</p>
              </div>
              <div className="bg-[#0B1221] rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#40C057]/20 flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-[#40C057]" />
                  </div>
                  <span className="text-white font-medium">No Throttling</span>
                </div>
                <p className="text-sm text-gray-400">Bypass ISP throttling for consistent high speeds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

