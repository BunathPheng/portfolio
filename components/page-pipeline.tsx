"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Activity, Code2, GitBranch, Rocket, Search, ShieldCheck, TestTube2 } from "lucide-react"

const stages = [
  { label: "Discover", icon: Search },
  { label: "Design", icon: Code2 },
  { label: "Code", icon: GitBranch },
  { label: "Test", icon: TestTube2 },
  { label: "Deploy", icon: Rocket },
  { label: "Secure", icon: ShieldCheck },
  { label: "Observe", icon: Activity },
]

export default function PagePipeline() {
  const reduceMotion = useReducedMotion()

  return (
    <div aria-hidden className="page-pipeline pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute bottom-28 right-4 top-28 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent sm:right-8 lg:right-[max(2rem,calc((100vw-72rem)/2))]" />
      <div className="absolute bottom-28 right-[7px] top-28 flex flex-col justify-between sm:right-[31px] lg:right-[max(calc(2rem - 1px),calc((100vw-72rem)/2 - 1px))]">
        {stages.map(({ label, icon: Icon }, index) => (
          <div key={label} className="relative flex items-center justify-end">
            <motion.div
              className="mr-3 hidden items-center gap-2 rounded-full border border-primary/10 bg-background/60 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground/50 backdrop-blur-sm lg:flex"
              initial={{ opacity: 0, x: 8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              {label}
            </motion.div>
            <motion.div
              className="flex h-4 w-4 items-center justify-center rounded-full border border-primary/30 bg-background text-primary/70 shadow-[0_0_16px_hsl(var(--primary)/0.18)]"
              animate={
                reduceMotion
                  ? undefined
                  : { scale: [1, 1.18, 1], boxShadow: ["0 0 8px hsl(var(--primary) / 0.12)", "0 0 18px hsl(var(--primary) / 0.3)", "0 0 8px hsl(var(--primary) / 0.12)"] }
              }
              transition={reduceMotion ? undefined : { duration: 3, repeat: Infinity, delay: index * 0.25 }}
            >
              <Icon className="h-2.5 w-2.5" />
            </motion.div>
            {index < stages.length - 1 && (
              <motion.span
                className="absolute -bottom-5 right-[5px] text-primary/35"
                animate={reduceMotion ? undefined : { y: [0, 5, 0], opacity: [0.25, 0.8, 0.25] }}
                transition={reduceMotion ? undefined : { duration: 2.2, repeat: Infinity, delay: index * 0.2 }}
              >
                ↓
              </motion.span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
