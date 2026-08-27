"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import type { SiteData } from "@/lib/siteData";

const LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const ease = [0.22, 1, 0.36, 1] as const;

function isActive(href: string, pathname: string) {
  if (href.startsWith("#")) return false; // anchor links are never "active" in Next.js routing
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Navbar({ site }: { site: SiteData }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* ── Fixed Top Full-Width Dark Header Bar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10 px-6 md:px-12 lg:px-16 py-4 transition-all duration-300">
        <div className="w-full flex items-center justify-between">
          
          {/* ── Left Side: Public Logo Image ── */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt={site?.name || "Arman Naqvi"}
              className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* ── Right Side: 3-Line Hamburger Menu Icon ── */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="site-drawer"
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col gap-[5px] items-end justify-center p-2 rounded-lg text-white hover:opacity-80 transition-opacity"
          >
            <span
              className={`h-[2px] w-6 bg-white transition-all duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-white transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-white transition-all duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>

        </div>
      </header>

      {/* ── SLIDE-IN NAVIGATION DRAWER ── */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[65] bg-black/80 backdrop-blur-md"
            />
            <motion.aside
              key="drawer"
              id="site-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease }}
              className="fixed inset-y-0 right-0 z-[75] flex w-[420px] max-w-[90vw] flex-col justify-between border-l border-white/10 bg-[#09090b]/98 p-8 backdrop-blur-2xl md:p-12"
            >
              {/* Drawer Top Row */}
              <div className="flex justify-between items-center pb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-[#ff2a2a] text-lg font-bold">✱</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-white">
                    Menu
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white text-sm hover:bg-white hover:text-black transition-all"
                >
                  ✕
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-3 py-8">
                {LINKS.map((link, i) => {
                  const active = isActive(link.href, pathname);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease }}
                    >
                      {link.href.startsWith("#") ? (
                        <a
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className={`group flex items-baseline justify-between py-3 border-b border-white/5 text-stone-300 hover:text-white`}
                        >
                          <span className="font-sans text-2xl md:text-3xl font-semibold uppercase tracking-tight transition-transform duration-300 group-hover:translate-x-2">
                            {link.label}
                          </span>
                          <span className="text-xs font-mono text-stone-500">
                            0{i + 1}
                          </span>
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className={`group flex items-baseline justify-between py-3 border-b border-white/5 ${
                            active ? "text-[#2f66f6]" : "text-stone-300 hover:text-white"
                          }`}
                        >
                          <span className="font-sans text-2xl md:text-3xl font-semibold uppercase tracking-tight transition-transform duration-300 group-hover:translate-x-2">
                            {link.label}
                          </span>
                          <span className="text-xs font-mono text-stone-500">
                            0{i + 1}
                          </span>
                        </Link>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Drawer Footer Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease }}
                className="flex flex-col gap-4 border-t border-white/10 pt-6"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-stone-400">
                  Get in touch
                </span>
                <a
                  href={`mailto:${site?.email || "[EMAIL_ADDRESS]"}`}
                  className="text-base text-white hover:text-[#ff2a2a] transition-colors"
                >
                  {site?.email || "[EMAIL_ADDRESS]"}
                </a>
                <div className="flex gap-5 pt-2">
                  {(site?.socials?.length ? site.socials : [
                    { label: "LinkedIn", href: "https://linkedin.com" },
                    { label: "GitHub", href: "https://github.com" },
                    { label: "X", href: "https://x.com" },
                  ]).map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-stone-400 hover:text-white transition-colors uppercase tracking-wider"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
