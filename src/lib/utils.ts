import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Returns a static asset path that works in both local development and GitHub Pages.
 * Automatically prepends the basePath when deployed to GitHub Pages.
 * 
 * @param path - The asset path (e.g., "/images/foo.jpg")
 * @returns The full path with basePath if configured
 * 
 * @example
 * // Local development: "/images/foo.jpg"
 * // GitHub Pages: "/bhraman-saathi/images/foo.jpg"
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  
  // Remove leading slash from path if it exists
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  
  // If basePath is empty (local dev), return the original path with leading slash
  if (!basePath) {
    return `/${cleanPath}`;
  }
  
  // If basePath exists (GitHub Pages), concatenate without double slashes
  return `${basePath}/${cleanPath}`;
}
