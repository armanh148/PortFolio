"use client";

import { motion } from "framer-motion";

const CASE_STUDIES = [
  {
    num: "02",
    title: "AI Chat Platform",
    desc: "Custom AI solution for business automation",
    href: "#contact",
  },
  {
    num: "03",
    title: "E-Commerce App",
    desc: "Full-stack mobile application",
    href: "#contact",
  },
  {
    num: "04",
    title: "Analytics Dashboard",
    desc: "Real-time data analytics platform",
    href: "#contact",
  },
];

export default function CaseStudySection() {
  return (
    <section
      id="case-study"
      className="relative w-full bg-[#fbf9f4] text-black py-12 sm:py-16 md:py-20 px-5 sm:px-8 md:px-12 lg:px-16 font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <div className="max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* ══════════════════════════════════════════════════════════
              LEFT HALF: DEEP BLACK BOX WITH AMBIENT ORANGE GLOW
             ══════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 bg-[#0e0f12] text-white rounded-3xl p-8 sm:p-10 md:p-12 flex flex-col justify-between relative overflow-hidden shadow-xl"
          >
            {/* Ambient orange glow gradient at bottom */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-tr from-[#ff4d29]/40 to-transparent blur-3xl pointer-events-none" />

            {/* Top Meta & Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d29]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff4d29]">
                  CASE STUDY
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.05] mb-4">
                From Ideas<br />
                to Real Products
              </h3>

              <p className="text-xs sm:text-sm text-neutral-400 max-w-md leading-relaxed font-normal mb-8">
                A closer look at how I approach problems, design solutions, and build products that create real value.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-[#ff4d29] hover:bg-[#e53c19] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all shadow-md hover:scale-[1.02] cursor-pointer"
              >
                <span>Read Case Study</span>
                <span className="text-sm font-bold">↗</span>
              </a>
            </div>

            {/* Bottom Device Mockup with Ambient Light Reflection */}
            <div className="relative z-10 mt-10 sm:mt-14 pt-4 flex justify-end">
              <div className="relative w-full max-w-sm h-36 sm:h-44 bg-gradient-to-tr from-neutral-900 to-neutral-800 rounded-t-2xl border-t border-l border-r border-white/15 p-3 flex flex-col justify-between shadow-2xl">
                <div className="w-full flex items-center justify-between pb-2 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#ff4d29]" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                  </div>
                  <span className="text-[9px] font-mono text-neutral-400">Design System v3</span>
                </div>
                <div className="h-16 rounded-lg bg-gradient-to-r from-[#ff4d29]/20 via-[#ff4d29]/10 to-transparent p-2.5 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-bold text-white block">Production Pipeline</span>
                    <span className="text-[8px] text-neutral-400">Zero-downtime deployment</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#ff4d29]">100% Core Web Vitals</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ══════════════════════════════════════════════════════════
              RIGHT HALF: 3 EXPANDABLE CASE STUDY ROWS
             ══════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            {CASE_STUDIES.map((study, idx) => (
              <motion.a
                key={study.num}
                href={study.href}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex-1 bg-[#fbeee4] hover:bg-[#fae7db] border border-[#f5dfd2] rounded-2xl p-6 sm:p-8 flex items-center justify-between gap-6 transition-all hover:scale-[1.01] shadow-xs group cursor-pointer"
              >
                <div className="flex items-center gap-5 sm:gap-8">
                  {/* Big Orange Number */}
                  <span className="font-['Bebas_Neue','Oswald',sans-serif] text-3xl sm:text-4xl font-bold text-[#ff4d29] leading-none shrink-0">
                    {study.num}
                  </span>

                  {/* Title & Desc */}
                  <div>
                    <h4 className="text-base sm:text-lg font-extrabold text-black group-hover:text-[#ff4d29] transition-colors leading-snug">
                      {study.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-600 font-medium mt-1">
                      {study.desc}
                    </p>
                  </div>
                </div>

                {/* Right Arrow */}
                <div className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-sm font-bold text-black group-hover:bg-black group-hover:text-white transition-all shrink-0">
                  →
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

