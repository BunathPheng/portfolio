import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://buanth.site"

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0c" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Pheng Bunath — DevOps Engineer & Full-Stack Developer",
  description:
    "Pheng Bunath — DevOps Engineer & Full-Stack Developer. Expert in CI/CD pipelines, Kubernetes, Docker, cloud infrastructure, and modern web development.",
  keywords: [
    "Pheng Bunath",
    "phengbunath",
    "DevOps Engineer",
    "Full-Stack Developer",
    "Kubernetes",
    "Docker",
    "CI/CD",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Pheng Bunath" }],
  creator: "Pheng Bunath",
  openGraph: {
    title: "Pheng Bunath — DevOps Engineer & Full-Stack Developer",
    description:
      "DevOps Engineer & Full-Stack Developer specializing in CI/CD, Kubernetes, Docker, and modern web development.",
    url: SITE_URL,
    siteName: "Pheng Bunath Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/boynath.jpg",
        width: 1200,
        height: 630,
        alt: "Pheng Bunath — DevOps Engineer & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pheng Bunath — DevOps Engineer & Full-Stack Developer",
    description: "DevOps Engineer & Full-Stack Developer — CI/CD, Kubernetes, Docker, Next.js, React.",
    images: ["/boynath.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  verification: {
    google: "dFlqqv_VSfa-potE3N-YKFKmK4PAF585d_6uBEYx1tU",
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pheng Bunath",
    alternateName: ["phengbunath", "Bunath", "Pheng"],
    jobTitle: "DevOps Engineer & Full-Stack Developer",
    description:
      "DevOps Engineer and Full-Stack Developer specializing in CI/CD pipelines, Kubernetes, Docker, and modern web development.",
    url: SITE_URL,
    image: `${SITE_URL}/boynath.jpg`,
    sameAs: [
      "https://www.linkedin.com/in/bunath-pheng-71a41b318",
      "https://github.com/BunathPheng",
      "https://web.facebook.com/profile.php?id=100027603155423",
    ],
    knowsAbout: [
      "DevOps",
      "CI/CD",
      "Kubernetes",
      "Docker",
      "Jenkins",
      "Argo CD",
      "Ansible",
      "Next.js",
      "React",
      "TypeScript",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Royal University of Phnom Penh",
    },
  }

  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
