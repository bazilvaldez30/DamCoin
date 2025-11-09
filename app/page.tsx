import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Features } from "@/components/features"
import { Tokenomics } from "@/components/tokenomics"
import { Roadmap } from "@/components/roadmap"
import { FAQ } from "@/components/faq"
import { Community } from "@/components/community"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Features />
      <Tokenomics />
      <Roadmap />
      <FAQ />
      <Community />
    </main>
  )
}
