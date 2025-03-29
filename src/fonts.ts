// fonts.ts
import { Inter, Playfair_Display } from "next/font/google";

// Export grouped fonts
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  display: "swap",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  preload: true,
  display: "swap",
});
