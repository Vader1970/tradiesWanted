export type ImageProps = {
  src: string;
  alt?: string;
};

export type ButtonItem = {
  title: string;
  variant?: "default" | "outline";
  href?: string;
};

export type HeroPropsBase = {
  heading: string;
  description: string;
  buttons: ButtonItem[];
  image: ImageProps;
};

export type HeroProps = React.ComponentPropsWithoutRef<"section"> & Partial<HeroPropsBase>;
