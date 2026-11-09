"use client"

import { createContext, useContext, type ReactNode } from "react"
import type { PortfolioData } from "@/lib/api"
import { devopsLifecycle, education, experiences, projects, skillGroups } from "@/lib/content"

export const fallbackPortfolioData: PortfolioData = {
  projects,
  skillGroups,
  experiences,
  education,
  devopsLifecycle,
}

const PortfolioDataContext = createContext<PortfolioData>(fallbackPortfolioData)

export function PortfolioDataProvider({
  children,
  initialData = fallbackPortfolioData,
}: {
  children: ReactNode
  initialData?: PortfolioData
}) {
  return <PortfolioDataContext.Provider value={initialData}>{children}</PortfolioDataContext.Provider>
}

export function usePortfolioData() {
  return useContext(PortfolioDataContext)
}
