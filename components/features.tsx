import { Download, Cog, Link2, Shield } from "lucide-react"

const features = [
  {
    icon: Download,
    title: "Easy Download",
    description: "Get started quickly by downloading the Obsidian Guard for your device.",
    number: "01",
  },
  {
    icon: Cog,
    title: "Instant Setup/Install",
    description: "Install the app effortlessly with just need a few clicks.",
    number: "02",
  },
  {
    icon: Link2,
    title: "Connect to a Server",
    description: "Choose from our global server network and connect with a single tap.",
    number: "03",
  },
  {
    icon: Shield,
    title: "Browse Securely",
    description: "Once connected, take advantage of anonymous browsing.",
    number: "04",
  },
]

export function Features() {
  return (
    <div className="bg-[#0B1221] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="relative bg-gradient-to-b from-[#111827] to-[#0B1221] rounded-xl p-4 md:p-6 group hover:bg-gradient-to-b hover:from-[#132338] hover:to-[#0B1221] transition-all duration-700 ease-in-out"
            >
              <div className="flex flex-col space-y-3 md:space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#40C057]/10 rounded-lg flex items-center justify-center transition-colors duration-700 ease-in-out group-hover:bg-[#40C057]/20">
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-[#40C057] transition-transform duration-700 ease-in-out group-hover:scale-110" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white transition-colors duration-700 ease-in-out group-hover:text-[#40C057]">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 transition-colors duration-700 ease-in-out group-hover:text-gray-300">
                  {feature.description}
                </p>
                <div className="absolute top-4 md:top-6 right-4 md:right-6 text-[#40C057] opacity-50 font-bold text-sm md:text-base transition-opacity duration-700 ease-in-out group-hover:opacity-100">
                  {feature.number}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

