import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output
  output: "standalone",

  // Enable React Strict Mode
  reactStrictMode: true,

  // Enable gzip/brotli compression
  compress: true,

  // Remove X-Powered-By header
  poweredByHeader: false,

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // TypeScript
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
