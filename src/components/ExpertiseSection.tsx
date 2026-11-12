"use client";

import { motion } from "framer-motion";

interface ExpertiseItem {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const EXPERTISE_LIST: ExpertiseItem[] = [
  {
    num: "01",
    title: "DIGITAL STRATEGY",
    desc: "Turning insights into actionable engineering strategies that drive growth and long-term value.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8 text-[#ff3d00]">
        <circle cx="12" cy="12" r="10" strokeDasharray="3 3" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="2" fill="#ff3d00" />
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="2" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "WEB DESIGN & DEV",
    desc: "Crafting high-performance websites that are fast, responsive and impactful.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8 text-[#ff3d00]">
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
        <line x1="14" y1="4" x2="10" y2="20" stroke="#ff3d00" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "PERFORMANCE MARKETING",
    desc: "Data-driven campaigns that increase visibility, generate leads and maximize ROI.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8 text-[#ff3d00]">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <polyline points="4 8 10 3 16 6 22 1" stroke="#ff3d00" strokeWidth="2" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "BRAND & VISUAL IDENTITY",
    desc: "Building bold brands and visual systems that connect and leave a lasting impression.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8 text-[#ff3d00]">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 12 12 17 22 12" />
        <polyline points="2 17 12 22 22 17" />
      </svg>
    ),
  },
];

export default function ExpertiseSection() {
  return (
    <section
      id="services"
      className="relative w-full bg-[#070707] text-white border-t border-white/10 select-none py-14 sm:py-18 md:py-20 px-5 sm:px-8 md:px-12 lg:px-16 font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <div className="max-w-[1700px] mx-auto">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 sm:pb-8 border-b border-white/10 mb-10 sm:mb-12">
          <div>
            <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff3d00] block mb-1">
              WHAT I DO
            </span>
            <h2 className="font-['Bebas_Neue','Oswald',sans-serif] text-5xl sm:text-6xl uppercase tracking-wider text-white leading-none">
              EXPERTISE
            </h2>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-[#ff3d00] transition-colors"
          >
            <span>VIEW ALL SERVICES</span>
            <span className="w-5 h-5 rounded-full border border-neutral-600 group-hover:border-[#ff3d00] flex items-center justify-center text-xs transition-colors">
              ⊕
            </span>
          </a>
        </div>

        {/* 4 Expertise Columns with vertical dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-white/10">
          {EXPERTISE_LIST.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col justify-between lg:px-8 first:lg:pl-0 last:lg:pr-0"
            >
              <div>
                {/* Icon in Wireframe Orange */}
                <div className="mb-5 transform group-hover:scale-105 transition-transform origin-left">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="font-['Bebas_Neue','Oswald',sans-serif] text-2xl uppercase tracking-wide text-white mb-2.5 group-hover:text-[#ff3d00] transition-colors leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs text-neutral-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
