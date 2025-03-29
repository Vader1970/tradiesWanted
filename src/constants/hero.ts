import { HeroBaseProps } from "@/types/hero";
import heroImage from "../../public/images/hero-image.webp";

export const HeroDefaults = {
  heading: "CVI Projects Limited",
  description:
    "We're seeking qualified trades to bid on high-quality building projects and fit-outs throughout North Canterbury and Christchurch.",
  buttons: [
    {
      title: "Trade Work Available",
      variant: "outline",
      href: "#trades",
    },
  ],
  image: {
    src: heroImage,
    alt: "hero image",
  },
} as const satisfies HeroBaseProps;
