import type { StaticImageData } from "next/image"
import { r2Asset } from "@/lib/assets"

import ReactImg from "../portfolio/src/image/React.png"
import NextjsImg from "../portfolio/src/image/nextjs.png"
import JsImg from "../portfolio/src/image/Js.png"
import TailwindImg from "../portfolio/src/image/Tailwind.png"
import HtmlImg from "../portfolio/src/image/Html.png"
import CssImg from "../portfolio/src/image/Css.png"
import GitImg from "../portfolio/src/image/Git.png"
import DockerImg from "../portfolio/src/image/Docker.png"
import K8sImg from "../portfolio/src/image/Kubernetes.png"
import JenkinsImg from "../portfolio/src/image/jenkins.svg"
import ArgoImg from "../portfolio/src/image/ArgoCD.png"
import AnsibleImg from "../portfolio/src/image/ansible.png"
import HelmImg from "../portfolio/src/image/Helm.png"
import PostgresImg from "../portfolio/src/image/postgres.png"
import SpringImg from "../portfolio/src/image/springboot.png"
import JavaImg from "../portfolio/src/image/Javaicon.png"
import NginxImg from "../portfolio/src/image/Nginx.png"
import FigmaImg from "../portfolio/src/image/Figma.png"
import BootstrapImg from "../portfolio/src/image/Bootstrap.png"

export type TechItem = {
  name: string
  image: StaticImageData | string
}

export const techStackRow1: TechItem[] = [
  { name: "React", image: r2Asset("React.png") || ReactImg },
  { name: "Next.js", image: r2Asset("nextjs.png") || NextjsImg },
  { name: "JavaScript", image: r2Asset("Js.png") || JsImg },
  { name: "Tailwind CSS", image: r2Asset("Tailwind.png") || TailwindImg },
  { name: "HTML5", image: r2Asset("Html.png") || HtmlImg },
  { name: "CSS3", image: r2Asset("Css.png") || CssImg },
  { name: "Bootstrap", image: r2Asset("Bootstrap.png") || BootstrapImg },
  { name: "Figma", image: r2Asset("Figma.png") || FigmaImg },
]

export const techStackRow2: TechItem[] = [
  { name: "Docker", image: r2Asset("Docker.png") || DockerImg },
  { name: "Kubernetes", image: r2Asset("Kubernetes.png") || K8sImg },
  { name: "Jenkins", image: r2Asset("jenkins-logo.png") || JenkinsImg },
  { name: "Argo CD", image: r2Asset("ArgoCD.png") || ArgoImg },
  { name: "Ansible", image: r2Asset("ansible.png") || AnsibleImg },
  { name: "Helm", image: r2Asset("Helm.png") || HelmImg },
  { name: "Spring Boot", image: r2Asset("springboot.png") || SpringImg },
  { name: "Java", image: r2Asset("Javaicon.png") || JavaImg },
  { name: "PostgreSQL", image: r2Asset("postgres.png") || PostgresImg },
  { name: "Nginx", image: r2Asset("Nginx.png") || NginxImg },
  { name: "Git", image: r2Asset("Git.png") || GitImg },
]

export const allTechStack = [...techStackRow1, ...techStackRow2]
