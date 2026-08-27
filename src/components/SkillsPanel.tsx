"use client";

import { motion } from "framer-motion";
import type { Skill } from "@/lib/siteData";

const ease = [0.22, 1, 0.36, 1] as const;

export default function SkillsPanel({ skills }: { skills: Skill[] }) {
  return (
    <div className="flex flex-col gap-7">
      {skills.map((skill, i) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.06 * i, ease }}
          className="flex flex-col gap-2.5"
        >
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-snow">
              {skill.name}
            </span>
            <span className="font-serif text-lg text-smoke">{skill.level}%</span>
          </div>
          <div className="h-px w-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1.1, delay: 0.15 + 0.06 * i, ease }}
              className="h-full bg-crimson"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

