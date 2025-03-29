import { HeroPropsBase } from "@/types/hero";

export const HeroDefaults: HeroPropsBase = {
  heading: "CVI Projects Limited",
  description:
    "We're seeking qualified trades to bid on high-quality building projects and fit-outs throughout North Canterbury and Christchurch.",
  buttons: [
    { title: "Apply for Contract Work", variant: "default", href: "#contact" },
    { title: "Trade Work Available", variant: "outline", href: "#services" },
  ],
  image: {
    src: "/images/hero-image.webp",
    alt: "hero image",
  },
};
