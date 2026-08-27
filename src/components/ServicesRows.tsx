"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";

import { API_BASE_URL } from "@/lib/api";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string;
  order: number;
}

export default function ServicesRows() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await fetch(`${API_BASE_URL}/services/`);
        if (res.ok) {
          const data = await res.json();
          setServices(data);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    }
    fetchServices();
  }, []);

  return (
    <section className="relative py-24 bg-transparent text-[#F5F5F3] border-b border-white/10 px-6 md:px-12">
      {/* Corner crosshairs */}
      <span className="cross-mark text-white/20" style={{ left: "20px", top: "20px" }}>+</span>
      <span className="cross-mark text-white/20" style={{ right: "20px", top: "20px" }}>+</span>

      <div className="max-w-[1500px] mx-auto">
        {/* Centered Top Badge */}
        <div className="flex justify-center mb-6">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-stone-400 font-medium uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2f66f6]" />
              Services
            </span>
          </Reveal>
        </div>

        {/* Header Title */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F5F3] leading-tight tracking-tight uppercase">
              Designing digital experiences that feel simple & human
            </h2>
          </Reveal>
        </div>

        {/* Subtitle Description */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Reveal delay={0.1}>
            <p className="text-stone-400 font-light text-sm sm:text-base leading-relaxed">
              I help brands and startups create intuitive, visually engaging, and user-focused digital products that balance aesthetics with usability.
            </p>
          </Reveal>
        </div>

        {/* Start a project Pill Button */}
        <div className="flex justify-center mb-20">
          <Reveal delay={0.15}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2f66f6] hover:bg-[#1d4ed8] text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-900/20"
            >
              Start a project ↗
            </Link>
          </Reveal>
        </div>

        {/* Services Rows List */}
        <div className="flex flex-col border-t border-white/10">
          {services.map((srv, i) => (
            <div
              key={srv.id}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group border-b border-white/10 transition-colors hover:bg-white/[0.02] px-4"
            >
              <Reveal delay={i * 0.05}>
                <Link
                  href="#projects"
                  className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-10"
                >
                  {/* Left: Index, Title & Description */}
                  <div className="flex-1 max-w-3xl">
                    <div className="flex items-baseline gap-3 mb-3">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#F5F5F3] tracking-tight uppercase group-hover:text-[#2f66f6] transition-colors">
                        0{i + 1} — {srv.title}
                      </h3>
                      {srv.icon && (
                        <span className="text-xs font-mono text-stone-500 bg-white/10 px-2 py-1 rounded">
                          {srv.icon}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed max-w-2xl mb-4">
                      {srv.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {srv.features.split(',').map((f, fIdx) => (
                        <span key={fIdx} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-[#2f66f6]/10 text-[#2f66f6] rounded-md">
                          {f.trim()}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Floating Previews & Arrow */}
                  <div className="flex items-center gap-6 shrink-0 relative">
                    <AnimatePresence>
                      {hoveredIdx === i && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, x: 20 }}
                          animate={{ opacity: 1, scale: 1, x: 0 }}
                          exit={{ opacity: 0, scale: 0.8, x: 20 }}
                          transition={{ duration: 0.3 }}
                          className="hidden lg:flex items-center gap-4 z-10 mr-4"
                        >
                           <div className={`w-44 h-32 rounded-xl overflow-hidden border border-white/15 shadow-xl relative transform bg-zinc-800 flex items-center justify-center`}>
                              <span className="text-[#2f66f6] font-bold">Preview coming soon</span>
                           </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Arrow Icon */}
                    <span className="text-2xl sm:text-3xl text-stone-400 group-hover:text-white transition-colors">
                      ↗
                    </span>
                  </div>
                </Link>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
