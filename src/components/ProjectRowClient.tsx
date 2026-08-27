"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/siteData";

const ease = [0.22, 1, 0.36, 1] as const;

const PROJECT_IMAGES = [
  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
  "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
];

export default function ProjectRowClient({ projects }: { projects: Project[] }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [hoverImg, setHoverImg] = useState<string | null>(null);

  return (
    <div>
      {projects.slice(0, 5).map((project, i) => (
        <div
          key={project.title}
          className="group relative grid cursor-pointer grid-cols-[1fr_auto] border-b border-white/8 transition-colors duration-300 hover:bg-white/[0.02]"
          onMouseEnter={() => {
            setActiveIdx(i);
            setHoverImg(PROJECT_IMAGES[i % PROJECT_IMAGES.length]);
          }}
          onMouseLeave={() => {
            setActiveIdx(null);
            setHoverImg(null);
          }}
        >
          {/* Left: metadata */}
          <div className="px-5 py-7 md:px-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-smoke/50">
              Features
            </p>
            <p className="mt-1 text-base font-semibold text-ember transition-colors duration-300 group-hover:text-ember md:text-lg">
              {project.title}
            </p>

            <div className="mt-4 flex items-center gap-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-smoke/40">Where</p>
                <p className="mt-0.5 text-sm font-medium uppercase tracking-wide text-snow/80">
                  Lahore
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-smoke/40">Year</p>
                <p className="mt-0.5 text-sm font-medium text-snow/80">{project.year || "2025"}</p>
              </div>
            </div>
          </div>

          {/* Right: full-width project image (revealed on hover) */}
          <div className="relative hidden overflow-hidden md:block" style={{ width: "55%" }}>
            <AnimatePresence>
              {activeIdx === i && hoverImg && (
                <motion.img
                  key={hoverImg}
                  src={hoverImg}
                  alt={project.title}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease }}
                  className="h-full w-full object-cover"
                  style={{ minHeight: "160px" }}
                />
              )}
            </AnimatePresence>
            {activeIdx !== i && (
              <div className="h-full min-h-[160px] w-full bg-white/[0.03]" />
            )}
          </div>

          {/* Arrow button â€” absolute center between columns */}
          <div className="absolute bottom-6 left-[calc(45%-28px)] hidden md:flex">
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-charcoal text-smoke transition-colors duration-300 group-hover:border-ember/40 group-hover:text-ember"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-4 w-4 -rotate-45">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
}

