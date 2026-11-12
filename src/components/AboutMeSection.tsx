"use client";

import { motion } from "framer-motion";

export default function AboutMeSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#f4f1ea] text-black border-t border-black/10 select-none overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <div className="w-full flex flex-col md:flex-row items-stretch">
        {/* ── 1. LEFT VERTICAL FULL-HEIGHT ORANGE TAB: "ABOUT ME" ── */}
        <div className="w-full md:w-16 lg:w-20 shrink-0 bg-[#ff3d00] py-4 md:py-8 px-4 flex items-center justify-center">
          <span className="font-['Bebas_Neue','Oswald',sans-serif] text-xl sm:text-2xl font-bold uppercase tracking-[0.25em] text-white md:[writing-mode:vertical-rl] md:rotate-180 whitespace-nowrap">
            ABOUT ME
          </span>
        </div>

        {/* ── 2. 3-COLUMN CONTENT GRID (Matching Reference Layout) ── */}
        <div className="flex-1 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Col 1: Massive Stacked Headline (Cols 1-5) */}
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-['Plus_Jakarta_Sans',sans-serif] font-black text-2xl sm:text-3xl lg:text-[2.25rem] leading-[1.1] uppercase tracking-tight text-black"
            >
              I&rsquo;M A DIGITAL SPECIALIST<br />
              WHO BUILDS BRANDS,<br />
              WEBSITES &amp; GROWTH<br />
              SYSTEMS THAT DELIVER<br />
              <span className="text-[#ff3d00]">REAL RESULTS.</span>
            </motion.h2>
          </div>

          {/* Col 2: Narrative Description & Button (Cols 6-8) */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full py-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-medium mb-6"
            >
              With 1+ years of intense production experience across full-stack engineering, web design, and performance optimization, I bridge creativity with analytics to help businesses grow with purpose.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <a
                href="#services"
                className="inline-flex items-center gap-3 bg-black hover:bg-neutral-800 text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[11px] uppercase tracking-wider px-5 py-3 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>MORE ABOUT ME</span>
                <span className="text-sm font-bold text-[#ff3d00]">+</span>
              </a>
            </motion.div>
          </div>

          {/* Col 3: Collage & Signature Graphic Banner (Cols 9-12) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="lg:col-span-4 w-full h-[180px] sm:h-[220px] lg:h-[240px] bg-[#111111] overflow-hidden relative border border-black/10 flex items-center justify-between p-6 shadow-xl"
          >
            {/* Background Texture & Concrete/Noise */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Giant Monogram Stencil "A" and "N" */}
            <div className="relative z-10 flex items-center gap-2">
              <span className="font-['Bebas_Neue','Oswald',sans-serif] text-[7.5rem] sm:text-[9.5rem] leading-none text-white font-bold tracking-tight select-none">
                A
              </span>
              <div className="w-12 sm:w-14 h-24 sm:h-32 bg-[#ff3d00] flex items-center justify-center shadow-lg">
                <span className="font-['Bebas_Neue','Oswald',sans-serif] text-5xl sm:text-6xl text-black font-bold">
                  N
                </span>
              </div>
            </div>

            {/* Expressive Handwritten Signature Across Bottom Right */}
            <div className="absolute -bottom-2 right-2 sm:right-4 z-20 pointer-events-none transform -rotate-6">
              <span className="font-['Caveat',cursive] text-5xl sm:text-6xl text-white font-bold tracking-wider drop-shadow-[0_2px_12px_rgba(255,255,255,0.45)] select-none">
                Arman Naqvi
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
