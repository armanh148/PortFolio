"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { SiteData } from "@/lib/siteData";
import Reveal from "@/components/Reveal";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/arman-naqvi" },
  { label: "GitHub", href: "https://github.com/armanh148" },
  { label: "X / Twitter", href: "https://x.com" },
];

export default function ModernFooter({ site }: { site?: SiteData }) {
  const email = site?.email || "armannaqvi.tms@gmail.com";
  const name = site?.name || "Arman Naqvi";

  return (
    <footer className="relative bg-[#f8fafc] text-[#0f172a] pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-12 px-4 sm:px-8 md:px-12 overflow-hidden border-t border-slate-200 select-none">
      {/* ── Soft Ambient Lighting ── */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[350px] bg-red-500/5 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[400px] h-[300px] bg-blue-600/5 blur-[110px] pointer-events-none" />

      {/* Decorative Crosshairs */}
      <span className="cross-mark text-slate-300" style={{ left: "20px", top: "20px" }}>+</span>
      <span className="cross-mark text-slate-300" style={{ right: "20px", top: "20px" }}>+</span>

      <div className="max-w-[1500px] mx-auto relative z-10">
        {/* ── Top Badge ── */}
        <div className="mb-4 sm:mb-6 flex items-center gap-2">
          <span className="text-[#dc2626] text-xs font-semibold animate-pulse">✦</span>
          <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#dc2626]">
            Get In Touch
          </span>
        </div>

        {/* ── Main Big Headline ── */}
        <Reveal>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium text-[#0f172a] max-w-4xl tracking-tight leading-[1.2] mb-8 sm:mb-14">
            Interested in working together, building something remarkable, or simply starting a conversation?
          </h2>
        </Reveal>

        {/* ── Middle Row: Clean Email Channel & Refined Minimal Navigation ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start mb-10 sm:mb-16 pb-8 sm:pb-12 border-b border-slate-200">
          {/* Left: Direct Email Channel */}
          <div className="md:col-span-7 flex flex-col items-start">
            <Reveal delay={0.1}>
              <div className="flex flex-col items-start space-y-3.5">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-[11px] sm:text-xs font-mono font-bold text-emerald-800 shadow-2xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                  </span>
                  <span>AVAILABLE FOR WORK</span>
                </div>

                {/* Email Address Link */}
                <div className="w-full">
                  <a
                    href={`mailto:${email}`}
                    className="group inline-flex items-center gap-2 text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0f172a] hover:text-[#dc2626] transition-colors break-words sm:break-normal cursor-pointer"
                  >
                    <span className="border-b-2 border-slate-300 pb-0.5 group-hover:border-[#dc2626] transition-colors">
                      {email}
                    </span>
                    <span className="text-[#dc2626] transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5">
                      ↗
                    </span>
                  </a>
                </div>

                {/* Supporting Note */}
                <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-md leading-relaxed">
                  Reach out for custom Next.js builds, WordPress craft, or scalable design systems.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: Minimal Refined Nav Links */}
          <div className="md:col-span-5 flex flex-col md:items-end">
            <Reveal delay={0.15}>
              <div className="w-full md:w-auto">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-3 md:text-right">
                  Navigation
                </span>
                <ul className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 lg:gap-8 gap-y-2">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-xs sm:text-sm font-medium text-slate-600 hover:text-[#dc2626] transition-colors inline-flex items-center gap-1 group py-1"
                      >
                        <span className="group-hover:text-[#dc2626] transition-colors">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── Giant Display Brand Name with Radial Ambient Glow & Red Dot ── */}
        <Reveal delay={0.25}>
          <div className="relative my-8 sm:my-14 text-center select-none overflow-hidden flex justify-center items-center py-4">
            {/* Ambient red glow behind giant name */}
            <div className="absolute inset-0 bg-red-500/5 blur-[100px] rounded-full pointer-events-none" />

            <motion.h1
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 whitespace-nowrap text-[clamp(2.6rem,12vw,11.5rem)] font-black uppercase tracking-[-0.04em] leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-slate-400 hover:drop-shadow-[0_0_40px_rgba(220,38,38,0.18)] transition-all cursor-default"
            >
              {name}
              <span className="text-[#dc2626] drop-shadow-[0_0_20px_rgba(220,38,38,0.8)]">.</span>
            </motion.h1>
          </div>
        </Reveal>

        {/* ── Bottom Bar: Copyright & Social Links ── */}
        <div className="pt-6 sm:pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-slate-500 text-center sm:text-left">
          <p>© 2026 {name}. Engineered with Next.js, Framer Motion &amp; Tailwind CSS.</p>

          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
            {SOCIAL_LINKS.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#dc2626] hover:border-[#dc2626] hover:bg-red-50 transition-all font-semibold uppercase text-[11px] tracking-wider cursor-pointer shadow-2xs"
              >
                {social.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
