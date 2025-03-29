import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavbarProps, NavbarDefaults } from "@/types/navbar";
import { cn } from "@/lib/utils";
import { SubMenu } from "@/components/navbar/NavSubMenu";
import { motion } from "framer-motion";
import { topLineVariants, middleLineVariants, bottomLineVariants } from "@/components/navbar/NavAnimations";

interface NavbarServerProps {
  logo: NavbarProps["logo"];
  isScrolled: boolean;
  buttons: NavbarProps["buttons"];
  navLinks: NavbarProps["navLinks"];
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
}

export function NavbarServer({
  logo,
  isScrolled,
  buttons,
  navLinks,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: NavbarServerProps) {
  return (
    <nav
      className={cn(
        "fixed top-0 flex w-full items-center lg:min-h-18 lg:px-[5%] z-50 bg-white transition-all duration-200",
        isScrolled ? "bg-white/40 backdrop-blur-md shadow-sm" : ""
      )}
    >
      <div className='mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-4'>
        <div className='flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0'>
          <Link href={logo?.url || "#"}>
            <Image
              src={logo?.src || NavbarDefaults.logo.src}
              alt={logo?.alt || "Logo"}
              width={120}
              height={40}
              className='h-auto w-auto'
              priority
            />
          </Link>
          <div className='flex items-center gap-4 lg:hidden'>
            <div>
              {buttons?.map((button, index) => (
                <Button key={index} variant={button.variant || "default"} asChild={!!button.href} className='w-full'>
                  {button.href ? <Link href={button.href}>{button.title}</Link> : button.title}
                </Button>
              ))}
            </div>
            <button
              className='-mr-2 flex size-12 flex-col items-center justify-center'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <motion.span
                className='my-[3px] h-0.5 w-6 bg-black'
                animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
                variants={topLineVariants}
              />
              <motion.span
                className='my-[3px] h-0.5 w-6 bg-black'
                animate={isMobileMenuOpen ? "open" : "closed"}
                variants={middleLineVariants}
              />
              <motion.span
                className='my-[3px] h-0.5 w-6 bg-black'
                animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
                variants={bottomLineVariants}
              />
            </button>
          </div>
        </div>

        <motion.div
          variants={{
            open: {
              height: "var(--height-open, 100dvh)",
            },
            close: {
              height: "var(--height-closed, 0)",
            },
          }}
          animate={isMobileMenuOpen ? "open" : "close"}
          initial='close'
          exit='close'
          transition={{ duration: 0.4 }}
          className='overflow-hidden px-[5%] text-center lg:flex lg:items-center lg:justify-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]'
        >
          {navLinks?.map((navLink, index) => (
            <div key={index} className='first:pt-16 lg:first:pt-0'>
              {navLink.subMenuLinks && navLink.subMenuLinks.length > 0 ? (
                <SubMenu navLink={navLink} isMobile={true} setIsMobileMenuOpen={setIsMobileMenuOpen} />
              ) : (
                <Link
                  href={navLink.url}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='block py-8 lg:px-4 lg:py-2 text-primary/80 hover:text-primary text-4xl lg:text-sm font-semibold transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full'
                >
                  {navLink.title}
                </Link>
              )}
            </div>
          ))}
        </motion.div>

        <div className='hidden justify-self-end lg:block'>
          {buttons?.map((button, index) => (
            <Button key={index} variant={button.variant || "default"} asChild={!!button.href}>
              {button.href ? <Link href={button.href}>{button.title}</Link> : button.title}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}
