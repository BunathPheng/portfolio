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
import { fallbackPortfolioData, PortfolioDataProvider } from "@/components/portfolio-data-provider"
import DevOpsLifecycle from "@/components/devops-lifecycle"
import PagePipeline from "@/components/page-pipeline"
import { fetchPortfolio } from "@/lib/api"

export const dynamic = "force-dynamic"

export default async function Home() {
  let portfolioData = fallbackPortfolioData

  try {
    portfolioData = await fetchPortfolio()
  } catch (error) {
    console.error("Portfolio API unavailable; using bundled content.", error)
  }

  return (
    <PortfolioDataProvider initialData={portfolioData}>
      <AmbientBackground />
      <Navbar />
      <main className="relative z-0 min-h-screen w-full overflow-x-clip [isolation:isolate]">
        <PagePipeline />
        <Hero />
        <About />
        <DevOpsLifecycle />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </PortfolioDataProvider>
  )
}
