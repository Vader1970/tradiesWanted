"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { RevealAnimation } from "@/components/ui/revealAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { tradesData } from "@/constants/trades";
import { Trade } from "@/types/trades";
import React from "react";

const TradeCard = ({ trade }: { trade: Trade }) => (
  <Card className='border border-border hover:border-primary/20 transition-all duration-300'>
    <CardHeader>
      <CardTitle className='text-primary text-lg md:text-xl'>{trade.name}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className='text-sm md:text-base'>{trade.description}</CardDescription>
    </CardContent>
  </Card>
);

const TradesAccordion = () => {
  const [activeItems, setActiveItems] = React.useState<string[]>([]);

  return (
    <div className='w-full max-w-4xl mx-auto'>
      <Accordion type='multiple' className='w-full' value={activeItems} onValueChange={setActiveItems}>
        {tradesData.map((category, idx) => (
          <AccordionItem key={idx} value={category.category} className='border-b border-border last:border-b-0'>
            <AccordionTrigger className='text-left font-bold py-4 text-primary text-xl hover:no-underline'>
              <div className='flex items-center gap-2'>
                <span>{category.category}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className='pt-4 pb-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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

export default function TradesNeededSection() {
  return (
    <section id='trades' className='py-24 bg-white'>
      <div className='section-container'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <RevealAnimation>
            <span className='section-subtitle'>TRADES NEEDED</span>
          </RevealAnimation>
          <RevealAnimation>
            <h2 className='section-title'>Trades We&apos;re Looking For</h2>
          </RevealAnimation>
          <RevealAnimation>
            <p className='text-muted-foreground text-lg'>
              We&apos;re seeking qualified trades to join our network of preferred contractors for upcoming projects
              throughout Canterbury and Christchurch.
            </p>
          </RevealAnimation>
        </div>

        <RevealAnimation>
          <div className='py-8'>
            <TradesAccordion />
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
