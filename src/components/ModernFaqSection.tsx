"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";

interface FaqCategory {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  faqs: {
    q: string;
    a: string;
  }[];
}

const FAQ_DATA: FaqCategory[] = [
  {
    id: "general",
    name: "General Questions",
    shortName: "General",
    icon: "💬",
    faqs: [
      {
        q: "What services do you provide for web development?",
        a: "I provide end-to-end full-stack web development using React, Next.js, Node.js, and Django, custom WordPress theme and plugin craft, headless CMS integrations (Sanity), and responsive UI/UX design systems.",
      },
      {
        q: "How long does a typical website project take?",
        a: "A custom landing page or portfolio design typically takes 1 to 2 weeks. Larger web applications or custom WordPress/e-commerce portals range between 3 and 5 weeks depending on scope.",
      },
      {
        q: "Do you offer post-launch support and maintenance?",
        a: "Yes! Every project includes 30 days of post-launch warranty. Monthly retainer plans are also available for continuous feature updates, security patches, and performance optimization.",
      },
      {
        q: "Can you turn my Figma designs into production code?",
        a: "Absolutely. I translate Figma designs into pixel-perfect, highly responsive, and accessible code using modern Tailwind CSS and Framer Motion micro-interactions.",
      },
    ],
  },
  {
    id: "support",
    name: "Support & Collaboration",
    shortName: "Support",
    icon: "🤝",
    faqs: [
      {
        q: "What is your response time for support queries?",
        a: "Clients on active projects or retainers receive direct priority support on Slack or WhatsApp with response times guaranteed under 2 hours during business hours.",
      },
      {
        q: "How do we collaborate during the development phase?",
        a: "We use a dedicated staging environment so you can view live interactive previews at any milestone, paired with asynchronous Loom updates and weekly video syncs.",
      },
      {
        q: "What happens if I need urgent bug fixes?",
        a: "Urgent security or uptime issues are addressed immediately with same-day hotfixes deployed directly through automated CI/CD pipelines.",
      },
    ],
  },
  {
    id: "miscellaneous",
    name: "Payment & Hosting",
    shortName: "Payment & Host",
    icon: "💳",
    faqs: [
      {
        q: "What payment methods do you accept?",
        a: "I accept international bank wire transfers, Stripe, PayPal, and Payoneer. Payments are typically split into milestones (e.g. 50% upfront, 50% upon launch).",
      },
      {
        q: "Do you handle website hosting and domain setup?",
        a: "Yes, I help set up deployment environments on Vercel, Netlify, AWS, or custom WordPress hosting providers (WP Engine, Kinsta) with SSL and CDN configurations.",
      },
    ],
  },
  {
    id: "process",
    name: "Development Process",
    shortName: "Process & Flow",
    icon: "⚡",
    faqs: [
      {
        q: "What is your step-by-step workflow?",
        a: "My process starts with Discovery & Wireframing, followed by High-Fidelity UI Design, Production Engineering in Next.js/WordPress, Testing & Performance Tuning, and Final Launch.",
      },
      {
        q: "How do you ensure fast page load speeds?",
        a: "I optimize Core Web Vitals using Next.js App Router server components, smart image lazy-loading, automatic webp conversion, and minimal bundle overhead.",
      },
    ],
  },
];

export default function ModernFaqSection() {
  const [activeCategory, setActiveCategory] = useState<string>("general");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const currentCategory =
    FAQ_DATA.find((cat) => cat.id === activeCategory) || FAQ_DATA[0];

  return (
    <section className="relative py-16 sm:py-24 md:py-36 px-4 sm:px-8 md:px-12 bg-[#09090b] overflow-hidden text-white border-b border-white/10">
      {/* ── Soft Decorative Glow Particles with Breathing Motion ── */}
      <motion.div
        animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 left-10 w-5 h-5 rounded-full bg-red-500/20 blur-md pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 left-6 w-7 h-7 rounded-full bg-blue-500/15 blur-md pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 right-12 w-6 h-6 rounded-full bg-red-500/20 blur-md pointer-events-none"
      />

      <div className="max-w-[1500px] mx-auto relative z-10">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 md:mb-20">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/30 bg-red-950/40 text-[11px] sm:text-xs text-[#dc2626] font-semibold uppercase tracking-widest mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] animate-pulse" />
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-3">
              Got <span className="text-[#dc2626]">Questions?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs sm:text-sm md:text-base font-light text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              Clear answers about working together, workflow process, delivery timelines, and post-launch maintenance.
            </p>
          </Reveal>
        </div>

        {/* ── 2-Column Main FAQ Container ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          {/* Left Column: 2x2 Grid on Mobile, Vertical Stack on Desktop */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:flex lg:flex-col gap-2 sm:gap-3">
            {FAQ_DATA.map((cat) => {
              const isActive = activeCategory === cat.id;

              return (
                <motion.button
                  key={cat.id}
                  type="button"
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setOpenFaqIndex(0);
                  }}
                  className={`text-left p-3 sm:px-5 sm:py-3.5 lg:px-6 lg:py-4 rounded-xl lg:rounded-2xl flex items-center justify-between transition-all duration-300 font-medium text-xs sm:text-sm lg:text-base cursor-pointer ${
                    isActive
                      ? "bg-[#dc2626] text-white shadow-lg shadow-red-600/30 font-semibold border border-red-500"
                      : "bg-[#0e0f15] text-zinc-300 hover:bg-[#13141c] hover:text-white border border-white/10"
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-sm shrink-0">{cat.icon}</span>
                    <span className="truncate">
                      <span className="block sm:hidden truncate">{cat.shortName}</span>
                      <span className="hidden sm:block truncate">{cat.name}</span>
                    </span>
                  </div>
                  <span
                    className={`hidden lg:inline-block text-base transition-transform duration-300 shrink-0 ${
                      isActive ? "text-white translate-x-1" : "text-zinc-400"
                    }`}
                  >
                    ›
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Right Column: Accordion Questions Cards */}
          <div className="lg:col-span-8 flex flex-col gap-3 sm:gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-3 sm:gap-4"
              >
                {currentCategory.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;

                  return (
                    <motion.div
                      key={faq.q}
                      className={`rounded-xl sm:rounded-2xl transition-all duration-300 border cursor-pointer ${
                        isOpen
                          ? "bg-[#0e0f15] shadow-xl border-[#dc2626]/50 p-4 sm:p-6 md:p-8"
                          : "bg-[#0e0f15]/80 hover:bg-[#0e0f15] border-white/10 p-4 sm:p-5 md:p-6 hover:border-white/20 shadow-2xs"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between text-left gap-3 group cursor-pointer"
                      >
                        <h3
                          className={`text-sm sm:text-base md:text-lg font-semibold tracking-tight leading-snug transition-colors ${
                            isOpen
                              ? "text-white"
                              : "text-zinc-200 group-hover:text-[#dc2626]"
                          }`}
                        >
                          {faq.q}
                        </h3>

                        {/* Plus / Close Icon with smooth spring rotation */}
                        <div
                          className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                            isOpen
                              ? "bg-[#dc2626] text-white shadow-md shadow-red-500/40"
                              : "bg-white/5 text-zinc-300 group-hover:bg-white/10 group-hover:text-white border border-white/10"
                          }`}
                        >
                          <motion.span
                            animate={{ rotate: isOpen ? 45 : 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="text-base sm:text-xl leading-none font-light inline-block"
                          >
                            +
                          </motion.span>
                        </div>
                      </button>

                      {/* Accordion Answer Content */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="pt-3 sm:pt-4 text-xs sm:text-sm font-light text-zinc-400 leading-relaxed max-w-3xl border-t border-white/10 mt-3 sm:mt-4">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
