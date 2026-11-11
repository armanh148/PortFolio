"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import type { SiteData } from "@/lib/siteData";

export default function HeroSection({ site }: { site: SiteData }) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Scroll Parallax Effects
  const portraitY = useTransform(scrollY, [0, 600], [0, 60]);
  const textY = useTransform(scrollY, [0, 600], [0, 35]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100svh] bg-white text-black overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 md:pb-12 px-5 sm:px-8 md:px-12 lg:px-16 select-none"
    >
      {/* ── 1. CENTER-RIGHT CUTOUT PORTRAIT (Enlarged & Positioned Cleanly Below Navbar) ── */}
      <motion.div
        style={{ y: portraitY }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="absolute -bottom-8 sm:-bottom-12 md:-bottom-16 lg:-bottom-20 right-0 sm:right-[2%] md:right-[4%] lg:right-[6%] xl:right-[8%] z-20 pointer-events-none w-[90vw] sm:w-[75vw] md:w-[64vw] lg:w-[56vw] xl:w-[50vw] max-w-[850px] h-[75vh] sm:h-[86vh] md:h-[92vh] lg:h-[96vh] max-h-[920px] flex items-end justify-center"
      >
        <div className="relative w-full h-full transform scale-105 sm:scale-110 md:scale-115 lg:scale-120 origin-bottom">
          <Image
            src={site.heroImage || "/hero-img.png"}
            alt={site.name || "Arman Naqvi"}
            fill
            priority
            loading="eager"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 65vw, 850px"
            className="object-contain object-bottom filter contrast-110 brightness-105"
          />
        </div>
      </motion.div>

      {/* ── 3. MAIN HERO CONTENT GRID (Left Column + Embedded Subtitle) ── */}
      <motion.div
        style={{ y: textY }}
        className="relative z-30 w-full max-w-[1600px] mx-auto flex-1 flex flex-col justify-between"
      >
        {/* Top & Middle Grid: Massive Stacked Headline + Subtitle */}
        <div className="pt-2 sm:pt-4 md:pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start">
            {/* The Monumental Stacked Headline */}
            <div className="lg:col-span-8 flex flex-col">
              {/* Row 1: "WE" + Subtext Block beside it */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:gap-8 md:gap-12">
                <motion.h1
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="font-['Anton',Impact,'Arial_Black',sans-serif] text-[clamp(4.5rem,12.5vw,13rem)] leading-[0.84] tracking-[-0.02em] uppercase text-black"
                >
                  WE
                </motion.h1>

                {/* Subtitle paragraph block (Beside "WE" like reference) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-3 sm:mt-5 max-w-[280px] sm:max-w-[310px] md:max-w-[340px]"
                >
                  <p className="font-['Space_Grotesk',sans-serif] text-[11px] sm:text-xs md:text-[13px] font-bold uppercase tracking-wider text-black leading-snug">
                    A FULL-STACK DEVELOPER &amp; FRONTEND SPECIALIST BUILDING BOLD, SCALABLE WEB APPLICATIONS AND UNFORGETTABLE DIGITAL EXPERIENCES.
                  </p>
                </motion.div>
              </div>

              {/* Row 2: "DON'T" */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-['Anton',Impact,'Arial_Black',sans-serif] text-[clamp(4.5rem,12.5vw,13rem)] leading-[0.84] tracking-[-0.02em] uppercase text-black"
              >
                DON&rsquo;T DO
              </motion.div>

              {/* Row 4: "AVERAGE." in Electric Orange */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="font-['Anton',Impact,'Arial_Black',sans-serif] text-[clamp(4.5rem,12.5vw,13rem)] leading-[0.84] tracking-[-0.02em] uppercase text-[#ff4a00]"
              >
                AVERAGE.
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── 4. BOTTOM ROW: "VIEW OUR WORK ↗" + ROTATING CIRCULAR STAMP BADGE ── */}
        <div className="w-full flex items-end justify-between pt-8 sm:pt-12 md:pt-16">
          {/* Bottom-Left: VIEW OUR WORK ↗ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 text-xs sm:text-sm md:text-base font-['Space_Grotesk',sans-serif] font-black uppercase tracking-wider text-black hover:text-[#ff4a00] transition-colors cursor-pointer"
            >
              <span>VIEW OUR WORK</span>
              <span className="text-base sm:text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </motion.div>

          {/* Bottom-Right: ROTATING CIRCULAR STAMP BADGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-30"
          >
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center bg-white rounded-full border border-black shadow-lg">
              {/* Rotating Circular Text SVG */}
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                viewBox="0 0 140 140"
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                <defs>
                  <path
                    id="heroStampPath"
                    d="M 70, 70 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                  />
                </defs>
                <text
                  className="text-[9.5px] font-['Space_Grotesk',sans-serif] font-bold uppercase tracking-[0.24em] fill-black"
                >
                  <textPath xlinkHref="#heroStampPath" startOffset="0%">
                    ARMAN NAQVI • FULL-STACK • VISION • CODE •
                  </textPath>
                </text>
              </motion.svg>

              {/* Bold Center Monogram: "A." with Electric Orange Dot */}
              <div className="font-['Anton',Impact,sans-serif] text-3xl sm:text-4xl text-black flex items-baseline select-none">
                <span>A</span>
                <span className="text-[#ff4a00] -ml-0.5">.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
