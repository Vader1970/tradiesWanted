import { type FC } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { RevealAnimation } from "@/components/ui/revealAnimation";
import { GalleryGrid } from "@/components/ui/galleryGrid";
import { FEATURE_ITEMS, GALLERY_IMAGES } from "@/constants/about";

const AboutSection: FC = () => {
  return (
    <section id="about" className="bg-gray-50 py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          <RevealAnimation>
            <span className="section-subtitle">About Us</span>
            <h2 className="section-title">
              Exclusive Construction Firm for Chance Voight Investment
              Corporation
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              CVI Projects carries out construction and development work on
              behalf of Chance Voight Investment Partners, ensuring seamless
              execution of their building initiatives.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {FEATURE_ITEMS.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/5 p-3 flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
              <RevealAnimation>
                <Link
                  href="#trades"
                  className={cn(
                    "inline-flex items-center text-primary font-medium",
                    "group"
                  )}
                >
                  See trades we&apos;re looking for
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </RevealAnimation>
            </div>
          </RevealAnimation>

          <GalleryGrid images={GALLERY_IMAGES} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
