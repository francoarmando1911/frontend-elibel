import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http", 
        hostname: "localhost",
        port: "1337",
      },
    ],
  },
};

export default nextConfig;
