"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import type { SiteData } from "@/lib/siteData";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "work", label: "WORK", href: "#projects" },
  { id: "about", label: "ABOUT", href: "#about" },
  { id: "services", label: "SERVICES", href: "#services" },
  { id: "projects", label: "PROJECTS", href: "/projects" },
  { id: "contact", label: "CONTACT", href: "/contact" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Navbar({ site }: { site: SiteData }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

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
      {/* ── Editorial Brutalist Top Bar ── */}
      <motion.header
        animate={{
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.94)" : "rgba(255, 255, 255, 1)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottomColor: scrolled ? "rgba(0, 0, 0, 0.08)" : "transparent",
          boxShadow: scrolled ? "0 4px 20px -2px rgba(0, 0, 0, 0.05)" : "none",
          paddingTop: scrolled ? "0.75rem" : "1.25rem",
          paddingBottom: scrolled ? "0.75rem" : "1.25rem",
        }}
        transition={{ duration: 0.25 }}
        className="fixed top-0 left-0 right-0 z-50 border-b px-5 sm:px-8 md:px-12 lg:px-16 transition-colors"
      >
        <div className="w-full flex items-center justify-between max-w-[1600px] mx-auto">
          {/* ── Left Side: Brutalist Brand Mark ── */}
          <Link href="/" className="flex flex-col group">
            <span className="font-['Anton',Impact,sans-serif] text-xl sm:text-2xl tracking-tight text-black group-hover:text-[#ff4a00] transition-colors leading-none uppercase">
              {site?.name?.toUpperCase() || "ARMAN NAQVI"}®
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-[0.22em] text-[#ff4a00] uppercase pt-0.5">
              FULL-STACK DEVELOPER
            </span>
          </Link>

          {/* ── Center: Desktop Navigation Links ── */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="font-['Space_Grotesk',sans-serif] text-xs font-black tracking-[0.16em] uppercase text-black hover:text-[#ff4a00] transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* ── Right Side: Solid Orange Rectangular CTA + Mobile Toggle ── */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#ff4a00] hover:bg-[#e04000] text-white text-[11px] sm:text-xs md:text-sm font-['Space_Grotesk',sans-serif] font-black uppercase tracking-wider px-4 sm:px-6 py-2.5 sm:py-3 transition-all hover:shadow-md cursor-pointer select-none"
            >
              <span>START A PROJECT</span>
              <span className="text-sm font-black">↗</span>
            </Link>

            {/* Mobile / Tablet Drawer Toggle */}
            <motion.button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="site-drawer"
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden flex flex-col gap-[5px] items-center justify-center p-2.5 bg-black text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <span
                className={`h-[2px] w-5 bg-white transition-all duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-5 bg-[#ff4a00] transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[2px] w-5 bg-white transition-all duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* ── SLIDE-IN NAVIGATION DRAWER ── */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[65] bg-black/60 backdrop-blur-sm"
            />
            <motion.aside
              key="drawer"
              id="site-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease }}
              className="fixed inset-y-0 right-0 z-[75] flex w-[340px] sm:w-[400px] max-w-[88vw] flex-col justify-between border-l border-neutral-200 bg-white p-6 sm:p-8 backdrop-blur-2xl shadow-2xl"
            >
              {/* Drawer Top Row */}
              <div className="flex justify-between items-center pb-6 border-b border-neutral-200">
                <div className="flex flex-col">
                  <span className="font-['Anton',Impact,sans-serif] text-xl tracking-tight text-black uppercase">
                    ARMAN NAQVI®
                  </span>
                  <span className="font-mono text-[9px] font-bold tracking-widest text-[#ff4a00] uppercase">
                    NAVIGATION
                  </span>
                </div>

                <motion.button
                  type="button"
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setOpen(false)}
                  className="w-10 h-10 border border-neutral-300 flex items-center justify-center text-black text-base hover:bg-black hover:text-white transition-colors cursor-pointer font-bold"
                >
                  ✕
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-2 py-6">
                {NAV_ITEMS.map((item, i) => {
                  const active = pathname === item.href;

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.06, duration: 0.4, ease }}
                    >
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`group flex items-center justify-between py-3.5 px-3 border-b border-neutral-100 hover:bg-neutral-50 transition-all cursor-pointer ${
                          active ? "text-[#ff4a00]" : "text-black hover:text-[#ff4a00]"
                        }`}
                      >
                        <span className="font-['Anton',Impact,sans-serif] text-2xl font-bold uppercase tracking-tight transition-transform duration-300 group-hover:translate-x-2">
                          {item.label}
                        </span>
                        <span className="text-xs font-mono text-neutral-400 group-hover:text-[#ff4a00] transition-colors">
                          0{i + 1} ↗
                        </span>
                      </a>
                    </motion.div>
                  );
                })}
              </div>

              {/* Drawer Footer Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.45, ease }}
                className="flex flex-col gap-3 border-t border-neutral-200 pt-6"
              >
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#ff4a00]">
                  Get in touch
                </span>
                <a
                  href={`mailto:${site?.email || "armannaqvi.tms@gmail.com"}`}
                  className="text-sm font-semibold text-black hover:text-[#ff4a00] transition-colors"
                >
                  {site?.email || "armannaqvi.tms@gmail.com"}
                </a>
                <div className="flex gap-4 pt-2">
                  <a
                    href="https://github.com/armanh148"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-neutral-600 hover:text-black uppercase font-bold"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/arman-naqvi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-neutral-600 hover:text-black uppercase font-bold"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-neutral-600 hover:text-black uppercase font-bold"
                  >
                    Twitter / X
                  </a>
                </div>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
