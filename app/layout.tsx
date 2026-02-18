import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pheng Bunath - DevOps Engineer & Full-Stack Developer Portfolio | phengbunath',
  description: 'Pheng Bunath (phengbunath) - DevOps Engineer & Full-Stack Developer. Expert in CI/CD pipelines, Kubernetes, Docker, cloud infrastructure, and modern web development. View projects, skills, and experience.',
  keywords: [
    'Pheng Bunath',
    'phengbunath',
    'Bunath',
    'Pheng',
    'DevOps Engineer',
    'Full-Stack Developer',
    'Kubernetes',
    'Docker',
    'CI/CD',
    'Jenkins',
    'Argo CD',
    'Next.js',
    'React',
    'TypeScript',
    'Portfolio',
    'Pheng Bunath portfolio',
    'phengbunath portfolio',
  ],
  authors: [{ name: 'Pheng Bunath' }],
  creator: 'Pheng Bunath',
  publisher: 'Pheng Bunath',
  generator: 'Next.js',
  applicationName: 'Pheng Bunath Portfolio',
  referrer: 'origin-when-cross-origin',
  openGraph: {
    title: 'Pheng Bunath - DevOps Engineer & Full-Stack Developer | phengbunath',
    description: 'DevOps Engineer & Full-Stack Developer portfolio. Pheng Bunath (phengbunath) specializes in CI/CD, Kubernetes, Docker, and modern web development.',
    url: 'https://buanth.site', // Update with your actual domain
    siteName: 'Pheng Bunath Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: './portfolio/src/image/boynath.jpg',
        width: 1200,
        height: 630,
        alt: 'Pheng Bunath - DevOps Engineer & Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pheng Bunath - DevOps Engineer & Full-Stack Developer | phengbunath',
    description: 'DevOps Engineer & Full-Stack Developer portfolio. Pheng Bunath (phengbunath) - CI/CD, Kubernetes, Docker, Next.js, React.',
    images: ['/boynath.jpg'],
    creator: '@yourtwitter', // Update with your Twitter handle if you have one
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon.png', type: 'image/png', sizes: '16x16' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  // Next.js will automatically use app/icon.png as the favicon
  verification: {
    google: 'dFlqqv_VSfa-potE3N-YKFKmK4PAF585d_6uBEYx1tU',
  },
  alternates: {
    canonical: 'https://yourdomain.com', // Update with your actual domain
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Pheng Bunath',
    alternateName: ['phengbunath', 'Bunath', 'Pheng'],
    jobTitle: 'DevOps Engineer & Full-Stack Developer',
    description: 'DevOps Engineer and Full-Stack Developer specializing in CI/CD pipelines, Kubernetes, Docker, and modern web development.',
    url: 'https://yourdomain.com', // Update with your actual domain
    image: 'https://yourdomain.com/boynath.jpg', // Update with your actual domain
    sameAs: [
      'https://www.linkedin.com/in/bunath-pheng-71a41b318',
      'https://github.com/BunathPheng',
      'https://web.facebook.com/profile.php?id=100027603155423',
    ],
    knowsAbout: [
      'DevOps',
      'CI/CD',
      'Kubernetes',
      'Docker',
      'Jenkins',
      'Argo CD',
      'Ansible',
      'Next.js',
      'React',
      'TypeScript',
      'Full-Stack Development',
      'Cloud Infrastructure',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Royal University of Phnom Penh',
    },
  }

  return (
    <html lang="en">
      <head />
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  )
}
