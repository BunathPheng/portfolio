import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import AmbientBackground from "@/components/ambient-background"

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <Navbar />
      <main className="relative min-h-screen overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
