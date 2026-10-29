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
      className="relative min-h-[90svh] sm:min-h-[94svh] md:min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-[#ffffff] text-[#0f172a] pt-16 sm:pt-20 md:pt-24 pb-3 sm:pb-6 md:pb-12 px-4 sm:px-8 md:px-12 select-none"
    >
      {/* ── 1. BACKGROUND GLOWS (Red & Dark Blue Ambient Lighting) ── */}
      <motion.div
        style={{ y: bgGlowY }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Top-Left Dark Navy / Blue Glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.35, 0.5, 0.35],
            x: [0, 25, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-[75%] sm:w-[60%] h-[70%] rounded-full bg-blue-600/18 blur-[140px] mix-blend-multiply"
        />

        {/* Bottom-Right Crimson Red Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.35, 0.5, 0.35],
            x: [0, -25, 0],
            y: [0, 15, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-24 -right-24 w-[80%] sm:w-[65%] h-[75%] rounded-full bg-red-600/18 blur-[150px] mix-blend-multiply"
        />

        {/* Subtle Center Navy Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-indigo-500/10 blur-[130px] pointer-events-none" />
      </motion.div>

      {/* ── 2. GIANT DISPLAY NAME (Positioned behind person's head like desktop) ── */}
      <motion.div
        style={{ y: nameY, opacity: nameOpacity }}
        className="absolute top-[18%] sm:top-[16%] md:top-[13%] inset-x-0 z-10 text-center pointer-events-none px-2"
      >
        <motion.h1
          initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
          animate={{ opacity: 0.95, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="font-sans font-black tracking-tighter text-[#0f172a] text-[clamp(2.8rem,13vw,16rem)] leading-[0.88] uppercase whitespace-nowrap drop-shadow-sm"
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
            className="object-cover object-top filter contrast-105 drop-shadow-[0_15px_30px_rgba(15,23,42,0.18)]"
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
            <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-700 max-w-xs backdrop-blur-md bg-white/85 p-4 rounded-2xl border border-slate-200/90 shadow-lg shadow-slate-200/50">
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
                className="w-11 h-11 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center hover:bg-[#dc2626] transition-colors shadow-lg shadow-blue-900/20"
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
                className="w-11 h-11 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center hover:bg-[#dc2626] transition-colors shadow-lg shadow-blue-900/20"
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
                className="w-11 h-11 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center hover:bg-[#dc2626] transition-colors shadow-lg shadow-blue-900/20"
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
            <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-700 max-w-xs backdrop-blur-md bg-white/85 p-4 rounded-2xl border border-slate-200/90 shadow-lg shadow-slate-200/50">
              Merging design thinking with human insight to create digital experiences that don&rsquo;t just look great — they perform effortlessly.
            </p>

            {/* "Let's Talk" Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-full transition-all duration-300 shadow-xl shadow-red-600/30 group"
              >
                Let&rsquo;s Talk
                <span className="w-7 h-7 rounded-full bg-white text-[#dc2626] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110 font-bold text-sm">
                  ↗
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* ── MOBILE POLISHED BOTTOM DOCK (Face & portrait completely unobstructed) ── */}
        <div className="block md:hidden w-full mt-auto mb-1">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="w-full bg-white/92 backdrop-blur-2xl border border-slate-200/90 p-4 rounded-2xl shadow-[0_20px_50px_rgba(15,23,42,0.12)] relative overflow-hidden"
          >
            {/* Top glare line & subtle red light leak */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#dc2626]/70 to-transparent" />
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-44 h-20 bg-red-600/10 blur-2xl pointer-events-none rounded-full" />

            {/* Status bar */}
            <div className="flex items-center justify-between mb-2.5">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-300 px-2.5 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                AVAILABLE FOR WORK
              </span>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold">
                LAHORE, PK
              </span>
            </div>

            {/* Concise Bio */}
            <p className="text-xs font-normal text-slate-700 leading-relaxed mb-3.5">
              Designing interfaces that blend emotion &amp; performance — crafting intuitive, high-speed web experiences.
            </p>

            {/* Bottom Row: Social Icons + Action Button */}
            <div className="flex items-center justify-between pt-2.5 border-t border-slate-200 gap-2">
              {/* SVG Social Vector Icons */}
              <div className="flex items-center gap-2">
                {/* X / Twitter */}
                <motion.a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X / Twitter"
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#1e3a8a] border border-slate-200 text-slate-700 hover:text-white flex items-center justify-center transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href="https://linkedin.com/in/arman-naqvi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#1e3a8a] border border-slate-200 text-slate-700 hover:text-white flex items-center justify-center transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </motion.a>

                {/* GitHub */}
                <motion.a
                  href="https://github.com/armanh148"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#1e3a8a] border border-slate-200 text-slate-700 hover:text-white flex items-center justify-center transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </motion.a>
              </div>

              {/* Action Button: Explore Works */}
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white shadow-lg shadow-red-600/30 active:scale-95 transition-all"
              >
                <span>EXPLORE WORKS</span>
                <span className="text-sm font-bold">↗</span>
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
            className="group flex flex-col items-center gap-1 text-slate-500 hover:text-slate-900 transition-colors"
          >
            <span className="text-[8px] sm:text-[10px] font-bold tracking-[0.3em] uppercase opacity-75 group-hover:opacity-100 transition-opacity">
              Scroll Down
            </span>
            <div className="w-3.5 h-6 sm:w-5 sm:h-8 rounded-full border border-slate-300 group-hover:border-[#dc2626] flex items-start justify-center p-0.5 sm:p-1 transition-colors">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#dc2626]"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
