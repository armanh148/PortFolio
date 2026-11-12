"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { SiteData } from "@/lib/siteData";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "HOME", href: "#hero" },
  { id: "about", label: "ABOUT", href: "#about" },
  { id: "services", label: "SERVICES", href: "#services" },
  { id: "work", label: "WORK", href: "#work" },
  { id: "testimonials", label: "TESTIMONIALS", href: "#testimonials" },
  { id: "contact", label: "CONTACT", href: "#contact" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Navbar({ site }: { site: SiteData }) {
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

  return (
    <>
      <motion.header
        animate={{
          backgroundColor: scrolled ? "rgba(10, 10, 10, 0.95)" : "rgba(10, 10, 10, 0.8)",
          backdropFilter: scrolled ? "blur(14px)" : "blur(8px)",
          borderBottomColor: scrolled ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.05)",
          paddingTop: scrolled ? "0.85rem" : "1.25rem",
          paddingBottom: scrolled ? "0.85rem" : "1.25rem",
        }}
        transition={{ duration: 0.25 }}
        className="fixed top-0 left-0 right-0 z-50 border-b px-5 sm:px-8 md:px-12 lg:px-16 transition-colors"
      >
        <div className="w-full flex items-center justify-between max-w-[1700px] mx-auto">
          {/* ── Left Side: "AN" Monogram Logo ── */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <span className="font-['Anton',Impact,sans-serif] text-2xl sm:text-3xl tracking-tight text-white group-hover:text-[#ff3d00] transition-colors leading-none uppercase">
              AN
            </span>
          </Link>

          {/* ── Center: Desktop Navigation Links ── */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="font-['Space_Grotesk',sans-serif] text-xs font-bold tracking-[0.16em] uppercase text-neutral-300 hover:text-[#ff3d00] transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* ── Right Side: "LET'S TALK" Outlined Pill Button + Mobile Toggle ── */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-[#ff3d00] hover:bg-[#ff3d00] text-white text-[11px] sm:text-xs font-['Space_Grotesk',sans-serif] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all cursor-pointer select-none"
            >
              <span>LET&rsquo;S TALK</span>
            </a>

            {/* Mobile / Tablet Drawer Toggle */}
            <motion.button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden flex flex-col gap-[5px] items-center justify-center p-2 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <span
                className={`h-[2px] w-5 bg-white transition-all duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-5 bg-[#ff3d00] transition-all duration-300 ${
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

      {/* ── SLIDE-IN MOBILE NAVIGATION DRAWER ── */}
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
              className="fixed inset-0 z-[65] bg-black/80 backdrop-blur-md"
            />
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease }}
              className="fixed inset-y-0 right-0 z-[75] flex w-[320px] sm:w-[380px] max-w-[88vw] flex-col justify-between border-l border-white/10 bg-[#0a0a0a] p-6 sm:p-8 backdrop-blur-2xl shadow-2xl text-white"
            >
              {/* Drawer Top */}
              <div className="flex justify-between items-center pb-6 border-b border-white/10">
                <div className="flex flex-col">
                  <span className="font-['Anton',Impact,sans-serif] text-2xl tracking-tight text-white uppercase">
                    ARMAN NAQVI
                  </span>
                  <span className="font-mono text-[9px] font-bold tracking-widest text-[#ff3d00] uppercase">
                    FULL-STACK SPECIALIST
                  </span>
                </div>

                <motion.button
                  type="button"
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setOpen(false)}
                  className="w-9 h-9 border border-white/20 rounded-full flex items-center justify-center text-white text-sm hover:border-[#ff3d00] hover:text-[#ff3d00] transition-colors cursor-pointer"
                >
                  ✕
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-2 py-6">
                {NAV_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.4, ease }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between py-3 px-2 border-b border-white/5 hover:bg-white/5 transition-all cursor-pointer text-neutral-300 hover:text-[#ff3d00]"
                    >
                      <span className="font-['Anton',Impact,sans-serif] text-2xl uppercase tracking-tight transition-transform duration-300 group-hover:translate-x-2">
                        {item.label}
                      </span>
                      <span className="text-xs font-mono text-neutral-500 group-hover:text-[#ff3d00] transition-colors">
                        0{i + 1} ↗
                      </span>
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Drawer Footer Contact */}
              <div className="flex flex-col gap-3 border-t border-white/10 pt-6">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#ff3d00]">
                  Available for work
                </span>
                <a
                  href={`mailto:${site?.email || "armannaqvi.tms@gmail.com"}`}
                  className="text-xs sm:text-sm font-semibold text-white hover:text-[#ff3d00] transition-colors break-all"
                >
                  {site?.email || "armannaqvi.tms@gmail.com"}
                </a>
                <div className="flex gap-4 pt-2">
                  <a
                    href="https://github.com/armanh148"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-neutral-400 hover:text-white uppercase font-bold"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="https://linkedin.com/in/arman-naqvi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-neutral-400 hover:text-white uppercase font-bold"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
