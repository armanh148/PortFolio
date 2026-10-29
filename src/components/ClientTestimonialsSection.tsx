"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

const REVIEWS = [
  {
    quote: "Arman's work on the CGPlux Studios portfolio was nothing short of cinematic. The fluid GSAP animations and seamless Sanity CMS integration give our production showreels the high-end showcase they deserve without any lag.",
    author: "Farhan Siddiqui",
    role: "Creative Producer at CGPlux Studios",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    stars: 5,
  },
  {
    quote: "Arman transformed our fragmented operations into a fast, reliable logistics management platform. The Django backend and automated dispatch tracking cut our daily operational overhead significantly.",
    author: "Kashif Al-Hadi",
    role: "Managing Director at Al-Hadi Logistics",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    stars: 5,
  },
  {
    quote: "Arman's full-stack architecture for our enterprise portal is rock solid. Fast response times, robust database validation, and clean design tokens gave both corporate divisions a seamless digital presence.",
    author: "Tariq Malik",
    role: "Operations Lead at Tawakkal & Echo Pride",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    stars: 5,
  },
  {
    quote: "Our custom Shopify storefront built by Arman exceeded all expectations. The tailored checkout experience, zero-bloat Liquid architecture, and responsive apparel grids boosted our conversion rates noticeably.",
    author: "Sara Vance",
    role: "Brand Director at Kynetic Wear & Ecotexinc",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80",
    stars: 5,
  },
];

export default function ClientTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Touch swipe support
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = isDesktop ? REVIEWS.length - 2 : REVIEWS.length - 1;
  const totalSlides = maxIndex + 1;

  // Auto-play interval (pauses on hover or touch)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Touch gesture handlers for mobile
  const onTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    setIsPaused(false);
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      handleNext();
    } else if (distance < -45) {
      handlePrev();
    }
  };

  return (
    <section className="relative py-16 sm:py-24 md:py-36 px-4 sm:px-6 md:px-12 bg-[#f8fafc] text-[#0f172a] border-b border-slate-200 overflow-hidden select-none">
      {/* ── Soft Background Vector Curve Lines ── */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none">
          <path d="M-100 200 C 400 50, 800 400, 1540 100" stroke="url(#line-grad-1)" strokeWidth="1.5" />
          <path d="M-100 350 C 500 150, 900 550, 1540 250" stroke="url(#line-grad-2)" strokeWidth="1.5" />
          <path d="M-100 500 C 600 250, 1000 700, 1540 400" stroke="url(#line-grad-1)" strokeWidth="1.5" />
          <defs>
            <linearGradient id="line-grad-1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#dc2626" stopOpacity="0" />
              <stop offset="50%" stopColor="#dc2626" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="line-grad-2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0" />
              <stop offset="50%" stopColor="#1e3a8a" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#dc2626" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-[1500px] mx-auto relative z-10">
        {/* ── Header Row with Title, 5.0 Rating & Arrow Controls ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-200 bg-red-50 text-xs text-[#dc2626] font-semibold uppercase tracking-widest mb-3 sm:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] animate-pulse" />
                Client Testimonials
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0f172a] leading-tight">
                What <span className="text-[#dc2626]">Our Clients</span> Say
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-slate-600 font-light text-xs sm:text-sm md:text-base mt-2 max-w-md">
                Direct feedback from founders, agency partners, and technical leaders worldwide.
              </p>
            </Reveal>
          </div>

          {/* Controls & Rating Pill */}
          <Reveal delay={0.15}>
            <div className="flex items-center gap-3 sm:gap-4 self-start sm:self-end pt-2 sm:pt-0">
              {/* 5.0 Rating Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-slate-200 bg-white shadow-2xs">
                <div className="flex gap-1 text-amber-500 text-xs">
                  {"★★★★★"}
                </div>
                <span className="text-xs font-mono text-slate-700 font-semibold">5.0 Rating</span>
              </div>

              {/* Slider Arrow Buttons */}
              <div className="flex items-center gap-2">
                <motion.button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-800 flex items-center justify-center transition-all shadow-sm cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>

                <motion.button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white flex items-center justify-center transition-all shadow-lg shadow-red-600/30 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── SMOOTH TOUCH & DESKTOP SLIDER VIEWPORT ── */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="relative overflow-hidden py-2"
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: isDesktop
                ? `translateX(-${currentIndex * 50}%)`
                : `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {REVIEWS.map((rev) => (
              <div
                key={rev.author}
                className="w-full md:w-1/2 shrink-0 px-2 sm:px-3"
              >
                <div className="h-full min-h-[290px] sm:min-h-[310px] bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200 hover:border-[#dc2626]/50 shadow-sm hover:shadow-xl flex flex-col justify-between relative group transition-all duration-300 overflow-hidden">
                  {/* Top glare line */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent group-hover:via-[#dc2626]/50 transition-colors" />

                  <div>
                    {/* Top Quote & Stars Row */}
                    <div className="flex items-start justify-between mb-4 sm:mb-5">
                      <span className="text-4xl sm:text-5xl font-serif text-[#dc2626]/80 leading-none select-none">
                        “
                      </span>
                      <div className="flex gap-1 text-amber-500 text-xs sm:text-sm">
                        {"★".repeat(rev.stars).split("").map((star, i) => (
                          <span key={i}>{star}</span>
                        ))}
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-xs sm:text-sm md:text-base font-light text-slate-700 leading-relaxed mb-6">
                      &ldquo;{rev.quote}&rdquo;
                    </p>
                  </div>

                  {/* Author Info Footer */}
                  <div className="flex items-center gap-3.5 sm:gap-4 pt-5 border-t border-slate-100">
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-slate-200 shadow-sm group-hover:border-[#dc2626] transition-colors"
                    />
                    <div>
                      <h4 className="text-xs sm:text-sm md:text-base font-bold text-[#0f172a] leading-tight group-hover:text-[#dc2626] transition-colors">
                        {rev.author}
                      </h4>
                      <p className="text-[11px] sm:text-xs font-light text-slate-500 mt-0.5">
                        {rev.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom Slider Pagination Dots & Counter ── */}
        <div className="flex items-center justify-between mt-6 sm:mt-10 px-2">
          {/* Slide Counter */}
          <span className="text-xs font-mono font-bold text-slate-600">
            0{currentIndex + 1} <span className="text-slate-400">/</span> 0{totalSlides}
          </span>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setCurrentIndex(i)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === i
                    ? "w-7 sm:w-8 h-2 bg-[#dc2626] shadow-md shadow-red-500/40"
                    : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* Subtle Swipe Cue for Mobile */}
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest sm:hidden">
            Swipe ↔
          </span>
          <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400 uppercase tracking-wider">
            {isPaused ? "Paused" : "Auto-playing"}
          </span>
        </div>
      </div>
    </section>
  );
}
