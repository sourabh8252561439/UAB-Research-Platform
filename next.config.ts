import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output (works on Vercel and self-hosting)
  output: "standalone",

  // Enable React Strict Mode
  reactStrictMode: true,

  // Enable compression
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

  // ESLint
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
