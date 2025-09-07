/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    cssChunking: 'loose',
  },
  // Configure output for Vercel deployment
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  // Disable lightningcss to prevent deployment errors
  webpack: (config) => {
    return config;
  },
}

export default nextConfig