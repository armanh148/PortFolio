"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { SiteData } from "@/lib/siteData";

const QUICK_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function ModernFooter({ site }: { site?: SiteData }) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setNewsletterEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="relative w-full bg-white text-black border-t border-black/10 select-none overflow-hidden pt-16 sm:pt-20 pb-10 px-5 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-[1700px] mx-auto">
        {/* ── TOP ROW: 4-COLUMN FOOTER CONTENT ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-black/10">
          {/* ── COL 1: BRAND LOGO & TAGLINE (Cols 1-4) ── */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 group mb-4">
              {/* Stylized Electric Orange "A" Monogram Logo */}
              <div className="w-9 h-9 rounded-lg bg-[#ff4a00] flex items-center justify-center text-white font-['Anton',Impact,sans-serif] text-2xl font-black shadow-lg shadow-orange-600/30 group-hover:scale-105 transition-transform">
                A
              </div>
              <span className="font-['Anton',Impact,sans-serif] text-2xl tracking-tight text-black uppercase group-hover:text-[#ff4a00] transition-colors">
                {site?.name?.toUpperCase() || "ARMAN DEV"}
              </span>
            </Link>

            <p className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm text-neutral-600 max-w-sm leading-relaxed">
              Building the web, one pixel at a time. Full-stack web development, custom e-commerce, and high-performance UI architecture.
            </p>
          </div>

          {/* ── COL 2: QUICK LINKS (Cols 5-6) ── */}
          <div className="lg:col-span-2 flex flex-col">
            <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-black mb-5">
              QUICK LINKS
            </span>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm text-neutral-600 hover:text-[#ff4a00] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COL 3: FOLLOW ME (Cols 7-9) ── */}
          <div className="lg:col-span-3 flex flex-col">
            <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-black mb-5">
              FOLLOW ME
            </span>

            {/* Social Icons Row */}
            <div className="flex items-center gap-2.5 mb-6">
              {/* GitHub */}
              <motion.a
                href="https://github.com/armanh148"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-full bg-[#f8f8f9] border border-black/10 hover:border-[#ff4a00] text-neutral-700 hover:text-white hover:bg-[#ff4a00] flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://linkedin.com/in/arman-naqvi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-full bg-[#f8f8f9] border border-black/10 hover:border-[#ff4a00] text-neutral-700 hover:text-white hover:bg-[#ff4a00] flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>

              {/* X / Twitter */}
              <motion.a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-full bg-[#f8f8f9] border border-black/10 hover:border-[#ff4a00] text-neutral-700 hover:text-white hover:bg-[#ff4a00] flex items-center justify-center transition-colors"
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
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-full bg-[#f8f8f9] border border-black/10 hover:border-[#ff4a00] text-neutral-700 hover:text-white hover:bg-[#ff4a00] flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>
            </div>

            {/* Freelance Availability Status */}
            <p className="font-['Space_Grotesk',sans-serif] text-xs font-bold text-neutral-700 mb-1">
              Available for freelance work
            </p>
            <p className="font-['Space_Grotesk',sans-serif] text-xs font-black text-[#ff4a00] uppercase tracking-wider">
              Let&rsquo;s build something amazing!
            </p>
          </div>

          {/* ── COL 4: NEWSLETTER (Cols 10-12) ── */}
          <div className="lg:col-span-3 flex flex-col">
            <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-black mb-5">
              NEWSLETTER
            </span>

            <p className="font-['Space_Grotesk',sans-serif] text-xs text-neutral-600 mb-4 leading-relaxed">
              Subscribe to get updates on my latest projects and articles.
            </p>

            <form onSubmit={handleNewsletter} className="flex items-center gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full bg-[#f8f8f9] border border-black/10 focus:border-[#ff4a00] rounded-xl px-3.5 py-2.5 text-xs text-black placeholder-neutral-400 outline-none transition-colors"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="w-10 h-10 shrink-0 rounded-xl bg-[#ff4a00] hover:bg-[#e04000] text-white font-bold flex items-center justify-center transition-all cursor-pointer shadow-md"
              >
                ✈
              </button>
            </form>

            {subscribed && (
              <span className="text-[11px] font-mono font-bold text-emerald-600 mt-2 block">
                ✓ Subscribed successfully!
              </span>
            )}
          </div>
        </div>

        {/* ── BOTTOM BAR: COPYRIGHT & ATTRIBUTION ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-['Space_Grotesk',sans-serif] text-neutral-600 text-center sm:text-left">
          <p>© 2026 {site?.name || "Arman Naqvi"}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Made with</span>
            <span className="text-red-500">❤️</span>
            <span>and lots of ☕</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
