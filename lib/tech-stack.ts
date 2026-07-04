import type { StaticImageData } from "next/image"

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
  { name: "React", image: ReactImg },
  { name: "Next.js", image: NextjsImg },
  { name: "JavaScript", image: JsImg },
  { name: "Tailwind CSS", image: TailwindImg },
  { name: "HTML5", image: HtmlImg },
  { name: "CSS3", image: CssImg },
  { name: "Bootstrap", image: BootstrapImg },
  { name: "Figma", image: FigmaImg },
]

export const techStackRow2: TechItem[] = [
  { name: "Docker", image: DockerImg },
  { name: "Kubernetes", image: K8sImg },
  { name: "Jenkins", image: JenkinsImg },
  { name: "Argo CD", image: ArgoImg },
  { name: "Ansible", image: AnsibleImg },
  { name: "Helm", image: HelmImg },
  { name: "Spring Boot", image: SpringImg },
  { name: "Java", image: JavaImg },
  { name: "PostgreSQL", image: PostgresImg },
  { name: "Nginx", image: NginxImg },
  { name: "Git", image: GitImg },
]

export const allTechStack = [...techStackRow1, ...techStackRow2]
