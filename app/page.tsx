import Hero from "@/components/hero"
import Features from "@/components/features"
import VideoSection from "@/components/video-section"
import Pricing from "@/components/pricing"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <VideoSection />
      <Pricing />
      <Testimonials />
      <Contact />
    </main>
  )
}

