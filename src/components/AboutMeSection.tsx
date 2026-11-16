"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMeSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#fbf9f4] text-black py-16 sm:py-20 md:py-24 px-5 sm:px-8 md:px-12 lg:px-16 font-['Plus_Jakarta_Sans',sans-serif] border-t border-black/8"
    >
      <div className="max-w-[1700px] mx-auto flex flex-col md:flex-row items-stretch gap-8 lg:gap-12">
        {/* ── LEFT VERTICAL TAB: "ABOUT ME" ── */}
        <div className="hidden md:flex flex-col items-center justify-between shrink-0 py-2 border-r border-black/10 pr-6 lg:pr-8">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-neutral-800 [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
            ABOUT ME
          </span>
          <div className="w-[1.5px] h-20 bg-neutral-300 mt-4" />
        </div>

        {/* ── MAIN 3-PART CONTENT GRID ── */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* 1. Developer Photo in Organic Warm Peach Frame (Cols 1-4) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-4 relative flex items-center justify-center"
          >
            {/* Background Organic Peach Arch */}
            <div className="absolute inset-0 bg-[#f8d4be] rounded-3xl transform -rotate-3 z-0" />
            <div className="relative z-10 w-full aspect-square max-w-[280px] sm:max-w-[320px] rounded-2xl overflow-hidden shadow-lg border border-[#edd1c2]">
              <Image
                src="/hero-img.png"
                alt="Arman Naqvi"
                fill
                sizes="(max-width: 640px) 280px, 320px"
                className="object-cover object-top"
              />
            </div>
          </motion.div>

          {/* 2. Narrative & Heading (Cols 5-9) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:col-span-5 flex flex-col justify-center"
          >
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#ff4d29] block mb-2">
              A DEVELOPER WHO
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-black leading-tight mb-4">
              LOVES SOLVING PROBLEMS
            </h3>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-medium mb-6">
              I&rsquo;m Arman Naqvi, a Software Developer and Full-Stack Specialist passionate about building modern web applications, mobile apps and intelligent solutions. I enjoy turning complex ideas into simple, beautiful and functional products.
            </p>

            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-black/20 hover:border-black hover:bg-black hover:text-white text-black font-bold text-xs px-6 py-3 rounded-full transition-all cursor-pointer"
              >
                <span>More About Me</span>
                <span className="text-sm font-bold">↗</span>
              </a>
            </div>
          </motion.div>

          {/* 3. Stat Counters (Cols 10-12) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="md:col-span-3 flex flex-col justify-center gap-6 sm:gap-7 border-t md:border-t-0 md:border-l border-black/10 pt-6 md:pt-0 md:pl-8 lg:pl-10"
          >
            {/* Stat 1 */}
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-black text-black">3+</span>
              </div>
              <span className="text-xs text-neutral-600 font-medium block mt-0.5 leading-snug">
                Years of Learning &amp; Building
              </span>
            </div>

            {/* Stat 2 */}
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-black text-black">40+</span>
              </div>
              <span className="text-xs text-neutral-600 font-medium block mt-0.5 leading-snug">
                Projects Completed
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center shrink-0 text-neutral-800">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <span className="text-xs text-neutral-700 font-bold leading-tight">
                Happy Clients Worldwide
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
