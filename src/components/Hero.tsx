import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HeroProps } from "@/types/hero";
import { HeroDefaults } from "@/constants/hero";

export const Hero = (props: HeroProps) => {
  const { heading, description, buttons, image } = { ...HeroDefaults, ...props };

  return (
    <section id='hero' className='relative px-[5%]'>
      <div className='container relative z-10'>
        <div className='flex max-h-[60rem] min-h-svh items-center justify-center py-16 text-center md:py-24 lg:py-28'>
          <div className='w-full max-w-lg'>
            <h1 className='text-5xl md:text-7xl font-bold text-text-alternative mb-6'>{heading}</h1>
            <p
              className='text-text-alternative md:text-md opacity-0 animate-fade-in'
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              {description}
            </p>
            <div
              className='mt-6 flex flex-col md:flex-row items-center justify-center gap-4 md:mt-8 opacity-0 animate-fade-in'
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || "default"}
                  asChild={!!button.href}
                  className='w-full md:w-auto'
                >
                  {button.href ? <a href={button.href}>{button.title}</a> : button.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='absolute inset-0 z-0'>
        <Image
          src={image.src}
          className='size-full object-cover'
          alt={image.alt || "Background Image"}
          fill
          priority
          placeholder='blur'
          blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
        />
        <div className='absolute inset-0 bg-black/50' />
      </div>
    </section>
  );
};
