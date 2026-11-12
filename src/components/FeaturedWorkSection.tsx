"use client";

import { motion } from "framer-motion";

interface ProjectItem {
  num: string;
  title: string;
  subtitle: string;
  tags: string;
  bgType: "dark-photo" | "orange-bold" | "dark-product";
  href: string;
}

const PROJECTS: ProjectItem[] = [
  {
    num: "01",
    title: "CGPLUX",
    subtitle: "CGPLUX STUDIOS",
    tags: "Branding, Web Design, Next.js",
    bgType: "dark-photo",
    href: "https://cgpluxstudios.com/",
  },
  {
    num: "02",
    title: "TAWAKKAL\nSTORE",
    subtitle: "TAWAKKAL STORE",
    tags: "Full-Stack Web App, React, Express",
    bgType: "orange-bold",
    href: "https://tawakkal.store/",
  },
  {
    num: "03",
    title: "ECHO\nPRIDE",
    subtitle: "ECHO PRIDE LOGISTICS",
    tags: "Enterprise Web App, Django, PostgreSQL",
    bgType: "dark-product",
    href: "https://echopride.site/",
  },
];

export default function FeaturedWorkSection() {
  return (
    <section
      id="work"
      className="relative w-full bg-[#f2efe9] text-black border-t border-black/10 select-none py-16 sm:py-20 md:py-24 px-5 sm:px-8 md:px-12 lg:px-16"
    >
      <div className="max-w-[1700px] mx-auto">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 sm:pb-12 border-b border-black/10 mb-10 sm:mb-14">
          <h2 className="font-['Anton',Impact,sans-serif] text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-black leading-none">
            FEATURED WORK
          </h2>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-wider text-black hover:text-[#ff3d00] transition-colors"
          >
            <span>VIEW ALL PROJECTS</span>
            <span className="w-5 h-5 rounded-full border border-black group-hover:border-[#ff3d00] flex items-center justify-center text-xs transition-colors">
              ↗
            </span>
          </a>
        </div>

        {/* 3 Large Showcase Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
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
                className={`relative w-full aspect-[4/3] overflow-hidden flex flex-col justify-between p-6 sm:p-8 transition-transform duration-500 group-hover:-translate-y-1 shadow-md group-hover:shadow-xl ${
                  project.bgType === "orange-bold"
                    ? "bg-[#ff3d00] text-black"
                    : "bg-[#0d0d0d] text-white"
                }`}
              >
                {/* Number in Top Right */}
                <div className="w-full flex justify-end">
                  <span
                    className={`font-mono text-sm sm:text-base font-bold ${
                      project.bgType === "orange-bold" ? "text-black/60" : "text-neutral-500"
                    }`}
                  >
                    {project.num}
                  </span>
                </div>

                {/* Card Content / Graphic Elements */}
                <div className="relative z-10 flex items-center justify-between mt-auto">
                  {/* Huge Project Title */}
                  <div className="font-['Anton',Impact,sans-serif] text-4xl sm:text-5xl lg:text-[3.25rem] leading-[0.9] uppercase tracking-tight whitespace-pre-line">
                    {project.title}
                  </div>

                  {/* Mockup / Graphic visual for Card 01, 02, 03 */}
                  {project.bgType === "dark-photo" && (
                    <div className="w-28 sm:w-36 h-28 sm:h-36 relative opacity-70 group-hover:opacity-100 transition-opacity">
                      <svg viewBox="0 0 140 140" fill="none" className="w-full h-full">
                        <circle cx="70" cy="70" r="50" stroke="#ff3d00" strokeWidth="2" strokeDasharray="4 4" />
                        <rect x="35" y="35" width="70" height="70" stroke="white" strokeWidth="1.5" />
                        <line x1="35" y1="35" x2="105" y2="105" stroke="white" strokeWidth="1" />
                      </svg>
                    </div>
                  )}

                  {project.bgType === "orange-bold" && (
                    <div className="w-24 sm:w-28 h-28 sm:h-32 bg-black text-white p-2.5 flex flex-col justify-between shadow-xl transform rotate-3 group-hover:rotate-0 transition-transform">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#ff3d00]">
                        PROD V2
                      </span>
                      <div className="font-['Anton'] text-lg uppercase leading-tight">
                        TAWAKKAL<br />STORE
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400">
                        99.8% UPTIME
                      </span>
                    </div>
                  )}

                  {project.bgType === "dark-product" && (
                    <div className="w-20 sm:w-24 h-28 sm:h-36 bg-neutral-900 border border-neutral-700 p-2 flex flex-col justify-between shadow-xl transform -rotate-3 group-hover:rotate-0 transition-transform">
                      <span className="font-mono text-[8px] text-neutral-500 uppercase">
                        LOGISTICS
                      </span>
                      <div className="w-full h-12 bg-neutral-800 rounded flex items-center justify-center">
                        <span className="text-xl">⚡</span>
                      </div>
                      <span className="font-mono text-[8px] text-[#ff3d00] uppercase font-bold">
                        DELIVERED
                      </span>
                    </div>
                  )}
                </div>
              </a>

              {/* Sub-card Details Row */}
              <div className="flex items-start justify-between pt-4 sm:pt-5 border-t border-black/10 mt-3">
                <div>
                  <h3 className="font-['Anton',Impact,sans-serif] text-lg sm:text-xl uppercase tracking-tight text-black group-hover:text-[#ff3d00] transition-colors leading-none">
                    {project.subtitle}
                  </h3>
                  <p className="font-['Space_Grotesk',sans-serif] text-[11px] sm:text-xs text-neutral-600 mt-1">
                    {project.tags}
                  </p>
                </div>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-black/20 group-hover:border-[#ff3d00] group-hover:bg-[#ff3d00] group-hover:text-white flex items-center justify-center text-sm font-bold text-black transition-all"
                >
                  ↗
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

