import withPWA from "next-pwa";

const { i18n } = import("./next-i18next.config.js"); 
// Configuration options for Next.js
const nextConfig = {
  reactStrictMode: false, // Enable React strict mode for improved error handling
  swcMinify: true,      // Enable SWC minification for improved performance
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during production builds
  },
  i18n,
};

// Configuration object tells the next-pwa plugin
const withPWAConfig = withPWA({
  dest: "public", // Destination directory for the PWA files
  disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
  register: true, // Register the PWA service worker
  skipWaiting: true, // Skip waiting for service worker activation
})(
    nextConfig);

// Export the combined configuration for Next.js with PWA support
export default withPWAConfig;
