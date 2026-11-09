/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.bunath.me",
        pathname: "/portfolio/image/**",
      },
    ],
  },
}

export default nextConfig
