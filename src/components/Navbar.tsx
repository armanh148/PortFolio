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
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/about" },
  { id: "services", label: "Services", href: "/services" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "contact", label: "Contact", href: "/contact" },
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
      {/* ── Fixed Top Dynamic Header Bar ── */}
      <motion.header
        animate={{
          backgroundColor: scrolled ? "rgba(9, 9, 11, 0.88)" : "rgba(10, 10, 13, 0.3)",
          backdropFilter: scrolled ? "blur(16px)" : "blur(8px)",
          borderBottomColor: scrolled ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.06)",
          paddingTop: scrolled ? "0.75rem" : "1.25rem",
          paddingBottom: scrolled ? "0.75rem" : "1.25rem",
          boxShadow: scrolled ? "0 10px 30px -10px rgba(0,0,0,0.5)" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 border-b px-4 sm:px-8 md:px-12 lg:px-16"
      >
        <div className="w-full flex items-center justify-between max-w-[1600px] mx-auto">
          {/* ── Left Side: Logo with Hover Glow ── */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="relative"
            >
              <img
                src="/logo.png"
                alt={site?.name || "Arman Naqvi"}
                className="h-7 sm:h-8 md:h-10 w-auto object-contain transition-all duration-300 drop-shadow-[0_0_15px_rgba(47,102,246,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(47,102,246,0.6)]"
              />
            </motion.div>
          </Link>

          {/* ── Right Side: 3-Line Hamburger Menu Icon & Quick CTA ── */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#2f66f6] hover:bg-[#1d4ed8] text-white transition-all shadow-md shadow-blue-900/30 hover:shadow-blue-600/40 hover:scale-105"
            >
              Let&rsquo;s Talk
              <span className="text-xs sm:text-sm">↗</span>
            </Link>

            <motion.button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="site-drawer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => setOpen((v) => !v)}
              className="flex flex-col gap-[5px] items-end justify-center p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <span
                className={`h-[2px] w-5 sm:w-6 bg-white transition-all duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-3.5 sm:w-4 bg-[#2f66f6] transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[2px] w-5 sm:w-6 bg-white transition-all duration-300 ${
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
              className="fixed inset-y-0 right-0 z-[75] flex w-[360px] sm:w-[440px] max-w-[88vw] flex-col justify-between border-l border-white/10 bg-[#09090b]/98 p-6 sm:p-8 md:p-12 backdrop-blur-2xl shadow-2xl"
            >
              {/* Drawer Top Row */}
              <div className="flex justify-between items-center pb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-[#2f66f6] text-lg font-bold animate-pulse">✱</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-white">
                    Navigation
                  </span>
                </div>

                <motion.button
                  type="button"
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setOpen(false)}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white text-sm hover:bg-white hover:text-black transition-colors cursor-pointer"
                >
                  ✕
                </motion.button>
              </div>

              {/* Navigation Links with Staggered Entrance */}
              <div className="flex flex-col gap-2 py-8">
                {NAV_ITEMS.map((item, i) => {
                  const active = pathname === item.href;

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.07, duration: 0.45, ease }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`group flex items-center justify-between py-3.5 px-3 rounded-xl hover:bg-white/5 border-b border-white/5 transition-all cursor-pointer ${
                          active ? "text-[#2f66f6] bg-white/[0.04]" : "text-stone-300 hover:text-white"
                        }`}
                      >
                        <span className="font-sans text-2xl md:text-3xl font-bold uppercase tracking-tight transition-transform duration-300 group-hover:translate-x-3 group-hover:text-[#2f66f6]">
                          {item.label}
                        </span>
                        <span className="text-xs font-mono text-stone-500 group-hover:text-stone-300 transition-colors">
                          0{i + 1} ↗
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Drawer Footer Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5, ease }}
                className="flex flex-col gap-4 border-t border-white/10 pt-6"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-[#2f66f6]">
                  Get in touch
                </span>
                <a
                  href={`mailto:${site?.email || "armannaqvi.tms@gmail.com"}`}
                  className="text-base font-medium text-white hover:text-[#2f66f6] transition-colors"
                >
                  {site?.email || "armannaqvi.tms@gmail.com"}
                </a>
                <div className="flex gap-5 pt-2">
                  {(site?.socials?.length
                    ? site.socials
                    : [
                        { label: "LinkedIn", href: "https://linkedin.com" },
                        { label: "GitHub", href: "https://github.com" },
                        { label: "X", href: "https://x.com" },
                      ]
                  ).map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-xs text-stone-400 hover:text-[#2f66f6] transition-colors uppercase tracking-wider font-semibold"
                    >
                      {social.label}
                    </motion.a>
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
