import Link from "next/link";
import type { SiteData } from "@/lib/siteData";

const NAV = [
  { label: "About us", href: "/about" },
  { label: "Contact us", href: "/contact" },
  { label: "Work", href: "/projects" },
];

export default function Footer({ site }: { site: SiteData }) {
  return (
    <footer className="bg-charcoal text-white">
      {/* Massive "Let's Work" text */}
      <div className="border-t border-white/10 px-5 pt-16 pb-8 text-center md:px-10">
        <p className="font-sans text-[min(13vw,160px)] font-black uppercase leading-none tracking-[-0.04em] text-white">
          Let&rsquo;s Work
        </p>

        {/* Email pill */}
        <div className="mt-8 flex justify-center">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center rounded-full border border-white/30 bg-[#0a0a0c]/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-[#0a0a0c]/20"
          >
            {site.email}
          </a>
        </div>

        {/* Nav links */}
        <div className="mt-8 flex items-center justify-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/90 transition-colors duration-300 hover:text-white underline-offset-4 hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/15 px-5 py-6 md:px-10">
        <div className="max-w-[1500px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/90">
            © 2026 {site.name}. All Rights Reserved
          </p>
          <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/90">
            Designed By <span className="text-white font-bold">Arman Naqvi</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
