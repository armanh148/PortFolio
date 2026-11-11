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
  github_url?: string;
  technologies: string;
  order: number;
  created_at?: string;
}

const CATEGORIES = ["All", "Next.js", "React", "Django", "Shopify"];

const FALLBACK_PROJECTS: Project[] = [
  {
    id: 1,
    title: "CGPlux Studios",
    description:
      "Cinematic and creative showcase web application featuring fluid GSAP scroll animations, dynamic media loading, and a headless Sanity CMS backend.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    live_url: "https://cgpluxstudios.com/",
    github_url: "https://github.com/armanh148",
    technologies: "Next.js, GSAP, Sanity CMS, Tailwind CSS",
    order: 1,
  },
  {
    id: 2,
    title: "Tawakkal",
    description:
      "Robust full-stack web application platforms with optimized deployment workflows, high-performance architecture, and seamless interactive user experiences.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    live_url: "https://tawakkal.store/",
    github_url: "https://github.com/armanh148",
    technologies: "React, Next.js, Node.js, Express.js, TypeScript",
    order: 2,
  },
  {
    id: 3,
    title: "Echo Pride",
    description:
      "Specialized logistics and business management web application designed for streamlined operations tracking, secure data handling, and transport management.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    live_url: "https://echopride.site/",
    github_url: "https://github.com/armanh148",
    technologies: "Django, Python, PostgreSQL, React, REST APIs",
    order: 3,
  },
  {
    id: 4,
    title: "Kynetic Wear",
    description:
      "Custom-built e-commerce storefronts featuring tailored checkout experiences, responsive apparel product grids, optimized performance, and modern UI layouts.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    live_url: "https://kyneticwear-store.myshopify.com/",
    github_url: "https://github.com/armanh148",
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
    <section className="relative py-12 sm:py-20 md:py-24 bg-white text-black px-5 sm:px-8 md:px-12 lg:px-16 select-none overflow-hidden selection:bg-[#ff4a00] selection:text-white">
      <div className="max-w-[1600px] mx-auto">
        {/* ── TOP BREADCRUMB + STATUS ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-2 text-xs font-['Space_Grotesk',sans-serif] font-bold text-neutral-500 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#ff4a00] transition-colors">
              HOME
            </Link>
            <span>/</span>
            <span className="text-black">PROJECTS</span>
          </div>

          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f8f8f9] border border-black/10 text-xs font-['Space_Grotesk',sans-serif] font-bold text-black uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#ff4a00] animate-pulse" />
            PRODUCTION BUILDS &amp; CLIENT PLATFORMS
          </span>
        </div>

        {/* ── HEADER ROW WITH EDITORIAL HEADLINE & FILTER PILLS ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10 mb-12 sm:mb-16 pb-10 border-b border-black/10">
          <div>
            <Reveal>
              <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-[#ff4a00] block mb-2 sm:mb-3">
                CURATED PORTFOLIO
              </span>
              <h1 className="font-['Anton',Impact,'Arial_Black',sans-serif] text-[clamp(3rem,8vw,8rem)] leading-[0.9] tracking-[-0.02em] uppercase text-black">
                SELECTED WORKS <br />
                <span className="text-[#ff4a00]">&amp; CASE STUDIES.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="font-['Space_Grotesk',sans-serif] text-sm sm:text-base md:text-lg text-neutral-700 max-w-xl leading-relaxed mt-4 sm:mt-6">
                A selection of full-stack client web applications, headless e-commerce platforms, and interactive experiences engineered for speed and scale.
              </p>
            </Reveal>
          </div>

          {/* Clean Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 shrink-0 max-w-full">
            {CATEGORIES.map((cat) => {
              const active = selectedFilter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedFilter(cat)}
                  className={`font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl border transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-sm ${
                    active
                      ? "bg-[#ff4a00] border-[#ff4a00] text-white shadow-md shadow-orange-500/20"
                      : "bg-[#f8f8f9] border-black/10 text-neutral-700 hover:border-black/30 hover:text-black hover:bg-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── PROJECTS GRID ── */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 sm:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                className="group flex flex-col justify-between bg-[#f8f8f9] border border-black/10 hover:border-[#ff4a00] rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-2xl hover:bg-white cursor-pointer"
              >
                <div>
                  {/* Image Container with Zoom & Badge */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-black/10 mb-6 bg-white shadow-inner">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                      />
                    )}

                    {/* Primary Tech Badge */}
                    <span className="absolute left-4 top-4 font-mono text-[10px] font-bold uppercase tracking-wider bg-black text-white px-3 py-1.5 rounded-full shadow-md">
                      {item.technologies.split(",")[0].trim()}
                    </span>

                    {/* Hover Circular Action Link */}
                    <a
                      href={item.live_url || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs"
                    >
                      <span className="h-14 w-14 rounded-full bg-[#ff4a00] text-white flex items-center justify-center font-bold text-xl shadow-xl shadow-orange-500/40 group-hover:scale-110 transition-transform">
                        ↗
                      </span>
                    </a>
                  </div>

                  {/* Title & Year */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-['Anton',Impact,sans-serif] text-2xl sm:text-3xl uppercase tracking-tight text-black group-hover:text-[#ff4a00] transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <span className="font-mono text-xs font-bold text-neutral-500">
                      {item.created_at
                        ? new Date(item.created_at).getFullYear()
                        : "2026"}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Tech Pills & Live Actions */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/10 mb-6">
                    {item.technologies.split(",").map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10.5px] px-2.5 py-1 rounded-md bg-white border border-black/10 text-neutral-800 font-semibold shadow-2xs group-hover:border-black/20"
                      >
                        {t.trim()}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-black/10">
                    <a
                      href={item.live_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-['Space_Grotesk',sans-serif] font-bold text-xs uppercase tracking-wider text-black group-hover:text-[#ff4a00] transition-colors"
                    >
                      <span>VISIT LIVE SITE</span>
                      <span>↗</span>
                    </a>

                    {item.github_url && (
                      <a
                        href={item.github_url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-black transition-colors"
                      >
                        GITHUB ↗
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── BOTTOM BRUTALIST CTA BANNER ── */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-black/10">
          <Reveal>
            <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#f8f8f9] border border-black/10 text-center shadow-lg">
              <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-[#ff4a00] block mb-2">
                HAVE A VISION IN MIND?
              </span>
              <h2 className="font-['Anton',Impact,sans-serif] text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-black mb-4">
                LET&rsquo;S BUILD YOUR NEXT SUCCESS STORY.
              </h2>
              <p className="font-['Space_Grotesk',sans-serif] text-xs sm:text-base text-neutral-600 max-w-xl mx-auto mb-8 leading-relaxed">
                Whether you need a high-performance Next.js application, custom Shopify store, or full-stack software development, let&rsquo;s connect.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#ff4a00] hover:bg-[#e04000] text-white font-['Space_Grotesk',sans-serif] font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg hover:scale-[1.02] cursor-pointer"
              >
                <span>START A PROJECT</span>
                <span>↗</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
