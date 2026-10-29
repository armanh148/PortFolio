"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";

const STATS = [
  {
    value: "37+",
    label: "Projects Completed",
    description: "Production-ready next-gen web applications shipped.",
  },
  {
    value: "70+",
    label: "Happy Clients",
    description: "WordPress partners and creative agencies worldwide.",
  },
  {
    value: "8+",
    label: "Years of Craft",
    description: "Specialized in frontend engineering, layout design and styling.",
  },
  {
    value: "100%",
    label: "Satisfaction Rate",
    description: "Delivering quality products on time with meticulous care.",
  },
];

export default function StatsCounter() {
  return (
    <section className="relative py-16 sm:py-24 md:py-36 bg-transparent text-[#F5F5F3] border-b border-white/10 px-4 sm:px-6 md:px-12 overflow-hidden select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#2f66f6]/5 blur-[160px] rounded-full pointer-events-none" />

      {/* Grid line separator */}
      <div className="absolute left-1/4 top-0 bottom-0 border-r border-white/[0.06] hidden lg:block" />
      <div className="absolute left-2/4 top-0 bottom-0 border-r border-white/[0.06] hidden lg:block" />
      <div className="absolute left-3/4 top-0 bottom-0 border-r border-white/[0.06] hidden lg:block" />

      {/* Intersection Crosshairs */}
      <span className="cross-mark text-white/20" style={{ left: "25%", top: "0", transform: "translate(-50%, -50%)" }}>+</span>
      <span className="cross-mark text-white/20" style={{ left: "50%", top: "0", transform: "translate(-50%, -50%)" }}>+</span>
      <span className="cross-mark text-white/20" style={{ left: "75%", top: "0", transform: "translate(-50%, -50%)" }}>+</span>

      <div className="max-w-[1500px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2f66f6]/30 bg-[#2f66f6]/10 text-xs text-[#2f66f6] font-semibold uppercase tracking-widest mb-3 sm:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2f66f6] animate-pulse" />
                Proven Track Record
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
                My Impact Through <br />
                <span className="text-[#2f66f6]">User Experience</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <p className="text-stone-400 font-light text-sm sm:text-base md:text-lg leading-relaxed">
                By bridging premium design sensibilities with clean code, I build high-performance portfolios and WordPress platforms that align perfectly with brand identity.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Stats Grid with Animated Counters & Glassmorphism (2 columns on mobile, 4 on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 pt-6 sm:pt-10 border-t border-white/10">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative p-4 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] hover:shadow-2xl hover:border-[#2f66f6]/60 hover:shadow-blue-900/20 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between h-full"
              >
                {/* Top Glare Highlight */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:via-[#2f66f6]/60 transition-colors" />

                {/* Glow accent in background on hover */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#2f66f6]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <motion.span
                  whileHover={{ rotate: 90, scale: 1.3 }}
                  className="absolute top-3 right-3 sm:top-6 sm:right-6 text-[#2f66f6] text-xs sm:text-lg md:text-xl font-light transition-transform"
                >
                  ✳
                </motion.span>

                <div>
                  <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-1 sm:mb-2 text-white group-hover:text-[#2f66f6] transition-colors leading-none">
                    <AnimatedCounter value={stat.value} duration={1.6 + i * 0.2} />
                  </div>

                  <h4 className="text-[10px] sm:text-xs md:text-sm font-bold text-white uppercase tracking-wider mb-1 sm:mb-2 line-clamp-1 sm:line-clamp-none">
                    {stat.label}
                  </h4>
                </div>

                <p className="text-[10px] sm:text-xs text-stone-400 font-light leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {stat.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
