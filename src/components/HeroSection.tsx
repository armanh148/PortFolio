"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { SiteData } from "@/lib/siteData";

export default function HeroSection({ site }: { site: SiteData }) {
  const nameParts = site.name ? site.name.split(" ") : ["Arman", "Naqvi"];
  const firstName = nameParts[0] || "Arman";
  const lastName = nameParts.slice(1).join(" ") || "Naqvi";

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0a0a0d] text-white pt-24 pb-12 px-6 md:px-12 select-none">
      {/* ── 1. BACKGROUND GLOWS (Matching reference image) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Top-Left Blue Glow */}
        <div className="absolute -top-32 -left-32 w-[60%] h-[70%] rounded-full bg-blue-600/40 blur-[150px] mix-blend-screen" />

        {/* Bottom-Right Orange/Rust Glow */}
        <div className="absolute -bottom-32 -right-32 w-[70%] h-[80%] rounded-full bg-[#c2410c]/40 blur-[150px] mix-blend-screen" />
      </div>

      {/* ── 2. GIANT DISPLAY NAME (Sits behind the portrait) ── */}
      <div className="absolute top-[12%] inset-x-0 z-10 text-center pointer-events-none">
        <motion.h1 
          initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
          animate={{ opacity: 0.95, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="font-sans font-black tracking-tighter text-white text-[clamp(4.5rem,14.5vw,16rem)] leading-[0.85] uppercase whitespace-nowrap"
        >
          {firstName} {lastName}
        </motion.h1>
      </div>

      {/* ── 3. CENTER PORTRAIT (Overlaps the giant name) ── */}
      <motion.div 
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-full max-w-[1000px] h-[100vh] min-h-[480px] pointer-events-none"
      >
        <div className="relative w-full h-full">
          <Image
            src={site.heroImage || "/hero-img.png"}
            alt={`Portrait of ${site.name}`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-top filter brightness-105 contrast-110"
            style={{
              maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
            }}
          />
        </div>
      </motion.div>

      {/* ── 4. FOREGROUND INTERACTIVE CONTENT (Left & Right Blocks) ── */}
      <div className="relative z-30 max-w-[1500px] mx-auto w-full px-6 md:px-12 h-full flex-1 flex flex-col justify-between pt-16 md:pt-24 pb-4 pointer-events-auto">
        {/* Spacer for top name */}
        <div className="h-24 sm:h-32 md:h-40" />

        {/* Content Row: Left Social & Text | Right Text & CTA */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end w-full">
          {/* LEFT BLOCK: Bio & Social Circles */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 flex flex-col items-start gap-5"
          >
            <p className="text-xs sm:text-sm font-light leading-relaxed text-white/80 max-w-xs backdrop-blur-xs bg-black/20 p-2 rounded-xl">
              I create interfaces that blend function with emotion, crafting digital experiences that feel intuitive, seamless, and meaningful.
            </p>

            {/* Social Icon Circles (Electric Orange #FF4600) */}
            <div className="flex items-center gap-3">
              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="w-10 h-10 rounded-full bg-[#2f66f6] text-white flex items-center justify-center hover:bg-[#1d4ed8] hover:scale-110 transition-all shadow-lg shadow-blue-950/40"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#2f66f6] text-white flex items-center justify-center hover:bg-[#1d4ed8] hover:scale-110 transition-all shadow-lg shadow-blue-950/40"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-[#2f66f6] text-white flex items-center justify-center hover:bg-[#1d4ed8] hover:scale-110 transition-all shadow-lg shadow-blue-950/40"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </motion.div>

          <div className="hidden md:block md:col-span-2" />

          {/* RIGHT BLOCK: Text & Orange Pill CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-5 flex flex-col items-start md:items-end gap-5 text-left md:text-right"
          >
            <p className="text-xs sm:text-sm font-light leading-relaxed text-white/80 max-w-xs backdrop-blur-xs bg-black/20 p-3 rounded-xl">
              Merging design thinking with human insight to create digital experiences that don&rsquo;t just look great — they perform effortlessly.
            </p>

            {/* "Let's Talk" Orange Pill Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#2f66f6] hover:bg-[#1d4ed8] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 shadow-xl shadow-blue-950/40 hover:scale-105 group"
            >
              Let&rsquo;s Talk
              <span className="w-7 h-7 rounded-full bg-white text-[#2f66f6] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 font-bold text-sm">
                ↗
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
