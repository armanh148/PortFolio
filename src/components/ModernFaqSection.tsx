"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";

interface FaqCategory {
  id: string;
  name: string;
  faqs: {
    q: string;
    a: string;
  }[];
}

const FAQ_DATA: FaqCategory[] = [
  {
    id: "general",
    name: "General Questions",
    faqs: [
      {
        q: "What services do you provide for web development?",
        a: "I provide end-to-end frontend development using React and Next.js, custom WordPress theme and plugin craft, headless CMS integrations, and responsive UI/UX design systems.",
      },
      {
        q: "How long does a typical website project take?",
        a: "A custom landing page or portfolio design typically takes 1 to 2 weeks. Larger web applications or custom WordPress portals range between 3 and 5 weeks depending on scope.",
      },
      {
        q: "Do you offer post-launch support and maintenance?",
        a: "Yes! Every project includes 30 days of post-launch warranty. Monthly retainer plans are also available for continuous feature updates, security patches, and SEO optimization.",
      },
      {
        q: "Can you turn my Figma designs into production code?",
        a: "Absolutely. I translate Figma designs into pixel-perfect, highly responsive, and accessible code using modern Tailwind CSS and Framer Motion micro-interactions.",
      },
    ],
  },
  {
    id: "support",
    name: "Support team",
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
    name: "Miscellaneous",
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
  {
    id: "pricing",
    name: "Pricing & Retainers",
    faqs: [
      {
        q: "Are project estimates fixed or hourly?",
        a: "I primarily work on fixed-price project milestones so you have full budget predictability upfront. Retainers are billed monthly based on dedicated development hours.",
      },
      {
        q: "Can I request custom feature add-ons mid-project?",
        a: "Yes, additional features can be scoped seamlessly via simple change requests with upfront time and cost estimates.",
      },
    ],
  },
];

export default function ModernFaqSection() {
  const [activeCategory, setActiveCategory] = useState<string>("general");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0); // First item expanded by default

  const currentCategory = FAQ_DATA.find((cat) => cat.id === activeCategory) || FAQ_DATA[0];

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-transparent overflow-hidden text-[#F5F5F3]">
      
      {/* ── Soft Decorative Glow Particles ── */}
      <div className="absolute top-12 left-10 w-4 h-4 rounded-full bg-cyan-400/40 blur-sm pointer-events-none" />
      <div className="absolute top-1/3 left-6 w-6 h-6 rounded-full bg-rose-400/30 blur-sm pointer-events-none" />
      <div className="absolute bottom-20 right-12 w-5 h-5 rounded-full bg-sky-400/40 blur-sm pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-7 h-7 rounded-full bg-indigo-300/30 blur-sm pointer-events-none" />

      <div className="max-w-[1500px] mx-auto relative z-10">
        
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <Reveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-[#F5F5F3] tracking-tight mb-6">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm md:text-base font-light text-stone-400 leading-relaxed max-w-2xl mx-auto">
              Our platform is built to help you work smarter, not harder. It adapts to your needs and supports your goals. Make the most of every feature.
            </p>
          </Reveal>
        </div>

        {/* ── 2-Column Main FAQ Container ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Category Tabs Menu */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {FAQ_DATA.map((cat) => {
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setOpenFaqIndex(0); // Open first question of selected category
                  }}
                  className={`w-full text-left px-6 py-4 rounded-2xl flex items-center justify-between transition-all duration-300 font-medium text-sm md:text-base ${
                    isActive
                      ? "bg-white/10 text-[#F5F5F3] shadow-lg font-semibold border border-white/20"
                      : "bg-white/5 text-stone-400 hover:bg-white/10 hover:text-[#F5F5F3] border border-white/5"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`text-base transition-transform duration-300 ${isActive ? "text-[#F5F5F3] translate-x-1" : "text-stone-400"}`}>
                    ›
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Accordion Questions Cards */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4"
              >
                {currentCategory.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;

                  return (
                    <div
                      key={faq.q}
                      className={`rounded-2xl transition-all duration-300 border ${
                        isOpen
                          ? "bg-white/10 shadow-xl border-white/20 p-6 md:p-8"
                          : "bg-white/5 hover:bg-white/10 border-white/10 p-5 md:p-6"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between text-left gap-4 group"
                      >
                        <h3 className={`text-base md:text-lg font-semibold tracking-tight leading-snug ${
                          isOpen ? "text-[#F5F5F3]" : "text-stone-300 group-hover:text-white"
                        }`}>
                          {faq.q}
                        </h3>

                        {/* Plus / Close Icon */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                          isOpen ? "bg-white/20 text-[#F5F5F3]" : "bg-white/5 text-stone-400 group-hover:bg-white/10"
                        }`}>
                          <span className="text-lg leading-none font-light">
                            {isOpen ? "✕" : "+"}
                          </span>
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
                            <p className="pt-4 text-xs md:text-sm font-light text-stone-400 leading-relaxed max-w-3xl">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
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
