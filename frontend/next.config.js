/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export for Firebase Hosting
  images: {
    domains: [],
    unoptimized: true, // Required for static export
  },
  typescript: {
    // Ignore type errors during build (types are still checked in development)
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignore ESLint errors during build
    ignoreDuringBuilds: true,
  },
  // Enable experimental features if needed
  experimental: {
    // Add any experimental features here
  },
}

module.exports = nextConfig
