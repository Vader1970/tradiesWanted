"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { RevealAnimation } from "@/components/ui/revealAnimation";
import useEmblaCarousel from "embla-carousel-react";

interface Project {
  id: number;
  title: string;
  location: string;
  images: string[];
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Papanui Road Residence",
    location: "Papanui Road",
    description:
      "Luxury residential project featuring modern architecture and premium finishes. Currently seeking qualified trades to complete interior and exterior work.",
    images: ["/images/house.png", "/images/house.png", "/images/house.png"],
  },
  {
    id: 2,
    title: "Bealey Bach One",
    location: "Bealey",
    description:
      "Contemporary bach with seamless indoor-outdoor flow. Looking for trades specializing in natural materials and energy-efficient installations.",
    images: [
      "/images/54cloudesley-image-1.webp",
      "/images/54cloudesley-image-2.webp",
      "/images/house.png",
    ],
  },
  {
    id: 3,
    title: "Bealey Bach Two",
    location: "Bealey",
    description:
      "Elegant holiday home designed with sustainability and comfort in mind. Seeking trades for roofing, heating solutions, and interior finishing work.",
    images: [
      "/images/56cloudesley-image-1.webp",
      "/images/56cloudesley2.jpg",
      "/images/house.png",
    ],
  },
];

export default function CurrentProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel();

  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(0);
    }
  }, [activeProject, emblaApi]);

  return (
    <section id="current-projects" className="py-24 bg-gray-50">
      <div className="section-container">
        <RevealAnimation className="max-w-3xl mx-auto text-center mb-16">
          <span className="section-subtitle">CURRENT OPPORTUNITIES</span>
          <h2 className="section-title">Projects Needing Trades Now</h2>
          <p className="text-muted-foreground text-lg">
            Explore our ongoing construction projects with immediate openings
            for qualified trades to bid on specific work packages.
          </p>
        </RevealAnimation>

        {/* Project Selector Tabs */}
        <RevealAnimation className="flex flex-wrap justify-center gap-4 mb-12">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={cn(
                "px-5 py-3 rounded-lg text-sm font-medium transition-all duration-300",
                activeProject === index
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-primary border border-primary/20 hover:bg-primary/10"
              )}
            >
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{project.title}</span>
              </div>
            </button>
          ))}
        </RevealAnimation>

        {/* Active Project Content */}
        <RevealAnimation className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Project Images Carousel */}
          <Card className="border-0 shadow-lg rounded-xl overflow-hidden">
            <CardContent className="p-0">
              <Carousel ref={emblaRef} className="w-full" key={activeProject}>
                <CarouselContent>
                  {projects[activeProject].images.map((image, idx) => (
                    <CarouselItem key={idx}>
                      <div className="aspect-[16/10] relative">
                        <Image
                          src={image}
                          alt={`${projects[activeProject].title} - Image ${
                            idx + 1
                          }`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={idx === 0}
                        />
                        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs">
                          {idx + 1}/{projects[activeProject].images.length}
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                  <CarouselPrevious className="h-8 w-8 static translate-y-0 bg-white/80 backdrop-blur-sm text-primary hover:bg-white" />
                  <CarouselNext className="h-8 w-8 static translate-y-0 bg-white/80 backdrop-blur-sm text-primary hover:bg-white" />
                </div>
              </Carousel>
            </CardContent>
          </Card>

          {/* Project Details */}
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold text-primary mb-4">
              {projects[activeProject].title}
            </h3>
            <div className="flex items-center gap-2 text-primary/80 mb-6">
              <MapPin size={18} />
              <span>{projects[activeProject].location}</span>
            </div>
            <p className="text-muted-foreground text-lg mb-8">
              {projects[activeProject].description}
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
                <span className="font-medium">Status</span>
                <span className="bg-amber-500/20 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                  Seeking Bids
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
                <span className="font-medium">Project type</span>
                <span>
                  {activeProject === 0 ? "Residential" : "Holiday Home"}
                </span>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
