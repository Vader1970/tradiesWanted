import type { HeroProps } from "@/types/hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HeroDefaults } from "@/constants/hero";

export function Hero({
  heading = HeroDefaults.heading,
  description = HeroDefaults.description,
  buttons = HeroDefaults.buttons,
  image = HeroDefaults.image,
  ...props
}: HeroProps) {
  return (
    <section id="hero" className="relative px-[5%]" {...props}>
      <div className="container relative z-10">
        <div className="flex max-h-[60rem] min-h-svh items-center justify-center py-16 text-center md:py-24 lg:py-28">
          <div className="w-full max-w-lg">
            <h1 className="text-5xl md:text-7xl font-bold text-text-alternative mb-6">
              {heading}
            </h1>
            <p
              className="text-text-alternative md:text-md opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              {description}
            </p>
            <div
              className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4 md:mt-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || "default"}
                  asChild={!!button.href}
                  className="w-auto"
                >
                  {button.href ? (
                    <a href={button.href}>{button.title}</a>
                  ) : (
                    button.title
                  )}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          src={image.src}
          className="size-full object-cover"
          alt={image.alt || "Background Image"}
          fill
          priority
          quality={75}
          sizes="100vw"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
