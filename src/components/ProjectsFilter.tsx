"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";
import { API_BASE_URL } from "@/lib/api";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string | null;
  live_url: string;
  github_url?: string;
  technologies: string;
  order: number;
  created_at?: string;
}

const CATEGORIES = ["All", "Next.js", "React", "Django", "Shopify"];

const FALLBACK_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Ecotexinc",
    description: "Cinematic and creative showcase web application featuring fluid GSAP scroll animations, dynamic media loading, and a headless Sanity CMS backend.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    live_url: "https://cgpluxstudios.com/",
    github_url: "https://github.com/armanh148",
    technologies: "Next.js, GSAP, Sanity CMS, Tailwind CSS",
    order: 1,
  },
  {
    id: 2,
    title: "Tawakkal",
    description: "Robust full-stack web application platforms with optimized deployment workflows, high-performance architecture, and seamless interactive user experiences.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    live_url: "https://tawakkal.store/",
    technologies: "React, Next.js, Node.js, Express.js, TypeScript",
    order: 2,
  },
  {
    id: 3,
    title: "Echo Pride",
    description: "Specialized logistics and business management web application designed for streamlined operations tracking, secure data handling, and transport management.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    live_url: "https://echopride.site/",
    technologies: "Django, Python, PostgreSQL, React, REST APIs",
    order: 3,
  },
  {
    id: 4,
    title: "Kynetic Wear",
    description: "Custom-built e-commerce storefronts featuring tailored checkout experiences, responsive apparel product grids, optimized performance, and modern UI layouts.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    live_url: "https://kyneticwear-store.myshopify.com/",
    technologies: "Shopify Liquid, Tailwind CSS, JavaScript, E-commerce",
    order: 4,
  },
];

export default function ProjectsFilter() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [projects, setProjects] = useState<Project[]>(FALLBACK_PROJECTS);

  useEffect(() => {
    async function fetchProjects() {
      if (!process.env.NEXT_PUBLIC_API_URL) return;
      try {
        const res = await fetch(`${API_BASE_URL}/projects/`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setProjects(data);
          }
        }
      } catch (error) {
        console.warn("Using offline project catalog:", error);
      }
    }
    fetchProjects();
  }, []);

  const filtered =
    selectedFilter === "All"
      ? projects
      : projects.filter((p) =>
          p.technologies.toLowerCase().includes(selectedFilter.toLowerCase())
        );

  return (
    <section className="relative py-12 sm:py-20 md:py-24 bg-[#09090b] text-white px-4 sm:px-6 md:px-12">
      {/* Corner crosshairs */}
      <span className="cross-mark text-white/20" style={{ left: "20px", top: "20px" }}>+</span>
      <span className="cross-mark text-white/20" style={{ right: "20px", top: "20px" }}>+</span>

      <div className="max-w-[1500px] mx-auto">
        {/* Header and filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-16">
          <div>
            <Reveal>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#dc2626] block mb-2 sm:mb-3">
                Portfolio Showcase
              </span>
              <h2 className="display-section text-white text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight">
                Selected Works <br />
                <span className="text-[#dc2626]">&amp; Case Studies</span>
              </h2>
            </Reveal>
          </div>

          {/* Clean Category Filters in ONE SINGLE LINE */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 overflow-x-auto no-scrollbar py-1 shrink-0 max-w-full">
            {CATEGORIES.map((cat) => {
              const active = selectedFilter === cat;
              return (
                <motion.button
                  key={cat}
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedFilter(cat)}
                  className={`text-[11px] sm:text-[12px] font-bold uppercase tracking-wider px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full border transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    active
                      ? "bg-[#dc2626] border-[#dc2626] text-white shadow-lg shadow-red-600/30"
                      : "bg-[#0e0f15] border-white/10 text-zinc-300 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {cat}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Project grid with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -20 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col cursor-pointer"
              >
                {/* Image Container with Zoom effect */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 mb-4 bg-[#13141c] shadow-xl">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                    />
                  )}
                  {/* Category/Badges */}
                  <span className="absolute left-4 top-4 text-[10px] font-bold uppercase tracking-widest bg-[#dc2626] text-white px-3.5 py-1.5 rounded-full shadow-md">
                    {item.technologies.split(",")[0]}
                  </span>

                  {/* Arrow overlay hover with magnetic feel */}
                  <a
                    href={item.live_url || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs"
                  >
                    <motion.span
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      className="h-14 w-14 rounded-full bg-[#dc2626] text-white flex items-center justify-center font-bold text-xl shadow-xl shadow-red-600/40"
                    >
                      ↗
                    </motion.span>
                  </a>
                </div>

                {/* Metadata */}
                <div className="flex items-center justify-between mb-1 px-1">
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight group-hover:text-[#dc2626] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono text-zinc-500">
                    {item.created_at
                      ? new Date(item.created_at).getFullYear()
                      : "2026"}
                  </span>
                </div>

                <div className="flex gap-2 px-1 flex-wrap mt-1">
                  {item.technologies.split(",").map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono font-medium tracking-wider text-blue-400"
                    >
                      /{t.trim()}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
