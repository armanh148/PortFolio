"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceItem {
  num: string;
  title: string;
  subtitle: string;
  href: string;
}

const SERVICES: ServiceItem[] = [
  {
    num: "01",
    title: "BRANDING\n& IDENTITY",
    subtitle: "STRATEGIC BRANDING THAT BUILDS CONNECTIONS.",
    href: "/services",
  },
  {
    num: "02",
    title: "WEB DESIGN\n& DEVELOPMENT",
    subtitle: "CRAFTING DIGITAL EXPERIENCES THAT PERFORM.",
    href: "/services",
  },
  {
    num: "03",
    title: "CONTENT\n& CAMPAIGNS",
    subtitle: "STORYTELLING THAT ENGAGES AND INSPIRES.",
    href: "/services",
  },
  {
    num: "04",
    title: "STRATEGY\n& CONSULTING",
    subtitle: "DATA-DRIVEN STRATEGIES THAT DRIVE GROWTH.",
    href: "/services",
  },
];

export default function BrutalistServicesSection() {
  return (
    <section className="relative w-full bg-black text-white border-t border-neutral-900 select-none overflow-hidden">
      {/* ── TOP SECTION: "WHAT WE DO" + 4 SERVICE COLUMNS ── */}
      <div className="w-full flex flex-col md:flex-row border-b border-neutral-800">
        {/* Left Vertical Tab: "WHAT WE DO" */}
        <div className="w-full md:w-16 lg:w-20 shrink-0 border-b md:border-b-0 md:border-r border-neutral-800 py-4 md:py-8 px-4 flex items-center justify-center bg-black">
          <span className="font-['Space_Grotesk',sans-serif] text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-neutral-300 md:[writing-mode:vertical-rl] md:rotate-180 whitespace-nowrap">
            WHAT WE DO
          </span>
        </div>

        {/* 4 Service Columns Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-800">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={service.href}
                className="group flex flex-col justify-between h-full p-6 sm:p-7 md:p-8 hover:bg-neutral-950 transition-colors cursor-pointer"
              >
                <div>
                  {/* Service Number in Electric Orange */}
                  <span className="block font-['Space_Grotesk',sans-serif] text-base md:text-lg font-black text-[#ff4a00] mb-3 md:mb-4">
                    {service.num}
                  </span>

                  {/* Service Title */}
                  <h3 className="font-['Anton',Impact,sans-serif] text-xl sm:text-2xl md:text-2xl lg:text-[1.75rem] leading-[1] uppercase tracking-tight text-white mb-4 whitespace-pre-line group-hover:text-[#ff4a00] transition-colors">
                    {service.title}
                  </h3>

                  {/* Service Subtitle */}
                  <p className="font-['Space_Grotesk',sans-serif] text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-400 leading-relaxed max-w-[240px]">
                    {service.subtitle}
                  </p>
                </div>

                {/* Arrow at Bottom */}
                <div className="pt-8 sm:pt-12">
                  <span className="inline-block text-lg md:text-xl text-white group-hover:text-[#ff4a00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                    ↗
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM SECTION: BOLD MANIFESTO BANNER + CTA ── */}
      <div className="w-full max-w-[1700px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-14 sm:py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Massive 3-Line Headline */}
          <div className="lg:col-span-7 xl:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-['Anton',Impact,'Arial_Black',sans-serif] text-[clamp(2.75rem,7.5vw,7.8rem)] leading-[0.88] tracking-[-0.02em] uppercase text-white"
            >
              STOP USING<br />
              BORING WEB<br />
              TEMPLATES
            </motion.h2>
          </div>

          {/* Right Subtitle & Solid Orange Button */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col items-start lg:items-start lg:pl-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.16em] text-neutral-200 leading-snug mb-6 sm:mb-8"
            >
              STAND OUT. BREAK RULES.<br />
              BUILD SOMETHING ICONIC.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="group w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-4 sm:gap-6 bg-[#ff4a00] hover:bg-[#e04000] text-black font-['Space_Grotesk',sans-serif] font-black text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 transition-all hover:scale-[1.02] shadow-xl cursor-pointer"
              >
                <span>LET&rsquo;S BUILD SOMETHING DIFFERENT</span>
                <span className="text-base sm:text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
