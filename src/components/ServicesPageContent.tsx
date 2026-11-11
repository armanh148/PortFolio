"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";
import type { SiteData } from "@/lib/siteData";

interface ServicesPageContentProps {
  site: SiteData;
}

/* ─── Brutalist SVG Icons with #ff4a00 Accents ─── */
function FrontendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-black">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" stroke="#ff4a00" strokeWidth="2.5" />
    </svg>
  );
}

function WordpressIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-black">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <circle cx="8" cy="10" r="1.5" fill="#ff4a00" />
      <circle cx="16" cy="10" r="1.5" fill="#ff4a00" />
    </svg>
  );
}

function DesignIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-black">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" stroke="#ff4a00" strokeWidth="2.5" />
    </svg>
  );
}

function PerformanceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-black">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="#ff4a00" stroke="#ff4a00" />
    </svg>
  );
}

function MotionIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-black">
      <path d="M12 3v18" />
      <path d="M3 12h18" />
      <circle cx="12" cy="12" r="7" stroke="currentColor" />
      <circle cx="12" cy="12" r="3" fill="#ff4a00" stroke="#ff4a00" />
    </svg>
  );
}

function StrategyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-black">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" stroke="#ff4a00" />
      <circle cx="12" cy="12" r="2" fill="#ff4a00" />
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
      "Modern React 19 and Next.js web applications engineered for extreme speed, search ranking, and modular component maintainability. Type-safe, scalable, and responsive across every device.",
    deliverables: [
      "Next.js App Router architecture & Server Components",
      "Type-safe TypeScript codebase with clean modular components",
      "Tailwind CSS styling & responsive cross-device layout",
      "Dynamic data fetching, caching strategies, and SEO optimization",
      "Fluid micro-animations with Framer Motion",
    ],
    skills: ["Next.js 16", "React 19", "Tailwind CSS", "TypeScript", "REST APIs", "State Management"],
    timeline: "2 – 4 Weeks",
    icon: <FrontendIcon />,
  },
  {
    id: "wordpress-craft",
    num: "02",
    categoryTag: "CMS ARCHITECTURE",
    filterCat: "WordPress",
    title: "WordPress & Headless Architecture",
    description:
      "Zero-bloat custom WordPress theme engineering, bespoke Gutenberg blocks, and headless setups paired with Sanity CMS or Next.js for complete editorial freedom.",
    deliverables: [
      "100% custom theme written from scratch with clean PHP/OOP",
      "Advanced Custom Fields (ACF Pro) tailored editing workflows",
      "Headless CMS setups with Sanity CMS and Next.js frontends",
      "WooCommerce custom checkout funnels & payment gateways",
      "Zero page-builder bloat guaranteeing sub-second load times",
    ],
    skills: ["WordPress PHP", "ACF Pro", "Sanity CMS", "WooCommerce", "REST API", "Clean Code"],
    timeline: "2 – 5 Weeks",
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
      "Scalable design token system with high contrast brutalist typography",
      "Accessible component library following WCAG standards",
      "Interactive states, skeleton loaders, and micro-motion prototypes",
      "Full responsive breakpoint audits for mobile, tablet, and desktop",
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
      "Interactive canvas & brutalist micro-interactions",
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
    filterCat: "Frontend",
    title: "Strategy & Technical Architecture",
    description:
      "Strategic code planning, hosting architecture, automated CI/CD deployment pipelines, and security hardening to ensure your application scales smoothly.",
    deliverables: [
      "Technical discovery document & system architecture blueprint",
      "Automated CI/CD deployment pipeline via GitHub Actions",
      "Staging preview environments for asynchronous client review",
      "Security headers, SSL compliance, and API hardening",
      "Post-launch handover documentation & recorded video walkthroughs",
    ],
    skills: ["Architecture", "Vercel / AWS", "GitHub Actions", "Security", "Code Quality"],
    timeline: "1 – 2 Weeks",
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
    badgeBg: "bg-orange-50 text-[#ff4a00] border-orange-200",
    desc: "Fixed timeline and milestones for new website builds, redesigns, or specific feature launches.",
    features: [
      "Clearly defined scope & milestones",
      "Direct communication via WhatsApp or email",
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
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    desc: "Reliable weekly frontend & full-stack development horsepower for growing startups and creative agencies.",
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
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
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
    title: "Discovery & Scope",
    desc: "Aligning project objectives, technical requirements, design assets, and milestone deadlines.",
  },
  {
    num: "02",
    tag: "ARCHITECTURE",
    title: "System Architecture",
    desc: "Setting up repositories, component hierarchies, design tokens, and database schemas.",
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
              <span className="text-black">SERVICES</span>
            </div>

            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f8f8f9] border border-black/10 text-xs font-['Space_Grotesk',sans-serif] font-bold text-black uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#ff4a00] animate-pulse" />
              CAPABILITIES &amp; ENGINEERING OFFERINGS
            </span>
          </div>

          {/* Monumental Headline */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10 mb-10 sm:mb-14">
            <div>
              <Reveal>
                <h1 className="font-['Anton',Impact,'Arial_Black',sans-serif] text-[clamp(3.5rem,9.5vw,9.5rem)] leading-[0.88] tracking-[-0.02em] uppercase text-black">
                  SERVICES &amp;<br />
                  <span className="text-[#ff4a00]">CAPABILITIES.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="font-['Space_Grotesk',sans-serif] text-sm sm:text-base md:text-lg text-neutral-700 max-w-2xl leading-relaxed mt-6">
                  End-to-end full-stack engineering, bespoke WordPress &amp; Shopify architectures, and pixel-perfect design systems crafted with obsessive attention to detail for founders, brands, and agencies worldwide.
                </p>
              </Reveal>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 shrink-0 max-w-full">
              {CATEGORIES.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl border transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-sm ${
                      active
                        ? "bg-[#ff4a00] border-[#ff4a00] text-white shadow-md shadow-orange-500/20"
                        : "bg-[#f8f8f9] border-black/10 text-neutral-700 hover:border-black/30 hover:text-black hover:bg-white"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-black/10">
              <div className="p-5 rounded-2xl bg-[#f8f8f9] border border-black/10 shadow-sm">
                <span className="font-['Anton',Impact,sans-serif] text-3xl sm:text-4xl text-black block">40+</span>
                <span className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm text-neutral-600 font-bold mt-1 block">Shipped Projects</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#f8f8f9] border border-black/10 shadow-sm">
                <span className="font-['Anton',Impact,sans-serif] text-3xl sm:text-4xl text-[#ff4a00] block">100%</span>
                <span className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm text-neutral-600 font-bold mt-1 block">Client Satisfaction</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#f8f8f9] border border-black/10 shadow-sm">
                <span className="font-['Anton',Impact,sans-serif] text-3xl sm:text-4xl text-black block">1+ YRS</span>
                <span className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm text-neutral-600 font-bold mt-1 block">Professional Craft</span>
              </div>
              <div className="p-5 rounded-2xl bg-[#f8f8f9] border border-black/10 shadow-sm">
                <span className="font-['Anton',Impact,sans-serif] text-3xl sm:text-4xl text-emerald-600 block">&lt; 1s</span>
                <span className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm text-neutral-600 font-bold mt-1 block">Core Web Vitals</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SECTION 2: BENTO SERVICES GRID ── */}
      <section className="relative py-16 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-16 border-b border-black/10">
        <div className="max-w-[1600px] mx-auto">
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
                  className="bg-[#f8f8f9] border border-black/10 hover:border-[#ff4a00] hover:bg-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between group transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer"
                >
                  <div>
                    {/* Top Row: Icon + Category Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-black/10 flex items-center justify-center group-hover:scale-105 transition-all shadow-sm">
                        {service.icon}
                      </div>

                      <span className="font-mono text-xs font-bold tracking-wider text-[#ff4a00] bg-orange-50 border border-orange-200 px-3 py-1 rounded-full uppercase">
                        {service.num} / {service.categoryTag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-['Anton',Impact,sans-serif] text-2xl uppercase tracking-tight text-black group-hover:text-[#ff4a00] transition-colors mb-3 leading-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Deliverables Bullet List */}
                    <div className="pt-4 border-t border-black/10 mb-6">
                      <span className="font-['Space_Grotesk',sans-serif] text-[11px] uppercase tracking-widest text-black font-bold block mb-3">
                        KEY DELIVERABLES:
                      </span>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 font-['Space_Grotesk',sans-serif] text-xs text-neutral-700">
                            <span className="text-[#ff4a00] font-bold text-xs mt-0.5 shrink-0">✦</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/10 mb-6">
                      {service.skills.map((skill) => (
                        <span
                          key={skill}
                          className="font-mono text-[10.5px] px-2.5 py-1 rounded-md bg-white border border-black/10 text-neutral-800 font-semibold shadow-2xs group-hover:border-black/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Footer: Timeline & Inquire CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-black/10">
                      <span className="font-mono text-xs text-neutral-500">
                        Est: <strong className="text-black font-bold">{service.timeline}</strong>
                      </span>

                      <Link
                        href={`/contact?service=${service.id}`}
                        className="inline-flex items-center gap-1.5 font-['Space_Grotesk',sans-serif] text-xs font-black uppercase tracking-wider text-black group-hover:text-[#ff4a00] transition-colors"
                      >
                        <span>INQUIRE</span>
                        <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
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

      {/* ── SECTION 3: COLLABORATION MODELS ── */}
      <section className="relative py-16 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-16 border-b border-black/10">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-10 sm:mb-16 max-w-2xl">
            <Reveal>
              <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold tracking-[0.2em] uppercase text-[#ff4a00] block mb-2">
                ENGAGEMENT TERMS
              </span>
              <h2 className="font-['Anton',Impact,sans-serif] text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-black leading-[1] mb-3">
                TRANSPARENT <span className="text-[#ff4a00]">COLLABORATION</span>
              </h2>
              <p className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed">
                Clear deliverables, fixed timelines, and direct engineering access without hidden overheads.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {ENGAGEMENT_MODELS.map((model, idx) => (
              <Reveal key={model.title} delay={idx * 0.1}>
                <div className="h-full bg-[#f8f8f9] border border-black/10 hover:border-[#ff4a00] hover:bg-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between group transition-all duration-300 shadow-sm hover:shadow-xl">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold tracking-widest uppercase text-neutral-500">
                        {model.num} / {model.tag}
                      </span>
                      <span className={`text-[10px] font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full border ${model.badgeBg}`}>
                        {model.badge}
                      </span>
                    </div>

                    <h3 className="font-['Anton',Impact,sans-serif] text-2xl uppercase tracking-tight text-black mb-3 group-hover:text-[#ff4a00] transition-colors leading-tight">
                      {model.title}
                    </h3>

                    <p className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                      {model.desc}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-black/10 mb-8">
                      {model.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 font-['Space_Grotesk',sans-serif] text-xs text-neutral-700">
                          <span className="text-[#ff4a00] font-bold text-xs">✓</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-black/10 flex items-center justify-between">
                    <span className="font-mono text-xs text-neutral-500 font-bold">
                      {model.turnaround}
                    </span>

                    <Link
                      href="/contact"
                      className="px-5 py-2.5 rounded-xl bg-white hover:bg-[#ff4a00] hover:text-white border border-black/15 text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
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

      {/* ── SECTION 4: 4-PHASE PROCESS ── */}
      <section className="relative py-16 sm:py-24 px-5 sm:px-8 md:px-12 lg:px-16 border-b border-black/10">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-10 sm:mb-16 text-center max-w-3xl mx-auto">
            <Reveal>
              <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold tracking-[0.2em] uppercase text-[#ff4a00] block mb-2">
                EXECUTION FRAMEWORK
              </span>
              <h2 className="font-['Anton',Impact,sans-serif] text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-black leading-[1] mb-3">
                HOW PROJECTS <span className="text-[#ff4a00]">COME TO LIFE</span>
              </h2>
              <p className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed max-w-xl mx-auto">
                A disciplined four-phase delivery cycle engineered for transparency, velocity, and zero surprises.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <Reveal key={step.num} delay={idx * 0.08}>
                <div className="h-full p-6 sm:p-8 rounded-2xl bg-[#f8f8f9] border border-black/10 hover:border-[#ff4a00] hover:bg-white transition-all flex flex-col justify-between shadow-sm hover:shadow-xl">
                  <div>
                    <span className="font-['Anton',Impact,sans-serif] text-4xl text-[#ff4a00] block mb-2">
                      {step.num}
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-500 block mb-2">
                      {step.tag}
                    </span>
                    <h4 className="font-['Anton',Impact,sans-serif] text-xl uppercase text-black mb-2 leading-tight">
                      {step.title}
                    </h4>
                    <p className="font-['Space_Grotesk',sans-serif] text-xs text-neutral-600 leading-relaxed">
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
      <section className="pt-16 sm:pt-24 pb-8 sm:pb-12 px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <Reveal>
            <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 bg-[#f8f8f9] border border-black/10 overflow-hidden shadow-xl text-center">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/10 text-xs font-['Space_Grotesk',sans-serif] font-bold text-black uppercase tracking-wider mb-5">
                <span className="w-2 h-2 rounded-full bg-[#ff4a00] animate-pulse" />
                READY TO START?
              </span>

              <h2 className="font-['Anton',Impact,'Arial_Black',sans-serif] text-4xl sm:text-6xl lg:text-7xl uppercase tracking-[-0.02em] text-black max-w-4xl mx-auto mb-5 leading-[0.95]">
                HAVE A PROJECT OR SPRINT <span className="text-[#ff4a00]">IN MIND?</span>
              </h2>

              <p className="font-['Space_Grotesk',sans-serif] text-xs sm:text-base text-neutral-600 max-w-xl mx-auto mb-8 leading-relaxed">
                Whether you need a full-stack platform, custom e-commerce storefront, or dedicated engineering bandwidth on retainer, let&rsquo;s connect.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#ff4a00] hover:bg-[#e04000] text-white font-['Space_Grotesk',sans-serif] font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg hover:scale-[1.02] cursor-pointer"
                >
                  <span>START A PROJECT</span>
                  <span>↗</span>
                </Link>
                <a
                  href={`mailto:${site.email}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white hover:bg-neutral-50 text-black border border-black/15 font-['Space_Grotesk',sans-serif] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-sm"
                >
                  <span>DIRECT EMAIL</span>
                  <span>✉</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
