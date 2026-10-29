"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";

interface ServiceItem {
  id: number;
  num: string;
  title: string;
  description: string;
  image: string;
  rotation: number;
}

const SERVICES: ServiceItem[] = [
  {
    id: 1,
    num: "01",
    title: "MODERN & RESPONSIVE WEB DESIGN",
    description:
      "I design websites that are not only visually appealing but also intuitive and user-friendly across all device form factors.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
    rotation: 5,
  },
  {
    id: 2,
    num: "02",
    title: "HIGH-VALUED WEB DEVELOPMENT",
    description:
      "Whether it's a personal portfolio, e-commerce site, or SaaS platform, I focus on delivering fast, secure, and production-ready code.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
    rotation: -4,
  },
  {
    id: 3,
    num: "03",
    title: "BRAND IDENTITY & VISUAL SYSTEMS",
    description:
      "I help brands define their voice and visual presence through strategic branding, from distinctive typography to scalable design tokens.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80",
    rotation: 6,
  },
  {
    id: 4,
    num: "04",
    title: "USER EXPERIENCE & INTERFACE DESIGN",
    description:
      "My process involves research, wireframing, prototyping, and testing to ensure every design is both delightful and purposeful.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    rotation: -3,
  },
];

export default function ServicesRows() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section className="relative py-16 sm:py-24 md:py-36 bg-white text-[#0f172a] border-b border-slate-200 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[400px] bg-red-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[350px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Crosshair marks */}
      <span className="cross-mark text-slate-300" style={{ left: "24px", top: "24px" }}>+</span>
      <span className="cross-mark text-slate-300" style={{ right: "24px", top: "24px" }}>+</span>

      <div className="max-w-[1500px] mx-auto relative">
        {/* ── 1. GIANT LEFT-ALIGNED HEADING "SERVICES." ── */}
        <div className="mb-10 sm:mb-16 md:mb-24">
          <Reveal>
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-[#0f172a] leading-none flex items-baseline">
              <span>SERVICES</span>
              <span className="inline-block w-3 h-3 sm:w-5 sm:h-5 md:w-7 md:h-7 bg-[#dc2626] ml-2 sm:ml-4 rounded-xs shadow-[0_0_24px_rgba(220,38,38,0.7)]" />
            </h2>
          </Reveal>
        </div>

        {/* ── 2. SERVICES ROWS CONTAINER WITH FLOATING POLAROID ── */}
        <div className="relative">
          {/* ── FLOATING TILTED POLAROID PHOTO (Desktop only) ── */}
          <div className="hidden lg:block absolute right-8 xl:right-24 top-0 pointer-events-none z-30">
            <motion.div
              animate={{
                y: activeIdx * 130 + 10,
                rotate: SERVICES[activeIdx].rotation,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 24,
                mass: 0.6,
              }}
              className="relative w-56 xl:w-64 aspect-[3/4] bg-white p-3 pb-8 rounded-xs shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18),0_0_35px_rgba(220,38,38,0.12)] border border-slate-200"
            >
              <div className="relative w-full h-full overflow-hidden bg-slate-900 rounded-2xs">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={SERVICES[activeIdx].image}
                    src={SERVICES[activeIdx].image}
                    alt={SERVICES[activeIdx].title}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover filter contrast-110 brightness-105"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Polaroid bottom caption */}
              <div className="absolute bottom-2.5 left-3 right-3 flex justify-between items-center text-[10px] font-mono text-slate-800 font-bold uppercase tracking-wider">
                <span>{SERVICES[activeIdx].num} / ARMAN</span>
                <span className="w-2 h-2 rounded-full bg-[#dc2626] animate-pulse" />
              </div>
            </motion.div>
          </div>

          {/* ── ROWS LIST ── */}
          <div className="flex flex-col border-t border-slate-200">
            {SERVICES.map((service, index) => {
              const isActive = activeIdx === index;

              return (
                <div
                  key={service.id}
                  onClick={() => setActiveIdx(index)}
                  onMouseEnter={() => setActiveIdx(index)}
                  className={`group border-b border-slate-200 transition-colors duration-300 ${
                    isActive ? "bg-[#f8fafc]" : "hover:bg-slate-50/70"
                  }`}
                >
                  {/* Desktop Layout (md and up) */}
                  <div className="hidden md:flex md:items-center justify-between gap-6 py-10 md:py-14 px-4 md:px-6 cursor-pointer">
                    {/* Column 1: Index Number */}
                    <div className="shrink-0 w-16 md:w-20">
                      <motion.span
                        animate={{
                          scale: isActive ? 1.15 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                        className="text-xl md:text-2xl font-mono font-bold tracking-tight inline-block text-[#dc2626]"
                      >
                        {service.num}
                      </motion.span>
                    </div>

                    {/* Column 2: Service Title */}
                    <div className="flex-1 max-w-xl pr-4">
                      <motion.h3
                        animate={{ x: isActive ? 8 : 0 }}
                        transition={{ duration: 0.25 }}
                        className={`text-2xl md:text-3xl lg:text-[32px] font-black uppercase tracking-tight leading-snug transition-colors duration-300 ${
                          isActive ? "text-[#dc2626]" : "text-[#0f172a] group-hover:text-[#1e3a8a]"
                        }`}
                      >
                        {service.title}
                      </motion.h3>
                    </div>

                    {/* Column 3: Description */}
                    <div className="max-w-xs xl:max-w-md pr-4">
                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Column 4: Arrow Icon */}
                    <div className="shrink-0 flex items-center justify-end w-12">
                      <motion.div
                        animate={{
                          x: isActive ? 4 : 0,
                          y: isActive ? -4 : 0,
                          scale: isActive ? 1.2 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                        className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                          isActive
                            ? "bg-[#dc2626] border-[#dc2626] text-white shadow-lg shadow-red-600/30"
                            : "border-slate-200 text-slate-400 group-hover:text-[#dc2626] group-hover:border-[#dc2626]/40 bg-white"
                        }`}
                      >
                        <span className="text-lg leading-none">↗</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Mobile Compact Editorial Layout (Under md) */}
                  <div className="block md:hidden py-5 px-3">
                    {/* Header Row: Number + Title + Arrow */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <span className="text-base font-mono font-bold text-[#dc2626] shrink-0 pt-0.5">
                          {service.num}
                        </span>
                        <h3
                          className={`text-base font-black uppercase tracking-tight leading-snug transition-colors ${
                            isActive ? "text-[#dc2626]" : "text-[#0f172a]"
                          }`}
                        >
                          {service.title}
                        </h3>
                      </div>
                      <div
                        className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center transition-all ${
                          isActive
                            ? "bg-[#dc2626] text-white shadow-md shadow-red-600/30"
                            : "bg-slate-100 border border-slate-200 text-slate-600"
                        }`}
                      >
                        <span className="text-xs font-bold leading-none">↗</span>
                      </div>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-xs text-slate-600 font-light leading-relaxed mt-2.5 pl-7">
                      {service.description}
                    </p>

                    {/* Mobile Preview Photo (Expands smoothly on tap) */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 14 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden pl-7"
                        >
                          <div className="relative w-full h-40 rounded-xl overflow-hidden border border-slate-200 shadow-md">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover filter contrast-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end justify-between p-3.5">
                              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                                {service.num} / EXPLORE SERVICE
                              </span>
                              <Link
                                href="/contact"
                                onClick={(e) => e.stopPropagation()}
                                className="px-3 py-1 rounded-full bg-[#dc2626] text-white text-[10px] font-bold uppercase tracking-widest shadow-md"
                              >
                                Book Now ↗
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── 3. BOTTOM CTA BAR ── */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-5 pt-8 border-t border-slate-200 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-slate-600 font-light">
            Need a tailored solution for your brand or agency? Let&rsquo;s talk.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link
              href="/services"
              className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0f172a] font-bold text-xs uppercase tracking-widest transition-all border border-slate-200"
            >
              View Full Services Page ↗
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} className="w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-7 py-3.5 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-red-600/30"
              >
                Start a Project ↗
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
