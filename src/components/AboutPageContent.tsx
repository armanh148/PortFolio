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
    title: "Frontend Engineering",
    tag: "FRONTEND",
    desc: "Building ultra-fast, responsive web interfaces with modern component hierarchies, clean state management, and fluid micro-interactions.",
    icon: <CodeIcon />,
    tools: ["React", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript (ES6+)", "HTML5 / CSS3"],
  },
  {
    num: "02",
    title: "Backend & Databases",
    tag: "BACKEND & APIS",
    desc: "Designing secure RESTful APIs, robust microservices, and high-reliability relational database architectures.",
    icon: <SpeedIcon />,
    tools: ["Node.js", "Express.js", "Django", "PHP", "REST APIs", "PostgreSQL", "Database Design"],
  },
  {
    num: "03",
    title: "CMS & E-Commerce",
    tag: "ECOMMERCE",
    desc: "Custom-built headless storefronts, bespoke Shopify Liquid themes, and zero-bloat WordPress architectures.",
    icon: <CmsIcon />,
    tools: ["WordPress", "WooCommerce", "Shopify Liquid", "Sanity CMS", "Headless Commerce", "ACF Pro"],
  },
  {
    num: "04",
    title: "Tools & Workflow",
    tag: "DEVOPS & DX",
    desc: "End-to-end version control, cloud deployment pipelines, API testing, and Core Web Vitals profiling.",
    icon: <PaletteIcon />,
    tools: ["Git", "GitHub", "VS Code", "Vercel", "Vite", "Postman", "Turbopack"],
  },
];

const TIMELINE_EXPERIENCES = [
  {
    period: "2023 — Present",
    role: "Full-Stack Web Developer & Frontend Specialist",
    company: "Techmire Solutions",
    location: "Karachi, Pakistan",
    status: "Active Role",
    desc: "Architecting scalable full-stack web applications, custom e-commerce storefronts, and high-performance interactive interfaces using React, Next.js, Django, and Node.js.",
    achievements: [
      "Engineered full-stack platforms including CGPlux Studios, Tawakkal & Echo Pride, and Al-Hadi Logistics",
      "Architected custom high-conversion Shopify Liquid & WooCommerce storefronts for Kynetic Wear & Ecotexinc",
      "Pioneered clean component design systems and sub-second Core Web Vitals optimization across all client deployments",
    ],
    technologies: ["React", "Next.js", "Node.js", "Django", "Tailwind CSS", "Shopify Liquid", "PostgreSQL"],
  },
  {
    period: "2021 — 2023",
    role: "Lead Frontend Developer",
    company: "Digital Production Agency",
    location: "Lahore, Pakistan",
    status: "Delivered",
    desc: "Led frontend development across high-traffic client websites, oversaw Figma-to-code translations, and spearheaded Core Web Vitals performance tuning across the agency catalog.",
    achievements: [
      "Maintained 95+ average Google Lighthouse scores across all shipped client sites",
      "Implemented unified multi-brand design tokens used across 10+ client surfaces",
      "Mentored junior developers on React, modern CSS, and clean semantic markup",
    ],
    technologies: ["React", "WordPress", "JavaScript (ES6+)", "ACF Pro", "Sass", "Core Web Vitals"],
  },
  {
    period: "2018 — 2021",
    role: "WordPress Specialist & Frontend Dev",
    company: "Web Craft Studio",
    location: "Lahore, Pakistan",
    status: "Delivered",
    desc: "Crafted custom WordPress themes from scratch, implemented bespoke ACF Pro flexible layouts, and engineered responsive web experiences for European and North American clients.",
    achievements: [
      "Built over 25+ bespoke WordPress themes with zero heavy third-party builders",
      "Engineered secure payment gateways and custom WooCommerce checkout funnels",
      "Established foundational expertise in web standards, accessibility, and speed",
    ],
    technologies: ["WordPress Theme Dev", "PHP", "WooCommerce", "HTML5/CSS3", "jQuery", "Bootstrap"],
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
    <div className="bg-white text-[#0f172a] min-h-screen pt-24 sm:pt-28 pb-12 sm:pb-20 overflow-x-clip selection:bg-[#dc2626] selection:text-white">
      {/* ── Ambient Radial Glows (Exact portfolio signature) ── */}
      <div className="fixed top-1/4 left-1/4 w-[600px] h-[500px] bg-red-500/5 blur-[170px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* ── SECTION 1: HERO HEADER ── */}
      <section className="relative py-12 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-16 border-b border-slate-200 select-none">
        {/* Subtle Grid Crosshairs */}
        <span className="cross-mark text-slate-300" style={{ left: "24px", top: "24px" }}>+</span>
        <span className="cross-mark text-slate-300" style={{ right: "24px", top: "24px" }}>+</span>

        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-12 mb-10 sm:mb-16">
            <div>
              <Reveal>
                <div className="flex items-center gap-2 mb-4 text-xs font-mono text-slate-500">
                  <Link href="/" className="hover:text-[#dc2626] transition-colors">
                    HOME
                  </Link>
                  <span>/</span>
                  <span className="text-[#dc2626] font-semibold">ABOUT</span>
                </div>

                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-200 bg-red-50 text-xs text-[#dc2626] font-semibold uppercase tracking-widest mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] animate-pulse" />
                  The Craft &amp; Story
                </span>

                {/* Giant Bold Headline with Glowing Dot */}
                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-[#0f172a] leading-none flex items-baseline">
                  <span>ABOUT</span>
                  <span className="inline-block w-3 h-3 sm:w-5 sm:h-5 md:w-7 md:h-7 bg-[#dc2626] ml-2 sm:ml-4 rounded-xs shadow-[0_0_24px_rgba(220,38,38,0.7)]" />
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 font-light max-w-2xl leading-relaxed mt-6">
                  Full-Stack Web Developer and Frontend Specialist based in Karachi, Pakistan, currently working at Techmire Solutions. Crafting high-performance digital experiences where aesthetic refinement meets bulletproof architecture.
                </p>
              </Reveal>
            </div>

            {/* Quick Metrics Badges */}
            <div className="flex items-center gap-3 sm:gap-4 self-start lg:self-end">
              <div className="px-4 py-2.5 rounded-2xl bg-[#f8fafc] border border-slate-200 flex items-center gap-3 shadow-sm">
                <span className="text-2xl sm:text-3xl font-mono font-black text-[#dc2626]">8+</span>
                <span className="text-[11px] font-mono uppercase text-slate-500 font-bold leading-tight">
                  Years of<br />Experience
                </span>
              </div>
              <div className="px-4 py-2.5 rounded-2xl bg-[#f8fafc] border border-slate-200 flex items-center gap-3 shadow-sm">
                <span className="text-2xl sm:text-3xl font-mono font-black text-[#0f172a]">37+</span>
                <span className="text-[11px] font-mono uppercase text-slate-500 font-bold leading-tight">
                  Projects<br />Shipped
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: BIOGRAPHY & PHILOSOPHY (Editorial Bento) ── */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-16 border-b border-slate-200 select-none">
        <span className="cross-mark text-slate-300" style={{ left: "24px", top: "24px" }}>+</span>
        <span className="cross-mark text-slate-300" style={{ right: "24px", top: "24px" }}>+</span>

        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Portrait Showcase Card */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative rounded-3xl bg-[#f8fafc] border border-slate-200 p-5 sm:p-7 overflow-hidden shadow-xl">
                  {/* Top glare line */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#dc2626]/50 to-transparent" />

                  {/* Status header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Available for projects
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-bold">
                      {site.location || "Karachi, PK"}
                    </span>
                  </div>

                  {/* Portrait photo */}
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 mb-5 shadow-inner">
                    <Image
                      src={site.heroImage || "/hero-img.png"}
                      alt={site.name}
                      fill
                      priority
                      loading="eager"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 400px"
                      className="object-cover object-top filter contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Name caption & social links */}
                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <h3 className="text-lg font-bold text-[#0f172a] leading-tight">{site.name}</h3>
                      <p className="text-xs text-slate-500 font-light mt-0.5">{site.role}</p>
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
                          className="w-8 h-8 rounded-full bg-white hover:bg-[#dc2626] hover:text-white border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-700 transition-all shadow-2xs"
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
                  <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-[#dc2626] block mb-3">
                    Philosophy &amp; Background
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#0f172a] leading-tight mb-6">
                    Engineering where <span className="text-[#dc2626]">function</span> blends with <span className="text-[#1e3a8a]">emotion</span>.
                  </h2>
                </Reveal>

                <Reveal delay={0.15}>
                  <div className="space-y-4 text-xs sm:text-sm md:text-base text-slate-600 font-light leading-relaxed mb-8">
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
                    <div className="p-3.5 rounded-xl bg-[#f8fafc] border border-slate-200 shadow-2xs">
                      <span className="text-xs font-mono font-bold text-[#dc2626] block mb-1">01 / TECH</span>
                      <span className="text-xs font-bold text-[#0f172a]">Next.js &amp; React 19</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#f8fafc] border border-slate-200 shadow-2xs">
                      <span className="text-xs font-mono font-bold text-[#dc2626] block mb-1">02 / CMS</span>
                      <span className="text-xs font-bold text-[#0f172a]">Zero-Bloat WordPress</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#f8fafc] border border-slate-200 col-span-2 sm:col-span-1 shadow-2xs">
                      <span className="text-xs font-mono font-bold text-[#dc2626] block mb-1">03 / DESIGN</span>
                      <span className="text-xs font-bold text-[#0f172a]">Figma to Code 1:1</span>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Action Buttons */}
              <Reveal delay={0.25}>
                <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-200">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-red-600/30 hover:scale-105"
                  >
                    Start a Project ↗
                  </Link>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0f172a] border border-slate-200 font-bold text-xs uppercase tracking-wider transition-all"
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
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-16 border-b border-slate-200 select-none">
        <span className="cross-mark text-slate-300" style={{ left: "24px", top: "24px" }}>+</span>
        <span className="cross-mark text-slate-300" style={{ right: "24px", top: "24px" }}>+</span>

        <div className="max-w-[1500px] mx-auto">
          <div className="mb-10 sm:mb-16 max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-200 bg-red-50 text-xs text-[#dc2626] font-semibold uppercase tracking-widest mb-3 sm:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] animate-pulse" />
                Arsenal
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#0f172a] leading-tight mb-3">
                Skills &amp; <span className="text-[#dc2626]">Technologies</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base font-light text-slate-600 leading-relaxed">
                A focused selection of modern tools, libraries, and languages utilized daily to ship production-ready applications.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {TOOLKIT_CATEGORIES.map((cat, idx) => (
              <Reveal key={cat.title} delay={idx * 0.08}>
                <div className="h-full bg-[#f8fafc] border border-slate-200 hover:border-[#dc2626]/60 hover:bg-white rounded-xl sm:rounded-3xl p-4 sm:p-7 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-xl">
                  {/* Top subtle glare line */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent group-hover:via-[#dc2626]/50 transition-colors" />

                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-5">
                      <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-red-50 border border-red-200 text-[#dc2626] flex items-center justify-center group-hover:scale-105 transition-all">
                        {cat.icon}
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider text-[#1e3a8a] bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full uppercase">
                        {cat.num}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-xl font-bold uppercase tracking-tight text-[#0f172a] mb-1.5 sm:mb-2 group-hover:text-[#dc2626] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 font-light leading-relaxed mb-4 sm:mb-6">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-slate-200 flex flex-wrap gap-1 sm:gap-1.5">
                    {cat.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[9px] sm:text-[10px] font-mono px-1.5 sm:px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 shadow-2xs"
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
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-16 border-b border-slate-200 select-none">
        <span className="cross-mark text-slate-300" style={{ left: "24px", top: "24px" }}>+</span>
        <span className="cross-mark text-slate-300" style={{ right: "24px", top: "24px" }}>+</span>

        <div className="max-w-[1500px] mx-auto">
          <div className="mb-10 sm:mb-16 max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-200 bg-red-50 text-xs text-[#dc2626] font-semibold uppercase tracking-widest mb-3 sm:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] animate-pulse" />
                Track Record
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#0f172a] leading-tight mb-3">
                Experience &amp; <span className="text-[#dc2626]">Milestones</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base font-light text-slate-600 leading-relaxed">
                A chronology of roles, shipped platforms, and architectural contributions across 8+ years.
              </p>
            </Reveal>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {TIMELINE_EXPERIENCES.map((exp, idx) => (
              <Reveal key={exp.period} delay={idx * 0.1}>
                <div className="bg-[#f8fafc] border border-slate-200 hover:border-[#dc2626]/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-300 relative overflow-hidden group shadow-sm hover:shadow-xl">
                  {/* Top glare line */}
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-slate-200 to-transparent group-hover:via-[#dc2626]/60 transition-colors" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                    {/* Left Meta Column: Period, Status, Company, Location */}
                    <div className="lg:col-span-4 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center gap-2.5 mb-3 flex-wrap">
                          <span className="text-xs sm:text-sm font-mono font-bold text-[#dc2626] bg-red-50 border border-red-200 px-3 py-1 rounded-full">
                            {exp.period}
                          </span>
                          <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border uppercase tracking-wider font-bold ${
                            exp.status === "Active Role"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                              : "bg-slate-100 text-slate-600 border-slate-200"
                          }`}>
                            {exp.status === "Active Role" ? "● Active Role" : "✓ Shipped"}
                          </span>
                        </div>

                        <h4 className="text-base sm:text-lg font-bold text-[#0f172a] uppercase tracking-tight">
                          {exp.company}
                        </h4>
                        <p className="text-xs text-slate-500 font-mono mt-0.5">
                          {exp.location}
                        </p>
                      </div>

                      {/* Tech stack tags */}
                      <div className="mt-4 sm:mt-6 pt-4 border-t border-slate-200 flex flex-wrap gap-1.5">
                        {exp.technologies.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600 font-medium shadow-2xs"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Narrative Column: Role Title, Description & Milestones */}
                    <div className="lg:col-span-8 lg:border-l lg:border-slate-200 lg:pl-8">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#0f172a] mb-2 group-hover:text-[#dc2626] transition-colors leading-tight">
                        {exp.role}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-5">
                        {exp.desc}
                      </p>

                      <div className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-2xs">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#1e3a8a] block mb-2.5">
                          Key Impact &amp; Deliverables
                        </span>
                        <ul className="space-y-2">
                          {exp.achievements.map((ach, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-normal">
                              <span className="text-[#dc2626] font-bold text-xs mt-0.5 shrink-0">✦</span>
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CORE VALUES & WORK ETHIC ── */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-16 border-b border-slate-200 select-none">
        <div className="max-w-[1500px] mx-auto">
          <div className="mb-10 sm:mb-16 text-center max-w-3xl mx-auto">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-200 bg-red-50 text-xs text-[#dc2626] font-semibold uppercase tracking-widest mb-3 sm:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] animate-pulse" />
                Foundations
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#0f172a] leading-tight mb-3">
                Core Engineering <span className="text-[#dc2626]">Principles</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base font-light text-slate-600 leading-relaxed max-w-xl mx-auto">
                The non-negotiable standards that guide every line of code, component design, and client engagement.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {CORE_VALUES.map((val, idx) => (
              <Reveal key={val.num} delay={idx * 0.08}>
                <div className="h-full p-4 sm:p-7 rounded-xl sm:rounded-2xl bg-[#f8fafc] border border-slate-200 hover:border-[#dc2626]/50 transition-all flex flex-col justify-between shadow-sm hover:shadow-md">
                  <div>
                    <span className="text-xl sm:text-3xl font-mono font-black text-[#dc2626] block mb-2 sm:mb-3">
                      {val.num}
                    </span>
                    <h4 className="text-xs sm:text-lg font-bold uppercase text-[#0f172a] mb-1.5 sm:mb-2 leading-snug">
                      {val.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-600 font-light leading-relaxed">
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
            <div className="relative rounded-3xl p-8 sm:p-14 bg-[#f8fafc] border-2 border-red-200 overflow-hidden shadow-xl text-center">
              {/* Decorative radial blur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-red-500/10 blur-[120px] pointer-events-none" />

              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-200 bg-red-50 text-xs text-[#dc2626] font-bold uppercase tracking-widest mb-4">
                ✦ Let&rsquo;s Connect
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0f172a] max-w-3xl mx-auto mb-4 leading-tight">
                READY TO BUILD SOMETHING REMARKABLE?
              </h2>

              <p className="text-xs sm:text-base text-slate-600 font-light max-w-xl mx-auto mb-8 leading-relaxed">
                Whether you have an upcoming project, need frontend horsepower on retainer, or want a high-conversion WordPress rebuild, let&rsquo;s talk.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-red-600/30 hover:scale-105"
                >
                  Start a Conversation ↗
                </Link>
                <Link
                  href="/projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-[#0f172a] border border-slate-200 text-xs font-bold uppercase tracking-widest transition-all shadow-sm"
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

