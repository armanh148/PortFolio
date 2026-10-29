"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";

interface Capability {
  id: string;
  num: string;
  category: string;
  title: string;
  description: string;
  skills: string[];
  icon: React.ReactNode;
}

/* ─── Premium Geometric Neon SVG Icons ─── */
function FrontendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" stroke="#dc2626" />
    </svg>
  );
}

function WordpressIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <circle cx="8" cy="10" r="1.5" fill="#dc2626" />
      <circle cx="16" cy="10" r="1.5" fill="#dc2626" />
    </svg>
  );
}

function DesignIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" stroke="#dc2626" />
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
      <circle cx="12" cy="12" r="7" stroke="#1e3a8a" />
      <circle cx="12" cy="12" r="3" fill="#dc2626" />
    </svg>
  );
}

function StrategyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" stroke="#1e3a8a" />
      <circle cx="12" cy="12" r="2" fill="#dc2626" />
    </svg>
  );
}

const CAPABILITIES: Capability[] = [
  {
    id: "frontend",
    num: "01",
    category: "ENGINEERING",
    title: "Frontend Engineering",
    description:
      "Modern React 19 and Next.js applications engineered for extreme speed, search ranking, and clean component maintainability.",
    skills: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Turbopack"],
    icon: <FrontendIcon />,
  },
  {
    id: "cms",
    num: "02",
    category: "CMS & E-COMMERCE",
    title: "E-Commerce & Headless CMS",
    description:
      "Custom Shopify Liquid storefronts, zero-bloat WordPress architectures, headless Sanity CMS pipelines, and high-conversion WooCommerce portals.",
    skills: ["Shopify Liquid", "WordPress", "WooCommerce", "Sanity CMS", "Headless"],
    icon: <WordpressIcon />,
  },
  {
    id: "uiux",
    num: "03",
    category: "DESIGN SYSTEMS",
    title: "UI/UX & Design Systems",
    description:
      "Transforming complex workflows into intuitive, clean Figma prototypes, standardized design tokens, and pixel-perfect layouts.",
    skills: ["Figma Tokens", "Wireframing", "Component Kits", "User Journey", "Design Audits"],
    icon: <DesignIcon />,
  },
  {
    id: "backend",
    num: "04",
    category: "BACKEND & APIS",
    title: "Backend & Database Architecture",
    description:
      "Engineering robust REST APIs, secure server workflows, and relational database systems using Node.js, Express, Django, and PostgreSQL.",
    skills: ["Node.js", "Express.js", "Django", "PHP", "REST APIs", "PostgreSQL"],
    icon: <PerformanceIcon />,
  },
  {
    id: "motion",
    num: "05",
    category: "INTERACTION",
    title: "Creative Motion & Interaction",
    description:
      "Designing silky micro-interactions, scroll-driven parallax, and physics-based motion with Framer Motion and Lenis.",
    skills: ["Framer Motion", "Lenis Smooth Scroll", "Scroll Parallax", "Micro-Interactions"],
    icon: <MotionIcon />,
  },
  {
    id: "strategy",
    num: "06",
    category: "DISCOVERY",
    title: "Strategy & Technical QA",
    description:
      "Bridging business goals with high-end engineering, rigorous cross-browser testing, accessibility (a11y), and deployment pipelines.",
    skills: ["Architecture", "Accessibility a11y", "CI/CD Setup", "Security Audits"],
    icon: <StrategyIcon />,
  },
];

export default function CapabilitiesGrid() {
  const [mobileIndex, setMobileIndex] = useState(0);

  const handlePrev = () => {
    setMobileIndex((prev) => (prev === 0 ? CAPABILITIES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setMobileIndex((prev) => (prev >= CAPABILITIES.length - 1 ? 0 : prev + 1));
  };

  const currentCap = CAPABILITIES[mobileIndex];

  return (
    <section className="relative py-16 sm:py-24 md:py-36 px-4 sm:px-6 md:px-12 bg-white text-[#0f172a] overflow-hidden border-b border-slate-200 select-none">
      {/* Dynamic Background Glow Blobs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-red-500/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-blue-600/5 blur-[140px] rounded-full pointer-events-none" />

      {/* Subtle Grid Crosshairs */}
      <span className="cross-mark text-slate-300" style={{ left: "24px", top: "24px" }}>+</span>
      <span className="cross-mark text-slate-300" style={{ right: "24px", top: "24px" }}>+</span>

      <div className="max-w-[1500px] mx-auto relative z-10">
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-10 sm:mb-16 md:mb-20">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-200 bg-red-50 text-xs text-[#dc2626] font-semibold uppercase tracking-widest mb-3 sm:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] animate-pulse" />
                Technical Capabilities
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0f172a] leading-tight">
                Our <span className="text-[#dc2626]">Capabilities</span> &amp; Stack
              </h2>
            </Reveal>
          </div>

          {/* Desktop Description */}
          <div className="hidden md:block">
            <Reveal delay={0.1}>
              <p className="text-sm md:text-base font-light text-slate-600 max-w-md leading-relaxed">
                Every project is built with production rigor, modern standards, and obsessive attention to detail from the first commit to launch.
              </p>
            </Reveal>
          </div>

          {/* Mobile Carousel Controls in Header */}
          <div className="flex md:hidden items-center justify-between gap-4 pt-1">
            <span className="text-xs font-mono text-slate-500">
              <span className="text-[#dc2626] font-bold">0{mobileIndex + 1}</span> / 0{CAPABILITIES.length}
            </span>
            <div className="flex items-center gap-2">
              <motion.button
                type="button"
                onClick={handlePrev}
                aria-label="Previous capability"
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-full border border-slate-200 bg-slate-100 text-slate-800 flex items-center justify-center text-sm font-bold shadow-sm cursor-pointer"
              >
                ‹
              </motion.button>
              <motion.button
                type="button"
                onClick={handleNext}
                aria-label="Next capability"
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-full bg-[#dc2626] text-white flex items-center justify-center text-sm font-bold shadow-md shadow-red-600/30 cursor-pointer"
              >
                ›
              </motion.button>
            </div>
          </div>
        </div>

        {/* ── MOBILE TOUCH CAROUSEL (< md) ── */}
        <div className="block md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCap.id}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              onDragEnd={(_, info) => {
                if (info.offset.x < -40) handleNext();
                else if (info.offset.x > 40) handlePrev();
              }}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="relative rounded-2xl p-6 bg-[#f8fafc] border border-slate-200 shadow-xl flex flex-col justify-between min-h-[380px] overflow-hidden"
            >
              {/* Radial Red Light in card */}
              <div className="absolute -top-16 -right-16 w-36 h-36 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#dc2626]/50 to-transparent" />

              <div>
                {/* Top Bar: Icon + Category Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-[#dc2626] shadow-sm">
                    {currentCap.icon}
                  </div>

                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#1e3a8a] uppercase px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
                    {currentCap.num} / {currentCap.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold uppercase tracking-tight text-[#0f172a] mb-2.5">
                  {currentCap.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-6">
                  {currentCap.description}
                </p>
              </div>

              {/* Bottom Row: Skills Pills */}
              <div className="pt-5 border-t border-slate-200">
                <span className="text-[9px] uppercase tracking-wider text-slate-500 font-mono block mb-2">
                  Key Technologies &amp; Methods:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentCap.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-lg bg-white text-slate-700 border border-slate-200 shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {CAPABILITIES.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to capability ${i + 1}`}
                onClick={() => setMobileIndex(i)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  mobileIndex === i
                    ? "w-8 h-2 bg-[#dc2626] shadow-md shadow-red-500/40"
                    : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
          <p className="text-[10px] text-center text-slate-400 uppercase tracking-widest mt-2 font-mono">
            ‹ Swipe or tap arrows to explore ›
          </p>
        </div>

        {/* ── DESKTOP 3x2 BENTO GRID (hidden on mobile) ── */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CAPABILITIES.map((cap, idx) => (
            <Reveal key={cap.id} delay={idx * 0.07}>
              <motion.div
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className="group relative rounded-3xl p-7 lg:p-8 bg-[#f8fafc] border border-slate-200 hover:border-[#dc2626]/50 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-[0_20px_50px_-15px_rgba(220,38,38,0.12)] flex flex-col justify-between h-full cursor-pointer overflow-hidden backdrop-blur-xs"
              >
                {/* Radial Red Light on Hover */}
                <div className="absolute -top-16 -right-16 w-36 h-36 bg-red-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Subtle top glare line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent group-hover:via-[#dc2626]/50 transition-colors" />

                <div>
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 6 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="w-13 h-13 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-[#dc2626] shadow-sm group-hover:border-[#dc2626]/50 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all"
                    >
                      {cap.icon}
                    </motion.div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#1e3a8a] uppercase px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200">
                        {cap.num} / {cap.category}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold uppercase tracking-tight text-[#0f172a] group-hover:text-[#dc2626] transition-colors mb-3">
                    {cap.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-6">
                    {cap.description}
                  </p>
                </div>

                {/* Bottom Row: Skills Pills */}
                <div className="pt-6 border-t border-slate-200">
                  <div className="flex flex-wrap gap-1.5">
                    {cap.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-lg bg-white text-slate-700 border border-slate-200 group-hover:border-red-200 group-hover:bg-red-50 group-hover:text-[#dc2626] transition-all select-none shadow-2xs"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Subtle corner arrow on hover */}
                <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-slate-400 group-hover:text-[#dc2626] text-sm pointer-events-none">
                  ↗
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
