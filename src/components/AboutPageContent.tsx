"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import type { SiteData } from "@/lib/siteData";

interface AboutPageContentProps {
  site: SiteData;
}

/* ─── Geometric Brutalist SVG Icons with #ff4a00 Accents ─── */
function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 text-black">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" stroke="#ff4a00" strokeWidth="2.5" />
    </svg>
  );
}

function CmsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 text-black">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <circle cx="8" cy="10" r="1.5" fill="#ff4a00" />
      <circle cx="16" cy="10" r="1.5" fill="#ff4a00" />
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 text-black">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" stroke="#ff4a00" strokeWidth="2.5" />
    </svg>
  );
}

function SpeedIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 text-black">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="#ff4a00" stroke="#ff4a00" />
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
    tools: ["React 19", "Next.js 16", "Tailwind CSS", "TypeScript", "JavaScript (ES6+)", "Framer Motion"],
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
    title: "Tools & Deployment",
    tag: "DEVOPS",
    desc: "Automating deployment pipelines, version control standards, and performance profiling for optimal Core Web Vitals.",
    icon: <PaletteIcon />,
    tools: ["Git & GitHub", "Vercel", "Vite", "Postman", "Google Lighthouse", "Figma", "VS Code"],
  },
];

const TIMELINE_EXPERIENCES = [
  {
    period: "2025 — Present",
    role: "Full-Stack Web Developer / Frontend Specialist",
    company: "Techmire Solutions",
    location: "Karachi, Pakistan • On-site",
    status: "Active Role",
    desc: "Architecting and maintaining full-stack client web applications, custom e-commerce stores, and high-performance interactive interfaces.",
    achievements: [
      "Engineered and deployed scalable React and Next.js frontends with Tailwind CSS, ensuring 100% responsiveness and sub-second load times",
      "Architected backend microservices and RESTful API endpoints using Node.js, Express.js, Django, and PHP with secure database workflows",
      "Delivered custom Shopify storefronts and bespoke WordPress/WooCommerce solutions for international corporate clients",
      "Spearheaded performance tuning sprints resulting in consistent 95+ Google Lighthouse scores across production releases",
    ],
    technologies: ["React", "Next.js", "Node.js", "Express.js", "Django", "PHP", "WordPress", "Shopify", "Tailwind CSS", "PostgreSQL"],
  },
  {
    period: "2024 — 2025",
    role: "Full-Stack Web Applications Engineer",
    company: "Flagship Production Deployments",
    location: "Client Projects • Remote",
    status: "Shipped",
    desc: "Lead full-stack architecture and engineering for major client web applications across creative studios, logistics management, and e-commerce.",
    achievements: [
      "CGPlux Studios: Built cinematic showcase web application using Next.js, fluid GSAP scroll animations, and headless Sanity CMS",
      "Tawakkal & Echo Pride: Developed robust enterprise full-stack web platforms with optimized deployment workflows and interactive user experiences",
      "Al-Hadi Logistics: Engineered specialized logistics operations tracking web app with secure backend services and transport routing",
    ],
    technologies: ["Next.js", "React", "GSAP", "Sanity CMS", "Django", "Python", "Node.js", "Tailwind CSS"],
  },
  {
    period: "2023 — 2024",
    role: "Utility & Assessment Tooling Developer",
    company: "Custom Tooling & Assessment Projects",
    location: "Karachi, Pakistan • Open Solutions",
    status: "Delivered",
    desc: "Engineering custom utility tools, WordPress OOP plugins, and serverless document generators for production workflows.",
    achievements: [
      "Site Toolkit WordPress Plugin: Engineered modular OOP PHP plugin with custom hooks, security hardening, and admin dashboard tools",
      "Dynamic Resume Builder: Built live-preview React application with headless Node.js/Puppeteer service for vector A4 PDF export",
      "E-Commerce Tailoring: Developed custom Shopify storefronts for Kynetic Wear & Ecotexinc with optimized checkout funnels",
    ],
    technologies: ["PHP (OOP)", "Puppeteer", "React", "Node.js", "WordPress Plugin API", "Tailwind CSS"],
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
    <div className="bg-white text-black min-h-screen pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 select-none overflow-x-hidden selection:bg-[#ff4a00] selection:text-white">
      {/* ── SECTION 1: EDITORIAL BRUTALIST HERO HEADER ── */}
      <section className="relative pb-12 sm:pb-16 md:pb-20 px-5 sm:px-8 md:px-12 lg:px-16 border-b border-black/10">
        <div className="max-w-[1600px] mx-auto">
          {/* Breadcrumb + Status Eyebrow */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 text-xs font-['Space_Grotesk',sans-serif] font-bold text-neutral-500 uppercase tracking-wider">
              <Link href="/" className="hover:text-[#ff4a00] transition-colors">
                HOME
              </Link>
              <span>/</span>
              <span className="text-black">ABOUT</span>
            </div>

            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f8f8f9] border border-black/10 text-xs font-['Space_Grotesk',sans-serif] font-bold text-black uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#ff4a00] animate-pulse" />
              FULL-STACK DEVELOPER &amp; FRONTEND SPECIALIST
            </span>
          </div>

          {/* Monumental Headline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <h1 className="font-['Anton',Impact,'Arial_Black',sans-serif] text-[clamp(3.5rem,9.5vw,9.5rem)] leading-[0.88] tracking-[-0.02em] uppercase text-black">
                  THE CRAFT.<br />
                  THE VISION.<br />
                  <span className="text-[#ff4a00]">THE CODE.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="font-['Space_Grotesk',sans-serif] text-sm sm:text-base md:text-lg font-medium text-neutral-700 max-w-2xl leading-relaxed mt-6 sm:mt-8">
                  Full-Stack Web Developer and Frontend Specialist based in Karachi, Pakistan, currently engineering high-performance web applications at <span className="text-black font-bold">Techmire Solutions</span>. Bridging meticulous design systems with robust, scalable software architecture.
                </p>
              </Reveal>
            </div>

            {/* Quick Metrics Cards */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-4 self-start lg:self-end w-full">
              <div className="flex-1 p-5 rounded-2xl bg-[#f8f8f9] border border-black/10 flex items-center justify-between shadow-sm">
                <div>
                  <span className="font-['Space_Grotesk',sans-serif] text-[11px] font-bold uppercase tracking-wider text-neutral-500 block mb-1">
                    Projects Delivered
                  </span>
                  <span className="font-['Anton',Impact,sans-serif] text-4xl text-black">
                    40+
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-bold text-sm">
                  🚀
                </div>
              </div>

              <div className="flex-1 p-5 rounded-2xl bg-[#f8f8f9] border border-black/10 flex items-center justify-between shadow-sm">
                <div>
                  <span className="font-['Space_Grotesk',sans-serif] text-[11px] font-bold uppercase tracking-wider text-neutral-500 block mb-1">
                    Happy Clients
                  </span>
                  <span className="font-['Anton',Impact,sans-serif] text-4xl text-[#ff4a00]">
                    25+
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#ff4a00] text-white flex items-center justify-center font-bold text-sm">
                  ★
                </div>
              </div>

              <div className="flex-1 p-5 rounded-2xl bg-[#f8f8f9] border border-black/10 flex items-center justify-between shadow-sm">
                <div>
                  <span className="font-['Space_Grotesk',sans-serif] text-[11px] font-bold uppercase tracking-wider text-neutral-500 block mb-1">
                    Experience
                  </span>
                  <span className="font-['Anton',Impact,sans-serif] text-4xl text-black">
                    1+ <span className="text-sm font-['Space_Grotesk'] text-neutral-500">YEARS</span>
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-bold text-sm">
                  ⚡
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: BIOGRAPHY & PHILOSOPHY (Editorial Bento) ── */}
      <section className="relative py-16 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-16 border-b border-black/10">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left Column: Portrait Showcase Card */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative rounded-3xl bg-[#f8f8f9] border border-black/10 p-5 sm:p-7 shadow-xl overflow-hidden group">
                  {/* Status header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-2 text-xs font-['Space_Grotesk',sans-serif] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Available for projects
                    </span>
                    <span className="text-xs font-mono text-neutral-500 font-bold">
                      {site.location || "Karachi, PK"}
                    </span>
                  </div>

                  {/* Portrait photo */}
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-black/10 bg-white mb-5 shadow-inner">
                    <Image
                      src={site.heroImage || "/hero-img.png"}
                      alt={site.name}
                      fill
                      priority
                      loading="eager"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                      className="object-contain object-bottom filter contrast-105 brightness-100 group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>

                  {/* Name caption & social links */}
                  <div className="flex items-center justify-between pt-2 border-t border-black/10">
                    <div>
                      <h3 className="font-['Anton',Impact,sans-serif] text-2xl uppercase tracking-tight text-black leading-tight">
                        {site.name}
                      </h3>
                      <p className="font-mono text-xs text-[#ff4a00] font-bold mt-0.5">
                        {site.company || "Techmire Solutions"}
                      </p>
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
                          className="w-8 h-8 rounded-full bg-white hover:bg-[#ff4a00] hover:text-white border border-black/15 flex items-center justify-center text-xs font-bold text-black transition-all shadow-sm"
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
                  <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold tracking-[0.2em] uppercase text-[#ff4a00] block mb-3">
                    PHILOSOPHY &amp; BACKGROUND
                  </span>
                  <h2 className="font-['Anton',Impact,sans-serif] text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-black leading-[1] mb-6">
                    ENGINEERING WHERE <span className="text-[#ff4a00]">FUNCTION</span> BLENDS WITH <span className="text-black underline decoration-[#ff4a00] decoration-wavy decoration-2">PURPOSE</span>.
                  </h2>
                </Reveal>

                <Reveal delay={0.15}>
                  <div className="space-y-4 font-['Space_Grotesk',sans-serif] text-sm sm:text-base text-neutral-700 font-normal leading-relaxed mb-8">
                    <p>
                      Hello, I&rsquo;m {firstName}. As a dedicated Full-Stack Web Developer and Frontend Specialist at <strong className="text-black">Techmire Solutions</strong> in Karachi, Pakistan, I specialize in crafting ultra-responsive web applications, modern headless e-commerce storefronts, and robust backend architectures.
                    </p>
                    <p>
                      I believe the web should be lightning fast, uncompromisingly bold, and memorable. Rather than relying on heavy bloated themes or sluggish visual page builders, every solution I build is engineered from the ground up with clean, maintainable, production-ready code.
                    </p>
                    <p>
                      Whether building cinematic brand portfolios, complex logistics management portals, or high-converting custom Shopify storefronts, I ensure sub-second page loads, flawless mobile responsiveness, and 95+ Google Lighthouse scores across the board.
                    </p>
                  </div>
                </Reveal>

                {/* Key Specialization Badges */}
                <Reveal delay={0.2}>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                    <div className="p-4 rounded-xl bg-[#f8f8f9] border border-black/10 shadow-sm">
                      <span className="font-mono text-[11px] font-bold text-[#ff4a00] block mb-1">01 / FRONTEND</span>
                      <span className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm font-bold text-black">React 19 &amp; Next.js 16</span>
                    </div>
                    <div className="p-4 rounded-xl bg-[#f8f8f9] border border-black/10 shadow-sm">
                      <span className="font-mono text-[11px] font-bold text-[#ff4a00] block mb-1">02 / E-COMMERCE</span>
                      <span className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm font-bold text-black">Shopify &amp; WordPress</span>
                    </div>
                    <div className="p-4 rounded-xl bg-[#f8f8f9] border border-black/10 col-span-2 sm:col-span-1 shadow-sm">
                      <span className="font-mono text-[11px] font-bold text-[#ff4a00] block mb-1">03 / BACKEND</span>
                      <span className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm font-bold text-black">Node, Django &amp; APIs</span>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Action Buttons */}
              <Reveal delay={0.25}>
                <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-black/10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#ff4a00] hover:bg-[#e04000] text-white font-['Space_Grotesk',sans-serif] font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg hover:scale-[1.02] cursor-pointer"
                  >
                    <span>START A PROJECT</span>
                    <span>↗</span>
                  </Link>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#f8f8f9] hover:bg-neutral-100 text-black border border-black/15 font-['Space_Grotesk',sans-serif] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-sm"
                  >
                    <span>DIRECT EMAIL</span>
                    <span>✉</span>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: SKILLS & TOOLKIT (Bento Grid) ── */}
      <section className="relative py-16 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-16 border-b border-black/10">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-10 sm:mb-16 max-w-2xl">
            <Reveal>
              <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold tracking-[0.2em] uppercase text-[#ff4a00] block mb-2">
                TECHNICAL ARSENAL
              </span>
              <h2 className="font-['Anton',Impact,sans-serif] text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-black leading-[1] mb-3">
                SKILLS &amp; <span className="text-[#ff4a00]">TECHNOLOGIES</span>
              </h2>
              <p className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed">
                A focused selection of modern tools, libraries, and languages utilized daily to ship production-ready applications.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {TOOLKIT_CATEGORIES.map((cat, idx) => (
              <Reveal key={cat.title} delay={idx * 0.08}>
                <div className="h-full bg-[#f8f8f9] border border-black/10 hover:border-[#ff4a00] hover:bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 shadow-sm hover:shadow-xl">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-white border border-black/10 flex items-center justify-center group-hover:scale-105 transition-all shadow-sm">
                        {cat.icon}
                      </div>
                      <span className="font-mono text-xs font-bold tracking-wider text-[#ff4a00] bg-orange-50 border border-orange-200 px-2.5 py-0.5 rounded-full uppercase">
                        {cat.num}
                      </span>
                    </div>

                    <h3 className="font-['Anton',Impact,sans-serif] text-xl sm:text-2xl uppercase tracking-tight text-black mb-2 group-hover:text-[#ff4a00] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="font-['Space_Grotesk',sans-serif] text-xs text-neutral-600 leading-relaxed mb-6">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/10 flex flex-wrap gap-1.5">
                    {cat.tools.map((tool) => (
                      <span
                        key={tool}
                        className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white border border-black/10 text-neutral-800 font-semibold shadow-2xs group-hover:border-black/20"
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
      <section className="relative py-16 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-16 border-b border-black/10">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-10 sm:mb-16 max-w-2xl">
            <Reveal>
              <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold tracking-[0.2em] uppercase text-[#ff4a00] block mb-2">
                TRACK RECORD &amp; EXPERIENCE
              </span>
              <h2 className="font-['Anton',Impact,sans-serif] text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-black leading-[1] mb-3">
                EXPERIENCE &amp; <span className="text-[#ff4a00]">MILESTONES</span>
              </h2>
              <p className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed">
                A chronology of real-world production engineering, shipped client platforms, and architectural contributions.
              </p>
            </Reveal>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {TIMELINE_EXPERIENCES.map((exp, idx) => (
              <Reveal key={exp.period} delay={idx * 0.1}>
                <div className="bg-[#f8f8f9] border border-black/10 hover:border-[#ff4a00] hover:bg-white rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-300 shadow-sm hover:shadow-xl group">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                    {/* Left Meta Column: Period, Status, Company, Location */}
                    <div className="lg:col-span-4 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center gap-2.5 mb-3 flex-wrap">
                          <span className="text-xs font-mono font-bold text-white bg-black px-3 py-1 rounded-full">
                            {exp.period}
                          </span>
                          <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border uppercase tracking-wider font-bold ${
                            exp.status === "Active Role"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                              : "bg-white text-neutral-600 border-black/10"
                          }`}>
                            {exp.status === "Active Role" ? "● Active Role" : "✓ Shipped"}
                          </span>
                        </div>

                        <h4 className="font-['Anton',Impact,sans-serif] text-2xl uppercase tracking-tight text-black">
                          {exp.company}
                        </h4>
                        <p className="font-mono text-xs text-neutral-500 mt-1">
                          {exp.location}
                        </p>
                      </div>

                      {/* Tech stack tags */}
                      <div className="mt-6 pt-4 border-t border-black/10 flex flex-wrap gap-1.5">
                        {exp.technologies.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-white border border-black/10 text-neutral-700 font-semibold shadow-2xs"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Narrative Column: Role Title, Description & Milestones */}
                    <div className="lg:col-span-8 lg:border-l border-black/10 lg:pl-8">
                      <h3 className="font-['Anton',Impact,sans-serif] text-2xl sm:text-3xl uppercase tracking-tight text-black mb-2 group-hover:text-[#ff4a00] transition-colors leading-tight">
                        {exp.role}
                      </h3>

                      <p className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5">
                        {exp.desc}
                      </p>

                      <div className="bg-white rounded-2xl border border-black/10 p-5 shadow-sm">
                        <span className="font-['Space_Grotesk',sans-serif] text-[11px] font-bold uppercase tracking-widest text-[#ff4a00] block mb-3">
                          KEY DELIVERABLES &amp; IMPACT
                        </span>
                        <ul className="space-y-2.5">
                          {exp.achievements.map((ach, i) => (
                            <li key={i} className="flex items-start gap-2.5 font-['Space_Grotesk',sans-serif] text-xs sm:text-sm text-neutral-800">
                              <span className="text-[#ff4a00] font-bold text-sm mt-0.5 shrink-0">✦</span>
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
      <section className="relative py-16 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-16 border-b border-black/10">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-10 sm:mb-16 text-center max-w-3xl mx-auto">
            <Reveal>
              <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold tracking-[0.2em] uppercase text-[#ff4a00] block mb-2">
                FOUNDATIONS
              </span>
              <h2 className="font-['Anton',Impact,sans-serif] text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-black leading-[1] mb-3">
                CORE ENGINEERING <span className="text-[#ff4a00]">PRINCIPLES</span>
              </h2>
              <p className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed max-w-xl mx-auto">
                The non-negotiable standards that guide every line of code, component hierarchy, and client engagement.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {CORE_VALUES.map((val, idx) => (
              <Reveal key={val.num} delay={idx * 0.08}>
                <div className="h-full p-6 sm:p-8 rounded-2xl bg-[#f8f8f9] border border-black/10 hover:border-[#ff4a00] hover:bg-white transition-all flex flex-col justify-between shadow-sm hover:shadow-xl">
                  <div>
                    <span className="font-['Anton',Impact,sans-serif] text-4xl text-[#ff4a00] block mb-3">
                      {val.num}
                    </span>
                    <h4 className="font-['Anton',Impact,sans-serif] text-xl uppercase text-black mb-2 leading-tight">
                      {val.title}
                    </h4>
                    <p className="font-['Space_Grotesk',sans-serif] text-xs text-neutral-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: HIGH-IMPACT BRUTALIST CTA BANNER ── */}
      <section className="pt-16 sm:pt-24 pb-8 sm:pb-12 px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <Reveal>
            <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 bg-[#f8f8f9] border border-black/10 overflow-hidden shadow-xl text-center">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/10 text-xs font-['Space_Grotesk',sans-serif] font-bold text-black uppercase tracking-wider mb-5">
                <span className="w-2 h-2 rounded-full bg-[#ff4a00] animate-pulse" />
                LET&rsquo;S COLLABORATE
              </span>

              <h2 className="font-['Anton',Impact,'Arial_Black',sans-serif] text-4xl sm:text-6xl lg:text-7xl uppercase tracking-[-0.02em] text-black max-w-4xl mx-auto mb-5 leading-[0.95]">
                READY TO BUILD SOMETHING <span className="text-[#ff4a00]">REMARKABLE?</span>
              </h2>

              <p className="font-['Space_Grotesk',sans-serif] text-xs sm:text-base text-neutral-600 max-w-xl mx-auto mb-8 leading-relaxed">
                Whether you have an upcoming project, need full-stack engineering horsepower on retainer, or want a high-performance Next.js application, let&rsquo;s talk.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#ff4a00] hover:bg-[#e04000] text-white font-['Space_Grotesk',sans-serif] font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg hover:scale-[1.02] cursor-pointer"
                >
                  <span>START A CONVERSATION</span>
                  <span>↗</span>
                </Link>
                <Link
                  href="/projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white hover:bg-neutral-50 text-black border border-black/15 font-['Space_Grotesk',sans-serif] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-sm"
                >
                  <span>EXPLORE SHIPPED WORKS</span>
                  <span>↗</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
