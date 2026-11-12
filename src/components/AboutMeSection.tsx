"use client";

import { motion } from "framer-motion";

export default function AboutMeSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#f4f1ea] text-black border-t border-black/10 select-none overflow-hidden"
    >
      <div className="w-full flex flex-col md:flex-row min-h-[380px] lg:min-h-[440px]">
        {/* ── 1. LEFT VERTICAL ORANGE RAIL: "ABOUT ME" ── */}
        <div className="w-full md:w-16 lg:w-20 shrink-0 bg-[#ff3d00] py-4 md:py-8 px-4 flex items-center justify-center">
          <span className="font-['Anton',Impact,sans-serif] text-sm sm:text-base font-bold uppercase tracking-[0.22em] text-white md:[writing-mode:vertical-rl] md:rotate-180 whitespace-nowrap">
            ABOUT ME
          </span>
        </div>

        {/* ── 2. CENTER & RIGHT CONTENT GRID ── */}
        <div className="flex-1 p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          {/* Left Text Block */}
          <div className="flex-1 max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-['Anton',Impact,'Arial_Black',sans-serif] text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] leading-[1.08] uppercase tracking-tight text-black mb-6"
            >
              I&rsquo;M A FULL-STACK SPECIALIST WHO BUILDS BRANDS, WEBSITES &amp; GROWTH SYSTEMS THAT DELIVER{" "}
              <span className="text-[#ff3d00]">REAL RESULTS.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm md:text-base text-neutral-700 leading-relaxed max-w-xl mb-8"
            >
              With 1+ years of intense production experience across full-stack engineering, web design, and high-performance frontend architecture at Techmire Solutions, I bridge creativity with technical precision to help businesses grow with purpose.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <a
                href="#services"
                className="inline-flex items-center gap-3 bg-black hover:bg-neutral-800 text-white font-['Space_Grotesk',sans-serif] font-black text-xs uppercase tracking-wider px-6 py-3.5 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>MORE ABOUT ME</span>
                <span className="text-sm font-bold text-[#ff3d00]">+</span>
              </a>
            </motion.div>
          </div>

          {/* Right Collage & Signature Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="w-full lg:w-[420px] xl:w-[480px] h-[220px] sm:h-[260px] md:h-[280px] bg-[#111111] rounded-none overflow-hidden relative border border-black/10 flex items-center justify-between p-6 shadow-xl"
          >
            {/* Background Texture & Concrete/Noise */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Giant Monogram Stencil "AN" */}
            <div className="relative z-10 flex items-center gap-2">
              <span className="font-['Anton',Impact,sans-serif] text-[7rem] sm:text-[9rem] md:text-[10rem] leading-none text-white font-black tracking-tighter select-none">
                A
              </span>
              <div className="w-12 sm:w-16 h-28 sm:h-36 bg-[#ff3d00] flex items-center justify-center">
                <span className="font-['Anton',Impact,sans-serif] text-5xl sm:text-6xl text-black font-black">
                  N
                </span>
              </div>
            </div>

            {/* Expressive Handwritten Signature Across Bottom */}
            <div className="absolute -bottom-1 right-4 sm:right-6 z-20 pointer-events-none transform -rotate-6">
              <span className="font-['Caveat',cursive] text-4xl sm:text-5xl md:text-6xl text-white font-bold opacity-90 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Arman Naqvi
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

