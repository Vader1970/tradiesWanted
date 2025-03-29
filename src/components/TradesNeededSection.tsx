"use client";

import { cn } from "@/lib/utils";
import {
  Building,
  Users,
  CheckCircle,
  Shield,
  ChevronDown,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RevealAnimation } from "@/components/ui/revealAnimation";
import React from "react";

// Types
interface Trade {
  name: string;
  description: string;
}

interface TradeCategory {
  category: string;
  trades: Trade[];
}

interface FeatureCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Data
const tradesData: TradeCategory[] = [
  {
    category: "Building & Structure",
    trades: [
      {
        name: "Builder",
        description: "General building and construction work",
      },
      {
        name: "Steel Engineer",
        description: "Structural steel design and implementation",
      },
      {
        name: "Scaffolding Provider",
        description: "Safe and reliable scaffold systems",
      },
      {
        name: "Concrete Specialist",
        description: "Expertise in concrete installation and finishing",
      },
      {
        name: "Concrete Grinder/Polisher",
        description: "Surface preparation and decorative concrete finishing",
      },
      {
        name: "Roofer",
        description: "Quality roofing installation and repair",
      },
    ],
  },
  {
    category: "Interior Finishes",
    trades: [
      {
        name: "GIB Stopper/Plasterer",
        description: "Wall and ceiling finishing specialists",
      },
      {
        name: "Painter",
        description: "Professional painting services for all surfaces",
      },
      {
        name: "Tiler",
        description: "Expert tile installation for walls and floors",
      },
      {
        name: "Carpet/Flooring Layer",
        description: "Installation of carpet and various flooring types",
      },
      {
        name: "Timber Flooring Specialist",
        description: "Hardwood and engineered wood flooring installation",
      },
      {
        name: "Wallpaper Hanger",
        description: "Professional wallpaper installation",
      },
      {
        name: "Window Dressing Supplier/Installer",
        description: "Custom window treatments and installation",
      },
      { name: "Joiner", description: "Custom cabinetry and woodwork" },
    ],
  },
  {
    category: "Services & Systems",
    trades: [
      {
        name: "Electrician",
        description:
          "Complete electrical services for residential and commercial",
      },
      {
        name: "Plumber",
        description: "Full plumbing services for all project types",
      },
      {
        name: "Gas Installer",
        description: "Certified gas fitting and installation",
      },
      {
        name: "Heat Pump Specialist",
        description: "Climate control system installation and servicing",
      },
      {
        name: "Solar Power System Provider",
        description: "Renewable energy solutions",
      },
      {
        name: "Locksmith",
        description: "Security solutions and locking systems",
      },
    ],
  },
  {
    category: "External Works",
    trades: [
      {
        name: "Drainlayer",
        description: "Drainage system installation and maintenance",
      },
      {
        name: "Siteworks Specialist",
        description: "Site preparation and earthworks",
      },
      {
        name: "Landscape Designer",
        description: "Outdoor space planning and implementation",
      },
    ],
  },
];

const featureCards: FeatureCard[] = [
  {
    title: "Reliable Payments",
    description:
      "We pride ourselves on prompt payment terms for our trade partners, ensuring a strong and sustainable working relationship.",
    icon: <CheckCircle className="w-6 h-6 text-primary" />,
  },
  {
    title: "Ongoing Projects",
    description:
      "Partner with us for consistent work opportunities across a variety of residential and commercial construction projects.",
    icon: <Building className="w-6 h-6 text-primary" />,
  },
  {
    title: "Professional Management",
    description:
      "Work with our experienced team that provides clear communication, detailed plans, and organized project coordination.",
    icon: <Users className="w-6 h-6 text-primary" />,
  },
  {
    title: "Quality Standards",
    description:
      "Join a network committed to delivering excellence in every aspect of construction and building services.",
    icon: <Shield className="w-6 h-6 text-primary" />,
  },
];

// Client Components
const TradeCard = ({ trade }: { trade: Trade }) => (
  <Card className="border border-border hover:border-primary/20 transition-all duration-300">
    <CardHeader>
      <CardTitle className="text-primary text-lg md:text-xl">
        {trade.name}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-sm md:text-base">
        {trade.description}
      </CardDescription>
    </CardContent>
  </Card>
);

const FeatureCard = ({ card }: { card: FeatureCard }) => (
  <RevealAnimation>
    <div
      className={cn(
        "card-hover rounded-lg p-8",
        "transition-all duration-300 border border-transparent hover:border-primary/10"
      )}
    >
      <div className="rounded-lg bg-primary/5 p-4 inline-flex mb-6">
        {card.icon}
      </div>
      <h3 className="text-xl font-semibold text-primary mb-4">{card.title}</h3>
      <p className="text-muted-foreground">{card.description}</p>
    </div>
  </RevealAnimation>
);

const TradesAccordion = () => {
  const [activeItems, setActiveItems] = React.useState<string[]>([]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Accordion
        type="multiple"
        className="w-full"
        value={activeItems}
        onValueChange={setActiveItems}
      >
        {tradesData.map((category, idx) => (
          <AccordionItem
            key={idx}
            value={category.category}
            className="border-b border-border last:border-b-0"
          >
            <AccordionTrigger className="text-left font-bold py-4 text-primary text-xl hover:no-underline">
              <div className="flex items-center gap-2">
                <span>{category.category}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.trades.map((trade, tradeIdx) => (
                  <TradeCard key={tradeIdx} trade={trade} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

// Main Component
export default function TradesNeededSection() {
  return (
    <>
      <section id="work-with-us" className="py-24 bg-secondary">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <RevealAnimation>
              <span className="section-subtitle">WORK WITH US</span>
            </RevealAnimation>
            <RevealAnimation>
              <h2 className="section-title">
                Partner With Our Construction Management Team
              </h2>
            </RevealAnimation>
            <RevealAnimation>
              <p className="text-muted-foreground text-lg">
                CVI Projects Limited is seeking qualified trades to bid on
                high-quality building projects and fit-outs for Chance Voight
                Investment Corporation and other exclusive clients.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureCards.map((card, index) => (
              <FeatureCard key={index} card={card} />
            ))}
          </div>
        </div>
      </section>

      <section id="trades" className="py-24 bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <RevealAnimation>
              <span className="section-subtitle">TRADES NEEDED</span>
            </RevealAnimation>
            <RevealAnimation>
              <h2 className="section-title">Trades We&apos;re Looking For</h2>
            </RevealAnimation>
            <RevealAnimation>
              <p className="text-muted-foreground text-lg">
                We&apos;re seeking qualified trades to join our network of
                preferred contractors for upcoming projects throughout
                Canterbury and Christchurch.
              </p>
            </RevealAnimation>
          </div>

          <RevealAnimation>
            <div className="py-8">
              <TradesAccordion />
            </div>
          </RevealAnimation>
        </div>
      </section>
    </>
  );
}
