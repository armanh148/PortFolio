"use client";

import { motion } from "framer-motion";

interface ProjectItem {
  num: string;
  titleLine1: string;
  titleLine2?: string;
  subtitle: string;
  tags: string;
  bgType: "dark-photo" | "orange-bold" | "dark-product";
  href: string;
}

const PROJECTS: ProjectItem[] = [
  {
    num: "01",
    titleLine1: "SHIFT",
    subtitle: "SHIFT FITNESS",
    tags: "Branding, Web Design, Development",
    bgType: "dark-photo",
    href: "https://cgpluxstudios.com/",
  },
  {
    num: "02",
    titleLine1: "VERDA",
    titleLine2: "STUDIO",
    subtitle: "VERDA STUDIO",
    tags: "Branding, Web Design",
    bgType: "orange-bold",
    href: "https://tawakkal.store/",
  },
  {
    num: "03",
    titleLine1: "VOLT",
    titleLine2: "ENERGY",
    subtitle: "VOLT ENERGY",
    tags: "Branding, Web Design, Marketing",
    bgType: "dark-product",
    href: "https://echopride.site/",
  },
];

export default function FeaturedWorkSection() {
  return (
    <section
      id="work"
      className="relative w-full bg-[#f2efe9] text-black border-t border-black/10 select-none py-14 sm:py-18 md:py-20 px-5 sm:px-8 md:px-12 lg:px-16 font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <div className="max-w-[1700px] mx-auto">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 sm:pb-8 border-b border-black/10 mb-8 sm:mb-12">
          <h2 className="font-['Bebas_Neue','Oswald',sans-serif] text-5xl sm:text-6xl uppercase tracking-wider text-black leading-none">
            FEATURED WORK
          </h2>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold uppercase tracking-wider text-black hover:text-[#ff3d00] transition-colors"
          >
            <span>VIEW ALL PROJECTS</span>
            <span className="w-5 h-5 rounded-full border border-black group-hover:border-[#ff3d00] flex items-center justify-center text-xs transition-colors">
              ↗
            </span>
          </a>
        </div>

        {/* 3 Large Showcase Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group flex flex-col cursor-pointer"
            >
              {/* Main Visual Box */}
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative w-full aspect-[4/3] overflow-hidden flex flex-col justify-between p-6 sm:p-7 transition-all duration-500 group-hover:-translate-y-1 shadow-sm group-hover:shadow-xl ${
                  project.bgType === "orange-bold"
                    ? "bg-[#ff3d00] text-black"
                    : "bg-[#0a0a0a] text-white"
                }`}
              >
                {/* Number in Top Right */}
                <div className="w-full flex justify-end">
                  <span
                    className={`font-['Bebas_Neue','Oswald',sans-serif] text-xl font-bold tracking-wider ${
                      project.bgType === "orange-bold" ? "text-black/50" : "text-neutral-500"
                    }`}
                  >
                    {project.num}
                  </span>
                </div>

                {/* Card Content / Graphic Elements */}
                <div className="relative z-10 flex items-end justify-between mt-auto">
                  {/* Huge Project Title */}
                  <div className="font-['Bebas_Neue','Oswald',sans-serif] text-5xl sm:text-6xl lg:text-[4rem] leading-[0.85] uppercase tracking-wide">
                    {project.titleLine1}
                    {project.titleLine2 && (
                      <>
                        <br />
                        {project.titleLine2}
                      </>
                    )}
                  </div>

                  {/* Visual Illustrations / Packaging / Graphic */}
                  {project.bgType === "dark-photo" && (
                    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                      {/* High-contrast grayscale athletic/gym image with dark vignette */}
                      <img
                        src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80"
                        alt="Shift Fitness background"
                        className="w-full h-full object-cover grayscale contrast-150 brightness-75 opacity-40 group-hover:opacity-55 transition-opacity duration-500 scale-100 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    </div>
                  )}

                  {project.bgType === "orange-bold" && (
                    <div className="relative z-10 flex items-center gap-2.5">
                      {/* White packaging card mockup */}
                      <div className="w-14 sm:w-16 h-22 sm:h-24 bg-[#f8f8f8] text-black p-2 flex flex-col justify-between shadow-[0_10px_25px_rgba(0,0,0,0.35)] transform -rotate-6 group-hover:-rotate-3 transition-transform duration-300 border border-black/10">
                        <span className="font-['Bebas_Neue','Oswald',sans-serif] text-xs font-bold tracking-wider">VERDA</span>
                        <div className="w-full h-9 bg-neutral-200 border-y border-neutral-300 flex items-center justify-center">
                          <div className="w-6 h-6 rounded-full border border-black/30 flex items-center justify-center text-[7px] font-bold">V</div>
                        </div>
                        <span className="font-mono text-[7px] font-bold tracking-tight text-neutral-600">100% ORG</span>
                      </div>
                      {/* Black packaging card mockup */}
                      <div className="w-14 sm:w-16 h-22 sm:h-24 bg-[#111111] text-white p-2 flex flex-col justify-between shadow-[0_12px_30px_rgba(0,0,0,0.5)] transform rotate-4 group-hover:rotate-1 transition-transform duration-300 border border-white/10">
                        <span className="font-['Bebas_Neue','Oswald',sans-serif] text-xs font-bold text-[#ff3d00] tracking-wider">STUDIO</span>
                        <div className="w-full h-9 bg-neutral-800 border-y border-neutral-700 flex items-center justify-center">
                          <span className="font-mono text-[8px] text-[#ff3d00] font-bold">● V2</span>
                        </div>
                        <span className="font-mono text-[7px] font-bold tracking-tight text-neutral-400">CREATIVE</span>
                      </div>
                    </div>
                  )}

                  {project.bgType === "dark-product" && (
                    <div className="relative z-10 w-16 sm:w-20 h-28 sm:h-32 bg-gradient-to-b from-neutral-800 via-neutral-900 to-black border border-neutral-700/80 rounded-sm p-2 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.8)] transform rotate-2 group-hover:rotate-0 transition-transform duration-300">
                      {/* Cap / top rim */}
                      <div className="w-6 h-2 bg-neutral-600 rounded-xs mx-auto -mt-3 shadow-inner" />
                      <span className="font-mono text-[8px] text-neutral-400 font-bold tracking-widest text-right">500 ML</span>
                      <div className="text-center font-['Bebas_Neue','Oswald',sans-serif] text-base sm:text-lg text-white leading-tight">
                        VOLT<br /><span className="text-[#ff3d00]">ENERGY</span>
                      </div>
                      <div className="flex items-center justify-between border-t border-white/10 pt-1">
                        <span className="font-mono text-[6px] text-neutral-500">ION+</span>
                        <span className="font-mono text-[6px] text-[#ff3d00] font-bold">2026</span>
                      </div>
                    </div>
                  )}
                </div>
              </a>

              {/* Sub-card Details Row */}
              <div className="flex items-start justify-between pt-3.5 border-t border-black/10 mt-2.5">
                <div>
                  <h3 className="font-['Bebas_Neue','Oswald',sans-serif] text-xl sm:text-2xl uppercase tracking-wider text-black group-hover:text-[#ff3d00] transition-colors leading-none">
                    {project.subtitle}
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] text-neutral-600 mt-0.5 font-medium">
                    {project.tags}
                  </p>
                </div>

                <span className="text-lg font-bold text-black group-hover:text-[#ff3d00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                  ↗
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
