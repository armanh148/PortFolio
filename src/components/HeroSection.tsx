"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import type { SiteData } from "@/lib/siteData";

export default function HeroSection({ site }: { site: SiteData }) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Scroll Parallax Effects
  const nameY = useTransform(scrollY, [0, 700], [0, 160]);
  const nameOpacity = useTransform(scrollY, [0, 500], [0.95, 0.15]);
  const portraitY = useTransform(scrollY, [0, 700], [0, 80]);
  const bgGlowY = useTransform(scrollY, [0, 700], [0, 120]);

  const nameParts = site.name ? site.name.split(" ") : ["Arman", "Naqvi"];
  const firstName = nameParts[0] || "Arman";
  const lastName = nameParts.slice(1).join(" ") || "Naqvi";

  return (
    <section
      ref={containerRef}
      className="relative min-h-[76svh] sm:min-h-[92svh] md:min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-[#0a0a0d] text-white pt-16 sm:pt-20 md:pt-24 pb-4 sm:pb-8 md:pb-12 px-4 sm:px-8 md:px-12 select-none"
    >
      {/* ── 1. BACKGROUND GLOWS (Animated & Parallax) ── */}
      <motion.div
        style={{ y: bgGlowY }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Top-Left Blue Glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.35, 0.5, 0.35],
            x: [0, 25, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-[75%] sm:w-[60%] h-[70%] rounded-full bg-blue-600/40 blur-[130px] mix-blend-screen"
        />

        {/* Bottom-Right Rust/Orange Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.35, 0.5, 0.35],
            x: [0, -25, 0],
            y: [0, 15, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-24 -right-24 w-[80%] sm:w-[65%] h-[75%] rounded-full bg-[#c2410c]/35 blur-[140px] mix-blend-screen"
        />

        {/* Subtle Center Cyan Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />
      </motion.div>

      {/* ── 2. GIANT DISPLAY NAME (Positioned behind person's head like desktop) ── */}
      <motion.div
        style={{ y: nameY, opacity: nameOpacity }}
        className="absolute top-[23%] sm:top-[20%] md:top-[13%] inset-x-0 z-10 text-center pointer-events-none px-2"
      >
        <motion.h1
          initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
          animate={{ opacity: 0.95, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="font-sans font-black tracking-tighter text-white text-[clamp(2.7rem,12vw,16rem)] leading-[0.88] uppercase whitespace-nowrap drop-shadow-2xl"
        >
          {firstName} {lastName}
        </motion.h1>
      </motion.div>

      {/* ── 3. CENTER PORTRAIT (Overlaps the giant name with subtle parallax) ── */}
      <motion.div
        style={{ y: portraitY }}
        initial={{ opacity: 0, y: 100, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-full max-w-[1000px] h-[72vh] sm:h-[80vh] md:h-[100vh] min-h-[440px] sm:min-h-[480px] pointer-events-none"
      >
        <div className="relative w-full h-full">
          <Image
            src={site.heroImage || "/hero-img.png"}
            alt={`Portrait of ${site.name}`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-top filter brightness-105 contrast-110 drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)]"
            style={{
              maskImage: "linear-gradient(to bottom, black 82%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 82%, transparent 100%)",
            }}
          />
        </div>
      </motion.div>

      {/* ── 4. FOREGROUND INTERACTIVE CONTENT ── */}
      <div className="relative z-30 max-w-[1500px] mx-auto w-full px-4 sm:px-6 md:px-12 h-full flex-1 flex flex-col justify-between pt-8 sm:pt-16 md:pt-24 pb-2 sm:pb-3 pointer-events-auto">
        {/* Spacer to let giant name and portrait breathe */}
        <div className="h-10 sm:h-22 md:h-44" />

        {/* ── DESKTOP CONTENT ROW (hidden on mobile) ── */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 items-end w-full">
          {/* LEFT BLOCK: Bio & Social Circles */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 flex flex-col items-start gap-4"
          >
            <p className="text-xs sm:text-sm font-light leading-relaxed text-stone-300 max-w-xs backdrop-blur-md bg-black/45 p-4 rounded-2xl border border-white/10 shadow-lg shadow-black/40">
              I create interfaces that blend function with emotion, crafting digital experiences that feel intuitive, seamless, and meaningful.
            </p>

            {/* Social Icon Circles with Magnetic Hover */}
            <div className="flex items-center gap-2.5">
              {/* X / Twitter */}
              <motion.a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-full bg-[#2f66f6] text-white flex items-center justify-center hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-950/60"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-full bg-[#2f66f6] text-white flex items-center justify-center hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-950/60"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </motion.a>

              {/* YouTube */}
              <motion.a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-full bg-[#2f66f6] text-white flex items-center justify-center hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-blue-950/60"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          <div className="hidden md:block md:col-span-2" />

          {/* RIGHT BLOCK: Text & Pill CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 flex flex-col items-end gap-4 text-right"
          >
            <p className="text-xs sm:text-sm font-light leading-relaxed text-stone-300 max-w-xs backdrop-blur-md bg-black/45 p-4 rounded-2xl border border-white/10 shadow-lg shadow-black/40">
              Merging design thinking with human insight to create digital experiences that don&rsquo;t just look great — they perform effortlessly.
            </p>

            {/* "Let's Talk" Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#2f66f6] hover:bg-[#1d4ed8] text-white text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-full transition-all duration-300 shadow-xl shadow-blue-950/60 hover:shadow-blue-600/40 group"
              >
                Let&rsquo;s Talk
                <span className="w-7 h-7 rounded-full bg-white text-[#2f66f6] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110 font-bold text-sm">
                  ↗
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* ── MOBILE POLISHED BOTTOM DOCK (Face & portrait completely unobstructed) ── */}
        <div className="block md:hidden w-full mt-auto mb-0.5">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="w-full bg-[#0a0a0d]/85 backdrop-blur-xl border border-white/15 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.8)] relative overflow-hidden"
          >
            {/* Top glare line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2f66f6]/60 to-transparent" />

            {/* Status bar */}
            <div className="flex items-center justify-between mb-2">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for work
              </span>
              <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">
                Lahore, PK
              </span>
            </div>

            {/* Concise Bio */}
            <p className="text-[11.5px] sm:text-xs font-normal text-stone-200 leading-snug mb-2.5 sm:mb-3">
              Designing interfaces that blend emotion &amp; performance — crafting intuitive, high-speed web experiences.
            </p>

            {/* Bottom Row: Social Icons + Work Link */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <div className="flex items-center gap-1.5">
                {[
                  { label: "X", href: "https://x.com" },
                  { label: "In", href: "https://linkedin.com" },
                  { label: "Yt", href: "https://youtube.com" },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.9 }}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 border border-white/15 text-white flex items-center justify-center text-[10px] sm:text-[11px] font-bold"
                  >
                    {s.label}
                  </motion.a>
                ))}
              </div>

              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 sm:py-2 rounded-full bg-[#2f66f6] text-white shadow-md shadow-blue-900/50"
              >
                Explore Works ↗
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ── 5. SCROLL DOWN CUE PILL ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex justify-center items-center pt-1 sm:pt-4"
        >
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="group flex flex-col items-center gap-1 text-stone-400 hover:text-white transition-colors"
          >
            <span className="text-[8px] sm:text-[10px] font-bold tracking-[0.3em] uppercase opacity-75 group-hover:opacity-100 transition-opacity">
              Scroll Down
            </span>
            <div className="w-3.5 h-6 sm:w-5 sm:h-8 rounded-full border border-white/20 group-hover:border-[#2f66f6] flex items-start justify-center p-0.5 sm:p-1 transition-colors">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#2f66f6]"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
