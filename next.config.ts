import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  reactStrictMode: true,

  compress: true,

  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
