"use client";

import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { RevealAnimation } from "@/components/ui/revealAnimation";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <RevealAnimation>
              <span className="section-subtitle">CONTACT US</span>
            </RevealAnimation>
            <RevealAnimation>
              <h2 className="section-title">Apply to Work With CVI Projects</h2>
            </RevealAnimation>
            <RevealAnimation>
              <p className="text-muted-foreground text-lg mb-8">
                We&apos;re seeking qualified trades professionals for
                high-quality building projects throughout North Canterbury and
                Christchurch. Contact us today to join our trusted network of
                contractors.
              </p>
            </RevealAnimation>

            <div className="space-y-6 mb-8">
              {[
                {
                  icon: <Phone className="w-5 h-5 text-primary" />,
                  title: "Phone",
                  info: "(555) 123-4567",
                  action: {
                    text: "Call our trade liaison",
                    href: "tel:+15551234567",
                  },
                },
                {
                  icon: <Mail className="w-5 h-5 text-primary" />,
                  title: "Email",
                  info: "info@cviprojects.com",
                  action: {
                    text: "Send email",
                    href: "mailto:info@cviconstruction.com",
                  },
                },
                {
                  icon: <MapPin className="w-5 h-5 text-primary" />,
                  title: "Office",
                  info: "5b Cone Street, Rangiora 7400",
                  action: {
                    text: "Get directions",
                    href: "https://www.google.co.nz/maps/place/5B+Cone+Street,+Rangiora+7400/@-43.3037695,172.5968818,18z/data=!4m6!3m5!1s0x6d31948ce54a5bd3:0x59c4c104d5ac53a7!8m2!3d-43.3038398!4d172.5976436!16s%2Fg%2F11j0rhf9qf?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D",
                  },
                },
              ].map((item, index) => (
                <RevealAnimation key={index}>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/5 p-3 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground mb-1">{item.info}</p>
                      <a
                        href={item.action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline flex items-center gap-1"
                      >
                        {item.action.text}
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 7H13M13 7L7 1M13 7L7 13"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>

          <RevealAnimation>
            <div className="relative w-full h-[600px] rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="/images/map.JPG"
                alt="Office Location Map"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}
