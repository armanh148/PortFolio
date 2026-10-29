"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";
import type { SiteData } from "@/lib/siteData";

interface ServicesPageContentProps {
  site: SiteData;
}

/* ─── Portfolio Neon Geometric SVG Icons (Theme-matched) ─── */
function FrontendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" stroke="#60a5fa" />
    </svg>
  );
}

function WordpressIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <circle cx="8" cy="10" r="1.5" fill="#60a5fa" />
      <circle cx="16" cy="10" r="1.5" fill="#60a5fa" />
    </svg>
  );
}

function DesignIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" stroke="#60a5fa" />
    </svg>
  );
}

function PerformanceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function MotionIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 3v18" />
      <path d="M3 12h18" />
      <circle cx="12" cy="12" r="7" stroke="#60a5fa" />
      <circle cx="12" cy="12" r="3" fill="#2f66f6" />
    </svg>
  );
}

function StrategyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" stroke="#60a5fa" />
      <circle cx="12" cy="12" r="2" fill="#2f66f6" />
    </svg>
  );
}

interface ServiceItem {
  id: string;
  num: string;
  categoryTag: string;
  filterCat: string;
  title: string;
  description: string;
  deliverables: string[];
  skills: string[];
  timeline: string;
  icon: React.ReactNode;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "frontend-engineering",
    num: "01",
    categoryTag: "ENGINEERING",
    filterCat: "Frontend",
    title: "Next.js & Frontend Engineering",
    description:
      "Modern React 19 and Next.js 16 web applications engineered for extreme speed, search ranking, and modular component maintainability. Type-safe, scalable, and responsive across every device.",
    deliverables: [
      "Next.js 16 App Router architecture & Server Components",
      "Type-safe TypeScript codebase with clean modular components",
      "Tailwind CSS v4 styling & responsive cross-device layout",
      "Fluid Framer Motion micro-interactions & gesture animations",
      "REST & GraphQL API integrations with optimistic state caching",
    ],
    skills: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Turbopack"],
    timeline: "2 – 4 Weeks",
    icon: <FrontendIcon />,
  },
  {
    id: "wordpress-craft",
    num: "02",
    categoryTag: "CMS ARCHITECTURE",
    filterCat: "WordPress",
    title: "WordPress Craft & Headless CMS",
    description:
      "Custom theme engineering, headless GraphQL architectures, custom Gutenberg blocks, and high-conversion WooCommerce portals with zero third-party page-builder bloat.",
    deliverables: [
      "100% custom-coded WordPress theme (no heavy page builders)",
      "Bespoke Gutenberg blocks with native React editor controls",
      "ACF Pro flexible content layout architecture",
      "Headless WordPress setup with Next.js frontend & WPGraphQL",
      "Speed optimization with 90+ PageSpeed guarantee",
    ],
    skills: ["Custom Themes", "Headless WP", "Gutenberg", "ACF Pro", "WooCommerce", "REST API"],
    timeline: "2 – 3 Weeks",
    icon: <WordpressIcon />,
  },
  {
    id: "design-systems",
    num: "03",
    categoryTag: "DESIGN SYSTEMS",
    filterCat: "UI/UX",
    title: "UI/UX & Design Systems",
    description:
      "Transforming complex workflows into intuitive, clean Figma prototypes, standardized design tokens, and pixel-perfect living component libraries that scale gracefully.",
    deliverables: [
      "Pixel-perfect 1:1 translation from Figma to production code",
      "Scalable design token system with dark & light theme modes",
      "Accessible component library following WCAG 2.1 standards",
      "Interactive states, skeleton loaders, and micro-motion prototypes",
      "Full responsive breakpoint audits for mobile, tablet, and ultra-wide",
    ],
    skills: ["Figma Tokens", "Tailwind CSS", "Component Kits", "User Journey", "Design Audits"],
    timeline: "1 – 3 Weeks",
    icon: <DesignIcon />,
  },
  {
    id: "performance-seo",
    num: "04",
    categoryTag: "OPTIMIZATION",
    filterCat: "Speed & SEO",
    title: "Performance & Core Web Vitals",
    description:
      "Benchmarking Core Web Vitals, code-splitting, payload trimming, and modern asset caching hierarchies to turn sluggish websites into lightning-fast digital experiences.",
    deliverables: [
      "In-depth performance & Core Web Vitals diagnostic audit",
      "JavaScript bundle splitting and tree-shaking dead code",
      "Modern WebP/AVIF image pipeline & lazy-loading strategy",
      "Technical SEO markup, JSON-LD schema, and OpenGraph metadata",
      "Guaranteed 90+ score on Google Lighthouse mobile & desktop",
    ],
    skills: ["100 Lighthouse", "Core Web Vitals", "Edge Caching", "Image Tuning", "SEO Audits"],
    timeline: "3 – 7 Days",
    icon: <PerformanceIcon />,
  },
  {
    id: "motion-interaction",
    num: "05",
    categoryTag: "INTERACTION",
    filterCat: "Frontend",
    title: "Creative Motion & Interaction",
    description:
      "Designing silky micro-interactions, scroll-driven parallax, and physics-based motion with Framer Motion and Lenis smooth scrolling that keep users engaged.",
    deliverables: [
      "Physics-based gesture animations & page transitions",
      "Smooth Lenis inertia scroll integration",
      "Scroll-driven progress indicators & reveal triggers",
      "WebGL & canvas micro-interactions where appropriate",
      "Hardware-accelerated transforms for 60fps mobile fluidity",
    ],
    skills: ["Framer Motion", "Lenis Smooth Scroll", "Scroll Parallax", "Micro-Interactions"],
    timeline: "1 – 2 Weeks",
    icon: <MotionIcon />,
  },
  {
    id: "strategy-qa",
    num: "06",
    categoryTag: "DISCOVERY",
    filterCat: "UI/UX",
    title: "Strategy & Technical QA",
    description:
      "Bridging business goals with high-end engineering, rigorous cross-browser testing, accessibility (a11y) compliance, and automated deployment pipelines.",
    deliverables: [
      "Technical architecture documentation & roadmap planning",
      "Automated CI/CD deployment pipelines on Vercel or Cloudflare",
      "Cross-browser compatibility testing (Safari, Chrome, Firefox, Edge)",
      "Accessibility (WCAG 2.1 AA) evaluation & keyboard navigation",
      "Client CMS training video walkthrough & handoff package",
    ],
    skills: ["Architecture", "Accessibility a11y", "CI/CD Setup", "Security Audits"],
    timeline: "Ongoing Sprint",
    icon: <StrategyIcon />,
  },
];

const CATEGORIES = ["All", "Frontend", "WordPress", "UI/UX", "Speed & SEO"];

const ENGAGEMENT_MODELS = [
  {
    num: "01",
    tag: "FIXED SCOPE",
    title: "Project-Based Sprint",
    badge: "MOST POPULAR",
    badgeColor: "text-[#2f66f6] border-[#2f66f6]/30 bg-[#2f66f6]/10",
    desc: "Fixed timeline and milestones for new website builds, redesigns, or specific feature launches.",
    features: [
      "Clearly defined scope & milestones",
      "Direct communication via Slack or email",
      "End-to-end testing and performance tuning",
      "Full source code ownership & deployment",
      "30 days post-launch warranty & support",
    ],
    turnaround: "2 – 4 Weeks",
  },
  {
    num: "02",
    tag: "MONTHLY BANDWIDTH",
    title: "Dedicated Retainer",
    badge: "HIGH DEMAND",
    badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    desc: "Reliable weekly frontend & WordPress development horsepower for growing startups and creative agencies.",
    features: [
      "Guaranteed weekly development hours",
      "Priority turnarounds & immediate sprint access",
      "Continuous feature rollouts & code maintenance",
      "Collaborative pull requests & code reviews",
      "Flexible arrangement with 30-day notice",
    ],
    turnaround: "Monthly Retainer",
  },
  {
    num: "03",
    tag: "RAPID DIAGNOSTIC",
    title: "Speed & Performance Audit",
    badge: "48H SPRINT",
    badgeColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    desc: "Rapid diagnostic sprint to identify bottlenecks, boost Lighthouse scores, and recover organic SEO ranking.",
    features: [
      "Complete Core Web Vitals diagnostic breakdown",
      "Direct code-level optimizations implemented",
      "Image, font, and JavaScript bundle trimming",
      "Before & after Google PageSpeed verification",
      "Actionable roadmap report for future scale",
    ],
    turnaround: "48 – 72 Hours",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    tag: "DISCOVERY",
    title: "Discovery & Strategy",
    desc: "Aligning on project objectives, user journeys, technical constraints, and establishing milestones.",
  },
  {
    num: "02",
    tag: "STRUCTURE",
    title: "Architecture & Setup",
    desc: "Setting up repositories, modular design tokens, server components, and CI/CD pipelines.",
  },
  {
    num: "03",
    tag: "DEVELOPMENT",
    title: "Agile Development",
    desc: "Writing clean, type-safe code with fluid Framer Motion interactions and regular preview demos.",
  },
  {
    num: "04",
    tag: "DEPLOYMENT",
    title: "Testing & Handover",
    desc: "Cross-browser QA, Core Web Vitals optimization, zero-downtime launch, and client video walkthrough.",
  },
];

export default function ServicesPageContent({ site }: ServicesPageContentProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices =
    selectedCategory === "All"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.filterCat === selectedCategory);

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
                  <span className="text-[#2f66f6] font-semibold">SERVICES</span>
                </div>

                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2f66f6]/30 bg-[#2f66f6]/10 text-xs text-[#2f66f6] font-semibold uppercase tracking-widest mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2f66f6] animate-pulse" />
                  Capabilities &amp; Offerings
                </span>

                {/* Giant Bold Headline with Glowing Dot */}
                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white leading-none flex items-baseline">
                  <span>SERVICES</span>
                  <span className="inline-block w-3 h-3 sm:w-5 sm:h-5 md:w-7 md:h-7 bg-[#2f66f6] ml-2 sm:ml-4 rounded-xs shadow-[0_0_24px_rgba(47,102,246,0.9)]" />
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-sm sm:text-base md:text-lg text-stone-400 font-light max-w-2xl leading-relaxed mt-6">
                  End-to-end frontend engineering, bespoke WordPress architectures, and pixel-perfect design systems crafted with obsessive attention to detail for founders, brands, and agencies worldwide.
                </p>
              </Reveal>
            </div>

            {/* Category Filter Pills (Matching ProjectsFilter design) */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {CATEGORIES.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <motion.button
                    key={cat}
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-[11px] sm:text-[12px] font-bold uppercase tracking-wider px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border transition-all cursor-pointer ${
                      active
                        ? "bg-[#2f66f6] border-[#2f66f6] text-white shadow-lg shadow-blue-600/40"
                        : "bg-white/5 border-white/10 text-stone-400 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {cat}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-white/10">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0e0e11] border border-white/10">
                <span className="text-2xl sm:text-4xl font-mono font-black text-white block">37+</span>
                <span className="text-xs sm:text-sm text-stone-400 font-medium mt-1 block">Shipped Projects</span>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0e0e11] border border-white/10">
                <span className="text-2xl sm:text-4xl font-mono font-black text-[#2f66f6] block">100%</span>
                <span className="text-xs sm:text-sm text-stone-400 font-medium mt-1 block">Client Satisfaction</span>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0e0e11] border border-white/10">
                <span className="text-2xl sm:text-4xl font-mono font-black text-white block">8+</span>
                <span className="text-xs sm:text-sm text-stone-400 font-medium mt-1 block">Years of Craft</span>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0e0e11] border border-white/10">
                <span className="text-2xl sm:text-4xl font-mono font-black text-emerald-400 block">&lt; 1s</span>
                <span className="text-xs sm:text-sm text-stone-400 font-medium mt-1 block">Core Web Vitals</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SECTION 2: BENTO SERVICES GRID (Matching CapabilitiesGrid style) ── */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-16 border-b border-white/10 select-none">
        {/* Intersection Crosshairs */}
        <span className="cross-mark text-white/20" style={{ left: "24px", top: "24px" }}>+</span>
        <span className="cross-mark text-white/20" style={{ right: "24px", top: "24px" }}>+</span>

        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, idx) => (
                <motion.article
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.94, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: -20 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="bg-[#0e0e11] border border-white/10 hover:border-[#2f66f6]/60 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden shadow-xl shadow-black/40"
                >
                  {/* Top subtle glare line */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:via-[#2f66f6]/60 transition-colors" />

                  <div>
                    {/* Top Row: Icon + Category Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 text-[#2f66f6] flex items-center justify-center group-hover:scale-105 group-hover:border-[#2f66f6]/40 transition-all">
                        {service.icon}
                      </div>

                      <span className="text-[10px] font-mono font-bold tracking-wider text-[#2f66f6] bg-[#2f66f6]/10 border border-[#2f66f6]/20 px-3 py-1 rounded-full uppercase">
                        {service.num} / {service.categoryTag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white group-hover:text-[#2f66f6] transition-colors mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Deliverables Bullet List */}
                    <div className="pt-4 border-t border-white/5 mb-6">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold block mb-2.5">
                        Key Deliverables:
                      </span>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-stone-300 font-light">
                            <span className="text-[#2f66f6] font-bold text-xs mt-0.5">✦</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 mb-6">
                      {service.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-stone-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Footer: Timeline & Inquire CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <span className="text-[11px] font-mono text-stone-400">
                        Est: <strong className="text-white">{service.timeline}</strong>
                      </span>

                      <Link
                        href={`/contact?service=${service.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2f66f6] hover:text-white transition-colors group/link"
                      >
                        <span>Inquire</span>
                        <span className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform">
                          ↗
                        </span>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: COLLABORATION MODELS (Styled to theme) ── */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-16 border-b border-white/10 select-none">
        <span className="cross-mark text-white/20" style={{ left: "24px", top: "24px" }}>+</span>
        <span className="cross-mark text-white/20" style={{ right: "24px", top: "24px" }}>+</span>

        <div className="max-w-[1500px] mx-auto">
          <div className="mb-10 sm:mb-16 max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2f66f6]/30 bg-[#2f66f6]/10 text-xs text-[#2f66f6] font-semibold uppercase tracking-widest mb-3 sm:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2f66f6] animate-pulse" />
                Engagement Terms
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-3">
                Transparent <span className="text-[#2f66f6]">Collaboration</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base font-light text-stone-400 leading-relaxed">
                Clear deliverables, fixed timelines, and direct engineering access without hidden overheads.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {ENGAGEMENT_MODELS.map((model, idx) => (
              <Reveal key={model.title} delay={idx * 0.1}>
                <div className="h-full bg-[#0e0e11] border border-white/10 hover:border-[#2f66f6]/60 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden shadow-xl">
                  {/* Top glare line */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:via-[#2f66f6]/60 transition-colors" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-stone-400">
                        {model.num} / {model.tag}
                      </span>
                      <span className={`text-[10px] font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full border ${model.badgeColor}`}>
                        {model.badge}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-3 group-hover:text-[#2f66f6] transition-colors">
                      {model.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed mb-6">
                      {model.desc}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-white/5 mb-8">
                      {model.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-stone-300 font-light">
                          <span className="text-[#2f66f6] font-bold text-xs">✓</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-stone-400 font-medium">
                      {model.turnaround}
                    </span>

                    <Link
                      href="/contact"
                      className="px-4 py-2 rounded-full bg-white/5 hover:bg-[#2f66f6] text-white border border-white/10 hover:border-transparent text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm"
                    >
                      Inquire ↗
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: 4-PHASE PROCESS (Matching ProcessGrid) ── */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-16 border-b border-white/10 select-none">
        <span className="cross-mark text-white/20" style={{ left: "24px", top: "24px" }}>+</span>
        <span className="cross-mark text-white/20" style={{ right: "24px", top: "24px" }}>+</span>

        <div className="max-w-[1500px] mx-auto">
          <div className="mb-10 sm:mb-16 text-center max-w-3xl mx-auto">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2f66f6]/30 bg-[#2f66f6]/10 text-xs text-[#2f66f6] font-semibold uppercase tracking-widest mb-3 sm:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2f66f6] animate-pulse" />
                Execution Framework
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-3">
                How Projects <span className="text-[#2f66f6]">Come to Life</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base font-light text-stone-400 leading-relaxed max-w-xl mx-auto">
                A disciplined four-phase delivery cycle engineered for transparency, velocity, and zero surprises.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <Reveal key={step.num} delay={idx * 0.08}>
                <div className="h-full p-4 sm:p-7 rounded-xl sm:rounded-2xl bg-[#0e0e11] border border-white/10 hover:border-[#2f66f6]/50 transition-all flex flex-col justify-between">
                  <div>
                    <span className="text-xl sm:text-3xl font-mono font-black text-[#2f66f6] block mb-2 sm:mb-3">
                      {step.num}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-stone-400 block mb-1.5 sm:mb-2">
                      {step.tag}
                    </span>
                    <h4 className="text-xs sm:text-base font-bold uppercase text-white mb-1.5 sm:mb-2 leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-stone-400 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: HIGH-IMPACT CTA BANNER ── */}
      <section className="pt-16 sm:pt-24 px-4 sm:px-6 md:px-12 lg:px-16 select-none">
        <div className="max-w-[1500px] mx-auto">
          <Reveal>
            <div className="relative rounded-3xl p-8 sm:p-14 bg-[#0e0e11] border border-[#2f66f6]/40 overflow-hidden shadow-2xl text-center">
              {/* Decorative radial blur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#2f66f6]/15 blur-[120px] pointer-events-none" />

              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2f66f6]/30 bg-[#2f66f6]/10 text-xs text-[#2f66f6] font-bold uppercase tracking-widest mb-4">
                ✦ Ready to Start?
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white max-w-3xl mx-auto mb-4 leading-tight">
                HAVE A PROJECT OR SPRINT IN MIND?
              </h2>

              <p className="text-xs sm:text-base text-stone-300 font-light max-w-xl mx-auto mb-8 leading-relaxed">
                Whether you need a custom WordPress build, a high-performance Next.js application, or ongoing frontend engineering bandwidth, let&rsquo;s connect.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#2f66f6] hover:bg-[#1d4ed8] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-blue-900/40 hover:scale-105"
                >
                  Start a Project ↗
                </Link>
                <a
                  href={`mailto:${site.email}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/15 text-xs font-bold uppercase tracking-widest transition-all"
                >
                  Direct Email ✉
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
