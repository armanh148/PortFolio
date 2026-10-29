"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import type { SiteData } from "@/lib/siteData";

export default function AboutSectionRef({ site }: { site: SiteData }) {
  const firstName = site.name ? site.name.split(" ")[0] : "Arman";

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-white text-[#0f172a] overflow-hidden select-none">
      <div className="max-w-[1500px] mx-auto">
        {/* Main Card Container */}
        <div className="relative rounded-3xl sm:rounded-[32px] bg-[#f8fafc] border border-slate-200/90 p-5 sm:p-8 lg:p-12 shadow-xl shadow-slate-200/40 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />

          {/* ─── LEFT COLUMN: PORTRAIT CARD ─── */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 min-h-[460px] sm:min-h-[560px] lg:min-h-[640px] flex flex-col justify-between p-5 sm:p-8 group shadow-lg"
          >
            {/* Top Bar: Brand logo left & Social icons right */}
            <div className="relative z-20 flex justify-between items-start">
              <motion.div
                whileHover={{ rotate: 90, scale: 1.1 }}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white shadow-sm flex items-center justify-center border border-slate-200 text-slate-800 font-bold cursor-pointer transition-colors hover:border-[#dc2626]"
              >
                ▲
              </motion.div>

              <div className="flex flex-col gap-2">
                {[
                  { label: "X", href: "https://x.com" },
                  { label: "In", href: "https://linkedin.com" },
                  { label: "Gh", href: "https://github.com" },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, x: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white hover:bg-[#1e3a8a] hover:text-white border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-700 transition-all shadow-sm"
                  >
                    {s.label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Background Portrait Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={site.heroImage || "/hero-img.png"}
                alt={site.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top filter contrast-105 brightness-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/40 to-transparent" />
            </div>

            {/* Vertical "Available for Work" Pill */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden sm:block">
              <span className="inline-flex items-center gap-2.5 -rotate-90 origin-left text-[10px] font-bold uppercase tracking-widest bg-white/95 border border-slate-300 px-3.5 py-2 rounded-full text-slate-700 shadow-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                </span>
                Available for Work
              </span>
            </div>

            {/* Bottom Card Content */}
            <div className="relative z-20 pt-36 sm:pt-60">
              <Reveal delay={0.1}>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0f172a] mb-2 tracking-tight">
                  Hey, I&rsquo;m {firstName}
                </h3>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6 max-w-sm">
                  I help startups &amp; brands grow with smart design and high-performance full-stack web development, based in {site.location || "Karachi, Pakistan"}.
                </p>
              </Reveal>

              {/* Bottom Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all shadow-lg shadow-red-600/30"
                  >
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white text-[#dc2626] flex items-center justify-center text-xs font-bold">
                      ↗
                    </span>
                    Let&rsquo;s talk
                  </Link>
                </motion.div>

                <motion.a
                  href="#hero"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs font-medium px-4 sm:px-5 py-2.5 sm:py-3 rounded-full transition-all shadow-sm"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* ─── RIGHT COLUMN: MAIN COPY & METRICS ─── */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full pt-2 sm:pt-4">
            {/* Top Badge: Avatar + Name & Role */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#dc2626] shadow-sm">
                <Image
                  src={site.heroImage || "/hero-img.png"}
                  alt={site.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <Reveal delay={0.1}>
                <div>
                  <h4 className="text-sm font-bold text-[#0f172a] leading-tight">{site.name}</h4>
                  <p className="text-[11px] text-slate-500 font-light">{site.role}</p>
                </div>
              </Reveal>
            </div>

            {/* Massive Headline with Glowing Pill Badge */}
            <Reveal delay={0.2}>
              <div className="mb-8 sm:mb-10">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] text-[#0f172a]">
                  Start building{" "}
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="inline-block bg-red-50 border border-red-300 text-[#dc2626] px-3.5 sm:px-5 py-1 sm:py-1.5 rounded-full text-xl sm:text-3xl lg:text-4xl font-mono shadow-sm cursor-pointer"
                  >
                    websites
                  </motion.span>{" "}
                  people remember
                </h2>
              </div>
            </Reveal>

            {/* Middle Section: Animated Metrics + 3D Emblem Badge */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-center mb-10 sm:mb-14">
              {/* Left Stats Grid with Animated Numbers */}
              <div className="sm:col-span-5 flex flex-row sm:flex-col justify-between sm:justify-start gap-6 sm:gap-8">
                <Reveal delay={0.3}>
                  <div className="group">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight mb-1 group-hover:text-[#dc2626] transition-colors">
                      <AnimatedCounter value="1+" />
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium uppercase tracking-wider">
                      Year experience
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.4}>
                  <div className="group">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight mb-1 group-hover:text-[#dc2626] transition-colors">
                      <AnimatedCounter value="3+" />
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium uppercase tracking-wider">
                      Real projects
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Right: 3D Emblem & Rotating Circular Badge */}
              <div className="sm:col-span-7 flex items-center justify-center relative py-4 sm:py-0">
                <div className="relative w-40 h-40 sm:w-52 sm:h-52 flex items-center justify-center">
                  {/* Metallic Emblem Image / SVG */}
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-tr from-[#dc2626] via-[#ef4444] to-[#1e3a8a] p-1 shadow-[0_10px_35px_rgba(220,38,38,0.25)] flex items-center justify-center cursor-pointer"
                  >
                    <div className="w-full h-full bg-white rounded-[22px] flex items-center justify-center shadow-inner">
                      <motion.span
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="text-4xl sm:text-5xl font-black text-[#dc2626]"
                      >
                        ✳
                      </motion.span>
                    </div>
                  </motion.div>

                  {/* Rotating Circular Text Badge */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -right-2 -top-1 sm:-right-4 sm:-top-2 w-24 h-24 sm:w-28 sm:h-28 cursor-pointer pointer-events-none"
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full text-[#1e3a8a] fill-current drop-shadow-sm">
                      <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                      <text className="text-[8px] font-bold uppercase tracking-widest">
                        <textPath href="#circlePath">
                          FULL-STACK DEVELOPER • TECHMIRE SOLUTIONS •
                        </textPath>
                      </text>
                    </svg>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Client Logos */}
            <div className="border-t border-slate-200 pt-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2">
                <span>🌐</span> Our clients (2018-2026)
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 items-center opacity-75 hover:opacity-100 transition-opacity">
                {["Logoipsum", "● Logoipsum", "Logoipsum'", "❖ logoipsum"].map((logo) => (
                  <motion.span
                    key={logo}
                    whileHover={{ scale: 1.08, color: "#dc2626" }}
                    className="text-xs font-mono font-bold tracking-widest text-slate-500 transition-colors cursor-pointer text-center py-1 bg-slate-100 sm:bg-transparent rounded-lg sm:rounded-none"
                  >
                    {logo}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
