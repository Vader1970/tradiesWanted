import { ComponentPropsWithoutRef } from "react";
import type { StaticImageData } from "next/image";

export interface ImageProps {
  src: string | StaticImageData;
  alt?: string;
}

export interface ButtonItem {
  title: string;
  variant?: "default" | "outline";
  href?: string;
}

export interface HeroBaseProps {
  heading: string;
  description: string;
  buttons: ButtonItem[];
  image: ImageProps;
}

export type HeroProps = ComponentPropsWithoutRef<"section"> &
  Partial<HeroBaseProps>;
