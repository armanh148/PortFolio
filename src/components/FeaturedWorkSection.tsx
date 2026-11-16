"use client";

import { motion } from "framer-motion";

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  image: string;
  href: string;
  mockupType: "dashboard" | "mobile" | "website";
}

const PROJECTS: ProjectItem[] = [
  {
    id: "taskflow",
    title: "TaskFlow",
    subtitle: "AI Productivity Web App",
    tags: ["Next.js", "AI", "Supabase"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    href: "https://cgpluxstudios.com/",
    mockupType: "dashboard",
  },
  {
    id: "fitzone",
    title: "FitZone",
    subtitle: "Fitness Mobile Application",
    tags: ["React Native", "Firebase"],
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80",
    href: "https://tawakkal.store/",
    mockupType: "mobile",
  },
  {
    id: "havenhomes",
    title: "HavenHomes",
    subtitle: "Real Estate Website",
    tags: ["Next.js", "Tailwind", "CMS"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    href: "https://echopride.site/",
    mockupType: "website",
  },
];

export default function FeaturedWorkSection() {
  return (
    <section
      id="work"
      className="relative w-full bg-[#fbf9f4] text-black pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 px-5 sm:px-8 md:px-12 lg:px-16 font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <div className="max-w-[1700px] mx-auto">
        {/* ── TOP HEADER ROW ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-10 mb-8 sm:mb-12 border-b border-black/10">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black leading-none mb-3">
              FEATURED<br />
              PROJECTS
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-medium">
              A selection of my recent work, built with a focus on clean design, strong functionality, and real impact.
            </p>
          </div>

          {/* Navigation Controls: Circular arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous project"
              className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center text-sm font-bold hover:bg-black hover:text-white transition-colors cursor-pointer"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next project"
              className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center text-sm font-bold hover:bg-black hover:text-white transition-colors cursor-pointer"
            >
              ›
            </button>
          </div>
        </div>

        {/* ── 3 PROJECT CARDS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group flex flex-col"
            >
              {/* Image Preview Box */}
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900 border border-black/10 shadow-sm group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 block"
              >
                {/* Visual Content based on mockup type */}
                {project.mockupType === "dashboard" && (
                  <div className="relative w-full h-full bg-[#121316] p-4 flex flex-col justify-between overflow-hidden">
                    {/* Top bar mockup */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff4d29]" />
                        <span className="text-[10px] font-mono text-neutral-400">TaskFlow AI</span>
                      </div>
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                      </div>
                    </div>
                    {/* Dashboard grid preview */}
                    <div className="grid grid-cols-12 gap-2 my-auto">
                      <div className="col-span-4 bg-white/5 border border-white/10 rounded-lg p-2.5 flex flex-col justify-between">
                        <span className="text-[9px] text-neutral-400">Tasks Completed</span>
                        <span className="text-xl font-bold text-white mt-1">94.8%</span>
                      </div>
                      <div className="col-span-8 bg-white/5 border border-white/10 rounded-lg p-2.5">
                        <span className="text-[9px] text-neutral-400">Productivity Velocity</span>
                        <div className="h-10 mt-1 flex items-end gap-1.5">
                          {[35, 60, 45, 80, 95, 70, 85].map((h, i) => (
                            <div key={i} className="flex-1 bg-gradient-to-t from-[#ff4d29]/40 to-[#ff4d29] rounded-xs" style={{ height: `${h}%` }} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[9px] text-neutral-400">
                      <span>• Real-time Agent Dispatch</span>
                      <span className="text-[#ff4d29] font-bold">LIVE</span>
                    </div>
                  </div>
                )}

                {project.mockupType === "mobile" && (
                  <div className="relative w-full h-full bg-gradient-to-br from-[#18191c] to-[#0e0f11] p-4 flex items-center justify-center gap-3 overflow-hidden">
                    {/* Phone Mockup 1 */}
                    <div className="w-28 sm:w-32 h-44 bg-[#111215] border border-white/20 rounded-2xl p-2.5 flex flex-col justify-between shadow-2xl transform -rotate-4 group-hover:-rotate-2 transition-transform duration-300">
                      <div className="w-8 h-1.5 bg-white/20 rounded-full mx-auto" />
                      <div className="my-auto">
                        <span className="text-[9px] font-bold text-white block">Track Your</span>
                        <span className="text-xs font-black text-[#ff4d29] block">Progress</span>
                        <div className="w-12 h-12 rounded-full border-4 border-[#ff4d29] flex items-center justify-center mx-auto my-2 text-[10px] font-bold text-white">
                          78%
                        </div>
                      </div>
                      <span className="text-[8px] text-center text-neutral-500 font-mono">FitZone v2</span>
                    </div>
                    {/* Phone Mockup 2 */}
                    <div className="w-28 sm:w-32 h-44 bg-[#1e2025] border border-white/20 rounded-2xl p-2.5 flex flex-col justify-between shadow-2xl transform rotate-4 group-hover:rotate-2 transition-transform duration-300">
                      <div className="w-8 h-1.5 bg-white/20 rounded-full mx-auto" />
                      <div className="space-y-1.5 my-auto">
                        <div className="h-6 bg-white/10 rounded-md p-1 flex items-center justify-between text-[8px] text-white">
                          <span>Cardio</span>
                          <span className="text-[#ff4d29]">350 kcal</span>
                        </div>
                        <div className="h-6 bg-white/10 rounded-md p-1 flex items-center justify-between text-[8px] text-white">
                          <span>Strength</span>
                          <span className="text-[#ff4d29]">45 min</span>
                        </div>
                      </div>
                      <div className="h-4 bg-[#ff4d29] rounded-md text-[8px] font-bold text-white flex items-center justify-center">
                        Done
                      </div>
                    </div>
                  </div>
                )}

                {project.mockupType === "website" && (
                  <div className="relative w-full h-full bg-[#f4f2ec] p-4 flex flex-col justify-between overflow-hidden text-black">
                    <div className="flex items-center justify-between pb-2 border-b border-black/10">
                      <span className="font-serif text-xs font-bold text-neutral-900 tracking-wider">HAVEN HOMES</span>
                      <div className="flex gap-2 text-[8px] text-neutral-500 font-medium">
                        <span>Properties</span>
                        <span>About</span>
                      </div>
                    </div>
                    <div className="my-auto text-center py-2">
                      <h4 className="font-serif text-base sm:text-lg font-bold text-neutral-900 leading-tight">
                        Find Your<br />
                        <span className="italic font-normal text-neutral-600">Perfect Home</span>
                      </h4>
                      <div className="w-full h-16 bg-cover bg-center rounded-lg mt-2 shadow-inner" style={{ backgroundImage: `url(${project.image})` }} />
                    </div>
                    <div className="flex items-center justify-between text-[8px] text-neutral-500 font-mono">
                      <span>Luxury Living</span>
                      <span>Verified CMS</span>
                    </div>
                  </div>
                )}
              </a>

              {/* Title & Arrow Row */}
              <div className="flex items-center justify-between mt-4">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-extrabold text-black group-hover:text-[#ff4d29] transition-colors leading-tight"
                >
                  {project.title}
                </a>
                <span className="text-sm font-bold text-black group-hover:text-[#ff4d29] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                  ↗
                </span>
              </div>

              {/* Subtitle */}
              <p className="text-xs text-neutral-600 font-medium mt-1">
                {project.subtitle}
              </p>

              {/* Tag Badges */}
              <div className="flex flex-wrap items-center gap-1.5 mt-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold text-neutral-700 bg-[#f4ede4] border border-[#ebdcd0] px-2.5 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
