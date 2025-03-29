import { Building2, ArrowUpRight, MapPin, Award } from "lucide-react";
import { FeatureItem } from "@/types/about";

import FiftySixCloudesleyImageOne from "../../public/images/56cloudesley-image-1.webp";
import FiftyFourCloudesleyImage2 from "../../public/images/54cloudesley-image-2.webp";
import FiftySixCloudesleySolorImage from "../../public/images/solar.webp";
import FiftyFourCloudesleyImageOne from "../../public/images/54cloudesley-image-1.webp";

export const FEATURE_ITEMS: FeatureItem[] = [
  {
    icon: Building2,
    title: "Exclusive Projects",
    description: "Work on premium developments",
  },
  {
    icon: Award,
    title: "Reliable Partner",
    description: "Consistent payment terms",
  },
  {
    icon: MapPin,
    title: "Local Focus",
    description: "Canterbury & Christchurch area",
  },
  {
    icon: ArrowUpRight,
    title: "Ongoing Work",
    description: "Build long-term relationships",
  },
];

export const GALLERY_IMAGES = [
  {
    src: FiftySixCloudesleyImageOne,
    alt: "Before renovation",
    location: "56 Cloudesley Street, Bealey",
  },
  {
    src: FiftyFourCloudesleyImage2,
    alt: "After renovation",
    location: "54 Cloudesley Street, Bealey",
  },
  {
    src: FiftySixCloudesleySolorImage,
    alt: "Before renovation interior",
    location: "56 Cloudesley Street, Bealey",
  },
  {
    src: FiftyFourCloudesleyImageOne,
    alt: "After renovation interior",
    location: "56 Cloudesley Street, Bealey",
  },
] as const;
