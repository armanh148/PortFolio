"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/lib/siteData";
import ProjectCard from "./ProjectCard";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProjectGrid({
  projects,
  categories,
}: {
  projects: Project[];
  categories: readonly string[];
}) {
  const [filter, setFilter] = useState<string>("All");

  const visible =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {categories.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`cursor-pointer rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
              filter === f
                ? "border-crimson bg-crimson text-snow"
                : "border-white/15 text-smoke hover:border-snow hover:text-snow"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.5, delay: 0.04 * i, ease }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}

