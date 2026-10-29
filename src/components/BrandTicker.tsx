"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const BRANDS = [
  "Cairo Studio",
  "Manila Labs",
  "Basel Agency",
  "Oslo UX",
  "Tokio Devs",
  "Berlin Craft",
  "Zurich Brands",
  "Lahore WordPress",
];

export default function BrandTicker() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative py-10 sm:py-16 bg-transparent text-[#F5F5F3] border-b border-white/10 overflow-hidden select-none">
      {/* Corner crosshairs */}
      <span className="cross-mark text-white/20" style={{ left: "20px", top: "20px" }}>+</span>
      <span className="cross-mark text-white/20" style={{ right: "20px", top: "20px" }}>+</span>
      <span className="cross-mark text-white/20" style={{ left: "20px", bottom: "20px" }}>+</span>
      <span className="cross-mark text-white/20" style={{ right: "20px", bottom: "20px" }}>+</span>

      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-12 text-center mb-6 sm:mb-8">
        <Reveal>
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#2f66f6] block mb-1.5 sm:mb-2">
            Brand Collaborations
          </span>
          <h2 className="text-base sm:text-xl md:text-2xl font-bold tracking-tight text-[#F5F5F3] uppercase">
            Trusted by brands &amp; agencies across the globe
          </h2>
        </Reveal>
      </div>

      <div
        className="relative flex items-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Soft edge shadow overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0a0a0d] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0a0a0d] to-transparent z-10 pointer-events-none" />

        <div className="flex whitespace-nowrap overflow-hidden py-4 sm:py-5 border-y border-white/10">
          <motion.div
            animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex shrink-0 gap-8 sm:gap-16 md:gap-24 items-center"
          >
            {/* Render duplicated items for seamless loop */}
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <span
                key={i}
                className="text-sm sm:text-lg md:text-2xl font-black uppercase tracking-widest text-white/30 hover:text-[#2f66f6] hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(47,102,246,0.6)] transition-all duration-300 cursor-pointer select-none"
              >
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
