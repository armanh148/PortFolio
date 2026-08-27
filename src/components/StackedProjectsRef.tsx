"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const PROJECTS_STACK = [
  {
    num: "01",
    title: "Maison Aurelle",
    meta: "2026 • E-Commerce • Next.js",
    description: "A boutique luxury furniture store with dynamic layout transitions, headless cart integration, and ultra-fast page speed.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80",
    link: "/projects",
  },
  {
    num: "02",
    title: "Studio Nordhaus",
    meta: "2025 • Branding • WordPress",
    description: "Editorial agency platform built on custom WordPress block architecture with immersive grid crosshairs and smooth scroll.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&q=80",
    link: "/projects",
  },
  {
    num: "03",
    title: "Healio",
    meta: "2025 • Medical • Mobile App",
    description: "A Patient-Centered App With Simple Navigation And Calming Visuals Focused On Healthcare Accessibility.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80",
    link: "/projects",
  },
  {
    num: "04",
    title: "Atelier Rizoma",
    meta: "2024 • UI/UX • Design System",
    description: "Component design system and design token library built for scaling multi-brand web applications with total visual rhythm.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=900&q=80",
    link: "/projects",
  },
];

export default function StackedProjectsRef() {
  const [activeIndex, setActiveIndex] = useState(2); // Default active card

  return (
    <section className="relative py-24 px-6 md:px-12 bg-[#0047bb] text-white overflow-hidden">
      <div className="max-w-[1500px] mx-auto">
        
        {/* ── Top Header Row ── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-blue-200">
              PROJECTS
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white max-w-2xl text-left md:text-right leading-tight">
              Designs That Blend <br />
              <span className="italic font-light opacity-90">Creativity &amp; Functionality</span>
            </h2>
          </Reveal>
        </div>

        {/* ── Stacked Deck Cards Container ── */}
        <div className="relative pt-6 pb-12 flex flex-col items-center">
          {PROJECTS_STACK.map((project, i) => {
            const isFront = activeIndex === i;
            const offset = (i - activeIndex) * 28; // Vertical offset stacking
            const scale = 1 - Math.abs(i - activeIndex) * 0.04; // Scale down stacked cards

            return (
              <motion.div
                key={project.num}
                onClick={() => setActiveIndex(i)}
                initial={false}
                animate={{
                  y: offset,
                  scale: scale,
                  zIndex: PROJECTS_STACK.length - Math.abs(i - activeIndex),
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`w-full max-w-[1250px] rounded-3xl bg-[#f8f7f3] text-ink p-8 md:p-14 shadow-2xl border border-black/5 cursor-pointer transition-shadow hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] ${
                  i > 0 ? "-mt-40 md:-mt-52" : ""
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
                  
                  {/* Left Column: Metadata, Title, Description, Button */}
                  <div className="lg:col-span-6 flex flex-col items-start justify-between min-h-[300px]">
                    <div>
                      {/* Number Pill Oval Badge */}
                      <span className="inline-flex items-center justify-center border border-blue-900/20 text-blue-900 text-xs font-mono font-bold px-4 py-1.5 rounded-full mb-8">
                        {project.num}
                      </span>

                      {/* Meta Tags */}
                      <p className="text-xs font-semibold text-blue-900 tracking-wider uppercase mb-2">
                        {project.meta}
                      </p>

                      {/* Title in Elegant Serif Font */}
                      <h3 className="font-serif text-3xl sm:text-5xl font-normal text-blue-950 tracking-tight mb-4">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed max-w-md mb-8">
                        {project.description}
                      </p>
                    </div>

                    {/* View Case Study Button */}
                    <Link
                      href={project.link}
                      className="inline-flex items-center gap-3 border border-blue-900/30 text-blue-950 hover:bg-blue-900 hover:text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 group"
                    >
                      VIEW CASE STUDY
                      <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>

                  {/* Right Column: High-Res Project Image Card */}
                  <div className="lg:col-span-6">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-black/5 group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
