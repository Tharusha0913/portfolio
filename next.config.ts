import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Oyage repository eka 'user.github.io/portfolio' nam:
  // basePath: '/portfolio',
};

export default nextConfig;