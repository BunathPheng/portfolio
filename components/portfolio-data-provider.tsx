"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { fetchPortfolio, type PortfolioData } from "@/lib/api"
import { devopsLifecycle, education, experiences, projects, skillGroups } from "@/lib/content"
import { PortfolioLoadingSkeleton } from "@/components/portfolio-loading-skeleton"

const fallbackData: PortfolioData = {
  projects,
  skillGroups,
  experiences,
  education,
  devopsLifecycle,
}

const PortfolioDataContext = createContext<PortfolioData>(fallbackData)

export function PortfolioDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<PortfolioData>(fallbackData)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    async function loadPortfolio() {
      try {
        const portfolio = await fetchPortfolio()
        if (active) setData(portfolio)
      } catch {
        // Keep bundled content available when the API is offline or unconfigured.
      } finally {
        if (active) setLoading(false)
      }
    }

    void loadPortfolio()

    return () => {
      active = false
    }
  }, [])

  if (loading) return <PortfolioLoadingSkeleton />

  return <PortfolioDataContext.Provider value={data}>{children}</PortfolioDataContext.Provider>
}

export function usePortfolioData() {
  return useContext(PortfolioDataContext)
}
