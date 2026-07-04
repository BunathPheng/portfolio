import englishImage from "../portfolio/src/image/English.jpg"
import selamontyImage from "../portfolio/src/image/selamonty.png"
import smartopsImage from "../portfolio/src/image/Final.png"
import type { StaticImageData } from "next/image"

export type Project = {
  id: number
  title: string
  category: string
  image: StaticImageData
  problem: string
  solution: string
  architecture: string
  contribution: string[]
  results: string[]
  technologies: string[]
  liveUrl: string
  githubUrl: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "English Club: E-Learning Management System",
    category: "Full-Stack",
    image: englishImage,
    problem:
      "Learners needed a unified platform to register, access courses, take quizzes, and track progress—without fragmented tools or insecure access.",
    solution:
      "Built an end-to-end learning platform with JWT-authenticated REST APIs, role-aware dashboards, and a responsive Next.js frontend for seamless course consumption.",
    architecture:
      "Next.js frontend with NextAuth JWT sessions, RESTful API integration, server-side rendering for performance, and modular page routing for courses, quizzes, and progress tracking.",
    contribution: [
      "Integrated frontend with backend RESTful APIs and ensured smooth data flow",
      "Implemented JWT authentication with NextAuth",
      "Built user onboarding, course consumption, and progress tracking flows",
      "Collaborated with backend team on API contracts and error handling",
    ],
    results: [
      "Complete E2E learning flow from registration to progress tracking",
      "Secure authenticated access across all user journeys",
      "Responsive UI built with TypeScript and Tailwind CSS",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "JWT", "NextAuth"],
    liveUrl: "#",
    githubUrl: "https://github.com/BunathPheng",
  },
  {
    id: 2,
    title: "SmartOps: Automation Platform",
    category: "DevOps",
    image: smartopsImage,
    problem:
      "Manual deployments were slow, error-prone, and lacked traceability from source code to production environments.",
    solution:
      "Designed a GitOps-first automation platform covering the full deployment lifecycle with CI/CD pipelines, container orchestration, and infrastructure as code.",
    architecture:
      "Jenkins and GitHub Actions for CI, Argo CD for GitOps delivery, Docker/Kubernetes for runtime, Ansible for provisioning, and Prometheus/Grafana for observability.",
    contribution: [
      "Built CI/CD pipelines with Jenkins and GitHub Actions",
      "Implemented GitOps workflows with Argo CD",
      "Containerized workloads and deployed on Kubernetes",
      "Automated infrastructure provisioning with Ansible",
    ],
    results: [
      "Automated deployment lifecycle from repo to production",
      "Faster, more reliable releases with full traceability",
      "Reduced manual intervention and deployment risk",
    ],
    technologies: ["Jenkins", "GitHub Actions", "Argo CD", "Docker", "Kubernetes", "Ansible", "Prometheus", "Grafana"],
    liveUrl: "#",
    githubUrl: "https://github.com/BunathPheng",
  },
  {
    id: 3,
    title: "Selamounty: Digital Cultural & Educational Hub",
    category: "Platform",
    image: selamontyImage,
    problem:
      "Cultural institutions needed a scalable digital platform to deliver rich media content and educational experiences to a global audience.",
    solution:
      "Delivered backend services and deployment automation for a virtual museum platform with resilient APIs and automated rollouts.",
    architecture:
      "Spring Boot microservices with MySQL persistence, Jenkins CI/CD pipelines, Docker containerization, and Nginx reverse proxy for production traffic.",
    contribution: [
      "Built and maintained Spring Boot API services",
      "Set up automated deployment pipelines with Jenkins and Docker",
      "Configured Nginx for production traffic routing",
      "Ensured reliable rollout for media-rich experiences",
    ],
    results: [
      "Scalable platform serving global visitors",
      "Automated deployments with minimal downtime",
      "Reliable API layer for content delivery",
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "Jenkins", "Docker", "Nginx"],
    liveUrl: "#",
    githubUrl: "https://github.com/BunathPheng",
  },
]

export const skillGroups = [
  {
    category: "DevOps & Cloud",
    icon: "cloud" as const,
    skills: ["Docker", "Kubernetes", "Helm", "Jenkins", "Argo CD", "Ansible", "GitHub Actions", "Prometheus", "Grafana"],
  },
  {
    category: "Frontend",
    icon: "layout" as const,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend & Data",
    icon: "database" as const,
    skills: ["Spring Boot", "Java", "PostgreSQL", "MySQL", "REST APIs", "JWT"],
  },
  {
    category: "Tools & Design",
    icon: "tool" as const,
    skills: ["Git", "Linux", "Nginx", "Figma"],
  },
]

export const experiences = [
  {
    title: "DevOps Engineer – SmartOps Automation Platform",
    company: "Korea Software HRD Center",
    location: "Phnom Penh, Cambodia",
    period: "2025",
    description:
      "Built an automated platform covering the full deployment lifecycle—from repo to production—using GitOps and CI/CD to simplify, speed up, and de-risk releases.",
    technologies: ["Jenkins", "GitHub Actions", "Argo CD", "Docker", "Kubernetes", "Ansible", "Prometheus", "Grafana"],
  },
  {
    title: "Backend / Platform Engineer – Selamounty",
    company: "Korea Software HRD Center",
    location: "Phnom Penh, Cambodia",
    period: "2025",
    description:
      "Delivered a digital cultural and educational platform with automated deployments, API services, and resilient runtime for global visitors.",
    technologies: ["Java", "Spring Boot", "MySQL", "Jenkins", "Docker", "Nginx"],
  },
  {
    title: "Front-End Developer – English Club Platform",
    company: "Institute of Science and Technology Advanced Development",
    location: "Phnom Penh, Cambodia",
    period: "2024",
    description:
      "Built an education platform enabling learners to practice English with authenticated user flows and dashboards.",
    technologies: ["Next.js", "TypeScript", "JWT", "REST APIs", "Tailwind CSS"],
  },
]

export const education = [
  {
    degree: "Bachelor of Computer Science",
    field: "Royal University of Phnom Penh (RUPP)",
    school: "Royal University of Phnom Penh",
    period: "Jan 2022 – Present",
    description: "Comprehensive CS curriculum with focus on software engineering and systems.",
  },
  {
    degree: "Advanced Course: DevOps",
    field: "Korea Software HRD Center (KSHRD)",
    school: "Korea Software HRD Center",
    period: "Jul – Dec 2025",
    description:
      "Modern CI/CD, containerization, cloud infrastructure, GitOps with Jenkins, GitHub Actions, Argo CD, Docker, and Kubernetes.",
  },
  {
    degree: "Basic Course Training",
    field: "Korea Software HRD Center (KSHRD)",
    school: "Korea Software HRD Center",
    period: "Feb – Jul 2025",
    description:
      "Foundation across Linux, Docker, Git, UI/UX, Java, HTML/CSS/JS, Tailwind CSS, PostgreSQL, and responsive web apps.",
  },
  {
    degree: "Foundation 2 Generation",
    field: "Institute of Science and Technology Advanced Development (ISTAD)",
    school: "ISTAD",
    period: "Jan 2025 – Present",
    description: "Core software engineering foundations and collaborative projects.",
  },
]

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bunath-pheng-71a41b318" },
  { label: "GitHub", href: "https://github.com/BunathPheng" },
  { label: "Telegram", href: "https://t.me/pheng_bunath" },
  { label: "Facebook", href: "https://web.facebook.com/profile.php?id=100027603155423" },
]

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
]
