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
    fetchPortfolio()
      .then(setData)
      .catch(() => {
        // Keep bundled content available when the API is offline.
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <PortfolioLoadingSkeleton />

  return <PortfolioDataContext.Provider value={data}>{children}</PortfolioDataContext.Provider>
}

export function usePortfolioData() {
  return useContext(PortfolioDataContext)
}
