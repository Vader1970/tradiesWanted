"use client";

import { useState, useEffect } from "react";
import { NavbarProps, NavbarDefaults } from "@/types/navbar";
import { NavbarServer } from "@/components/navbar/NavbarServer";

export const Navbar = (props: NavbarProps) => {
  const { logo, navLinks, buttons } = {
    ...NavbarDefaults,
    ...props,
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Combined state for glass panel effect
  const shouldShowGlassPanel = isScrolled || isMobileMenuOpen;

  return (
    <NavbarServer
      logo={logo}
      isScrolled={shouldShowGlassPanel}
      buttons={buttons}
      navLinks={navLinks}
      isMobileMenuOpen={isMobileMenuOpen}
      setIsMobileMenuOpen={setIsMobileMenuOpen}
    />
  );
};
