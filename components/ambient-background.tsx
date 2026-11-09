"use client"

import {
  Activity,
  Cloud,
  Container,
  Database,
  GitBranch,
  GitPullRequest,
  Rocket,
  Server,
  ShieldCheck,
  Terminal,
  Workflow,
} from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"

const nodes = [
  { label: "Git", icon: GitBranch, x: "8%", y: "22%", tone: "text-orange-400" },
  { label: "CI/CD", icon: Workflow, x: "25%", y: "38%", tone: "text-cyan-400" },
  { label: "Docker", icon: Container, x: "43%", y: "18%", tone: "text-blue-400" },
  { label: "Kubernetes", icon: Server, x: "67%", y: "32%", tone: "text-indigo-400" },
  { label: "Cloud", icon: Cloud, x: "88%", y: "20%", tone: "text-sky-400" },
  { label: "Database", icon: Database, x: "80%", y: "75%", tone: "text-emerald-400" },
  { label: "Deploy", icon: Rocket, x: "52%", y: "82%", tone: "text-violet-400" },
  { label: "Monitor", icon: Activity, x: "18%", y: "77%", tone: "text-lime-400" },
]

const links = [
  ["8%", "22%", "25%", "38%"],
  ["25%", "38%", "43%", "18%"],
  ["43%", "18%", "67%", "32%"],
  ["67%", "32%", "88%", "20%"],
  ["67%", "32%", "80%", "75%"],
  ["80%", "75%", "52%", "82%"],
  ["52%", "82%", "18%", "77%"],
  ["18%", "77%", "8%", "22%"],
]

export default function AmbientBackground() {
  const reduceMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)")
    const update = () => setIsMobile(mediaQuery.matches)
    update()
    mediaQuery.addEventListener("change", update)
    return () => mediaQuery.removeEventListener("change", update)
  }, [])

  if (isMobile) return null

  return (
    <div aria-hidden className="devops-background pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="devops-grid absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--background)/0.82)_0%,transparent_68%)]" />

      <svg className="absolute inset-0 h-full w-full opacity-50" preserveAspectRatio="none">
        <defs>
          <linearGradient id="pipeline-line" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary) / 0.05)" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(var(--primary) / 0.05)" />
          </linearGradient>
        </defs>
        {links.map(([x1, y1, x2, y2], index) => (
          <motion.line
            key={`${x1}-${y1}-${x2}-${y2}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#pipeline-line)"
            strokeWidth="1"
            strokeDasharray="5 12"
            initial={reduceMotion ? { opacity: 0.35 } : { pathLength: 0, opacity: 0 }}
            animate={reduceMotion ? { opacity: 0.35 } : { pathLength: 1, opacity: [0.15, 0.55, 0.15] }}
            transition={
              reduceMotion
                ? undefined
                : { pathLength: { duration: 1.4, delay: index * 0.12 }, opacity: { duration: 4, repeat: Infinity, delay: index * 0.25 } }
            }
          />
        ))}
      </svg>

      {nodes.map(({ label, icon: Icon, x, y, tone }, index) => (
        <motion.div
          key={label}
          className="absolute hidden items-center gap-2 rounded-xl border border-primary/10 bg-background/30 px-2.5 py-2 font-mono text-[9px] uppercase tracking-wider text-muted-foreground/60 shadow-lg backdrop-blur-md sm:flex"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            reduceMotion
              ? { opacity: 0.65, scale: 1 }
              : { opacity: [0.45, 0.9, 0.45], scale: [1, 1.04, 1], y: [0, -5, 0] }
          }
          transition={
            reduceMotion
              ? { duration: 0.3, delay: index * 0.05 }
              : { duration: 4 + (index % 3), repeat: Infinity, delay: index * 0.35, ease: "easeInOut" }
          }
        >
          <Icon className={`h-3.5 w-3.5 ${tone}`} strokeWidth={1.7} />
          {label}
        </motion.div>
      ))}

      <div className="absolute bottom-24 left-4 hidden w-52 rounded-xl border border-primary/10 bg-background/35 p-3 font-mono text-[9px] text-muted-foreground/60 shadow-xl backdrop-blur-md lg:block">
        <div className="mb-2 flex items-center gap-2 text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_currentColor]" />
          pipeline.status: passing
        </div>
        <div className="space-y-1">
          <p><span className="text-cyan-400">$</span> git push origin main</p>
          <p className="text-emerald-400/80">✓ build completed</p>
          <p className="text-emerald-400/80">✓ deploy completed</p>
        </div>
      </div>

      <div className="absolute right-4 top-28 hidden flex-col gap-2 text-primary/20 lg:flex">
        <GitPullRequest className="h-5 w-5" />
        <Terminal className="ml-5 h-4 w-4" />
        <ShieldCheck className="h-5 w-5" />
      </div>
    </div>
  )
}
