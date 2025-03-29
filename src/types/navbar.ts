import { ComponentPropsWithoutRef } from "react";

export interface ImageProps {
  url?: string;
  src: string;
  alt?: string;
}

export interface NavLink {
  url: string;
  title: string;
  subMenuLinks?: NavLink[];
}

export interface ButtonItem {
  title: string;
  variant?: "default" | "outline";
  href?: string;
}

interface Props {
  logo: ImageProps;
  navLinks: NavLink[];
  buttons: ButtonItem[];
}

export type NavbarProps = ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const NavbarDefaults: Props = {
  logo: {
    url: "#hero",
    src: "/logos/cvi-projects-logo.png",
    alt: "CVI Projects Logo",
  },
  navLinks: [
    { title: "About Us", url: "#about" },
    { title: "Work With Us", url: "#work-with-us" },
    { title: "Trades Needed", url: "#trades" },
    { title: "Current Projects", url: "#current-projects" },
  ],
  buttons: [
    {
      title: "Contact",
      variant: "default",
      href: "#contact",
    },
  ],
};
