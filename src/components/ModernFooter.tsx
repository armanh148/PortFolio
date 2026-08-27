"use client";

import Link from "next/link";
import type { SiteData } from "@/lib/siteData";
import Reveal from "@/components/Reveal";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "X / Twitter", href: "https://x.com" },
];

export default function ModernFooter({ site }: { site?: SiteData }) {
  const email = site?.email || "[EMAIL_ADDRESS]";
  const name = site?.name || "Arman Naqvi";

  return (
    <footer className="relative bg-[#09080e] text-white pt-24 pb-8 px-6 md:px-12 overflow-hidden border-t border-white/10">
      
      {/* ── Dark Nebula Radial Glow ── */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-900/30 via-purple-900/20 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[400px] h-[300px] bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-transparent blur-[100px] pointer-events-none" />

      <div className="max-w-[1500px] mx-auto relative z-10">
        
        {/* ── Top Badge ── */}
        <div className="mb-6 flex items-center gap-2">
          <span className="text-indigo-400 text-xs font-semibold">✦</span>
          <span className="text-xs font-medium tracking-wider uppercase text-indigo-300">
            Contact Us
          </span>
        </div>

        {/* ── Main Big Headline ── */}
        <Reveal>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-white/95 max-w-4xl tracking-tight leading-[1.15] mb-20">
            Interested in working together, trying out the platform or simply learning more?
          </h2>
        </Reveal>

        {/* ── Middle Row: Email Contact & Navigation Links ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end mb-24 pb-12 border-b border-white/10">
          
          {/* Left: Email */}
          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              <span className="text-xs font-light text-stone-400 block mb-2">
                Contact Arman at:
              </span>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 text-xl sm:text-3xl font-medium text-white hover:text-indigo-300 transition-colors group"
              >
                <span>{email}</span>
                <span className="text-lg sm:text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
            </Reveal>
          </div>

          {/* Right: Nav Links */}
          <div className="md:col-span-5 flex flex-wrap items-center justify-start md:justify-end gap-6 sm:gap-8">
            <Reveal delay={0.2}>
              <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm sm:text-base font-medium text-stone-400 hover:text-white transition-colors hover:underline underline-offset-8"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>

        </div>

        {/* ── Giant Display Brand Name Logo ── */}
        <Reveal delay={0.3}>
          <div className="my-12 text-center select-none overflow-hidden flex justify-center items-center">
            <h1 className="whitespace-nowrap text-[min(11.5vw,170px)] font-black uppercase tracking-[-0.04em] leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#0a0a0c] via-white/90 to-white/40">
              {name}
            </h1>
          </div>
        </Reveal>

        {/* ── Bottom Bar: Copyright & Social Links ── */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-stone-400">
          <p>© 2026 {name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
