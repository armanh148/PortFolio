"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Service } from "@/lib/siteData";

const ease = [0.22, 1, 0.36, 1] as const;

const SERVICE_IMAGES = [
  "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80",
  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80",
];

export default function ServicesAccordion({ services }: { services: Service[] }) {
  const [openIdx, setOpenIdx] = useState<number>(0); // first open by default

  return (
    <div className="border-t border-white/8">
      {services.map((service, i) => {
        const isOpen = openIdx === i;
        const img = SERVICE_IMAGES[i % SERVICE_IMAGES.length];

        return (
          <div key={service.title} className="border-b border-white/8">
            {/* Accordion header */}
            <button
              type="button"
              onClick={() => setOpenIdx(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between px-5 py-6 text-left transition-colors duration-300 hover:bg-white/[0.02] md:px-10"
            >
              <div className="flex items-center gap-5">
                <span className="text-[12px] font-light text-smoke/40">({service.index})</span>
                <span className="font-sans text-lg font-semibold uppercase tracking-wide text-snow md:text-xl">
                  {service.title}
                </span>
              </div>
              <motion.span
                animate={{ rotate: isOpen ? 0 : 180 }}
                transition={{ duration: 0.35, ease }}
                className="flex h-7 w-7 items-center justify-center text-ember"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
                  <path d="M5 15l7-7 7 7"/>
                </svg>
              </motion.span>
            </button>

            {/* Accordion body */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease }}
                  className="overflow-hidden"
                >
                  {/* Full-width image with text overlay */}
                  <div className="relative mx-5 mb-6 overflow-hidden rounded-xl md:mx-10">
                    <img
                      src={img}
                      alt={service.title}
                      className="h-[260px] w-full object-cover md:h-[340px]"
                    />
                    {/* Ember-tinted overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-ember/20 via-ember/10 to-ember/30" />
                    {/* Bottom text */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <p className="max-w-2xl text-base font-light leading-relaxed text-white md:text-lg">
                        {service.blurb}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

