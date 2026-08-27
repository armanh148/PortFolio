"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";

const FAQS = [
  {
    q: "What is your main development tech stack?",
    a: "I specialize in React, Next.js (App Router), Tailwind CSS, Framer Motion, and custom WordPress engineering (WooCommerce, theme craft, REST/GraphQL integration).",
  },
  {
    q: "Do you design websites in Figma first?",
    a: "Yes. I craft high-fidelity, interactive prototypes in Figma following a modern grid system and custom design tokens before writing any production-ready code.",
  },
  {
    q: "How do you handle project payments?",
    a: "I support both project-based contracts (milestone payments) and monthly retainer plans. You can select the plan that fits your business model best.",
  },
  {
    q: "What is your typical turnaround time?",
    a: "Typical landing page or small website designs take 1-2 weeks. Full custom WordPress portals or SaaS landing pages usually take 3-5 weeks.",
  },
];

const TESTIMONIALS = [
  {
    stars: 5,
    quote: "Arman's frontend expertise transformed our agency's design workflow. The Next.js landing page is lightning fast and pixel-perfect.",
    author: "Elena Rostova",
    role: "Art Director, Studio Nordhaus",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  {
    stars: 5,
    quote: "A true master of WordPress customization. Delivered a custom WooCommerce flow that boosted our conversions by 32%. Highly recommend!",
    author: "Marcus Vance",
    role: "Founder, Mioscosmetic",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
];

export default function PricingTestimonials() {
  const [isMonthly, setIsMonthly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-canvas border-b border-black/10 px-6 md:px-12">
      {/* Grid lines */}
      <div className="absolute left-1/4 top-0 bottom-0 border-r border-black/[0.06] hidden lg:block" />
      <div className="absolute left-2/4 top-0 bottom-0 border-r border-black/[0.06] hidden lg:block" />
      <div className="absolute left-3/4 top-0 bottom-0 border-r border-black/[0.06] hidden lg:block" />

      {/* Intersection Crosshairs */}
      <span className="cross-mark text-white/20" style={{ left: "25%", top: "0", transform: "translate(-50%, -50%)" }}>+</span>
      <span className="cross-mark text-white/20" style={{ left: "50%", top: "0", transform: "translate(-50%, -50%)" }}>+</span>
      <span className="cross-mark text-white/20" style={{ left: "75%", top: "0", transform: "translate(-50%, -50%)" }}>+</span>

      <div className="max-w-[1500px] mx-auto">
        
        {/* ─── PRICING SUBSECTION ─── */}
        <div className="flex flex-col items-center text-center mb-16">
          <Reveal>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-stone-400 block mb-3">
              Pricing Options
            </span>
            <h2 className="display-section text-ink">
              Simple Plans <span className="text-accent">For Every Need</span>
            </h2>
          </Reveal>

          {/* Pricing Toggle */}
          <Reveal delay={0.15}>
            <div className="flex items-center gap-3 mt-6 bg-stone-200/60 p-1.5 rounded-full">
              <button
                type="button"
                onClick={() => setIsMonthly(false)}
                className={`text-[11px] font-bold uppercase tracking-wider px-5 py-2 rounded-full transition-all ${
                  !isMonthly ? "bg-accent text-white" : "text-stone-400"
                }`}
              >
                One-Time Project
              </button>
              <button
                type="button"
                onClick={() => setIsMonthly(true)}
                className={`text-[11px] font-bold uppercase tracking-wider px-5 py-2 rounded-full transition-all ${
                  isMonthly ? "bg-accent text-white" : "text-stone-400"
                }`}
              >
                Monthly Retainer
              </button>
            </div>
          </Reveal>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {/* Card 1 */}
          <Reveal delay={0.1}>
            <div className="bg-[#0a0a0c] border border-black/10 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 h-full">
              <div>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-stone-400 block mb-2">Basic</span>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black text-ink">{isMonthly ? "$1,200" : "$2,000"}</span>
                  <span className="text-xs text-stone-400 font-medium uppercase tracking-wider">/{isMonthly ? "mo" : "dev"}</span>
                </div>
                <p className="text-xs text-stone-400 font-light mb-6 border-b border-black/5 pb-6">
                  Perfect for fast startups needing simple portfolio iterations or small WordPress edits.
                </p>
                <ul className="flex flex-col gap-3">
                  {["1-2 Page UI Design", "Responsive Web Build", "WordPress/Next.js setup", "1 Round of iterations", "Email Support"].map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-xs text-ink/80 font-medium">
                      <span className="text-accent">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="/contact" className="mt-8 block text-center text-xs font-bold uppercase tracking-widest bg-stone-100 hover:bg-accent hover:text-white text-ink py-4 rounded-xl transition-all">
                Get Started
              </a>
            </div>
          </Reveal>

          {/* Card 2 (Standard/Popular) */}
          <Reveal delay={0.2}>
            <div className="bg-[#0a0a0c] border-2 border-accent rounded-3xl p-8 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 relative h-full">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[9px] font-bold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full">
                Most Popular
              </span>
              <div>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent block mb-2">Standard</span>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black text-ink">{isMonthly ? "$2,500" : "$4,500"}</span>
                  <span className="text-xs text-stone-400 font-medium uppercase tracking-wider">/{isMonthly ? "mo" : "dev"}</span>
                </div>
                <p className="text-xs text-stone-400 font-light mb-6 border-b border-black/5 pb-6">
                  Complete design to code solution for custom WordPress platforms and creative Next.js sites.
                </p>
                <ul className="flex flex-col gap-3">
                  {["5-8 Premium Pages", "Figma Design & Prototypes", "Production Ready Next.js Code", "Sanity CMS integration", "3 Rounds of iterations", "Priority Slack support"].map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-xs text-ink/85 font-semibold">
                      <span className="text-accent">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="/contact" className="mt-8 block text-center text-xs font-bold uppercase tracking-widest bg-accent hover:bg-accent-deep text-white py-4 rounded-xl shadow-lg shadow-accent/20 transition-all">
                Get Started
              </a>
            </div>
          </Reveal>

          {/* Card 3 */}
          <Reveal delay={0.3}>
            <div className="bg-[#0a0a0c] border border-black/10 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 h-full">
              <div>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-stone-400 block mb-2">Enterprise</span>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black text-ink">{isMonthly ? "$4,000" : "$7,000"}</span>
                  <span className="text-xs text-stone-400 font-medium uppercase tracking-wider">/{isMonthly ? "mo" : "dev"}</span>
                </div>
                <p className="text-xs text-stone-400 font-light mb-6 border-b border-black/5 pb-6">
                  High-fidelity headless projects or custom web applications with complex integrations.
                </p>
                <ul className="flex flex-col gap-3">
                  {["Unlimited Pages", "Custom Advanced UX Architecture", "Headless WordPress / Next.js", "Dedicated CI/CD Setup", "Unlimited revisions", "24/7 Phone & Slack Support"].map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-xs text-ink/80 font-medium">
                      <span className="text-accent">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="/contact" className="mt-8 block text-center text-xs font-bold uppercase tracking-widest bg-stone-100 hover:bg-accent hover:text-white text-ink py-4 rounded-xl transition-all">
                Get Started
              </a>
            </div>
          </Reveal>
        </div>

        {/* ─── TESTIMONIALS SUBSECTION ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-16 border-t border-black/10 mb-24">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-stone-400 block mb-3">Reviews</span>
              <h2 className="text-3xl font-black text-ink uppercase tracking-tight leading-none mb-4">
                What clients <br/>say about me
              </h2>
              <div className="flex gap-1 text-accent text-lg">
                {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
              </div>
            </Reveal>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.author} delay={i * 0.15}>
                <div className="p-6 rounded-2xl border border-black/5 bg-[#fafafa] flex flex-col justify-between h-full hover:shadow-md transition-all">
                  <p className="text-sm font-light text-stone-400 leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <img src={t.avatar} alt={t.author} className="h-10 w-10 rounded-full object-cover" />
                    <div>
                      <h4 className="text-xs font-bold text-ink uppercase tracking-wide">{t.author}</h4>
                      <p className="text-[10px] text-stone-400 font-medium">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ─── FAQ DROP-DOWNS SUBSECTION ─── */}
        <div className="max-w-3xl mx-auto pt-16 border-t border-black/10">
          <div className="text-center mb-10">
            <Reveal>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-stone-400 block mb-2">Got questions?</span>
              <h2 className="text-2xl font-black text-ink uppercase tracking-tight">Frequently Asked Questions</h2>
            </Reveal>
          </div>

          <div className="flex flex-col border-t border-black/10">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={faq.q} className="border-b border-black/10">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full py-5 flex items-center justify-between text-left hover:text-accent transition-colors"
                  >
                    <span className="text-sm font-bold text-ink uppercase tracking-wider pr-4">{faq.q}</span>
                    <span className="text-accent font-bold text-lg">{isOpen ? "−" : "+"}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-xs text-stone-400 font-light leading-relaxed max-w-2xl">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
