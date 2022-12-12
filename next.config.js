/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ignoreDuringBuild: true,
  images: {
    domains: ['cdn.sanity.io']
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'cdn.sanity.io',
    //     port: '',
    //     pathname: '/images/usk4j83m/production/17dc1e78143cf6430140d63b3e2544c1b639577a-800x800.webp',
    //   },
    // ],
  },
}

module.exports = nextConfig
