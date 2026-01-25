"use client"

import { Github, Hexagon, CodeXml, Terminal, Database, Type, Triangle } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

// Import existing images
import ReactImg from "../portfolio/src/image/React.png"
import JsImg from "../portfolio/src/image/Js.png"
import TailwindImg from "../portfolio/src/image/Tailwind.png"
import GitImg from "../portfolio/src/image/Git.png"
import DockerImg from "../portfolio/src/image/Docker.png"
import PostgresImg from "../portfolio/src/image/postgres.png"
import FigmaImg from "../portfolio/src/image/Figma.png"
import NextjsImg from "../portfolio/src/image/nextjs.png"
import HtmlImg from "../portfolio/src/image/Html.png"
import CssImg from "../portfolio/src/image/Css.png"

const icons = [
    // Center - Principal Tools
    { name: "React", image: ReactImg, size: 75, orbit: 0.3, angle: 45, delay: 0 },
    { name: "Next.js", image: NextjsImg, size: 85, orbit: 0.3, angle: 225, delay: 0.1 },
    { name: "JavaScript", image: JsImg, size: 70, orbit: 0.45, angle: 135, delay: 0.2 },
    { name: "TypeScript", Icon: Type, size: 70, orbit: 0.45, angle: 315, delay: 0.3 },

    // Mid Orbit - Frameworks & Environments
    { name: "Node.js", Icon: Hexagon, size: 65, orbit: 0.7, angle: 90, delay: 0.4 },
    { name: "Tailwind", image: TailwindImg, size: 65, orbit: 0.7, angle: 180, delay: 0.5 },
    { name: "Django", Icon: Database, size: 65, orbit: 0.7, angle: 270, delay: 0.6 },
    { name: "Python", Icon: Terminal, size: 65, orbit: 0.7, angle: 0, delay: 0.7 },
    { name: "HTML5", image: HtmlImg, size: 60, orbit: 0.75, angle: 45, delay: 0.15 },
    { name: "CSS3", image: CssImg, size: 60, orbit: 0.75, angle: 225, delay: 0.25 },

    // Outer Orbit - Tools & Others
    { name: "GitHub", Icon: Github, size: 60, orbit: 1, angle: 30, delay: 0.8 },
    { name: "Git", image: GitImg, size: 55, orbit: 1, angle: 120, delay: 0.9 },
    { name: "Docker", image: DockerImg, size: 65, orbit: 1, angle: 210, delay: 1.0 },
    { name: "Postgres", image: PostgresImg, size: 65, orbit: 1, angle: 300, delay: 1.1 },
    { name: "Figma", image: FigmaImg, size: 60, orbit: 1.1, angle: 150, delay: 1.2 },
    { name: "C Language", Icon: CodeXml, size: 60, orbit: 1.1, angle: 330, delay: 1.3 },
    { name: "Vercel", Icon: Triangle, size: 55, orbit: 1.2, angle: 90, delay: 1.4 },
]

// Network Background Component
const NetworkBackground = ({ isMobile }: { isMobile: boolean }) => {
    const dotCount = isMobile ? 25 : 50
    const [dots, setDots] = useState<{ x: number, y: number, size: number, glow: boolean }[]>([])

    useEffect(() => {
        setDots(
            Array.from({ length: dotCount }).map(() => ({
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 3 + 1,
                glow: Math.random() > 0.7
            }))
        )
    }, [dotCount])

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg className="w-full h-full relative z-0">
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {dots.map((dot, i) => (
                    <g key={i}>
                        {/* Glowing effect for some dots */}
                        {dot.glow && (
                            <motion.circle
                                cx={`${dot.x}%`}
                                cy={`${dot.y}%`}
                                r={dot.size * 2.5}
                                fill="#22d3ee"
                                className="opacity-20"
                                animate={{
                                    scale: [1, 2, 1],
                                    opacity: [0.15, 0.4, 0.15],
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        )}

                        <motion.circle
                            cx={`${dot.x}%`}
                            cy={`${dot.y}%`}
                            r={dot.size}
                            fill={dot.glow ? "#22d3ee" : "#3b82f6"}
                            filter={dot.glow ? "url(#glow)" : ""}
                            className={dot.glow ? "opacity-100" : "opacity-40"}
                            animate={{
                                opacity: dot.glow ? [0.7, 1, 0.7] : [0.2, 0.5, 0.2],
                            }}
                            transition={{
                                duration: 2.5 + Math.random() * 2,
                                repeat: Infinity,
                            }}
                        />

                        {/* Connect to more dots for a denser network like the image */}
                        {dots.slice(i + 1, i + 6).map((otherDot, j) => {
                            // Only connect if somewhat close for better performance and look
                            const dist = Math.sqrt(Math.pow(dot.x - otherDot.x, 2) + Math.pow(dot.y - otherDot.y, 2));
                            if (dist > 30) return null;

                            return (
                                <motion.line
                                    key={j}
                                    x1={`${dot.x}%`}
                                    y1={`${dot.y}%`}
                                    x2={`${otherDot.x}%`}
                                    y2={`${otherDot.y}%`}
                                    stroke={dot.glow || otherDot.glow ? "#22d3ee" : "#3b82f6"}
                                    strokeWidth={dot.glow || otherDot.glow ? "1" : "0.5"}
                                    className="opacity-20"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, delay: i * 0.05 }}
                                />
                            );
                        })}
                    </g>
                ))}
            </svg>
        </div>
    )
}

export default function TechStackCluster() {
    const [mounted, setMounted] = useState(false)
    const [screenType, setScreenType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')

    useEffect(() => {
        setMounted(true)
        const handleResize = () => {
            const width = globalThis.window?.innerWidth || 1200
            if (width < 768) setScreenType('mobile')
            else if (width < 1024) setScreenType('tablet')
            else setScreenType('desktop')
        }
        handleResize()
        globalThis.window?.addEventListener("resize", handleResize)
        return () => globalThis.window?.removeEventListener("resize", handleResize)
    }, [])

    if (!mounted) return null

    // Fine-tuned layout constants for different screens
    const getBaseRadius = () => {
        if (screenType === 'mobile') return 140
        if (screenType === 'tablet') return 220
        return 320
    }

    const getIconScale = () => {
        if (screenType === 'mobile') return 0.45
        if (screenType === 'tablet') return 0.6
        return 0.75
    }

    const baseRadius = getBaseRadius()
    const iconScale = getIconScale()

    return (
        <section className="py-20 md:py-32 relative overflow-hidden bg-transparent">
            <div className="max-w-7xl mx-auto px-4">
                {/* Aligned Design System Header */}
                <div className="text-center mb-16 z-20 relative">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl lg:text-5xl font-bold text-white mb-4"
                    >
                        Tech <span className="gradient-text">Ecosystem</span>
                    </motion.h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#22d3ee] to-[#7ce94f] mx-auto rounded-full"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="relative h-[450px] sm:h-[550px] md:h-[650px] lg:h-[750px] flex items-center justify-center -mt-8"
                >
                    {/* Network Background Layer */}
                    <NetworkBackground isMobile={screenType === 'mobile'} />

                    {/* Subtle Glow */}
                    <div className="absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative w-full h-full">
                        {icons.map((tech, index) => {
                            const radius = tech.orbit * baseRadius
                            const rad = (tech.angle * Math.PI) / 180
                            const x = Math.cos(rad) * radius
                            const y = Math.sin(rad) * radius

                            const responsiveSize = tech.size * iconScale

                            return (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{
                                        opacity: tech.orbit > 1 ? 0.4 : 1,
                                        scale: 1,
                                        x: x,
                                        y: y
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 25,
                                        damping: 18,
                                        delay: tech.delay
                                    }}
                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group z-10"
                                >
                                    <motion.div
                                        animate={{
                                            y: [0, -5, 5, 0],
                                            x: [0, 3, -3, 0],
                                        }}
                                        transition={{
                                            duration: 7 + (index % 5),
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="relative"
                                    >
                                        <div
                                            className="group-hover:scale-110 transition-transform duration-500"
                                            style={{
                                                width: responsiveSize,
                                                height: responsiveSize
                                            }}
                                        >
                                            {tech.image ? (
                                                <Image
                                                    src={tech.image}
                                                    alt={tech.name}
                                                    fill
                                                    className="object-contain filter grayscale brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-700"
                                                />
                                            ) : tech.Icon ? (
                                                <div className="w-full h-full flex items-center justify-center text-white/30 group-hover:text-primary transition-colors duration-500">
                                                    <tech.Icon size={responsiveSize * 0.8} strokeWidth={1.5} />
                                                </div>
                                            ) : null}
                                        </div>

                                        {/* Tooltip */}
                                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[8px] md:text-[10px] text-white/40 tracking-widest uppercase pointer-events-none">
                                            {tech.name}
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
