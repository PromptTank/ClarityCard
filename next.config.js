/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['vercel.com'],
  },
  // Ensure CSS is properly loaded
  experimental: {
    optimizeCss: true,
  },
  // Enable React Strict Mode
  reactStrictMode: true,
  // Configure webpack to handle CSS modules
  webpack(config) {
    // Handle SVG imports
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  // Ensure CSS is properly extracted in production
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
