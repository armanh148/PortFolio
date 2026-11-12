"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Review {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const REVIEWS: Review[] = [
  {
    quote:
      "Arman completely transformed our online presence. The strategy, design and execution were next level. Our leads increased by 3x within 60 days.",
    name: "JAMES CARTER",
    role: "Founder, Shift Fitness",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
  },
  {
    quote:
      "Professional, creative and results-driven. Arman delivered a website that not only looks amazing but performs incredibly well.",
    name: "OLIVIA MARTIN",
    role: "Marketing Director, Verda Studio",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
  {
    quote:
      "Working with Arman was a game changer. His marketing campaigns and full-stack solutions brought us massive growth and a strong ROI.",
    name: "DANIEL REYES",
    role: "CEO, Volt Energy",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
  },
];

export default function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);

  const prevReview = () => {
    setStartIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setStartIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#f4f1ea] text-black border-t border-black/10 select-none overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <div className="w-full flex flex-col md:flex-row min-h-[380px] lg:min-h-[440px]">
        {/* ── 1. LEFT VERTICAL ORANGE TAB: "TESTIMONIALS" ── */}
        <div className="w-full md:w-16 lg:w-20 shrink-0 bg-[#ff3d00] py-4 md:py-8 px-4 flex items-center justify-center">
          <span className="font-['Bebas_Neue','Oswald',sans-serif] text-xl sm:text-2xl font-bold uppercase tracking-[0.25em] text-white md:[writing-mode:vertical-rl] md:rotate-180 whitespace-nowrap">
            TESTIMONIALS
          </span>
        </div>

        {/* ── 2. CENTER CONTENT & ARROWS ── */}
        <div className="flex-1 p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-between">
          {/* 3 Review Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex flex-col justify-between"
              >
                <div>
                  {/* Big Orange Quotation Mark (Only on first review, matching editorial reference) */}
                  {i === 0 ? (
                    <span className="font-serif text-4xl sm:text-5xl text-[#ff3d00] leading-none block mb-3 select-none">
                      “
                    </span>
                  ) : (
                    <div className="h-6 sm:h-9 mb-3" />
                  )}

                  {/* Review Quote Text */}
                  <p className="text-xs sm:text-[13px] text-neutral-700 leading-relaxed mb-6 font-normal">
                    {review.quote}
                  </p>
                </div>

                {/* Client Avatar & Meta */}
                <div className="flex items-center gap-3 pt-4 border-t border-black/10">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover grayscale border border-black/20"
                  />
                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold uppercase tracking-wider text-black leading-tight">
                      {review.name}
                    </h4>
                    <p className="text-[10px] text-neutral-500 font-medium mt-0.5">
                      {review.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Controls Row: Navigation Arrows */}
          <div className="flex items-center justify-end gap-2 pt-8 sm:pt-10 border-t border-black/10 mt-8">
            <button
              type="button"
              onClick={prevReview}
              aria-label="Previous review"
              className="w-10 h-10 bg-black text-white hover:bg-[#ff3d00] transition-colors flex items-center justify-center font-bold text-sm cursor-pointer"
            >
              ←
            </button>
            <button
              type="button"
              onClick={nextReview}
              aria-label="Next review"
              className="w-10 h-10 bg-black text-white hover:bg-[#ff3d00] transition-colors flex items-center justify-center font-bold text-sm cursor-pointer"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
