"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealAnimationProps {
  children: ReactNode;
  className?: string;
}

export function RevealAnimation({ children, className }: RevealAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observedElement = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("active");
            }, 400);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "50px",
      }
    );

    if (observedElement) {
      observer.observe(observedElement);
    }

    return () => {
      if (observedElement) {
        observer.unobserve(observedElement);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal-animation opacity-0 translate-y-8 transition-all duration-700 ease-out", className)}
    >
      {children}
    </div>
  );
}
