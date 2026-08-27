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
  github_url: string;
  technologies: string;
  order: number;
  created_at?: string;
}

const CATEGORIES = ["All", "Design", "Research", "Brand", "Development"];

export default function ProjectsFilter() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch(`${API_BASE_URL}/projects/`);
        if (res.ok) {
          const data = await res.json();
          setProjects(data);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }
    fetchProjects();
  }, []);

  const filtered = selectedFilter === "All"
    ? projects
    : projects.filter(p => p.technologies.toLowerCase().includes(selectedFilter.toLowerCase()));

  return (
    <section className="relative py-24 bg-transparent text-[#F5F5F3] px-6 md:px-12">
      {/* Corner crosshairs */}
      <span className="cross-mark text-white/20" style={{ left: "20px", top: "20px" }}>+</span>
      <span className="cross-mark text-white/20" style={{ right: "20px", top: "20px" }}>+</span>

      <div className="max-w-[1500px] mx-auto">
        {/* Header and filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <Reveal>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#2f66f6] block mb-3">
                Portfolio Showcase
              </span>
              <h2 className="display-section text-white">
                Selected Works <br/>
                <span className="text-[#2f66f6]">&amp; Case Studies</span>
              </h2>
            </Reveal>
          </div>

          {/* Clean Category Filters */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`text-[12px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full border transition-all ${
                  selectedFilter === cat
                    ? "bg-[#2f66f6] border-[#2f66f6] text-white"
                    : "bg-white/5 border-white/10 text-stone-400 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project grid with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col"
              >
                {/* Image Container with Zoom effect */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 mb-4 bg-white/5 shadow-sm">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  {/* Category/Badges */}
                  <span className="absolute left-4 top-4 text-[10px] font-bold uppercase tracking-widest bg-[#2f66f6] text-white px-3 py-1 rounded-full">
                    {item.technologies.split(',')[0]}
                  </span>
                  
                  {/* Arrow overlay hover */}
                  <a href={item.live_url || "#"} target="_blank" rel="noreferrer" className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="h-12 w-12 rounded-full bg-[#2f66f6] text-white flex items-center justify-center font-bold text-lg hover:scale-110 transition-transform">
                      ↗
                    </span>
                  </a>
                </div>

                {/* Metadata */}
                <div className="flex items-center justify-between mb-1 px-1">
                  <h3 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-[#2f66f6] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs font-bold text-stone-500">
                    {item.created_at ? new Date(item.created_at).getFullYear() : "2026"}
                  </span>
                </div>

                <div className="flex gap-2 px-1 flex-wrap">
                  {item.technologies.split(',').map(t => (
                    <span key={t} className="text-[10px] font-bold tracking-wider text-[#2f66f6]">
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
