import { Github, Linkedin, Heart } from "lucide-react"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60 py-8 sm:py-10">
      <div className="section-container">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-sm font-semibold text-foreground">Pheng Bunath</p>
            <p className="mt-1 flex items-center justify-center gap-1 text-xs text-muted-foreground sm:justify-start">
              Built with
              <Heart className="h-3 w-3 text-primary" />
              using Next.js & Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/BunathPheng"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/bunath-pheng-71a41b318"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          <p className="text-xs text-muted-foreground">© {year} Pheng Bunath. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
