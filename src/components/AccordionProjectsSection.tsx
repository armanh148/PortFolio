"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";
import { API_BASE_URL } from "@/lib/api";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string | null;
  live_url: string;
  github_url: string;
  technologies: string;
  order: number;
}

const DEFAULT_PROJECTS: Project[] = [
  {
    id: 1,
    title: "CGPlux Studios",
    description: "Cinematic creative showcase web application featuring fluid GSAP animations, dynamic media loading, and a headless Sanity CMS backend.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80",
    live_url: "https://github.com/armanh148",
    github_url: "https://github.com/armanh148",
    technologies: "Next.js, GSAP, Sanity CMS, Tailwind CSS",
    order: 1,
  },
  {
    id: 2,
    title: "Tawakkal & Echo Pride",
    description: "Robust full-stack enterprise web platforms with optimized deployment workflows, scalable architecture, and seamless interactive user experiences.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    live_url: "https://github.com/armanh148",
    github_url: "https://github.com/armanh148",
    technologies: "React, Next.js, Node.js, Express.js, TypeScript",
    order: 2,
  },
  {
    id: 3,
    title: "Al-Hadi Logistics",
    description: "Specialized logistics and fleet management web application designed for real-time operations tracking, secure data handling, and transport routing.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
    live_url: "https://github.com/armanh148",
    github_url: "https://github.com/armanh148",
    technologies: "Django, Python, PostgreSQL, React, REST APIs",
    order: 3,
  },
  {
    id: 4,
    title: "Kynetic Wear & Ecotexinc",
    description: "Custom-built e-commerce storefronts featuring tailored checkout experiences, responsive apparel product grids, optimized speed, and modern UI layouts.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    live_url: "https://github.com/armanh148",
    github_url: "https://github.com/armanh148",
    technologies: "Shopify Liquid, Tailwind CSS, JavaScript, E-commerce",
    order: 4,
  },
];

export default function AccordionProjectsSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [projects, setProjects] = useState<Project[]>(DEFAULT_PROJECTS);

  useEffect(() => {
    async function fetchProjects() {
      if (!process.env.NEXT_PUBLIC_API_URL) return;
      try {
        const res = await fetch(`${API_BASE_URL}/projects/`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setProjects(data.slice(0, 4));
          }
        }
      } catch (error) {
        console.warn("Using offline projects catalog:", error);
      }
    }
    fetchProjects();
  }, []);

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-[#09090b] text-white border-b border-white/10 overflow-hidden select-none">
      <div className="max-w-[1500px] mx-auto">
        {/* ── Top Section Header ── */}
        <div className="mb-10 sm:mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/30 bg-red-950/40 text-xs text-[#dc2626] font-semibold uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] animate-pulse" />
              Selected Works
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              Featured <span className="text-[#dc2626]">Projects</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-[#dc2626] transition-colors group"
            >
              <span>View all projects</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>
        </div>

        {/* ── Desktop Horizontal Accordion Layout ── */}
        <div className="hidden md:flex gap-4 lg:gap-6 h-[620px] lg:h-[660px] items-stretch">
          {projects.map((project, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => setActiveIndex(index)}
                layout
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className={`relative rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between p-8 transition-all duration-500 ${
                  isActive
                    ? "flex-[2.6] shadow-[0_20px_60px_-15px_rgba(220,38,38,0.35)] border-2 border-[#dc2626]"
                    : "flex-1 bg-[#0e0f15] border border-white/10 hover:border-white/20 hover:bg-[#13141c]"
                }`}
              >
                {/* Background Image & Dark Overlay */}
                <AnimatePresence mode="wait">
                  {isActive && project.image && (
                    <motion.div
                      initial={{ opacity: 0, scale: 1.06 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.55 }}
                      className="absolute inset-0 z-0"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover filter brightness-95"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Top Header Area in Card */}
                <div className="relative z-10 flex justify-between items-start min-h-[28px]">
                  {isActive ? (
                    <motion.span
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="text-[10px] uppercase font-bold tracking-[0.2em] px-4 py-1.5 rounded-full bg-[#dc2626] text-white backdrop-blur-md shadow-lg shadow-red-900/40"
                    >
                      {project.technologies.split(",")[0]}
                    </motion.span>
                  ) : (
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                      0{index + 1}
                    </span>
                  )}
                </div>

                {/* Center Giant Display Number */}
                <div className="relative z-10 flex items-center justify-center my-auto pointer-events-none select-none">
                  <motion.span
                    animate={{ scale: isActive ? 1.05 : 1 }}
                    transition={{ duration: 0.4 }}
                    className={`font-sans font-light text-8xl lg:text-[170px] leading-none transition-colors duration-500 ${
                      isActive
                        ? "text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                        : "text-white/10 group-hover:text-white/20"
                    }`}
                  >
                    {index + 1}
                  </motion.span>
                </div>

                {/* Bottom Content Row */}
                <div className="relative z-10 flex items-end justify-between gap-4">
                  <div>
                    <h3
                      className={`text-xl lg:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                        isActive ? "text-white" : "text-zinc-200"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-xs lg:text-sm font-light mt-1.5 transition-colors duration-300 max-w-sm line-clamp-2 ${
                        isActive ? "text-zinc-200" : "text-zinc-400"
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>

                  <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
                    <Link
                      href={project.live_url || "/projects"}
                      target="_blank"
                      className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                        isActive
                          ? "text-white bg-[#dc2626] hover:bg-[#b91c1c] shadow-lg shadow-red-600/30"
                          : "text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10 bg-white/5"
                      }`}
                    >
                      <span className="text-xl leading-none">↗</span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Mobile Vertical Accordion Layout (Silky tap expand & collapse) ── */}
        <div className="flex md:hidden flex-col gap-3">
          {projects.map((project, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={project.id}
                onClick={() => setActiveIndex(index)}
                layout
                transition={{ type: "spring", stiffness: 240, damping: 25 }}
                className={`relative rounded-2xl overflow-hidden transition-all duration-400 cursor-pointer ${
                  isActive
                    ? "h-[340px] border-2 border-[#dc2626] shadow-xl shadow-red-600/25"
                    : "h-[84px] bg-[#0e0f15] border border-white/10 hover:border-white/20"
                }`}
              >
                {/* Background Image on Active */}
                {isActive && project.image && (
                  <div className="absolute inset-0 z-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/30" />
                  </div>
                )}

                <div className="relative z-10 h-full p-5 flex flex-col justify-between">
                  {/* Top Bar on Mobile */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono font-bold text-[#dc2626]">
                        0{index + 1}
                      </span>
                      {!isActive && (
                        <h4 className="text-base font-bold text-white truncate max-w-[200px]">
                          {project.title}
                        </h4>
                      )}
                      {isActive && (
                        <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-[#dc2626] text-white">
                          {project.technologies.split(",")[0]}
                        </span>
                      )}
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-colors ${
                        isActive
                          ? "bg-[#dc2626] text-white"
                          : "bg-white/5 text-zinc-300 border border-white/10"
                      }`}
                    >
                      {isActive ? "↗" : "+"}
                    </div>
                  </div>

                  {/* Bottom Content when Active */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-end justify-between pt-4"
                    >
                      <div className="pr-4">
                        <h3 className="text-xl font-bold text-white leading-tight mb-1">
                          {project.title}
                        </h3>
                        <p className="text-xs text-zinc-200 line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      <Link
                        href={project.live_url || "/projects"}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        className="shrink-0 px-4 py-2 rounded-xl bg-[#dc2626] text-white text-xs font-bold uppercase tracking-wider shadow-md"
                      >
                        View ↗
                      </Link>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
