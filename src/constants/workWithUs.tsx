import { Building, Users, CheckCircle, Shield } from "lucide-react";
import { FeatureCard } from "@/types/workWithUs";

export const featureCards: FeatureCard[] = [
  {
    title: "Reliable Payments",
    description:
      "We pride ourselves on prompt payment terms for our trade partners, ensuring a strong and sustainable working relationship.",
    icon: <CheckCircle className='w-6 h-6 text-primary' />,
  },
  {
    title: "Ongoing Projects",
    description:
      "Partner with us for consistent work opportunities across a variety of residential and commercial construction projects.",
    icon: <Building className='w-6 h-6 text-primary' />,
  },
  {
    title: "Professional Management",
    description:
      "Work with our experienced team that provides clear communication, detailed plans, and organized project coordination.",
    icon: <Users className='w-6 h-6 text-primary' />,
  },
  {
    title: "Quality Standards",
    description:
      "Join a network committed to delivering excellence in every aspect of construction and building services.",
    icon: <Shield className='w-6 h-6 text-primary' />,
  },
];
