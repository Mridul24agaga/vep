"use client"

import { useState } from "react"
import { Shield } from "lucide-react"
import Image from "next/image"

// Server locations with their coordinates and details
const serverLocations = [
  { id: 1, x: 25, y: 38, country: "United States", cities: 156 },
  { id: 2, x: 43, y: 32, country: "Ireland", cities: 47 },
  { id: 3, x: 48, y: 35, country: "France", cities: 52 },
  { id: 4, x: 68, y: 42, country: "India", cities: 89 },
  { id: 5, x: 78, y: 45, country: "Singapore", cities: 34 },
  { id: 6, x: 85, y: 70, country: "Australia", cities: 42 },
  { id: 7, x: 30, y: 65, country: "Brazil", cities: 63 },
]

export function ServerMap() {
  const [activeLocation, setActiveLocation] = useState<number | null>(null)

  return (
    <div className="bg-[#0B1221] py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-[#40C057]" />
            <span className="text-lg font-medium text-[#40C057]">Facts</span>
            <Shield className="w-5 h-5 text-[#40C057]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            2.6k+ Active Server In All
            <br />
            Over The World.
          </h2>
        </div>

        {/* Map Container */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-[2/1] w-full">
            {/* World Map */}
            <Image
              src="/map.png"
              alt="World Map"
              fill
              className="object-contain opacity-30"
              priority
            />

            {/* Server Location Dots */}
            {serverLocations.map((location) => (
              <div
                key={location.id}
                className="absolute"
                style={{
                  left: `${location.x}%`,
                  top: `${location.y}%`,
                }}
                onMouseEnter={() => setActiveLocation(location.id)}
                onMouseLeave={() => setActiveLocation(null)}
              >
                {/* Glowing Dot */}
                <div className="relative cursor-pointer">
                  <div className="absolute w-3 h-3 bg-[#40C057] rounded-full animate-ping opacity-75" />
                  <div className="relative w-3 h-3 bg-[#40C057] rounded-full" />
                </div>

                {/* Popup */}
                {activeLocation === location.id && (
                  <div className="absolute z-10 bg-[#162033] rounded-lg p-3 shadow-xl transform -translate-x-1/2 -translate-y-16 min-w-[120px] border border-[#40C057]/20">
                    <div className="text-center">
                      <p className="font-medium text-white">{location.country}</p>
                      <p className="text-sm text-[#40C057]">{location.cities} Cities</p>
                    </div>
                    {/* Arrow */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-[#162033] border-r border-b border-[#40C057]/20" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="text-center mt-12">
            <button className="bg-[#40C057] hover:bg-[#40C057]/90 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300">
              Peak Your Location
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

