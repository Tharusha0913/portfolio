import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Oya repository name ekata dena nama methane danna (Aniwaryayen '/' ekka danna)
  basePath: '/portfolio', 
  assetPrefix: '/portfolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;