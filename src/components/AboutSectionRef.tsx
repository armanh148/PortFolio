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
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-transparent text-white overflow-hidden select-none">
      <div className="max-w-[1500px] mx-auto">
        {/* Main Card Container */}
        <div className="relative rounded-3xl sm:rounded-[32px] bg-[#0e0e11] border border-white/10 p-5 sm:p-8 lg:p-12 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#2f66f6]/10 blur-[130px] rounded-full pointer-events-none" />

          {/* ─── LEFT COLUMN: PORTRAIT CARD ─── */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-[#141418] border border-white/10 min-h-[460px] sm:min-h-[560px] lg:min-h-[640px] flex flex-col justify-between p-5 sm:p-8 group shadow-xl"
          >
            {/* Top Bar: Brand logo left & Social icons right */}
            <div className="relative z-20 flex justify-between items-start">
              <motion.div
                whileHover={{ rotate: 90, scale: 1.1 }}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/15 text-white font-bold cursor-pointer transition-colors hover:border-[#2f66f6]"
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
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-[#2f66f6] hover:text-white backdrop-blur-md border border-white/10 flex items-center justify-center text-xs font-bold text-stone-300 transition-all shadow-md"
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
                className="object-cover object-top filter grayscale contrast-125 brightness-90 group-hover:scale-105 group-hover:filter-none transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-[#0e0e11]/50 to-transparent" />
            </div>

            {/* Vertical "Available for Work" Pill */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden sm:block">
              <span className="inline-flex items-center gap-2.5 -rotate-90 origin-left text-[10px] font-bold uppercase tracking-widest bg-black/70 backdrop-blur-md border border-white/15 px-3.5 py-2 rounded-full text-stone-300 shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for Work
              </span>
            </div>

            {/* Bottom Card Content */}
            <div className="relative z-20 pt-36 sm:pt-60">
              <Reveal delay={0.1}>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 tracking-tight">
                  Hey, I&rsquo;m {firstName}
                </h3>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed mb-6 max-w-sm">
                  I help startups &amp; brands grow with smart design and high-performance frontend development, based in {site.location || "Lahore, Pakistan"}.
                </p>
              </Reveal>

              {/* Bottom Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#2f66f6] hover:bg-[#1d4ed8] text-white text-xs font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all shadow-lg shadow-blue-950/50 hover:shadow-blue-600/40"
                  >
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white text-[#2f66f6] flex items-center justify-center text-xs font-bold">
                      ↗
                    </span>
                    Let&rsquo;s talk
                  </Link>
                </motion.div>

                <motion.a
                  href="#hero"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs font-medium px-4 sm:px-5 py-2.5 sm:py-3 rounded-full backdrop-blur-md transition-all shadow-sm"
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
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#2f66f6]/60 shadow-md">
                <Image
                  src={site.heroImage || "/hero-img.png"}
                  alt={site.name}
                  fill
                  className="object-cover"
                />
              </div>
              <Reveal delay={0.1}>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">{site.name}</h4>
                  <p className="text-[11px] text-stone-400 font-light">{site.role}</p>
                </div>
              </Reveal>
            </div>

            {/* Massive Headline with Glowing Pill Badge */}
            <Reveal delay={0.2}>
              <div className="mb-8 sm:mb-10">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] text-white">
                  Start building{" "}
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="inline-block bg-blue-950/60 border border-[#2f66f6]/60 text-[#2f66f6] px-3.5 sm:px-5 py-1 sm:py-1.5 rounded-full text-xl sm:text-3xl lg:text-4xl font-mono shadow-[0_0_30px_rgba(47,102,246,0.35)] cursor-pointer"
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
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-1 group-hover:text-[#2f66f6] transition-colors">
                      <AnimatedCounter value="8+" />
                    </div>
                    <p className="text-[11px] sm:text-xs text-stone-400 font-light uppercase tracking-wider">
                      Years experience
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.4}>
                  <div className="group">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-1 group-hover:text-[#2f66f6] transition-colors">
                      <AnimatedCounter value="37+" />
                    </div>
                    <p className="text-[11px] sm:text-xs text-stone-400 font-light uppercase tracking-wider">
                      Projects shipped
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
                    className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-tr from-[#2f66f6] via-[#3b82f6] to-cyan-300 p-1 shadow-[0_0_50px_rgba(47,102,246,0.35)] flex items-center justify-center cursor-pointer"
                  >
                    <div className="w-full h-full bg-[#030712] rounded-[22px] flex items-center justify-center">
                      <motion.span
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="text-4xl sm:text-5xl font-black text-[#2f66f6]"
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
                    <svg viewBox="0 0 100 100" className="w-full h-full text-[#2f66f6] fill-current drop-shadow-[0_0_10px_rgba(47,102,246,0.5)]">
                      <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                      <text className="text-[8px] font-bold uppercase tracking-widest">
                        <textPath href="#circlePath">
                          AWARD WINNING DEVELOPER • SINCE 2018 •
                        </textPath>
                      </text>
                    </svg>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Client Logos (2 cols on small mobile, 4 cols on tablet/desktop) */}
            <div className="border-t border-white/10 pt-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-3 flex items-center gap-2">
                <span>🌐</span> Our clients (2018-2026)
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 items-center opacity-65 hover:opacity-100 transition-opacity">
                {["Logoipsum", "● Logoipsum", "Logoipsum'", "❖ logoipsum"].map((logo) => (
                  <motion.span
                    key={logo}
                    whileHover={{ scale: 1.08, color: "#2f66f6" }}
                    className="text-xs font-mono font-bold tracking-widest text-stone-400 transition-colors cursor-pointer text-center py-1 bg-white/[0.02] sm:bg-transparent rounded-lg sm:rounded-none"
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
