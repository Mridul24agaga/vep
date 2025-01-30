import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { SpeedComparison } from "@/components/speed-comparison"
import { ServerMap } from "@/components/server-map"
import { Pricing } from "@/components/pricing"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1221]">
      <Navigation />
      <Hero />
      <Features />
      <SpeedComparison />
      <ServerMap />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}

