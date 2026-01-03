import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const METADATA = {
  name: "Space Drive",
  description: "Access your files from anywhere, anytime.",
  bannerImageUrl: `https://frames-v2-demo.vercel.app/assets/screens/splash-03.png`,
  iconImageUrl: `https://frames-v2-demo.vercel.app/icon.png`,
  homeUrl: process.env.NEXT_PUBLIC_URL ?? "https://frames-v2-demo-demo.vercel.app",
  // homeUrl: "https://frames-v2-demo-lilac.vercel.app",
  splashBackgroundColor: "#131313"
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
