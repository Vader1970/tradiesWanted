import { type FC } from "react";
import Image from "next/image";
import { ImageItem } from "@/types/about";
import { RevealAnimation } from "@/components/ui/revealAnimation";

interface GalleryGridProps {
  images: readonly ImageItem[];
}

export const GalleryGrid: FC<GalleryGridProps> = ({ images }) => {
  return (
    <RevealAnimation>
      <div className="grid grid-cols-2 gap-4 lg:gap-6">
        <div className="space-y-4 lg:space-y-6 pt-8">
          {[0, 1].map((index) => (
            <div
              key={index}
              className={`image-container ${
                index === 0 ? "aspect-[3/4]" : "aspect-square"
              } relative overflow-hidden`}
            >
              <Image
                src={images[index].src}
                alt={images[index].alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 30vw, 20vw"
                placeholder="blur"
              />
              <div className="image-overlay absolute inset-0 bg-black/20">
                <span className="text-white text-sm font-medium absolute bottom-4 left-4">
                  {images[index].location}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-4 lg:space-y-6">
          {[2, 3].map((index) => (
            <div
              key={index}
              className={`image-container ${
                index === 2 ? "aspect-square" : "aspect-[3/4]"
              } relative overflow-hidden`}
            >
              <Image
                src={images[index].src}
                alt={images[index].alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 30vw, 20vw"
                placeholder="blur"
              />
              <div className="image-overlay absolute inset-0 bg-black/20">
                <span className="text-white text-sm font-medium absolute bottom-4 left-4">
                  {images[index].location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealAnimation>
  );
};
