import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";

const LoadingPlaceholder = () => <div className='min-h-[300px] animate-pulse bg-muted' />;

// Dynamic imports for below-fold sections
// const AboutSection = dynamic(() => import("@/components/AboutSection"), {
//   loading: () => <LoadingPlaceholder />,
// });

// const CurrentProjectsSection = dynamic(
//   () => import("@/components/CurrentProjectsSection"),
//   {
//     loading: () => <LoadingPlaceholder />,
//   }
// );

// const TradesNeededSection = dynamic(
//   () => import("@/components/TradesNeededSection"),
//   {
//     loading: () => <LoadingPlaceholder />,
//   }
// );

// const CtaSection = dynamic(() => import("@/components/CtaSection"), {
//   loading: () => <LoadingPlaceholder />,
// });

// const ContactSection = dynamic(() => import("@/components/ContactSection"), {
//   loading: () => <LoadingPlaceholder />,
// });

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Suspense fallback={<LoadingPlaceholder />}>
        <AboutSection />
      </Suspense> */}
      {/* <Suspense fallback={<LoadingPlaceholder />}>
        <TradesNeededSection />
      </Suspense>
      <Suspense fallback={<LoadingPlaceholder />}>
        <CurrentProjectsSection />
      </Suspense>
      <Suspense fallback={<LoadingPlaceholder />}>
        <CtaSection />
      </Suspense>
      <Suspense fallback={<LoadingPlaceholder />}>
        <ContactSection />
      </Suspense> */}
    </>
  );
}
