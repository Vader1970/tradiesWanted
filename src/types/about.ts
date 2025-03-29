import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ImageItem {
  src: StaticImageData;
  alt: string;
  location: string;
}
