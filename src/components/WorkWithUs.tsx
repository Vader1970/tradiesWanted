"use client";

import { RevealAnimation } from "@/components/ui/revealAnimation";
import { cn } from "@/lib/utils";
import { FeatureCard as FeatureCardType } from "@/types/workWithUs";
import { featureCards } from "@/constants/workWithUs";
import React from "react";

// Feature Card Component
const FeatureCard = ({ card }: { card: FeatureCardType }) => (
  <RevealAnimation>
    <div
      className={cn(
        "card-hover rounded-lg p-8",
        "transition-all duration-300 border border-transparent hover:border-primary/10"
      )}
    >
      <div className='rounded-lg bg-primary/5 p-4 inline-flex mb-6'>{card.icon}</div>
      <h3 className='text-xl font-semibold text-primary mb-4'>{card.title}</h3>
      <p className='text-muted-foreground'>{card.description}</p>
    </div>
  </RevealAnimation>
);

// **Main Component**
export default function WorkWithUs() {
  return (
    <section id='work-with-us' className='py-24 bg-secondary'>
      <div className='section-container'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <RevealAnimation>
            <span className='section-subtitle'>WORK WITH US</span>
          </RevealAnimation>
          <RevealAnimation>
            <h2 className='section-title'>Partner With Our Construction Management Team</h2>
          </RevealAnimation>
          <RevealAnimation>
            <p className='text-muted-foreground text-lg'>
              CVI Projects Limited is seeking qualified trades to bid on high-quality building projects and fit-outs for
              Chance Voight Investment Corporation and other exclusive clients.
            </p>
          </RevealAnimation>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {featureCards.map((card: FeatureCardType, index: number) => (
            <FeatureCard key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
