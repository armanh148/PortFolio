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

export default function AccordionProjectsSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch(`${API_BASE_URL}/projects/`);
        if (res.ok) {
          const data = await res.json();
          // Sort by order if needed, assuming backend already orders them
          setProjects(data.slice(0, 4)); // Get up to 4 projects for this section
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }
    fetchProjects();
  }, []);

  if (projects.length === 0) return null;

  return (
    <section className="relative py-20 md:py-28 px-6 md:px-12 bg-transparent text-[#F5F5F3] overflow-hidden">
      <div className="max-w-[1500px] mx-auto">
        
        {/* ── Top Section Header ── */}
        <div className="mb-10 md:mb-14">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#2f66f6]">
              OUR PROJECTS
            </span>
          </Reveal>
        </div>

        {/* ── Desktop Horizontal Accordion Layout ── */}
        <div className="hidden md:flex gap-4 lg:gap-6 h-[600px] lg:h-[640px] items-stretch">
          {projects.map((project, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => setActiveIndex(index)}
                layout
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                className={`relative rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between p-8 transition-shadow duration-500 ${
                  isActive
                    ? "flex-[2.4] shadow-2xl border border-white/20"
                    : "flex-1 bg-white/5 border border-white/10 hover:border-white/30"
                }`}
              >
                {/* ── Background Image & Dark Overlay for Active State ── */}
                <AnimatePresence mode="wait">
                  {isActive && project.image && (
                    <motion.div
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 z-0"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient overlay for perfect contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ── Top Header Area in Card ── */}
                <div className="relative z-10 flex justify-between items-start min-h-[24px]">
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[10px] uppercase font-bold tracking-[0.2em] px-3.5 py-1.5 rounded-full bg-[#2f66f6] text-white backdrop-blur-md shadow-md"
                    >
                      {project.technologies.split(',')[0]}
                    </motion.span>
                  )}
                </div>

                {/* ── Center Giant Display Number ── */}
                <div className="relative z-10 flex items-center justify-center my-auto pointer-events-none select-none">
                  <span
                    className={`font-sans font-light text-9xl lg:text-[180px] leading-none transition-colors duration-500 ${
                      isActive ? "text-white/95 drop-shadow-md" : "text-stone-500"
                    }`}
                  >
                    {index + 1}
                  </span>
                </div>

                {/* ── Bottom Content Row ── */}
                <div className="relative z-10 flex items-end justify-between gap-4">
                  <div>
                    <h3
                      className={`text-xl lg:text-2xl font-medium tracking-tight transition-colors duration-500 ${
                        isActive ? "text-white" : "text-[#F5F5F3]"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-xs lg:text-sm font-light mt-1 transition-colors duration-500 ${
                        isActive ? "text-stone-400" : "text-stone-400"
                      }`}
                    >
                      {project.description.slice(0, 50)}...
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <Link
                    href={project.live_url || "/projects"}
                    target="_blank"
                    className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                      isActive
                        ? "text-white bg-[#2f66f6] hover:bg-[#1d4ed8]"
                        : "text-stone-400 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span className="text-xl leading-none">↗</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Mobile Vertical Accordion Layout ── */}
        <div className="flex md:hidden flex-col gap-5">
          {projects.map((project, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={project.id}
                onClick={() => setActiveIndex(index)}
                className={`relative rounded-2xl overflow-hidden p-6 transition-all duration-500 ${
                  isActive
                    ? "h-[380px] text-white shadow-xl border border-white/20"
                    : "h-[180px] bg-white/5 border border-white/10 text-[#F5F5F3]"
                }`}
              >
                {isActive && project.image && (
                  <div className="absolute inset-0 z-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
                  </div>
                )}

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex justify-end">
                    <span
                      className={`text-6xl font-light ${
                        isActive ? "text-white/90" : "text-stone-500"
                      }`}
                    >
                      {index + 1}
                    </span>
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <h3
                        className={`text-xl font-medium ${
                          isActive ? "text-white" : "text-[#F5F5F3]"
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p
                        className={`text-xs ${
                          isActive ? "text-stone-400" : "text-stone-400"
                        }`}
                      >
                        {project.description.slice(0, 50)}...
                      </p>
                    </div>

                    <Link
                      href={project.live_url || "/projects"}
                      target="_blank"
                      className={`text-xl ${
                        isActive ? "text-white" : "text-stone-400"
                      }`}
                    >
                      ↗
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
