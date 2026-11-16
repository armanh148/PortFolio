"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full bg-[#ff4d29] text-black overflow-hidden py-16 sm:py-20 md:py-24 px-5 sm:px-8 md:px-12 lg:px-16 font-['Plus_Jakarta_Sans',sans-serif]"
    >
      {/* Decorative Organic Peach Blob on Right */}
      <div className="absolute -top-16 -right-16 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#fde5d6]/35 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-16 right-1/4 w-72 h-72 rounded-full bg-[#fde5d6]/25 blur-3xl pointer-events-none" />

      <div className="max-w-[1700px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* ══════════════════════════════════════════════════════════
            LEFT COLUMN: HEADLINE, SUBTITLE & CTA BUTTON
           ══════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span className="text-[10px] font-black uppercase tracking-[0.22em] text-black/80">
              LET&rsquo;S WORK TOGETHER
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-black leading-[1.05] mb-4">
            Have a project<br />
            in mind?
          </h2>

          <p className="text-xs sm:text-sm text-black/80 max-w-md leading-relaxed font-medium mb-8">
            I&rsquo;m currently available for freelance projects, collaborations and full-time opportunities. Let&rsquo;s create something amazing.
          </p>

          <div>
            <a
              href="mailto:armannaqvi.tms@gmail.com"
              className="inline-flex items-center gap-2.5 bg-black hover:bg-neutral-900 text-white font-bold text-xs sm:text-sm px-8 py-4 rounded-full transition-all shadow-xl hover:scale-[1.02] cursor-pointer"
            >
              <span>Get In Touch</span>
              <span className="text-base font-bold">↗</span>
            </a>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            MIDDLE COLUMN: CONTACT INFOS & SOCIALS
           ══════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-4 flex flex-col justify-center gap-4 text-xs sm:text-sm font-semibold text-black">
          {/* Email */}
          <a
            href="mailto:armannaqvi.tms@gmail.com"
            className="flex items-center gap-3 hover:text-white transition-colors group"
          >
            <div className="w-9 h-9 rounded-full bg-black/10 group-hover:bg-black group-hover:text-white flex items-center justify-center transition-colors shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 7L2 7" />
              </svg>
            </div>
            <span className="break-all font-mono text-xs sm:text-sm">armannaqvi.tms@gmail.com</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+923001234567"
            className="flex items-center gap-3 hover:text-white transition-colors group"
          >
            <div className="w-9 h-9 rounded-full bg-black/10 group-hover:bg-black group-hover:text-white flex items-center justify-center transition-colors shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <span>+92 300 1234567</span>
          </a>

          {/* Location */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-black/10 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <span>Karachi, Pakistan</span>
          </div>

          {/* Social Icons Row */}
          <div className="flex items-center gap-2.5 pt-4">
            {[
              { label: "LinkedIn", href: "https://linkedin.com/in/arman-naqvi", text: "in" },
              { label: "GitHub", href: "https://github.com/armanh148", text: "gh" },
              { label: "X", href: "https://x.com", text: "x" },
              { label: "Web", href: "#hero", text: "●" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-full bg-black text-white hover:bg-white hover:text-black transition-colors flex items-center justify-center text-xs font-bold uppercase shadow-sm"
              >
                {s.text}
              </a>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            RIGHT COLUMN: EXPRESSIVE HANDWRITTEN STATEMENT
           ══════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-3 flex flex-col items-start lg:items-end justify-center select-none">
          <div className="transform -rotate-6 lg:-rotate-8">
            <span className="font-['Caveat',cursive] text-4xl sm:text-5xl md:text-6xl font-bold text-[#1f0b06] leading-[0.95] block">
              Good<br />
              Design<br />
              Better<br />
              Products.
            </span>
            <svg viewBox="0 0 160 30" fill="none" className="w-36 sm:w-44 h-8 mt-1 text-[#1f0b06]/80">
              <path d="M5 18 Q 80 28 155 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
