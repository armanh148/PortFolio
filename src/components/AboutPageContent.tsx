"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import type { SiteData } from "@/lib/siteData";

interface AboutPageContentProps {
  site: SiteData;
}

/* ─── Geometric Neon SVG Icons matching Portfolio Theme ─── */
function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" stroke="#dc2626" />
    </svg>
  );
}

function CmsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <circle cx="8" cy="10" r="1.5" fill="#dc2626" />
      <circle cx="16" cy="10" r="1.5" fill="#dc2626" />
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" stroke="#dc2626" />
    </svg>
  );
}

function SpeedIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

const TOOLKIT_CATEGORIES = [
  {
    num: "01",
    title: "Frontend Architecture",
    tag: "ENGINEERING",
    desc: "Building ultra-fast, type-safe web applications with modern component architectures and fluid micro-interactions.",
    icon: <CodeIcon />,
    tools: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Turbopack", "Zustand"],
  },
  {
    num: "02",
    title: "WordPress Craft & Headless",
    tag: "CMS ARCHITECTURE",
    desc: "Bespoke custom themes, native Gutenberg blocks, and headless GraphQL backends with zero page-builder bloat.",
    icon: <CmsIcon />,
    tools: ["WordPress", "PHP", "Gutenberg Blocks", "ACF Pro", "WooCommerce", "WPGraphQL", "REST API"],
  },
  {
    num: "03",
    title: "UI/UX & Design Systems",
    tag: "DESIGN SYSTEMS",
    desc: "1:1 Figma-to-code translation, standardized design tokens, dark mode systems, and accessible component kits.",
    icon: <PaletteIcon />,
    tools: ["Figma", "Design Tokens", "Radix UI", "Component Kits", "WCAG 2.1 AA", "Storybook", "Responsive Breakpoints"],
  },
  {
    num: "04",
    title: "Performance & Optimization",
    tag: "SPEED & WEB VITALS",
    desc: "Profiling Core Web Vitals, code-splitting, payload trimming, and modern caching hierarchies for 100 PageSpeed scores.",
    icon: <SpeedIcon />,
    tools: ["100 Lighthouse", "Core Web Vitals", "Edge Caching", "Image Tuning", "SEO Audits", "Git / GitHub", "Vercel"],
  },
];

const TIMELINE_EXPERIENCES = [
  {
    period: "2023 — Present",
    role: "Senior Frontend & WordPress Engineer",
    company: "Independent / Creative Studio",
    location: "Global Remote",
    desc: "Engineering high-performance Next.js 16 web applications, custom headless WordPress architectures, and living design systems for tech startups and digital agencies worldwide.",
    achievements: [
      "Shipped 37+ production-grade web applications with 100% client satisfaction",
      "Architected custom headless WooCommerce portals driving 40% speed improvements",
      "Pioneered bespoke zero-bloat Gutenberg block architectures for editorial teams",
    ],
  },
  {
    period: "2021 — 2023",
    role: "Lead Frontend Developer",
    company: "Digital Production Agency",
    location: "Lahore, Pakistan",
    desc: "Led frontend development across high-traffic client websites, oversaw Figma-to-code translations, and spearheaded Core Web Vitals performance tuning across the agency catalog.",
    achievements: [
      "Maintained 95+ average Google Lighthouse scores across all shipped client sites",
      "Implemented unified multi-brand design tokens used across 10+ client surfaces",
      "Mentored junior developers on React, modern CSS, and clean semantic markup",
    ],
  },
  {
    period: "2018 — 2021",
    role: "WordPress Specialist & Frontend Dev",
    company: "Web Craft Studio",
    location: "Lahore, Pakistan",
    desc: "Crafted custom WordPress themes from scratch, implemented bespoke ACF Pro flexible layouts, and engineered responsive web experiences for European and North American clients.",
    achievements: [
      "Built over 25+ bespoke WordPress themes with zero heavy third-party builders",
      "Engineered secure payment gateways and custom WooCommerce checkout funnels",
      "Established foundational expertise in web standards, accessibility, and speed",
    ],
  },
];

const CORE_VALUES = [
  {
    num: "01",
    title: "Speed as a Feature",
    desc: "Every millisecond of latency is lost conversion. I engineer for sub-second initial load times, optimal code-splitting, and minimal JavaScript overhead.",
  },
  {
    num: "02",
    title: "Pixel-Level Fidelity",
    desc: "Translating Figma designs into production code with obsessive attention to typographic rhythm, whitespace, micro-interactions, and responsive fidelity.",
  },
  {
    num: "03",
    title: "Zero-Bloat Architecture",
    desc: "No multipurpose bloated themes or heavy visual builders. Everything is hand-crafted with clean, semantic, and maintainable modern code.",
  },
  {
    num: "04",
    title: "Transparent Partnership",
    desc: "Direct engineering communication without middlemen. Daily async progress updates, milestone staging previews, and comprehensive handoffs.",
  },
];

export default function AboutPageContent({ site }: AboutPageContentProps) {
  const firstName = site.name ? site.name.split(" ")[0] : "Arman";

  return (
    <div className="bg-[#09090b] text-[#F5F5F3] min-h-screen pt-24 sm:pt-28 pb-12 sm:pb-20 overflow-x-clip selection:bg-[#2f66f6] selection:text-white">
      {/* ── Ambient Radial Glows (Exact portfolio signature) ── */}
      <div className="fixed top-1/4 left-1/4 w-[600px] h-[500px] bg-[#2f66f6]/5 blur-[170px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* ── SECTION 1: HERO HEADER ── */}
      <section className="relative py-12 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-16 border-b border-white/10 select-none">
        {/* Subtle Grid Crosshairs */}
        <span className="cross-mark text-white/20" style={{ left: "24px", top: "24px" }}>+</span>
        <span className="cross-mark text-white/20" style={{ right: "24px", top: "24px" }}>+</span>

        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-12 mb-10 sm:mb-16">
            <div>
              <Reveal>
                <div className="flex items-center gap-2 mb-4 text-xs font-mono text-stone-400">
                  <Link href="/" className="hover:text-white transition-colors">
                    HOME
                  </Link>
                  <span>/</span>
                  <span className="text-[#2f66f6] font-semibold">ABOUT</span>
                </div>

                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2f66f6]/30 bg-[#2f66f6]/10 text-xs text-[#2f66f6] font-semibold uppercase tracking-widest mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2f66f6] animate-pulse" />
                  The Craft &amp; Story
                </span>

                {/* Giant Bold Headline with Glowing Dot */}
                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white leading-none flex items-baseline">
                  <span>ABOUT</span>
                  <span className="inline-block w-3 h-3 sm:w-5 sm:h-5 md:w-7 md:h-7 bg-[#2f66f6] ml-2 sm:ml-4 rounded-xs shadow-[0_0_24px_rgba(47,102,246,0.9)]" />
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-sm sm:text-base md:text-lg text-stone-400 font-light max-w-2xl leading-relaxed mt-6">
                  Frontend engineer and WordPress craftsman based in Lahore, Pakistan. Crafting high-performance digital experiences where aesthetic refinement meets bulletproof architecture.
                </p>
              </Reveal>
            </div>

            {/* Quick Metrics Badges */}
            <div className="flex items-center gap-3 sm:gap-4 self-start lg:self-end">
              <div className="px-4 py-2.5 rounded-2xl bg-[#0e0e11] border border-white/10 flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-mono font-black text-[#2f66f6]">8+</span>
                <span className="text-[11px] font-mono uppercase text-stone-400 font-bold leading-tight">
                  Years of<br />Experience
                </span>
              </div>
              <div className="px-4 py-2.5 rounded-2xl bg-[#0e0e11] border border-white/10 flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-mono font-black text-white">37+</span>
                <span className="text-[11px] font-mono uppercase text-stone-400 font-bold leading-tight">
                  Projects<br />Shipped
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: BIOGRAPHY & PHILOSOPHY (Editorial Bento) ── */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-16 border-b border-white/10 select-none">
        <span className="cross-mark text-white/20" style={{ left: "24px", top: "24px" }}>+</span>
        <span className="cross-mark text-white/20" style={{ right: "24px", top: "24px" }}>+</span>

        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Portrait Showcase Card */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative rounded-3xl bg-[#0e0e11] border border-white/10 p-5 sm:p-7 overflow-hidden shadow-2xl">
                  {/* Top glare line */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2f66f6]/60 to-transparent" />

                  {/* Status header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Available for projects
                    </span>
                    <span className="text-xs font-mono text-stone-400 font-bold">
                      {site.location || "Lahore, PK"}
                    </span>
                  </div>

                  {/* Portrait photo */}
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#141418] mb-5">
                    <Image
                      src={site.heroImage || "/hero-img.png"}
                      alt={site.name}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 400px"
                      className="object-cover object-top filter brightness-105 contrast-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Name caption & social links */}
                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <h3 className="text-lg font-bold text-white leading-tight">{site.name}</h3>
                      <p className="text-xs text-stone-400 font-light mt-0.5">{site.role}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      {[
                        { label: "In", href: "https://linkedin.com/in/arman-naqvi" },
                        { label: "Gh", href: "https://github.com/armanh148" },
                        { label: "X", href: "https://x.com" },
                      ].map((s) => (
                        <motion.a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#2f66f6] hover:text-white border border-white/10 flex items-center justify-center text-xs font-bold text-stone-300 transition-all"
                        >
                          {s.label}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Editorial Narrative & Values */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <Reveal delay={0.1}>
                  <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-[#2f66f6] block mb-3">
                    Philosophy &amp; Background
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight mb-6">
                    Engineering where <span className="text-[#2f66f6]">function</span> blends with <span className="text-white/80">emotion</span>.
                  </h2>
                </Reveal>

                <Reveal delay={0.15}>
                  <div className="space-y-4 text-xs sm:text-sm md:text-base text-stone-300 font-light leading-relaxed mb-8">
                    <p>
                      Hello, I&rsquo;m {firstName}. Over the past 8+ years, I&rsquo;ve honed my craft in frontend engineering, UI/UX implementation, and WordPress architecture. I don&rsquo;t believe in cookie-cutter templates, sluggish page builders, or messy dependencies.
                    </p>
                    <p>
                      I partner directly with founders, seed-stage startups, and top-tier digital agencies to build production-grade web applications with modern React 19, Next.js 16, and clean, bespoke WordPress architectures.
                    </p>
                    <p>
                      Every millisecond of latency and every pixel of misaligned layout represents friction. My goal is simple: deliver web experiences that load instantly, feel remarkably tactile through fluid motion, and convert visitors into long-term champions.
                    </p>
                  </div>
                </Reveal>

                {/* Key Specialization Badges */}
                <Reveal delay={0.2}>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                    <div className="p-3.5 rounded-xl bg-[#0e0e11] border border-white/10">
                      <span className="text-xs font-mono font-bold text-[#2f66f6] block mb-1">01 / TECH</span>
                      <span className="text-xs font-bold text-white">Next.js &amp; React 19</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#0e0e11] border border-white/10">
                      <span className="text-xs font-mono font-bold text-[#2f66f6] block mb-1">02 / CMS</span>
                      <span className="text-xs font-bold text-white">Zero-Bloat WordPress</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#0e0e11] border border-white/10 col-span-2 sm:col-span-1">
                      <span className="text-xs font-mono font-bold text-[#2f66f6] block mb-1">03 / DESIGN</span>
                      <span className="text-xs font-bold text-white">Figma to Code 1:1</span>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Action Buttons */}
              <Reveal delay={0.25}>
                <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2f66f6] hover:bg-[#1d4ed8] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-blue-900/40 hover:scale-105"
                  >
                    Start a Project ↗
                  </Link>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    Direct Email ✉
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: SKILLS & TOOLKIT (Bento Grid) ── */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-16 border-b border-white/10 select-none">
        <span className="cross-mark text-white/20" style={{ left: "24px", top: "24px" }}>+</span>
        <span className="cross-mark text-white/20" style={{ right: "24px", top: "24px" }}>+</span>

        <div className="max-w-[1500px] mx-auto">
          <div className="mb-10 sm:mb-16 max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2f66f6]/30 bg-[#2f66f6]/10 text-xs text-[#2f66f6] font-semibold uppercase tracking-widest mb-3 sm:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2f66f6] animate-pulse" />
                Arsenal
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight mb-3">
                Skills &amp; <span className="text-[#2f66f6]">Technologies</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base font-light text-stone-400 leading-relaxed">
                A focused selection of modern tools, libraries, and languages utilized daily to ship production-ready applications.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {TOOLKIT_CATEGORIES.map((cat, idx) => (
              <Reveal key={cat.title} delay={idx * 0.08}>
                <div className="h-full bg-[#0e0e11] border border-white/10 hover:border-[#2f66f6]/60 rounded-xl sm:rounded-3xl p-4 sm:p-7 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden shadow-xl">
                  {/* Top subtle glare line */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:via-[#2f66f6]/60 transition-colors" />

                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-5">
                      <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-white/[0.04] border border-white/10 text-[#2f66f6] flex items-center justify-center group-hover:scale-105 group-hover:border-[#2f66f6]/40 transition-all">
                        {cat.icon}
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider text-[#2f66f6] bg-[#2f66f6]/10 border border-[#2f66f6]/20 px-2 py-0.5 rounded-full uppercase">
                        {cat.num}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-xl font-bold uppercase tracking-tight text-white mb-1.5 sm:mb-2 group-hover:text-[#2f66f6] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-stone-400 font-light leading-relaxed mb-4 sm:mb-6">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-white/5 flex flex-wrap gap-1 sm:gap-1.5">
                    {cat.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[9px] sm:text-[10px] font-mono px-1.5 sm:px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-stone-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CAREER TIMELINE & EXPERIENCE ── */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-16 border-b border-white/10 select-none">
        <span className="cross-mark text-white/20" style={{ left: "24px", top: "24px" }}>+</span>
        <span className="cross-mark text-white/20" style={{ right: "24px", top: "24px" }}>+</span>

        <div className="max-w-[1500px] mx-auto">
          <div className="mb-10 sm:mb-16 max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2f66f6]/30 bg-[#2f66f6]/10 text-xs text-[#2f66f6] font-semibold uppercase tracking-widest mb-3 sm:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2f66f6] animate-pulse" />
                Track Record
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight mb-3">
                Experience &amp; <span className="text-[#2f66f6]">Milestones</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base font-light text-stone-400 leading-relaxed">
                A chronology of roles, shipped platforms, and architectural contributions across 8+ years.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TIMELINE_EXPERIENCES.map((exp, idx) => (
              <Reveal key={exp.period} delay={idx * 0.1}>
                <div className="h-full bg-[#0e0e11] border border-white/10 hover:border-[#2f66f6]/60 rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group shadow-xl">
                  {/* Top glare line */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:via-[#2f66f6]/60 transition-colors" />

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/5">
                      <span className="text-xs font-mono font-bold text-[#2f66f6]">
                        {exp.period}
                      </span>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-stone-300 uppercase tracking-wider font-bold">
                        Shipped
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white mb-1 group-hover:text-[#2f66f6] transition-colors leading-snug">
                      {exp.role}
                    </h3>
                    <p className="text-xs text-stone-400 font-light mb-4">
                      {exp.company} &middot; <span className="text-stone-500">{exp.location}</span>
                    </p>

                    <p className="text-xs text-stone-300 font-light leading-relaxed mb-4">
                      {exp.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <ul className="space-y-2">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2 text-[11px] sm:text-xs text-stone-400 font-light">
                          <span className="text-[#2f66f6] font-bold text-xs mt-0.5 shrink-0">✦</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CORE VALUES & WORK ETHIC ── */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-16 border-b border-white/10 select-none">
        <div className="max-w-[1500px] mx-auto">
          <div className="mb-10 sm:mb-16 text-center max-w-3xl mx-auto">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2f66f6]/30 bg-[#2f66f6]/10 text-xs text-[#2f66f6] font-semibold uppercase tracking-widest mb-3 sm:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2f66f6] animate-pulse" />
                Foundations
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight mb-3">
                Core Engineering <span className="text-[#2f66f6]">Principles</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base font-light text-stone-400 leading-relaxed max-w-xl mx-auto">
                The non-negotiable standards that guide every line of code, component design, and client engagement.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {CORE_VALUES.map((val, idx) => (
              <Reveal key={val.num} delay={idx * 0.08}>
                <div className="h-full p-4 sm:p-7 rounded-xl sm:rounded-2xl bg-[#0e0e11] border border-white/10 hover:border-[#2f66f6]/50 transition-all flex flex-col justify-between">
                  <div>
                    <span className="text-xl sm:text-3xl font-mono font-black text-[#2f66f6] block mb-2 sm:mb-3">
                      {val.num}
                    </span>
                    <h4 className="text-xs sm:text-lg font-bold uppercase text-white mb-1.5 sm:mb-2 leading-snug">
                      {val.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-stone-400 font-light leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: HIGH-IMPACT CTA BANNER ── */}
      <section className="pt-16 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 lg:px-16 select-none">
        <div className="max-w-[1500px] mx-auto">
          <Reveal>
            <div className="relative rounded-3xl p-8 sm:p-14 bg-[#0e0e11] border border-[#2f66f6]/40 overflow-hidden shadow-2xl text-center">
              {/* Decorative radial blur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#2f66f6]/15 blur-[120px] pointer-events-none" />

              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2f66f6]/30 bg-[#2f66f6]/10 text-xs text-[#2f66f6] font-bold uppercase tracking-widest mb-4">
                ✦ Let&rsquo;s Connect
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white max-w-3xl mx-auto mb-4 leading-tight">
                READY TO BUILD SOMETHING REMARKABLE?
              </h2>

              <p className="text-xs sm:text-base text-stone-300 font-light max-w-xl mx-auto mb-8 leading-relaxed">
                Whether you have an upcoming project, need frontend horsepower on retainer, or want a high-conversion WordPress rebuild, let&rsquo;s talk.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#2f66f6] hover:bg-[#1d4ed8] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-blue-900/40 hover:scale-105"
                >
                  Start a Conversation ↗
                </Link>
                <Link
                  href="/projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 text-xs font-bold uppercase tracking-widest transition-all"
                >
                  Explore Shipped Works ↗
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

