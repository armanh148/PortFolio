"use client";

import { motion } from "framer-motion";

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

const TECH_STACK: TechItem[] = [
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00d8ff" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" stroke="#00d8ff" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" stroke="#00d8ff" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="1.8" fill="#00d8ff" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-black">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm2.7 13.8L9.2 8.3h1.8l4.4 6.2v-6.2h1.6v9.2h-1.6l-.7-1.7z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#539e43]">
        <path d="M12 2l8.5 5v10L12 22l-8.5-5V7L12 2zm0 2.3L5.5 8.1v7.8L12 19.7l6.5-3.8V8.1L12 4.3z" />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path d="M11.9 2c-3.1 0-5 1.4-5 3.4v2.5h5.1v.8H4.7c-2 0-3.7 1.2-3.7 3.4 0 2.1 1.7 3.5 3.7 3.5h1.7v-2.4c0-2.3 2-4.2 4.3-4.2h5.1V6.6c0-2.3-2-4.6-3.9-4.6zm-1.8 1.7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="#3776ab" />
        <path d="M12.1 22c3.1 0 5-1.4 5-3.4v-2.5H12v-.8h7.3c2 0 3.7-1.2 3.7-3.4 0-2.1-1.7-3.5-3.7-3.5h-1.7v2.4c0 2.3-2 4.2-4.3 4.2H8.2v2.4c0 2.3 2 4.6 3.9 4.6zm1.8-1.7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="#ffd343" />
      </svg>
    ),
  },
  {
    name: "React Native",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#00b4d8" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" stroke="#00b4d8" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" stroke="#00b4d8" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="1.5" fill="#00b4d8" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <div className="w-8 h-8 rounded-md bg-[#3178c6] flex items-center justify-center text-white font-mono font-bold text-xs">
        TS
      </div>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg viewBox="0 0 24 24" fill="#38bdf8" className="w-8 h-8">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "Firebase",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path d="M4.6 17.5l2.2-14.3a.7.7 0 0 1 1.3-.2l2.8 5.3L4.6 17.5z" fill="#ffc24a" />
        <path d="M14.2 9.2L11 3.2a.7.7 0 0 0-1.3 0L3.8 18.2l10.4-9z" fill="#ffa712" />
        <path d="M12.5 21.6a1.5 1.5 0 0 1-1 0L3.8 17.8 12 2.6l8.2 15.2-7.7 3.8z" fill="#f44336" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <svg viewBox="0 0 24 24" fill="#47a248" className="w-8 h-8">
        <path d="M12 22s5-3.5 5-9.5c0-4-2.5-7.5-5-10.5C9.5 5 7 8.5 7 12.5c0 6 5 9.5 5 9.5z" />
        <path d="M12 2v20" stroke="#fff" strokeWidth="0.8" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg viewBox="0 0 24 24" fill="#336791" className="w-8 h-8">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 15.5c-2.5 0-4-1.8-4-4.2 0-2.5 1.8-4.3 4.2-4.3 1.8 0 3.2 1 3.8 2.5l-1.5.8c-.4-.9-1.2-1.5-2.3-1.5-1.5 0-2.4 1.2-2.4 2.5s.9 2.5 2.4 2.5c1.2 0 2-.6 2.4-1.5l1.5.8c-.7 1.5-2.1 2.4-4.1 2.4z" />
      </svg>
    ),
  },
  {
    name: "Docker",
    icon: (
      <svg viewBox="0 0 24 24" fill="#2496ed" className="w-8 h-8">
        <path d="M22.5 10.5c-.3-1.2-1.2-2.1-2.4-2.3-.2 0-.4 0-.6.1-.5-1.5-1.9-2.5-3.5-2.3v1h-.9V5.5h-2.3v1.5h-.9V5.5H9.6v1.5h-.9V5.5H6.4v4H4.5C3.1 9.5 2 10.6 2 12c0 4.4 3.6 8 8 8 5.5 0 9.8-3.6 10.8-8.8 1.1-.1 1.9-.4 1.7-.7z" />
      </svg>
    ),
  },
  {
    name: "AWS",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <text x="3" y="14" fill="#232f3e" fontFamily="sans-serif" fontWeight="900" fontSize="11">AWS</text>
        <path d="M4 18 Q 12 22 20 17" stroke="#ff9900" strokeWidth="2" fill="none" strokeLinecap="round" />
        <polygon points="19,16 21,17.5 18.5,18.5" fill="#ff9900" />
      </svg>
    ),
  },
];

export default function SkillsTechnologiesSection() {
  return (
    <section
      id="services"
      className="relative w-full bg-[#fbf9f4] text-black py-12 sm:py-16 md:py-20 px-5 sm:px-8 md:px-12 lg:px-16 font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <div className="max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ── LEFT COLUMN: TITLE & DESCRIPTION ── */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black leading-tight mb-3">
              SKILLS &amp;<br />
              TECHNOLOGIES
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-medium max-w-sm">
              Tools and technologies I use to build modern, scalable and high-performing products.
            </p>
          </div>

          {/* ── RIGHT COLUMN: 12 FLOATING WHITE LOGO CARDS (2 rows of 6) ── */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
              {TECH_STACK.map((tech, idx) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className="bg-white hover:bg-[#fff9f5] border border-black/8 hover:border-[#ff4d29]/40 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md transition-all hover:-translate-y-1 group cursor-pointer aspect-square"
                >
                  <div className="transform group-hover:scale-110 transition-transform mb-2 sm:mb-2.5">
                    {tech.icon}
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-neutral-800 group-hover:text-black leading-tight tracking-tight">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

