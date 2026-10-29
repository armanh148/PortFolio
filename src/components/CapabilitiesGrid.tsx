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
    id: "wordpress",
    num: "02",
    category: "CMS ARCHITECTURE",
    title: "WordPress Craft",
    description:
      "Custom theme engineering, headless GraphQL architectures, custom Gutenberg blocks, and high-conversion WooCommerce portals.",
    skills: ["Custom Themes", "Headless WP", "Gutenberg", "WooCommerce", "REST API"],
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
    id: "performance",
    num: "04",
    category: "OPTIMIZATION",
    title: "Performance & Web Vitals",
    description:
      "Benchmarking Core Web Vitals, code-splitting, payload trimming, and modern caching hierarchies to achieve 100 PageSpeed scores.",
    skills: ["100 Lighthouse", "Core Web Vitals", "Edge Caching", "Image Tuning", "SEO Audits"],
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
    <section className="relative py-16 sm:py-24 md:py-36 px-4 sm:px-6 md:px-12 bg-transparent text-[#F5F5F3] overflow-hidden border-b border-white/10 select-none">
      {/* Dynamic Background Glow Blobs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#2f66f6]/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-blue-600/5 blur-[140px] rounded-full pointer-events-none" />

      {/* Subtle Grid Crosshairs */}
      <span className="cross-mark text-white/20" style={{ left: "24px", top: "24px" }}>+</span>
      <span className="cross-mark text-white/20" style={{ right: "24px", top: "24px" }}>+</span>

      <div className="max-w-[1500px] mx-auto relative z-10">
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-10 sm:mb-16 md:mb-20">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2f66f6]/30 bg-[#2f66f6]/10 text-xs text-[#2f66f6] font-semibold uppercase tracking-widest mb-3 sm:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2f66f6] animate-pulse" />
                Technical Capabilities
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
                Our <span className="text-[#2f66f6]">Capabilities</span> &amp; Stack
              </h2>
            </Reveal>
          </div>

          {/* Desktop Description */}
          <div className="hidden md:block">
            <Reveal delay={0.1}>
              <p className="text-sm md:text-base font-light text-stone-400 max-w-md leading-relaxed">
                Every project is built with production rigor, modern standards, and obsessive attention to detail from the first commit to launch.
              </p>
            </Reveal>
          </div>

          {/* Mobile Carousel Controls in Header */}
          <div className="flex md:hidden items-center justify-between gap-4 pt-1">
            <span className="text-xs font-mono text-stone-400">
              <span className="text-[#2f66f6] font-bold">0{mobileIndex + 1}</span> / 0{CAPABILITIES.length}
            </span>
            <div className="flex items-center gap-2">
              <motion.button
                type="button"
                onClick={handlePrev}
                aria-label="Previous capability"
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-full border border-white/15 bg-white/5 text-white flex items-center justify-center text-sm font-bold shadow-md cursor-pointer"
              >
                ‹
              </motion.button>
              <motion.button
                type="button"
                onClick={handleNext}
                aria-label="Next capability"
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-full bg-[#2f66f6] text-white flex items-center justify-center text-sm font-bold shadow-md shadow-blue-600/40 cursor-pointer"
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
              className="relative rounded-2xl p-6 bg-white/[0.04] border border-white/10 shadow-2xl flex flex-col justify-between min-h-[380px] overflow-hidden"
            >
              {/* Radial Blue Light in card */}
              <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#2f66f6]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2f66f6]/60 to-transparent" />

              <div>
                {/* Top Bar: Icon + Category Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2f66f6]/30 to-[#2f66f6]/10 border border-[#2f66f6]/40 flex items-center justify-center text-[#2f66f6] shadow-md shadow-blue-900/30">
                    {currentCap.icon}
                  </div>

                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#2f66f6] uppercase px-3 py-1 rounded-full bg-[#2f66f6]/10 border border-[#2f66f6]/30">
                    {currentCap.num} / {currentCap.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-2.5">
                  {currentCap.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed mb-6">
                  {currentCap.description}
                </p>
              </div>

              {/* Bottom Row: Skills Pills */}
              <div className="pt-5 border-t border-white/10">
                <span className="text-[9px] uppercase tracking-wider text-stone-400 font-mono block mb-2">
                  Key Technologies &amp; Methods:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentCap.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-lg bg-white/5 text-stone-200 border border-white/10"
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
                    ? "w-8 h-2 bg-[#2f66f6] shadow-md shadow-blue-500/50"
                    : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
          <p className="text-[10px] text-center text-stone-400 uppercase tracking-widest mt-2 font-mono">
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
                className="group relative rounded-3xl p-7 lg:p-8 bg-white/[0.03] border border-white/10 hover:border-[#2f66f6]/50 hover:bg-white/[0.05] transition-all duration-300 shadow-xl hover:shadow-[0_20px_50px_-15px_rgba(47,102,246,0.25)] flex flex-col justify-between h-full cursor-pointer overflow-hidden backdrop-blur-xs"
              >
                {/* Radial Blue Light on Hover */}
                <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#2f66f6]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Subtle top glare line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:via-[#2f66f6]/60 transition-colors" />

                <div>
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 6 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#2f66f6]/25 to-[#2f66f6]/5 border border-[#2f66f6]/30 flex items-center justify-center text-[#2f66f6] shadow-md shadow-blue-900/30 group-hover:border-[#2f66f6]/60 group-hover:shadow-[0_0_20px_rgba(47,102,246,0.4)] transition-all"
                    >
                      {cap.icon}
                    </motion.div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#2f66f6] uppercase px-2.5 py-1 rounded-full bg-[#2f66f6]/10 border border-[#2f66f6]/20">
                        {cap.num} / {cap.category}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[#2f66f6] transition-colors mb-3">
                    {cap.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed mb-6">
                    {cap.description}
                  </p>
                </div>

                {/* Bottom Row: Skills Pills */}
                <div className="pt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {cap.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-lg bg-white/5 text-stone-300 border border-white/5 group-hover:border-[#2f66f6]/30 group-hover:bg-[#2f66f6]/10 group-hover:text-white transition-all select-none"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Subtle corner arrow on hover */}
                <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-stone-500 group-hover:text-[#2f66f6] text-sm pointer-events-none">
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
