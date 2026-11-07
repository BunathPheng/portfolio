import { NextResponse } from "next/server"
import { devopsLifecycle, education, experiences, projects, skillGroups } from "@/lib/content"

export const revalidate = 300

export async function GET() {
  return NextResponse.json({
    projects: projects.map(({ image, ...project }) => ({
      ...project,
      image: image.src,
    })),
    skillGroups,
    experiences,
    education,
    devopsLifecycle,
  })
}
