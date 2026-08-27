"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";

const REVIEWS = [
  {
    quote: "Integrating Arman's work has been a game-changer for our customer support workflow. We've seen a 40% decrease in response times and a significant uptick in customer satisfaction scores.",
    author: "John Doe",
    role: "Head of Customer Experience at FinTech Global",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
    stars: 5,
  },
  {
    quote: "Arman's frontend expertise isn't just another service; it's like having a highly skilled technical lead that's perfecting every micro-interaction. Our customers love the speed and precision.",
    author: "Elijah Ramirez",
    role: "Director of Operations at EcoHome Solutions",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    stars: 5,
  },
  {
    quote: "We were amazed at how quickly Arman grasped our unique design language and codebase. The custom WordPress theme added a level of interactivity that keeps users engaged across the board.",
    author: "Mia Song",
    role: "CTO at HealthBridgeTech",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80",
    stars: 5,
  },
  {
    quote: "Working with Arman transformed our brand identity into a world-class digital experience. The Next.js implementation is blazing fast and completely seamless for our global client base.",
    author: "Alexander Vance",
    role: "VP of Product at Studio Nordhaus",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    stars: 5,
  },
];

export default function ClientTestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? REVIEWS.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= REVIEWS.length - 3 ? 0 : prev + 1));
  };

  const visibleReviews = [
    REVIEWS[startIndex % REVIEWS.length],
    REVIEWS[(startIndex + 1) % REVIEWS.length],
    REVIEWS[(startIndex + 2) % REVIEWS.length],
  ];

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-transparent text-[#F5F5F3] overflow-hidden">
      
      {/* ── Soft Background Vector Curve Lines ── */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none">
          <path d="M-100 200 C 400 50, 800 400, 1540 100" stroke="url(#line-grad-1)" strokeWidth="1.5" />
          <path d="M-100 350 C 500 150, 900 550, 1540 250" stroke="url(#line-grad-2)" strokeWidth="1.5" />
          <path d="M-100 500 C 600 250, 1000 700, 1540 400" stroke="url(#line-grad-1)" strokeWidth="1.5" />
          <defs>
            <linearGradient id="line-grad-1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#2f66f6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="line-grad-2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-[1500px] mx-auto relative z-10">
        
        {/* ── Top Header Row with Title & Slider Controls ── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <Reveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F3]">
                What <span className="text-indigo-600 font-extrabold">Our Clients</span> Say
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-stone-400 font-medium text-sm md:text-base mt-2">
                Hear Directly Our Satisfied Partners
              </p>
            </Reveal>
          </div>

          {/* Navigation Arrow Buttons */}
          <Reveal delay={0.15}>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous slide"
                className="w-12 h-12 rounded-full border border-indigo-500/30 bg-transparent hover:bg-white/10 text-[#F5F5F3] flex items-center justify-center transition-all shadow-sm hover:scale-105"
              >
                <span className="text-lg leading-none font-bold">‹</span>
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next slide"
                className="w-12 h-12 rounded-full bg-[#2f66f6] hover:bg-[#1d4ed8] text-white flex items-center justify-center transition-all shadow-lg shadow-blue-600/30 hover:scale-105"
              >
                <span className="text-lg leading-none font-bold">›</span>
              </button>
            </div>
          </Reveal>
        </div>

        {/* ── 3-Column Testimonial Cards Carousel ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleReviews.map((rev, idx) => (
              <motion.div
                key={`${rev.author}-${idx}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#0a0a0c] rounded-3xl p-8 md:p-10 border border-white/10 shadow-xl shadow-black/50 flex flex-col justify-between h-full relative"
              >
                <div>
                  {/* Top Quote & Stars Row */}
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-6xl font-serif text-indigo-300/80 leading-none select-none">
                      “
                    </span>
                    <div className="flex gap-1 text-amber-400 text-base">
                      {"★".repeat(rev.stars).split("").map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-xs md:text-sm font-normal text-stone-400 leading-relaxed mb-8">
                    {rev.quote}
                  </p>
                </div>

                {/* Author Info Footer */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/20 shadow-sm"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#F5F5F3] leading-tight">
                      {rev.author}
                    </h4>
                    <p className="text-xs font-light text-stone-400 mt-0.5">
                      {rev.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ── Bottom Carousel Pagination Dots ── */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {Array.from({ length: REVIEWS.length - 2 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setStartIndex(i)}
              className={`transition-all duration-300 rounded-full ${
                startIndex === i ? "w-6 h-2 bg-[#2f66f6]" : "w-2 h-2 bg-indigo-900/50 hover:bg-indigo-700"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
