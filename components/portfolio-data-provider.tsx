"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { fetchPortfolio, type PortfolioData } from "@/lib/api"
import { education, experiences, projects, skillGroups } from "@/lib/content"

const fallbackData: PortfolioData = {
  projects,
  skillGroups,
  experiences,
  education,
  devopsLifecycle: [],
}

const PortfolioDataContext = createContext<PortfolioData>(fallbackData)

export function PortfolioDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<PortfolioData>(fallbackData)

  useEffect(() => {
    fetchPortfolio()
      .then(setData)
      .catch(() => {
        // Keep bundled content available when the API is offline.
      })
  }, [])

  return <PortfolioDataContext.Provider value={data}>{children}</PortfolioDataContext.Provider>
}

export function usePortfolioData() {
  return useContext(PortfolioDataContext)
}
