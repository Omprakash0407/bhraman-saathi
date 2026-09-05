import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: "export",
  
  // Add trailing slash for GitHub Pages compatibility
  trailingSlash: true,
  
  // Use basePath from environment variable for GitHub Pages deployment
  // Falls back to empty string for local development
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  
  // Disable image optimization for static export (GitHub Pages doesn't support server-side optimization)
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
