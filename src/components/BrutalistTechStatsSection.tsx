"use client";

import { motion } from "framer-motion";

interface TechItem {
  name: string;
  category?: string;
  icon: React.ReactNode;
}

const TECHNOLOGIES: TechItem[] = [
  {
    name: "HTML5",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#E34F26]">
        <path d="M12 2L3 5l2 14 7 3 7-3 2-14-9-3zm6 6h-8l.3 3h7.4l-.8 7.3-4.9 1.4-4.9-1.4-.4-3.3h2.3l.2 1.6 2.8.8 2.8-.8.4-3.6H6.7L6 6h12V8z" />
      </svg>
    ),
  },
  {
    name: "CSS3",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#1572B6]">
        <path d="M12 2L3 5l2 14 7 3 7-3 2-14-9-3zm6 6h-8l.3 3h7.4l-.8 7.3-4.9 1.4-4.9-1.4-.4-3.3h2.3l.2 1.6 2.8.8 2.8-.8.4-3.6H6.7L6 6h12V8z" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#F7DF1E]">
        <path d="M3 3h18v18H3V3zm15.4 12.3c-.4-.7-1-1.2-1.8-1.5-.7-.3-1.6-.5-2.6-.7-.7-.1-1.2-.3-1.6-.6-.4-.3-.6-.7-.6-1.1 0-.4.2-.8.6-1.1.4-.3 1-.4 1.7-.4.6 0 1.2.2 1.6.5.4.3.7.8.8 1.4h2.4c-.1-1.1-.6-2-1.5-2.6-.9-.6-2-1-3.4-1-1.5 0-2.7.4-3.6 1.1-.9.7-1.4 1.7-1.4 2.8 0 1.1.4 2 1.1 2.6.7.6 1.7 1 3 1.2.8.1 1.4.3 1.8.6.4.3.6.7.6 1.2 0 .5-.2.9-.7 1.2-.5.3-1.2.5-2 .5-.9 0-1.6-.2-2.1-.6-.5-.4-.9-1-.9-1.8H7c.1 1.3.7 2.3 1.7 3 1 .7 2.3 1 3.9 1 1.6 0 2.9-.4 3.9-1.1 1-.7 1.5-1.7 1.5-3-.1-.6-.3-1.1-.6-1.5z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#3178C6]">
        <path d="M3 3h18v18H3V3zm10.7 7.2h-2.3V18h-2.2v-7.8H6.9V8.4h6.8v1.8zm5.5 3.3c-.3-.5-.7-.8-1.3-1-.6-.2-1.2-.4-1.9-.5-.5-.1-.9-.2-1.2-.4-.3-.2-.4-.4-.4-.7 0-.3.1-.6.4-.8.3-.2.7-.3 1.3-.3.5 0 .9.1 1.2.4.3.2.5.6.6 1.1h1.9c-.1-.8-.4-1.4-1.1-1.9-.6-.5-1.5-.7-2.6-.7-1.1 0-2 .3-2.7.8-.7.5-1 1.2-1 2.1 0 .8.3 1.5.8 1.9.5.4 1.3.7 2.2.9.6.1 1 .2 1.3.4.3.2.4.5.4.8 0 .4-.2.7-.5.9-.3.2-.8.3-1.5.3-.6 0-1.2-.1-1.6-.4-.4-.3-.7-.7-.7-1.3H12c.1 1 .5 1.7 1.2 2.2.7.5 1.7.7 2.9.7 1.2 0 2.2-.3 2.9-.8.7-.5 1.1-1.3 1.1-2.2 0-.4-.1-.8-.3-1.1z" />
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#61DAFB]">
        <circle cx="12" cy="12" r="2.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.8 14.6l-5.6-7.3v7.3H8.5V6.8h1.8l5.5 7.2V6.8h1.7v9.8h-1.7z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#339933]">
        <path d="M12 2l10 5.8v11.5L12 25 2 19.3V7.8L12 2zm0 2.3L4 8.9v9.7l8 4.6 8-4.6V8.9l-8-4.6z" />
      </svg>
    ),
  },
  {
    name: "Django",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#44B78B]">
        <path d="M11 2h3v13.5c0 2.5-1.5 4.5-4.5 4.5H7v-2.8h2.2c1.3 0 1.8-.7 1.8-2V2zM15 8h3v12h-3V8zm0-6h3v3.5h-3V2z" />
      </svg>
    ),
  },
  {
    name: "Tailwind",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#38B2AC]">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#3776AB]">
        <path d="M11.9 2c-3.2 0-5 1.5-5 3.5v2.5h5v1H4.5C2.6 9 1 10.8 1 13s1.6 4 3.5 4H7v-2.5c0-1.8 1.6-3.5 3.5-3.5h5V10h-2.5V8.5h5c1.8 0 3.5-1.6 3.5-3.5S19.9 2 18.1 2h-6.2zM9 4a1 1 0 110 2 1 1 0 010-2zm3 18c3.2 0 5-1.5 5-3.5V16h-5v-1h7.4c1.9 0 3.5-1.8 3.5-4s-1.6-4-3.5-4H17v2.5c0 1.8-1.6 3.5-3.5 3.5h-5V14h2.5v1.5h-5C4.2 15.5 2.5 17.1 2.5 19s1.6 3 3.5 3h6zM15 20a1 1 0 110-2 1 1 0 010 2z" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#47A248]">
        <path d="M12 2C11.5 4 8 8.5 8 13.5c0 3.5 1.8 6.5 4 8.5 2.2-2 4-5 4-8.5C16 8.5 12.5 4 12 2zm0 18.5c-1.8-1.6-3-4-3-7 0-3.5 2.2-7 3-8.8.8 1.8 3 5.3 3 8.8 0 3-1.2 5.4-3 7z" />
      </svg>
    ),
  },
  {
    name: "MySQL",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#4479A1]">
        <path d="M12 3c-4.97 0-9 2.24-9 5v8c0 2.76 4.03 5 9 5s9-2.24 9-5V8c0-2.76-4.03-5-9-5zm0 2c4.41 0 7 1.79 7 3s-2.59 3-7 3-7-1.79-7-3 2.59-3 7-3zm0 14c-4.41 0-7-1.79-7-3v-2.3c1.7 1.4 4.3 2.3 7 2.3s5.3-.9 7-2.3V16c0 1.21-2.59 3-7 3zm0-5c-4.41 0-7-1.79-7-3V8.7c1.7 1.4 4.3 2.3 7 2.3s5.3-.9 7-2.3V11c0 1.21-2.59 3-7 3z" />
      </svg>
    ),
  },
  {
    name: "Shopify",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#96BF48]">
        <path d="M18.5 5.5l-2-1.5-1.5 1.5 2 1.5 1.5-1.5zm2.5 3l-1.5-.5L18 20l3-1 1-9.5-2-1.5zm-5-3.5L14 3l-2.5.5-1.5 2 2.5 1 3.5-1.5zM12 21l-7-2.5L3 8.5l10.5-2.5 4 1.5L12 21z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#F24E1E]">
        <path d="M8 2h4v5H8a2.5 2.5 0 010-5zm4 5h4a2.5 2.5 0 010 5h-4V7zm0 5h4a2.5 2.5 0 010 5h-4v-5zm-4 0h4v5H8a2.5 2.5 0 010-5zm0 5h4v2.5a2.5 2.5 0 01-5 0V17h1z" />
      </svg>
    ),
  },
  {
    name: "Git",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#F05032]">
        <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0l-2 2 2.6 2.6c.6-.2 1.4 0 1.9.5.5.5.7 1.3.5 1.9l2.5 2.5c.6-.2 1.4 0 1.9.5.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.6-.6-.7-1.5-.4-2.2L13 10.2v4.8c.2.2.3.5.3.8 0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8c0-.7.4-1.3 1-1.6V9.4c-.6-.3-1-.9-1-1.6 0-.3.1-.6.3-.8L8.4 4.4 2.4 10.4c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.5c.6-.6.6-1.6 0-2.2z" />
      </svg>
    ),
  },
  {
    name: "AWS",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#FF9900]">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5.5 13.5c-2.8 2-6.5 2.5-9.8 1.2-.4-.2-.2-.7.2-.6 3.2 1.2 6.6.7 9.2-1 .3-.2.6.2.4.4zm.8-1.8c-.3-.4-1.8-.2-2.5-.1-.2 0-.3-.2-.1-.3.8-.6 2.2-.4 2.5 0 .3.4.1 1.7-.6 2.3-.2.1-.3 0-.3-.2.2-.6.7-1.3.7-1.7z" />
      </svg>
    ),
  },
];

export default function BrutalistTechStatsSection() {
  return (
    <section className="relative w-full bg-black text-white border-t border-neutral-900 select-none overflow-hidden py-16 sm:py-20 md:py-28 px-5 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-[1700px] mx-auto flex flex-col gap-14 sm:gap-18 md:gap-24">
        {/* ── 1. TOP SUB-SECTION: TECHNOLOGIES I WORK WITH ── */}
        <div>
          {/* Header Row */}
          <div className="flex items-center justify-between pb-6 sm:pb-8 border-b border-neutral-800 mb-8 sm:mb-10">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff4a00] shadow-[0_0_10px_#ff4a00]" />
              <h2 className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm md:text-base font-black uppercase tracking-[0.22em] text-white">
                TECHNOLOGIES I WORK WITH
              </h2>
            </div>
            <span className="font-mono text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-neutral-400 hidden sm:block">
              ALWAYS LEARNING, ALWAYS EXPLORING
            </span>
          </div>

          {/* Technology Badges Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-8 xl:grid-cols-16 gap-3 sm:gap-4">
            {TECHNOLOGIES.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-[#ff4a00]/70 hover:shadow-[0_8px_25px_-5px_rgba(255,74,0,0.25)] transition-all cursor-pointer"
              >
                <div className="mb-2 transition-transform duration-300 group-hover:scale-110">
                  {tech.icon}
                </div>
                <span className="font-['Space_Grotesk',sans-serif] text-[10px] sm:text-[11px] font-bold text-neutral-400 group-hover:text-white transition-colors text-center whitespace-nowrap">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── 2. BOTTOM SUB-SECTION: EXPERIENCE & ACHIEVEMENTS + EDITORIAL QUOTE ── */}
        <div>
          {/* Header Row */}
          <div className="flex items-center gap-3 pb-6 sm:pb-8 border-b border-neutral-800 mb-8 sm:mb-10">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff4a00] shadow-[0_0_10px_#ff4a00]" />
            <h2 className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm md:text-base font-black uppercase tracking-[0.22em] text-white">
              EXPERIENCE &amp; ACHIEVEMENTS
            </h2>
          </div>

          {/* Content Grid: 3 Stats Cards + Vertical Divider + Editorial Quote */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left 3 Stat Cards (Cols 1-7) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              {/* Stat 1: Projects Delivered */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -4, borderColor: "#ff4a00" }}
                className="group relative p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-[#ff4a00] transition-all flex flex-col justify-between min-h-[140px]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-['Space_Grotesk',sans-serif] text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Projects Delivered
                  </span>
                  <span className="text-[#ff4a00]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </span>
                </div>
                <div className="font-['Anton',Impact,sans-serif] text-4xl sm:text-5xl text-white group-hover:text-[#ff4a00] transition-colors mt-4">
                  40+
                </div>
              </motion.div>

              {/* Stat 2: Happy Clients */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -4, borderColor: "#ff4a00" }}
                className="group relative p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-[#ff4a00] transition-all flex flex-col justify-between min-h-[140px]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-['Space_Grotesk',sans-serif] text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Happy Clients
                  </span>
                  <span className="text-[#ff4a00]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </span>
                </div>
                <div className="font-['Anton',Impact,sans-serif] text-4xl sm:text-5xl text-white group-hover:text-[#ff4a00] transition-colors mt-4">
                  25+
                </div>
              </motion.div>

              {/* Stat 3: Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -4, borderColor: "#ff4a00" }}
                className="group relative p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-[#ff4a00] transition-all flex flex-col justify-between min-h-[140px]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-['Space_Grotesk',sans-serif] text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Technologies
                  </span>
                  <span className="text-[#ff4a00]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  </span>
                </div>
                <div className="font-['Anton',Impact,sans-serif] text-4xl sm:text-5xl text-white group-hover:text-[#ff4a00] transition-colors mt-4">
                  15+
                </div>
              </motion.div>
            </div>

            {/* Right Editorial Quote with Hand-Drawn Accent (Cols 8-12) */}
            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-neutral-800 pt-8 lg:pt-0 lg:pl-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="relative"
              >
                <span className="text-4xl text-[#ff4a00] font-serif leading-none block -mb-2">
                  &ldquo;
                </span>
                <p className="font-['Space_Grotesk',sans-serif] italic text-xl sm:text-2xl md:text-[1.65rem] font-medium text-neutral-200 leading-snug">
                  Focused on building meaningful digital experiences that create real value.&rdquo;
                </p>

                {/* Hand-drawn Electric Orange Scribble / Accent Stroke */}
                <div className="mt-4 w-32 sm:w-40 text-[#ff4a00]">
                  <svg viewBox="0 0 160 20" fill="none" className="w-full h-auto">
                    <path
                      d="M 5 12 Q 40 4 80 12 T 155 8"
                      stroke="#ff4a00"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
