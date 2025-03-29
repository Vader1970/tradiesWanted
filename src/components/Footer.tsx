import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "/#about" },
    { name: "Work With Us", href: "/#work-with-us" },
    { name: "Trades Needed", href: "/#trades" },
    { name: "Current Projects", href: "/#current-projects" },
    { name: "Contact Us", href: "/#contact" },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="section-container py-16">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/3">
            <h3 className="text-xl font-display font-bold mb-4">
              CVI Projects Limited
            </h3>
            <p className="text-white/80 mb-6">
              Transforming construction challenges into seamless realities
              through expert project management and innovative solutions.
            </p>
          </div>

          <div className="flex flex-col gap-8 md:flex-row md:gap-16">
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-white/80 mt-1" />
                  <a
                    href="mailto:info@cviprojects.com"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    info@cviprojects.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white/80 mt-1"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a
                    href="tel:+15551234567"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    (555) 123-4567
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white/80 mt-1"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <address className="text-white/80 not-italic">
                    5b Cone Street
                    <br />
                    Rangiora, 7400
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <p className="text-white/70 text-sm text-center">
              &copy; {currentYear} CVI Projects Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
