"use client";

import { motion } from "framer-motion";

const STATS = [
  { num: "80+", label: "PROJECTS\nCOMPLETED" },
  { num: "45+", label: "HAPPY\nCLIENTS" },
  { num: "8+", label: "YEARS OF\nEXPERIENCE" },
  { num: "120%", label: "AVERAGE ROI\nINCREASE" },
];

const SKILLS = [
  { name: "STRATEGY", percentage: "90%", width: "90%" },
  { name: "WEB DESIGN", percentage: "95%", width: "95%" },
  { name: "DEVELOPMENT", percentage: "85%", width: "85%" },
  { name: "MARKETING", percentage: "90%", width: "90%" },
  { name: "ANALYTICS", percentage: "88%", width: "88%" },
];

export default function NumbersSkillsSection() {
  return (
    <section className="relative w-full border-t border-black/10 select-none overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[380px] lg:min-h-[420px]">
        {/* ══════════════════════════════════════════════════════════
            LEFT HALF: PITCH BLACK "BY THE NUMBERS"
           ══════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-6 bg-[#070707] text-white p-8 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
          <div>
            <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff3d00] block mb-8 sm:mb-10">
              BY THE NUMBERS
            </span>

            {/* 4 Big Stat Numbers Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 items-start">
              {STATS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col"
                >
                  <span className="font-['Bebas_Neue','Oswald',sans-serif] text-5xl sm:text-6xl lg:text-7xl text-[#ff3d00] leading-none mb-1.5 tracking-wider">
                    {stat.num}
                  </span>
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[10px] font-bold uppercase tracking-wider text-neutral-400 whitespace-pre-line leading-tight">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            RIGHT HALF: SOLID ELECTRIC ORANGE "SKILLS SNAPSHOT"
           ══════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-6 bg-[#ff3d00] text-black p-8 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-between">
          <div className="flex items-center justify-between gap-6">
            <div className="flex-1">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-black uppercase tracking-[0.2em] text-black block mb-6 sm:mb-8">
                SKILLS SNAPSHOT
              </span>

              {/* Progress Bars (Inline format matching reference) */}
              <div className="space-y-4 max-w-lg">
                {SKILLS.map((skill, index) => (
                  <div key={skill.name} className="flex items-center gap-3 sm:gap-4">
                    {/* Skill Label on Left */}
                    <span className="w-24 sm:w-28 text-[11px] font-['Plus_Jakarta_Sans',sans-serif] font-black uppercase tracking-wider text-black shrink-0">
                      {skill.name}
                    </span>

                    {/* Middle Progress Track */}
                    <div className="flex-1 h-2 bg-black/20 rounded-none overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.width }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.15 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full bg-black"
                      />
                    </div>

                    {/* Percentage on Right */}
                    <span className="w-10 text-right text-[11px] font-mono font-bold text-black shrink-0">
                      {skill.percentage}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Circular Graphic Stamp on the Far Right */}
            <div className="hidden md:flex shrink-0 w-28 h-28 lg:w-32 lg:h-32 rounded-full bg-black flex items-center justify-center p-3 shadow-2xl relative">
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                viewBox="0 0 120 120"
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                <defs>
                  <path
                    id="skillsStampPath"
                    d="M 60, 60 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                  />
                </defs>
                <text className="text-[8px] font-['Plus_Jakarta_Sans',sans-serif] font-bold uppercase tracking-[0.2em] fill-white/60">
                  <textPath xlinkHref="#skillsStampPath" startOffset="0%">
                    • PRODUCTION • CODE • ARCHITECTURE •
                  </textPath>
                </text>
              </motion.svg>
              <div className="w-14 h-14 rounded-full bg-[#111111] border border-white/20 flex items-center justify-center z-10">
                <span className="font-['Bebas_Neue','Oswald',sans-serif] text-2xl text-[#ff3d00] tracking-wider">
                  AN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
