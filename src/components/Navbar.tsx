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
  { id: "home", label: "Home", href: "#hero" },
  { id: "about", label: "About", href: "#about" },
  { id: "work", label: "Work", href: "#work" },
  { id: "services", label: "Services", href: "#services" },
  { id: "process", label: "Process", href: "#case-study" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function Navbar({ site }: { site: SiteData }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

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
          backgroundColor: scrolled ? "rgba(251, 249, 244, 0.95)" : "rgba(251, 249, 244, 0.85)",
          backdropFilter: scrolled ? "blur(14px)" : "blur(8px)",
          borderBottomColor: scrolled ? "rgba(0, 0, 0, 0.08)" : "transparent",
          paddingTop: scrolled ? "0.85rem" : "1.15rem",
          paddingBottom: scrolled ? "0.85rem" : "1.15rem",
        }}
        transition={{ duration: 0.25 }}
        className="fixed top-0 left-0 right-0 z-50 border-b px-5 sm:px-8 md:px-12 lg:px-16 transition-colors"
      >
        <div className="w-full flex items-center justify-between max-w-[1700px] mx-auto">
          {/* ── Left Side: Monogram Logo + Full Name ── */}
          <Link href="#hero" className="flex items-center gap-2.5 group">
            <span className="font-['Bebas_Neue','Oswald',sans-serif] text-2xl sm:text-3xl tracking-tight text-black flex items-center leading-none">
              <span className="text-[#ff4d29]">A</span>
              <span>N</span>
            </span>
            <div className="flex flex-col">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm font-extrabold text-black leading-tight tracking-tight">
                {site.name || "Arman Naqvi"}
              </span>
            </div>
          </Link>

          {/* ── Center: Desktop Navigation Links with Active Dot ── */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {NAV_ITEMS.map((item) => {
              const isActive = activeItem === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveItem(item.id)}
                  className="relative flex flex-col items-center font-['Plus_Jakarta_Sans',sans-serif] text-xs font-semibold tracking-wide text-neutral-800 hover:text-[#ff4d29] transition-colors cursor-pointer py-1"
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="navActiveDot"
                      className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-[#ff4d29]"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* ── Right Side: "Let's Talk ↗" Pill Button + Mobile Toggle ── */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-black hover:bg-neutral-800 text-white text-xs font-['Plus_Jakarta_Sans',sans-serif] font-bold px-5 py-2.5 rounded-full transition-all hover:scale-[1.02] shadow-sm cursor-pointer select-none"
            >
              <span>Let&rsquo;s Talk</span>
              <span className="text-sm font-bold">↗</span>
            </a>

            {/* Mobile / Tablet Drawer Toggle */}
            <motion.button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden flex flex-col gap-[5px] items-center justify-center p-2 rounded-full bg-neutral-100 text-black hover:bg-neutral-200 transition-colors cursor-pointer border border-black/10"
            >
              <span
                className={`h-[2px] w-5 bg-black transition-all duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-5 bg-[#ff4d29] transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[2px] w-5 bg-black transition-all duration-300 ${
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
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden"
            />

            <motion.aside
              key="drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-[#fbf9f4] border-l border-black/10 p-6 flex flex-col justify-between shadow-2xl lg:hidden text-black font-['Plus_Jakarta_Sans',sans-serif]"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-black/10 mb-8">
                  <div className="flex items-center gap-2">
                    <span className="font-['Bebas_Neue','Oswald',sans-serif] text-2xl tracking-tight text-black leading-none">
                      <span className="text-[#ff4d29]">A</span>N
                    </span>
                    <span className="text-xs font-bold text-black">{site.name || "Arman Naqvi"}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    className="w-8 h-8 rounded-full border border-black/15 flex items-center justify-center text-sm font-bold cursor-pointer hover:bg-black hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <nav className="flex flex-col gap-5">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={() => {
                        setActiveItem(item.id);
                        setOpen(false);
                      }}
                      className="text-lg font-bold tracking-tight text-neutral-800 hover:text-[#ff4d29] transition-colors flex items-center justify-between"
                    >
                      <span>{item.label}</span>
                      <span className="text-xs text-[#ff4d29]">→</span>
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-black/10 flex flex-col gap-4">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="w-full text-center bg-black hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-full transition-all"
                >
                  Let&rsquo;s Talk ↗
                </a>
                <p className="text-[11px] text-neutral-500 text-center">
                  Available for new opportunities 2026
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
