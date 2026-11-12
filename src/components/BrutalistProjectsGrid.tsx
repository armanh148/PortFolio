"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface FeaturedProject {
  num: string;
  titleLine1: string;
  titleLine2: string;
  tags: string;
  href: string;
  theme: "light" | "orange" | "dark";
  imageType: "paper" | "building" | "curved" | "spiral";
}

const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    num: "01",
    titleLine1: "CGPLUX",
    titleLine2: "STUDIOS",
    tags: "NEXT.JS, GSAP, SANITY CMS",
    href: "https://cgpluxstudios.com/",
    theme: "light",
    imageType: "paper",
  },
  {
    num: "02",
    titleLine1: "TAWAKKAL",
    titleLine2: "ENTERPRISE",
    tags: "FULL-STACK, TYPESCRIPT",
    href: "https://tawakkal.store/",
    theme: "orange",
    imageType: "building",
  },
  {
    num: "03",
    titleLine1: "ECHO PRIDE",
    titleLine2: "LOGISTICS",
    tags: "DJANGO, PYTHON, APIS",
    href: "https://echopride.site/",
    theme: "light",
    imageType: "curved",
  },
  {
    num: "04",
    titleLine1: "KYNETIC",
    titleLine2: "WEAR",
    tags: "CUSTOM SHOPIFY & E-COMMERCE",
    href: "https://kyneticwear-store.myshopify.com/",
    theme: "dark",
    imageType: "spiral",
  },
];

export default function BrutalistProjectsGrid() {
  return (
    <section
      id="featured-work"
      className="relative w-full bg-white text-black border-t border-black/10 select-none overflow-hidden"
    >
      <div className="w-full flex flex-col md:flex-row min-h-[640px] lg:min-h-[720px]">
        {/* ── 1. LEFT VERTICAL RAIL: "FEATURED WORK" ── */}
        <div className="w-full md:w-16 lg:w-20 shrink-0 border-b md:border-b-0 md:border-r border-black/10 py-4 md:py-8 px-4 flex items-center justify-center bg-white">
          <span className="font-['Space_Grotesk',sans-serif] text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-black md:[writing-mode:vertical-rl] md:rotate-180 whitespace-nowrap">
            FEATURED WORK
          </span>
        </div>

        {/* ── 2. CENTER ASYMMETRIC BENTO GRID ── */}
        <div className="flex-1 p-3 sm:p-4 md:p-5 lg:p-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 lg:gap-5 h-full">
            {/* ── CARD 01: Left Tall Column (Full Height / 2 Rows) ── */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-4 md:row-span-2 relative group overflow-hidden rounded-xl bg-[#f8f8f9] border border-black/10 hover:border-black/30 hover:shadow-xl transition-all text-black flex flex-col justify-between p-6 sm:p-7 md:p-8 min-h-[440px] md:min-h-[600px] lg:min-h-[660px]"
            >
              {/* Card 01 Background Monochrome Visual (Architectural Angle / Paper Fold) */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <svg
                  viewBox="0 0 400 650"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                >
                  <rect width="400" height="650" fill="#f8f8f9" />
                  <path
                    d="M 120 650 L 400 220 L 400 650 Z"
                    fill="#18181b"
                  />
                  <path
                    d="M 40 650 L 320 220 L 120 650 Z"
                    fill="#d4d4d8"
                    opacity="0.8"
                  />
                  <path
                    d="M 220 0 L 400 0 L 400 320 Z"
                    fill="#e4e4e7"
                    opacity="0.6"
                  />
                </svg>
              </div>

              {/* Card 01 Content (Top Left) */}
              <div className="relative z-10 flex flex-col">
                <span className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm font-black text-[#ff4a00]">
                  {FEATURED_PROJECTS[0].num} /
                </span>
                <h3 className="font-['Anton',Impact,sans-serif] text-3xl sm:text-4xl lg:text-[2.75rem] leading-[0.92] uppercase tracking-tight text-black mt-2">
                  {FEATURED_PROJECTS[0].titleLine1}
                  <br />
                  {FEATURED_PROJECTS[0].titleLine2}
                </h3>
                <p className="font-['Space_Grotesk',sans-serif] text-[10px] sm:text-xs font-bold uppercase tracking-wider text-neutral-600 mt-2.5">
                  {FEATURED_PROJECTS[0].tags}
                </p>
                <div className="pt-3">
                  <span className="inline-block text-xl sm:text-2xl font-bold text-black group-hover:text-[#ff4a00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                    ↗
                  </span>
                </div>
              </div>

              {/* Clickable Overlay Link */}
              <a
                href={FEATURED_PROJECTS[0].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${FEATURED_PROJECTS[0].titleLine1} ${FEATURED_PROJECTS[0].titleLine2}`}
                className="absolute inset-0 z-20 cursor-pointer"
              />
            </motion.div>

            {/* ── CARD 02: Top Middle Card (Solid Orange with Building Silhouette) ── */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-4 relative group overflow-hidden rounded-xl bg-[#ff4a00] hover:shadow-xl transition-all text-black flex flex-col justify-between p-6 sm:p-7 min-h-[240px] md:min-h-[290px] lg:min-h-[320px]"
            >
              {/* Black Skyscraper / Triangular Building Silhouette */}
              <div className="absolute right-0 bottom-0 top-0 w-[55%] pointer-events-none z-0 overflow-hidden">
                <svg
                  viewBox="0 0 260 320"
                  fill="none"
                  preserveAspectRatio="xMidYMax slice"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                >
                  <path
                    d="M 130 40 L 260 320 H 0 L 130 40 Z"
                    fill="#09090b"
                  />
                  <line x1="130" y1="40" x2="60" y2="320" stroke="#18181b" strokeWidth="3" />
                  <line x1="130" y1="40" x2="100" y2="320" stroke="#18181b" strokeWidth="3" />
                  <line x1="130" y1="40" x2="160" y2="320" stroke="#18181b" strokeWidth="3" />
                  <line x1="130" y1="40" x2="200" y2="320" stroke="#18181b" strokeWidth="3" />
                  <line x1="40" y1="240" x2="220" y2="240" stroke="#27272a" strokeWidth="2" opacity="0.6" />
                  <line x1="65" y1="180" x2="195" y2="180" stroke="#27272a" strokeWidth="2" opacity="0.6" />
                  <line x1="90" y1="120" x2="170" y2="120" stroke="#27272a" strokeWidth="2" opacity="0.6" />
                </svg>
              </div>

              {/* Card 02 Content */}
              <div className="relative z-10 flex flex-col max-w-[65%]">
                <span className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm font-black text-black/80">
                  {FEATURED_PROJECTS[1].num} /
                </span>
                <h3 className="font-['Anton',Impact,sans-serif] text-2xl sm:text-3xl lg:text-[2.2rem] leading-[0.95] uppercase tracking-tight text-black mt-2">
                  {FEATURED_PROJECTS[1].titleLine1}
                  <br />
                  {FEATURED_PROJECTS[1].titleLine2}
                </h3>
                <p className="font-['Space_Grotesk',sans-serif] text-[10px] sm:text-xs font-bold uppercase tracking-wider text-black/80 mt-2">
                  {FEATURED_PROJECTS[1].tags}
                </p>
                <div className="pt-3">
                  <span className="inline-block text-xl sm:text-2xl font-bold text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    ↗
                  </span>
                </div>
              </div>

              {/* Clickable Overlay Link */}
              <a
                href={FEATURED_PROJECTS[1].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${FEATURED_PROJECTS[1].titleLine1} ${FEATURED_PROJECTS[1].titleLine2}`}
                className="absolute inset-0 z-20 cursor-pointer"
              />
            </motion.div>

            {/* ── CARD 03: Top Right Card (Off-white with Architectural Fold) ── */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-4 relative group overflow-hidden rounded-xl bg-[#f8f8f9] border border-black/10 hover:border-black/30 hover:shadow-xl transition-all text-black flex flex-col justify-between p-6 sm:p-7 min-h-[240px] md:min-h-[290px] lg:min-h-[320px]"
            >
              {/* Minimalist Architectural Shadows */}
              <div className="absolute right-0 bottom-0 top-0 w-[55%] pointer-events-none z-0 overflow-hidden">
                <svg
                  viewBox="0 0 260 320"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                >
                  <path
                    d="M 260 0 L 100 320 H 260 Z"
                    fill="#18181b"
                  />
                  <path
                    d="M 260 0 L 60 320 L 100 320 Z"
                    fill="#a1a1aa"
                    opacity="0.5"
                  />
                </svg>
              </div>

              {/* Card 03 Content */}
              <div className="relative z-10 flex flex-col max-w-[65%]">
                <span className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm font-black text-[#ff4a00]">
                  {FEATURED_PROJECTS[2].num} /
                </span>
                <h3 className="font-['Anton',Impact,sans-serif] text-2xl sm:text-3xl lg:text-[2.2rem] leading-[0.95] uppercase tracking-tight text-black mt-2">
                  {FEATURED_PROJECTS[2].titleLine1}
                  <br />
                  {FEATURED_PROJECTS[2].titleLine2}
                </h3>
                <p className="font-['Space_Grotesk',sans-serif] text-[10px] sm:text-xs font-bold uppercase tracking-wider text-neutral-600 mt-2">
                  {FEATURED_PROJECTS[2].tags}
                </p>
                <div className="pt-3">
                  <span className="inline-block text-xl sm:text-2xl font-bold text-black group-hover:text-[#ff4a00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                    ↗
                  </span>
                </div>
              </div>

              {/* Clickable Overlay Link */}
              <a
                href={FEATURED_PROJECTS[2].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${FEATURED_PROJECTS[2].titleLine1} ${FEATURED_PROJECTS[2].titleLine2}`}
                className="absolute inset-0 z-20 cursor-pointer"
              />
            </motion.div>

            {/* ── CARD 04: Bottom Wide Card (Deep Obsidian Architectural Archway) ── */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="md:col-span-8 relative group overflow-hidden rounded-xl bg-[#09090b] text-white flex flex-col justify-between p-6 sm:p-7 md:p-8 min-h-[240px] md:min-h-[290px] lg:min-h-[320px] shadow-xl hover:shadow-2xl transition-all"
            >
              {/* Concrete Archway / Spiral Graphic on Right Half */}
              <div className="absolute right-0 bottom-0 top-0 w-[55%] pointer-events-none z-0 overflow-hidden">
                <svg
                  viewBox="0 0 450 320"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                >
                  <path
                    d="M 120 320 C 150 140 280 80 450 80 V 220 C 320 220 240 250 200 320 Z"
                    fill="#27272a"
                    opacity="0.9"
                  />
                  <path
                    d="M 220 320 C 250 180 340 130 450 130 V 280 C 380 280 320 290 280 320 Z"
                    fill="#52525b"
                    opacity="0.8"
                  />
                  <path
                    d="M 320 320 C 350 230 390 190 450 190 V 320 Z"
                    fill="#71717a"
                    opacity="0.7"
                  />
                </svg>
              </div>

              {/* Card 04 Content */}
              <div className="relative z-10 flex flex-col max-w-[60%]">
                <span className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm font-black text-[#ff4a00]">
                  {FEATURED_PROJECTS[3].num} /
                </span>
                <h3 className="font-['Anton',Impact,sans-serif] text-2xl sm:text-3xl lg:text-[2.2rem] leading-[0.95] uppercase tracking-tight text-white mt-2 group-hover:text-[#ff4a00] transition-colors">
                  {FEATURED_PROJECTS[3].titleLine1}
                  <br />
                  {FEATURED_PROJECTS[3].titleLine2}
                </h3>
                <p className="font-['Space_Grotesk',sans-serif] text-[10px] sm:text-xs font-bold uppercase tracking-wider text-neutral-400 mt-2">
                  {FEATURED_PROJECTS[3].tags}
                </p>
                <div className="pt-3">
                  <span className="inline-block text-xl sm:text-2xl font-bold text-white group-hover:text-[#ff4a00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                    ↗
                  </span>
                </div>
              </div>

              {/* Clickable Overlay Link */}
              <a
                href={FEATURED_PROJECTS[3].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${FEATURED_PROJECTS[3].titleLine1} ${FEATURED_PROJECTS[3].titleLine2}`}
                className="absolute inset-0 z-20 cursor-pointer"
              />
            </motion.div>
          </div>
        </div>

        {/* ── 3. RIGHT VERTICAL RAIL: "VIEW ALL PROJECTS ↗" ── */}
        <Link
          href="#contact"
          className="group w-full md:w-16 lg:w-20 shrink-0 bg-[#ff4a00] hover:bg-[#e04000] border-t md:border-t-0 md:border-l border-black/10 py-5 md:py-8 px-4 flex items-center justify-center transition-colors cursor-pointer select-none"
        >
          <div className="flex items-center md:[writing-mode:vertical-rl] gap-2 md:gap-3 text-white">
            <span className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm font-black uppercase tracking-[0.2em] whitespace-nowrap">
              VIEW ALL PROJECTS
            </span>
            <span className="text-base sm:text-lg font-black group-hover:translate-x-1 md:group-hover:-translate-y-1 transition-transform">
              ↗
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
