"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import type { SiteData } from "@/lib/siteData";

export default function AboutSectionRef({ site }: { site: SiteData }) {
  const firstName = site.name ? site.name.split(" ")[0] : "Arman";

  return (
    <section className="relative py-20 px-4 md:px-12 bg-ink text-white overflow-hidden">
      <div className="max-w-[1500px] mx-auto">
        <div>
          {/* Main Card Container */}
          <div className="relative rounded-[32px] bg-[#0e0e11] p-6 lg:p-10 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* ─── LEFT COLUMN: PORTRAIT CARD ─── */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-[#141418] min-h-[580px] lg:min-h-[640px] flex flex-col justify-between p-6 group">
              
              {/* Top Bar: Brand logo left & Social icons right */}
              <div className="relative z-20 flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 text-white font-bold">
                  ▲
                </div>

                <div className="flex flex-col gap-2">
                  {["X", "In", "Ig"].map((s, i) => (
                    <a
                      key={s}
                      href="#"
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2f66f6] hover:text-white backdrop-blur-md border border-white/10 flex items-center justify-center text-xs font-bold text-stone-600 transition-all"
                    >
                      {s}
                    </a>
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
                  className="object-cover object-top filter grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-[#0e0e11]/40 to-transparent" />
              </div>

              {/* Vertical "Available for Work" Pill on Left edge */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden sm:block">
                <span className="inline-flex items-center gap-2 -rotate-90 origin-left text-[10px] font-bold uppercase tracking-widest bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2f66f6] animate-pulse" />
                  Available for Work
                </span>
              </div>

              {/* Bottom Card Content */}
              <div className="relative z-20 pt-48 sm:pt-64">
                <Reveal delay={0.1}>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Hey, I&rsquo;m {firstName}
                  </h3>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-xs text-stone-600 font-light leading-relaxed mb-6 max-w-sm">
                    I help startups &amp; brands grow with smart design and high-performance frontend development, based in {site.location || "Lahore, Pakistan"}.
                  </p>
                </Reveal>

                {/* Bottom Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#2f66f6] hover:bg-[#1d4ed8] text-white text-xs font-bold px-5 py-3 rounded-full transition-all shadow-lg shadow-blue-950/40"
                  >
                    <span className="w-6 h-6 rounded-full bg-white text-[#2f66f6] flex items-center justify-center text-xs font-bold">
                      ↗
                    </span>
                    Let&rsquo;s talk
                  </Link>

                  <a
                    href="#cv"
                    className="inline-flex items-center gap-2 border border-stone-300 bg-white/5 hover:bg-white/10 text-white text-xs font-medium px-4 py-3 rounded-full backdrop-blur-md transition-all"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download CV
                  </a>
                </div>
              </div>
            </div>

            {/* ─── RIGHT COLUMN: MAIN COPY & METRICS ─── */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full pt-4">
              
              {/* Top Badge: Avatar + Name & Role */}
              <div className="flex items-center gap-3 mb-8">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-stone-300">
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
                    <p className="text-[11px] text-stone-600 font-light">{site.role}</p>
                  </div>
                </Reveal>
              </div>

              {/* Massive Headline with Glowing Pill Badge */}
              <Reveal delay={0.2}>
                <div className="mb-12">
                  <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
                    Start building{" "}
                    <span className="inline-block bg-blue-950/40 border border-[#2f66f6]/40 text-[#2f66f6] px-5 py-1.5 rounded-full text-2xl sm:text-4xl lg:text-5xl font-mono shadow-[0_0_24px_rgba(47,102,246,0.25)]">
                      websites
                    </span>{" "}
                    people remember
                  </h2>
                </div>
              </Reveal>

              {/* Middle Section: Metrics + 3D Emblem Badge */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center mb-16">
                
                {/* Left Stats Grid */}
                <div className="sm:col-span-5 flex flex-col gap-8">
                  <Reveal delay={0.3}>
                    <div>
                      <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-1">
                        8+
                      </div>
                      <p className="text-xs text-stone-600 font-light uppercase tracking-wider">
                        Years of experience
                      </p>
                    </div>
                  </Reveal>

                  <Reveal delay={0.4}>
                    <div>
                      <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-1">
                        37+
                      </div>
                      <p className="text-xs text-stone-600 font-light uppercase tracking-wider">
                        Projects shipped
                      </p>
                    </div>
                  </Reveal>
                </div>

                {/* Right: 3D Emblem & Rotating Circular Badge */}
                <div className="sm:col-span-7 flex items-center justify-center relative">
                    {/* Glowing Blue 3D Emblem Container */}
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
                      
                      {/* Metallic Emblem Image / SVG */}
                      <div className="w-36 h-36 rounded-3xl bg-gradient-to-tr from-[#2f66f6] via-[#3b82f6] to-cyan-300 p-1 shadow-[0_0_60px_rgba(47,102,246,0.35)] flex items-center justify-center">
                        <div className="w-full h-full bg-[#030712] rounded-[22px] flex items-center justify-center">
                          <span className="text-5xl font-black text-[#2f66f6]">✳</span>
                        </div>
                      </div>
 
                      {/* Rotating Circular Text Badge */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -right-4 -top-2 w-28 h-28 pointer-events-none"
                      >
                        <svg viewBox="0 0 100 100" className="w-full h-full text-[#2f66f6] fill-current">
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

              {/* Bottom Row: Client Logos */}
              <div className="border-t border-stone-200 pt-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-4 flex items-center gap-2">
                  <span>🌐</span> Our clients (2018-2026)
                </p>
                <div className="grid grid-cols-4 gap-6 items-center opacity-50 grayscale hover:grayscale-0 transition-all">
                  <span className="text-xs font-mono font-bold tracking-widest text-stone-600">Logoipsum</span>
                  <span className="text-xs font-mono font-bold tracking-widest text-stone-600">● Logoipsum</span>
                  <span className="text-xs font-mono font-bold tracking-widest text-stone-600">Logoipsum&apos;</span>
                  <span className="text-xs font-mono font-bold tracking-widest text-stone-600">❖ logoipsum</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
