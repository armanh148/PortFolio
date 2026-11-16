"use client";

import Link from "next/link";
import type { SiteData } from "@/lib/siteData";

export default function ModernFooter({ site }: { site?: SiteData }) {
  return (
    <footer className="w-full bg-[#0d0d0d] text-white py-8 sm:py-10 px-5 sm:px-8 md:px-12 lg:px-16 font-['Plus_Jakarta_Sans',sans-serif] border-t border-white/10 select-none">
      <div className="max-w-[1700px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* ── LEFT: MONOGRAM & NAME ── */}
        <Link href="#hero" className="flex items-center gap-2 group">
          <span className="font-['Bebas_Neue','Oswald',sans-serif] text-2xl tracking-tight text-white flex items-center leading-none">
            <span className="text-[#ff4d29]">A</span>N
          </span>
          <span className="text-xs sm:text-sm font-bold text-neutral-200">
            {site?.name || "Arman Naqvi"}
          </span>
        </Link>

        {/* ── CENTER: QUICK NAVIGATION LINKS ── */}
        <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-semibold text-neutral-400">
          {[
            { label: "Home", href: "#hero" },
            { label: "About", href: "#about" },
            { label: "Work", href: "#work" },
            { label: "Services", href: "#services" },
            { label: "Process", href: "#case-study" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-[#ff4d29] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* ── RIGHT: COPYRIGHT NOTICE ── */}
        <div className="text-[11px] text-neutral-500 font-medium">
          © 2026 {site?.name || "Arman Naqvi"}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
