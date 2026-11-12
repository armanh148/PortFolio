"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { SiteData } from "@/lib/siteData";

export default function ModernFooter({ site }: { site?: SiteData }) {
  return (
    <footer className="relative w-full bg-[#0a0a0a] text-white border-t border-white/10 select-none overflow-hidden pt-16 sm:pt-20 pb-8 px-5 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-[1700px] mx-auto">
        {/* ── TOP ROW: 4 COLUMNS + ROTATING STAMP ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-16 border-b border-white/10 items-start">
          {/* Col 1: Brand & Tagline & Socials (Cols 1-4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="#hero" className="flex items-center gap-2 mb-4 group">
              <span className="font-['Anton',Impact,sans-serif] text-3xl tracking-tight text-white uppercase group-hover:text-[#ff3d00] transition-colors leading-none">
                AN
              </span>
            </Link>

            <p className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed mb-6 font-normal">
              Helping brands grow with strategy, bold design and high-performance digital excellence.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3">
              {[
                { label: "LinkedIn", href: "https://linkedin.com/in/arman-naqvi", icon: "in" },
                { label: "GitHub", href: "https://github.com/armanh148", icon: "gh" },
                { label: "X", href: "https://x.com", icon: "x" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full border border-white/20 hover:border-[#ff3d00] hover:text-[#ff3d00] text-neutral-300 flex items-center justify-center text-xs font-bold uppercase transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation Links (Cols 5-6) */}
          <div className="lg:col-span-2 flex flex-col">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ff3d00] mb-4">
              NAVIGATION
            </span>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Home", href: "#hero" },
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Work", href: "#work" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-['Space_Grotesk',sans-serif] text-xs text-neutral-400 hover:text-white transition-colors uppercase tracking-wider font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (Cols 7-8) */}
          <div className="lg:col-span-2 flex flex-col">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ff3d00] mb-4">
              SERVICES
            </span>
            <ul className="flex flex-col gap-2.5">
              {[
                "Digital Strategy",
                "Web Design & Dev",
                "Performance Marketing",
                "Brand Identity",
              ].map((serv) => (
                <li key={serv}>
                  <a
                    href="#services"
                    className="font-['Space_Grotesk',sans-serif] text-xs text-neutral-400 hover:text-white transition-colors uppercase tracking-wider font-medium"
                  >
                    {serv}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Let's Connect (Cols 9-10) */}
          <div className="lg:col-span-2 flex flex-col">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ff3d00] mb-4">
              LET&rsquo;S CONNECT
            </span>
            <div className="flex flex-col gap-2 font-['Space_Grotesk',sans-serif] text-xs text-neutral-400">
              <a
                href={`mailto:${site?.email || "armannaqvi.tms@gmail.com"}`}
                className="hover:text-white transition-colors break-all"
              >
                {site?.email || "armannaqvi.tms@gmail.com"}
              </a>
              <a href="tel:+923001234567" className="hover:text-white transition-colors">
                +92 300 1234567
              </a>
              <span className="text-neutral-500 mt-1">Available Worldwide</span>
            </div>
          </div>

          {/* Col 5: Rotating Circular Stamp Badge (Cols 11-12) */}
          <div className="lg:col-span-2 flex items-center justify-start lg:justify-end">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center rounded-full border border-white/20">
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                viewBox="0 0 140 140"
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                <defs>
                  <path
                    id="footerStampPath"
                    d="M 70, 70 m -46, 0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
                  />
                </defs>
                <text className="text-[9px] font-['Space_Grotesk',sans-serif] font-bold uppercase tracking-[0.22em] fill-[#ff3d00]">
                  <textPath xlinkHref="#footerStampPath" startOffset="0%">
                    • STRATEGY • DESIGN • DEV • VISION •
                  </textPath>
                </text>
              </motion.svg>
              <span className="font-['Anton',Impact,sans-serif] text-xl font-bold text-white">
                AN
              </span>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR: COPYRIGHT & POLICIES ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-['Space_Grotesk',sans-serif] text-[11px] text-neutral-500">
          <p>© 2026 {site?.name || "Arman Naqvi"}. All rights reserved.</p>
          <div className="flex items-center gap-6 font-bold uppercase tracking-wider text-neutral-400">
            <span className="hover:text-white transition-colors cursor-pointer">PRIVACY POLICY</span>
            <span className="hover:text-white transition-colors cursor-pointer">TERMS OF SERVICE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
