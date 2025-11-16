const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Fix multiple lockfile warning
  outputFileTracingRoot: path.join(__dirname),
}

module.exports = nextConfig
