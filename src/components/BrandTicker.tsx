"use client";

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
  return (
    <section className="relative py-16 bg-transparent text-[#F5F5F3] border-b border-white/10 overflow-hidden">
      {/* Corner crosshairs */}
      <span className="cross-mark text-white/20" style={{ left: "20px", top: "20px" }}>+</span>
      <span className="cross-mark text-white/20" style={{ right: "20px", top: "20px" }}>+</span>
      <span className="cross-mark text-white/20" style={{ left: "20px", bottom: "20px" }}>+</span>
      <span className="cross-mark text-white/20" style={{ right: "20px", bottom: "20px" }}>+</span>

      <div className="max-w-[1500px] mx-auto px-6 md:px-12 text-center mb-8">
        <Reveal>
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#2f66f6] block mb-2">
            Brand Collaborations
          </span>
          <h2 className="text-xl font-bold tracking-tight text-[#F5F5F3] uppercase">
            Trusted by brands across the globe
          </h2>
        </Reveal>
      </div>

      <div className="relative flex items-center">
        {/* Shadow overlays for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none" />

        <div className="flex whitespace-nowrap overflow-hidden py-4 border-y border-white/10">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex shrink-0 gap-16 items-center"
          >
            {/* Render items twice for smooth infinite loop */}
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <span
                key={i}
                className="text-lg md:text-xl font-black uppercase tracking-widest text-white/30 hover:text-[#2f66f6] transition-colors cursor-default"
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
