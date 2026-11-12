"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { SiteData } from "@/lib/siteData";

export default function HeroSection({ site }: { site: SiteData }) {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] bg-[#0a0a0a] text-white overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 md:pb-12 px-5 sm:px-8 md:px-12 lg:px-16 select-none font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <div className="w-full max-w-[1700px] mx-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
        {/* ══════════════════════════════════════════════════════════
            LEFT COLUMN: MONUMENTAL TYPOGRAPHY, BADGE & CTA
           ══════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-7 flex flex-col justify-center z-20 pt-4 sm:pt-6">
          {/* Monumental Stacked Headline: "ARMAN NAQVI" */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-['Bebas_Neue','Oswald',sans-serif] text-[clamp(5.5rem,15vw,14rem)] leading-[0.86] tracking-[0.02em] uppercase text-white">
              ARMAN<br />
              NAQVI
            </h1>
          </motion.div>

          {/* Electric Orange Rectangular Badge: "FULL-STACK SPECIALIST" */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 sm:mt-5 self-start"
          >
            <span className="inline-block bg-[#ff3d00] text-white font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm font-black uppercase tracking-[0.16em] px-3.5 py-1.5 shadow-md">
              FULL-STACK SPECIALIST
            </span>
          </motion.div>

          {/* Subtitle Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base md:text-lg text-neutral-300 max-w-lg leading-relaxed mt-6 sm:mt-8 font-normal"
          >
            I help brands stand out and scale up with bold digital experiences and data-driven solutions.
          </motion.p>

          {/* CTA Row: "VIEW MY WORK" + "AVAILABLE FOR PROJECTS" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-5 sm:gap-8 mt-8 sm:mt-10"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-3 bg-[#ff3d00] hover:bg-[#e03500] text-white font-['Plus_Jakarta_Sans',sans-serif] font-black text-xs sm:text-sm uppercase tracking-wider px-7 sm:px-8 py-3.5 sm:py-4 transition-all hover:scale-[1.02] shadow-xl shadow-orange-600/30 cursor-pointer"
            >
              <span>VIEW MY WORK</span>
              <span className="text-base font-bold">↗</span>
            </a>

            <div className="inline-flex items-center gap-2.5 text-xs font-['Plus_Jakarta_Sans',sans-serif] font-bold uppercase tracking-wider text-neutral-300">
              <span>AVAILABLE FOR PROJECTS</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff3d00] animate-pulse" />
            </div>
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            RIGHT COLUMN: GIANT ORANGE SUN + CUTOUT PORTRAIT + STAMP
           ══════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-5 relative flex items-end justify-center min-h-[460px] sm:min-h-[540px] md:min-h-[620px] lg:min-h-[680px]">
          {/* 1. Giant Fiery Electric Orange Sun / Moon Behind Portrait */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-1/2 left-1/2 -translate-x-[45%] -translate-y-1/2 w-[320px] sm:w-[420px] md:w-[480px] lg:w-[540px] h-[320px] sm:h-[420px] md:h-[480px] lg:h-[540px] rounded-full bg-gradient-to-tr from-[#d32f00] via-[#ff3d00] to-[#ff5722] shadow-[0_0_120px_rgba(255,61,0,0.45)] z-0 pointer-events-none"
          />

          {/* 2. Top-Right Rotating Circular Stamp Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="absolute top-4 sm:top-8 right-2 sm:right-6 z-30"
          >
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-sm">
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                viewBox="0 0 140 140"
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                <defs>
                  <path
                    id="heroStampPath"
                    d="M 70, 70 m -48, 0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
                  />
                </defs>
                <text className="text-[9px] font-['Plus_Jakarta_Sans',sans-serif] font-bold uppercase tracking-[0.22em] fill-white">
                  <textPath xlinkHref="#heroStampPath" startOffset="0%">
                    • STRATEGY • DESIGN • CODE • DEV •
                  </textPath>
                </text>
              </motion.svg>
              <span className="text-xl sm:text-2xl font-bold text-white">↗</span>
            </div>
          </motion.div>

          {/* 3. The Developer Portrait Cutout (High Contrast Grayscale Matching Noah Brooks) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full h-full flex items-end justify-center pointer-events-none"
          >
            <div className="relative w-[340px] sm:w-[420px] md:w-[480px] lg:w-[520px] h-[440px] sm:h-[540px] md:h-[620px] lg:h-[680px]">
              <Image
                src={site.heroImage || "/hero-img.png"}
                alt={site.name || "Arman Naqvi"}
                fill
                priority
                loading="eager"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 550px"
                className="object-contain object-bottom filter grayscale contrast-125 brightness-105 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
              />
            </div>
          </motion.div>

          {/* 4. Bottom-Right "SCROLL DOWN" Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-2 right-2 sm:right-6 z-30 flex flex-col items-center gap-2 pointer-events-auto"
          >
            <a
              href="#about"
              className="group flex flex-col items-center gap-1.5 text-[10px] font-['Plus_Jakarta_Sans',sans-serif] font-bold tracking-widest uppercase text-neutral-400 hover:text-[#ff3d00] transition-colors"
            >
              <span>SCROLL</span>
              <span>DOWN</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-[1.5px] h-6 bg-gradient-to-b from-[#ff3d00] to-transparent mt-1"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
