import type { Metadata } from "next";
import { inter, playfair } from "../fonts";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import dynamic from "next/dynamic";

// Dynamically import Footer with no SSR since it's below the fold
// const Footer = dynamic(() => import("@/components/Footer"), {
//   loading: () => <footer className="bg-primary h-[200px]" />, // Simple loading placeholder
// });

export const metadata: Metadata = {
  title: "CVI Projects Limited",
  description:
    "CVI Projects Limited is a premier construction management firm specializing in high-quality building projects and fit-outs across North Canterbury and Christchurch. Partner with us for reliable payment terms, expert project management, and premium developments.",
  keywords:
    "CVI Projects, Tradies wanted, Trades needed, Contractors wanted,construction management, building projects, fit-outs, North Canterbury, Christchurch, qualified trades, residential construction, commercial construction, premium developments, project management",
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <div className='min-h-screen flex flex-col'>
          <Navbar />
          <main>{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
