import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Add image domains here when Django backend is ready
      // e.g., { protocol: "https", hostname: "your-django-api.com" }
    ],
  },
};

export default nextConfig;

