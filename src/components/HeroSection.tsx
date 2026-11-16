"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { SiteData } from "@/lib/siteData";

export default function HeroSection({ site }: { site: SiteData }) {
  return (
    <section
      id="hero"
      className="relative w-full bg-[#fbf9f4] text-black overflow-hidden pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 px-5 sm:px-8 md:px-12 lg:px-16 font-['Plus_Jakarta_Sans',sans-serif]"
    >
      {/* ── MAIN HERO GRID (Headline & Cutout Portrait) ── */}
      <div className="w-full max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        {/* ══════════════════════════════════════════════════════════
            LEFT COLUMN: HEADLINE, SCRIPT NOTE, SUBTITLE & CTAS
           ══════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10">
          {/* Small Top Tag: Lightning + "SOFTWARE DEVELOPER & AI ENGINEER" */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4 sm:mb-6"
          >
            <span className="text-[#ff4d29] text-sm font-bold">⚡</span>
            <span className="text-[#ff4d29] text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.18em]">
              SOFTWARE DEVELOPER &amp; FULL-STACK SPECIALIST
            </span>
          </motion.div>

          {/* Monumental Headline with Handwritten Script "Ideas to Products" */}
          <div className="relative">
            {/* Cursive Handwriting Annotation: "Ideas to Products" */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -12 }}
              animate={{ opacity: 1, scale: 1, rotate: -7 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -top-6 sm:-top-8 left-[180px] sm:left-[280px] md:left-[360px] z-20 pointer-events-none"
            >
              <span className="font-['Caveat',cursive] text-2xl sm:text-3xl md:text-4xl text-[#963b25] font-bold tracking-wide select-none drop-shadow-xs">
                Ideas to Products
              </span>
              {/* Organic curved underline */}
              <svg viewBox="0 0 100 20" fill="none" className="w-20 sm:w-28 h-4 -mt-1 text-[#ff4d29]/60">
                <path d="M5 12 Q 50 18 95 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(3.2rem,8.5vw,7.8rem)] font-black uppercase leading-[0.92] tracking-tight text-black"
            >
              <span>I BUILD</span><br />
              <span>DIGITAL</span><br />
              <span className="text-[#ff4d29]">EXPERIENCES</span>
            </motion.h1>
          </div>

          {/* Subtitle Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-neutral-600 max-w-xl leading-relaxed mt-6 sm:mt-8 font-medium"
          >
            Full-Stack Development, AI Solutions and Web Applications that turn ideas into real-world products.
          </motion.p>

          {/* Action Row: "View My Work ↗" + "Watch Intro" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-wrap items-center gap-5 sm:gap-8 mt-7 sm:mt-10"
          >
            {/* View My Work Button */}
            <a
              href="#work"
              className="inline-flex items-center gap-2.5 bg-black hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm px-7 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all hover:scale-[1.02] shadow-lg shadow-black/15 cursor-pointer"
            >
              <span>View My Work</span>
              <span className="text-base font-bold">↗</span>
            </a>

            {/* Watch Intro Button */}
            <a
              href="#about"
              className="inline-flex items-center gap-3.5 group cursor-pointer"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#fdeee5] border border-[#ff4d29]/20 flex items-center justify-center text-[#ff4d29] shadow-sm group-hover:bg-[#ff4d29] group-hover:text-white transition-all">
                <span className="text-xs sm:text-sm ml-0.5 font-bold">▶</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-black group-hover:text-[#ff4d29] transition-colors leading-tight">
                  Watch Intro
                </span>
                <span className="text-[11px] text-neutral-500 font-medium">
                  2 min
                </span>
              </div>
            </a>
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            RIGHT COLUMN: PORTRAIT WITH ORGANIC PEACH ARCH & CORAL GLOW
           ══════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-5 relative flex items-end justify-center min-h-[440px] sm:min-h-[520px] md:min-h-[580px] lg:min-h-[640px]">
          {/* 1. Organic Warm Peach / Coral Background Arches */}
          <motion.div
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-1/2 left-1/2 -translate-x-[48%] -translate-y-1/2 w-[310px] sm:w-[420px] md:w-[480px] lg:w-[520px] h-[340px] sm:h-[460px] md:h-[530px] lg:h-[580px] rounded-[180px_180px_40px_40px] bg-gradient-to-tr from-[#f6b497] via-[#f9c2a8] to-[#fde5d6] z-0 overflow-hidden shadow-xl"
          >
            {/* Inner Coral Circle Accent */}
            <div className="absolute -top-12 -right-12 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-[#ff4d29]/25 blur-xl pointer-events-none" />
            {/* Subtle paper grain / brushed wave texture */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#a34129_1px,transparent_1px)] [background-size:12px_12px]" />
          </motion.div>

          {/* 2. Developer Cutout Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full h-full flex items-end justify-center pointer-events-none"
          >
            <div className="relative w-[320px] sm:w-[400px] md:w-[460px] lg:w-[500px] h-[430px] sm:h-[520px] md:h-[590px] lg:h-[630px]">
              <Image
                src={site.heroImage || "/hero-img.png"}
                alt={site.name || "Arman Naqvi"}
                fill
                priority
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 550px"
                className="object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.2)]"
              />
            </div>
          </motion.div>

          {/* 3. Far Right Edge Text Rail (Desktop / Tablet) */}
          <div className="hidden xl:flex absolute top-12 -right-8 z-20 flex-col items-center gap-6 select-none font-['Plus_Jakarta_Sans',sans-serif]">
            <div className="flex flex-col items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.25em] text-neutral-800">
              <span>DEVELOP</span>
              <span>DESIGN</span>
              <span className="flex items-center gap-1 text-[#ff4d29]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d29]" />
                AUTOMATE
              </span>
              <span>INNOVATE</span>
            </div>
            <div className="w-[1.5px] h-10 bg-neutral-300" />
            <span className="text-xs font-bold text-neutral-700 tracking-wider">
              2026
            </span>
          </div>
        </div>
      </div>

      {/* ── SERVICES QUICK BAR (4 Horizontal Cards directly beneath Hero) ── */}
      <div className="w-full max-w-[1700px] mx-auto mt-12 sm:mt-16 md:mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {[
            {
              title: "Web Development",
              desc: "Modern & Scalable Web Applications",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 text-black">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              ),
            },
            {
              title: "Mobile App Development",
              desc: "iOS & Android Applications",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 text-black">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
                </svg>
              ),
            },
            {
              title: "AI Solutions",
              desc: "AI-powered Systems & Automation",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 text-black">
                  <path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-2 3.46V14a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2v-3.54A4 4 0 0 1 8 7V6a4 4 0 0 1 4-4z" />
                  <circle cx="12" cy="7" r="1" fill="currentColor" />
                  <path d="M6 13a6 6 0 0 0 12 0" />
                  <path d="M4 17a10 10 0 0 0 16 0" />
                </svg>
              ),
            },
            {
              title: "UI/UX Design",
              desc: "Clean & Engaging User Experiences",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 text-black">
                  <path d="M12 19l7-7 3 3-7 7-3-3z" />
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                  <circle cx="11.5" cy="11.5" r="1.5" />
                </svg>
              ),
            },
          ].map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#fbeee4] hover:bg-[#fae7db] border border-[#f5dfd2] rounded-2xl p-5 sm:p-6 flex items-start gap-4 transition-all hover:-translate-y-1 shadow-xs group"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-[#edd1c2] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                {card.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-sm sm:text-base font-extrabold text-black group-hover:text-[#ff4d29] transition-colors leading-tight">
                  {card.title}
                </h3>
                <p className="text-xs text-neutral-600 mt-1 font-medium leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
