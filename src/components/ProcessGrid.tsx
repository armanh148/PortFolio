"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const PROCESS_STEPS = [
  {
    num: "01",
    tag: "DISCOVERY",
    title: "Prototyping & Flow",
    description: "Building interactive user flows and wire models to validate architecture, simulate UX, and align expectations before code.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    num: "02",
    tag: "STRUCTURE",
    title: "Wireframing & Layout",
    description: "Structuring content hierarchy and typographic rhythm without visual distractions to establish rock-solid navigation patterns.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 3h18v18H3z" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    num: "03",
    tag: "VISUAL CRAFT",
    title: "UI Design & Tokens",
    description: "Crafting beautiful colors, custom typography, micro-interactions, and component libraries aligned with brand identity.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    num: "04",
    tag: "DEPLOYMENT",
    title: "Testing & Polish",
    description: "Iterating based on client feedback, profiling Core Web Vitals, trimming bundle weight, and delivering production-ready builds.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export default function ProcessGrid() {
  return (
    <section className="relative py-16 sm:py-24 md:py-36 bg-transparent text-[#F5F5F3] border-b border-white/10 px-4 sm:px-6 md:px-12 overflow-hidden select-none">
      {/* Intersection Crosshairs */}
      <span className="cross-mark text-white/20" style={{ left: "25%", top: "0", transform: "translate(-50%, -50%)" }}>+</span>
      <span className="cross-mark text-white/20" style={{ left: "50%", top: "0", transform: "translate(-50%, -50%)" }}>+</span>
      <span className="cross-mark text-white/20" style={{ left: "75%", top: "0", transform: "translate(-50%, -50%)" }}>+</span>

      <div className="max-w-[1500px] mx-auto">
        <div className="mb-10 sm:mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2f66f6]/30 bg-[#2f66f6]/10 text-xs text-[#2f66f6] font-semibold uppercase tracking-widest mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2f66f6] animate-pulse" />
              Methodology
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-3 sm:mb-4">
              Design Process <span className="text-[#2f66f6]">That Works</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base font-light text-stone-400 leading-relaxed max-w-xl mx-auto">
              A systematic four-phase framework ensuring clarity, performance, and alignment from concept to final deploy.
            </p>
          </Reveal>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02]">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              transition={{ duration: 0.25 }}
              className={`p-4 sm:p-8 md:p-10 relative group transition-colors duration-300 cursor-pointer flex flex-col justify-between ${
                i % 2 === 0 ? "border-r" : ""
              } ${i < 2 ? "border-b" : ""} lg:border-b-0 ${i < 3 ? "lg:border-r" : ""} border-white/10`}
            >
              <Reveal delay={i * 0.1}>
                {/* Top Row: Step Number & Icon */}
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#2f66f6]/20 to-transparent border border-[#2f66f6]/30 flex items-center justify-center text-[#2f66f6] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(47,102,246,0.4)] transition-all">
                    {step.icon}
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-[#2f66f6] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#2f66f6]/10 border border-[#2f66f6]/20">
                    {step.num} / {step.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white uppercase mb-2 sm:mb-3 group-hover:text-[#2f66f6] transition-colors leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed mb-4 sm:mb-6">
                  {step.description}
                </p>

                {/* Corner rotating star */}
                <div className="absolute right-4 bottom-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#2f66f6]">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="inline-block text-lg"
                  >
                    ✳
                  </motion.span>
                </div>
              </Reveal>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
