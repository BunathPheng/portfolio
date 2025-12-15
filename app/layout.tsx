import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'A passionate Full-Stack Developer with expertise in modern web technologies. I create beautiful, functional, and user-centered digital experiences that make a difference.',
  generator: 'Next.js',
  openGraph: {
    title: 'Portfolio - Pheng Bunath',
    description: 'DevOps Engineer & Full-Stack Developer portfolio.',
    images: [
      {
        url: './portfolio/src/image/boynath.jpg',
        width: 1200,
        height: 630,
        alt: 'Pheng Bunath',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Pheng Bunath',
    description: 'DevOps Engineer & Full-Stack Developer portfolio.',
    images: ['/boynath.jpg'],
  },
  icons: {
    icon: './portfolio/src/image/boynath.jpg',
  },
  verification: {
    google: 'dFlqqv_VSfa-potE3N-YKFKmK4PAF585d_6uBEYx1tU',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
