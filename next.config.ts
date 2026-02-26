import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  turbopack: {
    root: __dirname,
  },
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 480],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
