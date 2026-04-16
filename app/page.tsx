import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { DemoSection } from "@/components/demo-section"
import { Features } from "@/components/features"
import { TemplateRegistry } from "@/components/template-registry"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <DemoSection />
        {/* <SocialProof /> */}
        <Features />
        <TemplateRegistry />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
