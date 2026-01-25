import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import TechStackCluster from "@/components/tech-stack-cluster"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import ScrollToTop from "@/components/scroll-to-top"
import ParticleBackground from "@/components/particle-background"
import FloatingElements from "@/components/floating-elements"
import CursorFollower from "@/components/cursor-follower"
import LoadingScreen from "@/components/loading-screen"

export default function Home() {
  return (
    <>
      <CursorFollower />
      <LoadingScreen />
      <main className="min-h-screen bg-liquid-glass relative overflow-hidden">
        <ParticleBackground />
        <FloatingElements />
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <div className="py-16 md:py-24" />
          <TechStackCluster />
          <Projects />
          <Experience />
          <Education />
          <Contact />
          <ScrollToTop />
        </div>
      </main>
    </>
  )
}
