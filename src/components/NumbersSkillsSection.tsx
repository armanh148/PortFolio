"use client";

import { motion } from "framer-motion";

const STATS = [
  { num: "40+", label: "PROJECTS\nCOMPLETED" },
  { num: "25+", label: "HAPPY\nCLIENTS" },
  { num: "1+", label: "YEARS OF\nEXPERIENCE" },
  { num: "99%", label: "CLIENT\nRETENTION" },
];

const SKILLS = [
  { name: "NEXT.JS & REACT", percentage: "95%" },
  { name: "TYPESCRIPT & TAILWIND", percentage: "92%" },
  { name: "NODE.JS & DJANGO APIS", percentage: "88%" },
  { name: "SHOPIFY & WORDPRESS", percentage: "94%" },
  { name: "CORE WEB VITALS & SPEED", percentage: "96%" },
];

export default function NumbersSkillsSection() {
  return (
    <section className="relative w-full border-t border-black/10 select-none overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[440px]">
        {/* ══════════════════════════════════════════════════════════
            LEFT HALF: PITCH BLACK "BY THE NUMBERS"
           ══════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-6 bg-[#0a0a0a] text-white p-8 sm:p-12 md:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ff3d00] block mb-8 sm:mb-12">
              BY THE NUMBERS
            </span>

            {/* 4 Big Stat Numbers Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
              {STATS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col"
                >
                  <span className="font-['Anton',Impact,sans-serif] text-5xl sm:text-6xl text-[#ff3d00] leading-none mb-2">
                    {stat.num}
                  </span>
                  <span className="font-['Space_Grotesk',sans-serif] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-400 whitespace-pre-line leading-tight">
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
        <div className="lg:col-span-6 bg-[#ff3d00] text-black p-8 sm:p-12 md:p-16 flex flex-col justify-between">
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <span className="font-mono text-xs font-black uppercase tracking-[0.2em] text-black block mb-6 sm:mb-8">
                SKILLS SNAPSHOT
              </span>

              {/* Progress Bars */}
              <div className="space-y-4 max-w-md">
                {SKILLS.map((skill, index) => (
                  <div key={skill.name} className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-[11px] sm:text-xs font-['Space_Grotesk',sans-serif] font-black uppercase tracking-wider text-black">
                      <span>{skill.name}</span>
                      <span>{skill.percentage}</span>
                    </div>

                    {/* Dark Bar with Filled Track */}
                    <div className="w-full h-2.5 sm:h-3 bg-black/20 rounded-none overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.percentage }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.15 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full bg-black"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Circular Graphic Stamp */}
            <div className="hidden sm:flex shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-full bg-black text-white items-center justify-center p-3 shadow-2xl">
              <div className="w-full h-full rounded-full border border-white/30 flex items-center justify-center relative">
                <span className="font-['Anton',Impact,sans-serif] text-2xl sm:text-3xl text-[#ff3d00]">
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

