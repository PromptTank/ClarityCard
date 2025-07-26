/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['vercel.com'],
  },
  // Disable experimental CSS optimization
  experimental: {
    optimizeCss: false,
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
  // Disable CSS optimization that's causing issues
  optimizeFonts: false,
};

module.exports = nextConfig;
