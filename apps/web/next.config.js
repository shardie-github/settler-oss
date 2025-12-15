/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure we don't accidentally bundle enterprise code
  webpack: (config, { isServer }) => {
    // Prevent importing enterprise package in web app
    config.resolve.alias = {
      ...config.resolve.alias,
      '@settler/enterprise': false,
    };
    return config;
  },
  // Output configuration for Vercel
  output: 'standalone',
};

module.exports = nextConfig;
