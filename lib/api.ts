import type { Project as LocalProject } from "@/lib/content"

export type ApiProject = Omit<LocalProject, "image"> & { image: LocalProject["image"] | string }

export type ApiSkillGroup = {
  category: string
  icon: "cloud" | "layout" | "database" | "tool"
  skills: string[]
}

export type ApiExperience = {
  title: string
  company: string
  location: string
  period: string
  description: string
  technologies: string[]
}

export type ApiEducation = {
  degree: string
  field: string
  school: string
  period: string
  description: string
}

export type ApiDevOpsStage = {
  step: string
  title: string
  description: string
  image: string
  color: string
}

export type PortfolioData = {
  projects: ApiProject[]
  skillGroups: ApiSkillGroup[]
  experiences: ApiExperience[]
  education: ApiEducation[]
  devopsLifecycle: ApiDevOpsStage[]
}

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || ""

export function apiUrl(path: string) {
  return `${apiBaseUrl}${path}`
}

export async function fetchPortfolio(): Promise<PortfolioData> {
  const response = await fetch(apiUrl("/api/portfolio"), { cache: "no-store" })
  if (!response.ok) throw new Error(`Portfolio API returned ${response.status}`)
  return response.json() as Promise<PortfolioData>
}
