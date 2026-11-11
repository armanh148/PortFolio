"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Review {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    quote:
      "Arman is an exceptional developer. He delivers clean, maintainable code and ensures every detail is perfect. Highly recommended!",
    name: "Priya Sharma",
    role: "Product Manager, TaskFlow",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  {
    id: 2,
    quote:
      "Arman's work on CGPlux Studios was cinematic and fluid. His mastery over Next.js and headless CMS delivered our showreels flawlessly.",
    name: "Farhan Siddiqui",
    role: "Creative Producer, CGPlux Studios",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
  {
    id: 3,
    quote:
      "Transformed our logistics tracking operations into an ultra-fast platform. His backend architecture and automated dispatch cut overhead significantly.",
    name: "Kashif Al-Hadi",
    role: "Managing Director, Al-Hadi Logistics",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
  },
  {
    id: 4,
    quote:
      "Rock-solid full-stack web platforms with robust database workflows and zero lag. Arman is our go-to engineering specialist.",
    name: "Tariq Malik",
    role: "Operations Lead, Tawakkal Enterprise",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
  },
  {
    id: 5,
    quote:
      "Our custom Shopify store exceeded all conversion metrics. Responsive apparel grids, tailored checkout, and pure performance.",
    name: "Sara Vance",
    role: "Brand Director, Kynetic Wear",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80",
  },
];

export default function BrutalistReviewsContactSection() {
  const [currentReview, setCurrentReview] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const prevReview = () => {
    setCurrentReview((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentReview((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 700);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-white text-black border-t border-black/10 select-none overflow-hidden py-16 sm:py-20 md:py-24 px-5 sm:px-8 md:px-12 lg:px-16"
    >
      <div className="max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* ══════════════════════════════════════════════════════════
              LEFT COLUMN: TESTIMONIALS / WHAT CLIENTS SAY
             ══════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              {/* Header */}
              <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-[#ff4a00] block mb-2">
                TESTIMONIALS
              </span>
              <h2 className="font-['Anton',Impact,sans-serif] text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-black mb-8 sm:mb-10">
                What Clients Say
              </h2>

              {/* Review Card with Side Arrows */}
              <div className="relative flex items-center">
                {/* Left Arrow Button */}
                <button
                  type="button"
                  onClick={prevReview}
                  aria-label="Previous review"
                  className="absolute -left-3 sm:-left-5 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-black/20 hover:border-[#ff4a00] hover:text-[#ff4a00] flex items-center justify-center text-black transition-all shadow-md cursor-pointer"
                >
                  ‹
                </button>

                {/* Review Card Surface */}
                <div className="w-full bg-[#f8f8f9] border border-black/10 rounded-2xl p-6 sm:p-8 relative min-h-[260px] flex flex-col justify-between overflow-hidden mx-2 sm:mx-3 shadow-xl">
                  {/* Big Orange Quote Icon */}
                  <div className="text-3xl sm:text-4xl font-serif text-[#ff4a00] leading-none mb-3 select-none">
                    ““
                  </div>

                  {/* Review Text */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentReview}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex-1"
                    >
                      <p className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm md:text-base font-normal text-neutral-800 leading-relaxed mb-6">
                        {REVIEWS[currentReview].quote}
                      </p>

                      {/* Client Avatar & Info */}
                      <div className="flex items-center gap-3.5 pt-4 border-t border-black/10">
                        <img
                          src={REVIEWS[currentReview].avatar}
                          alt={REVIEWS[currentReview].name}
                          className="w-11 h-11 rounded-full object-cover border-2 border-[#ff4a00]"
                        />
                        <div>
                          <h4 className="font-['Space_Grotesk',sans-serif] text-sm sm:text-base font-bold text-black leading-tight">
                            {REVIEWS[currentReview].name}
                          </h4>
                          <p className="font-mono text-[11px] text-[#ff4a00] mt-0.5 font-bold">
                            {REVIEWS[currentReview].role}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right Arrow Button */}
                <button
                  type="button"
                  onClick={nextReview}
                  aria-label="Next review"
                  className="absolute -right-3 sm:-right-5 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-black/20 hover:border-[#ff4a00] hover:text-[#ff4a00] flex items-center justify-center text-black transition-all shadow-md cursor-pointer"
                >
                  ›
                </button>
              </div>

              {/* Pagination Dots */}
              <div className="flex items-center justify-center gap-2 mt-6">
                {REVIEWS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to review ${i + 1}`}
                    onClick={() => setCurrentReview(i)}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      currentReview === i
                        ? "w-6 h-2 bg-[#ff4a00] shadow-[0_0_10px_#ff4a00]"
                        : "w-2 h-2 bg-neutral-300 hover:bg-neutral-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              RIGHT COLUMN: LET'S WORK TOGETHER / GET IN TOUCH
             ══════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 lg:border-l border-black/10 lg:pl-12 xl:pl-16">
            {/* Header */}
            <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-[#ff4a00] block mb-2">
              LET&rsquo;S WORK TOGETHER
            </span>
            <h2 className="font-['Anton',Impact,sans-serif] text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-black mb-2">
              Get In Touch
            </h2>
            <p className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm text-neutral-600 mb-8 max-w-lg leading-relaxed">
              Have a project in mind or just want to say hello? Feel free to reach out.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Contact Quick Details (Left of form) */}
              <div className="md:col-span-5 flex flex-col gap-5 pt-2">
                {/* Email */}
                <a
                  href="mailto:armannaqvi.tms@gmail.com"
                  className="group flex items-center gap-3.5 text-xs sm:text-sm text-neutral-700 hover:text-black transition-colors"
                >
                  <span className="w-9 h-9 rounded-lg bg-[#f8f8f9] border border-black/10 text-[#ff4a00] flex items-center justify-center shrink-0 group-hover:border-[#ff4a00] transition-colors">
                    ✉
                  </span>
                  <span className="break-all font-mono font-medium">armannaqvi.tms@gmail.com</span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+923000000000"
                  className="group flex items-center gap-3.5 text-xs sm:text-sm text-neutral-700 hover:text-black transition-colors"
                >
                  <span className="w-9 h-9 rounded-lg bg-[#f8f8f9] border border-black/10 text-[#ff4a00] flex items-center justify-center shrink-0 group-hover:border-[#ff4a00] transition-colors">
                    📞
                  </span>
                  <span className="font-mono font-medium">+92 300 1234567</span>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 text-xs sm:text-sm text-neutral-700">
                  <span className="w-9 h-9 rounded-lg bg-[#f8f8f9] border border-black/10 text-[#ff4a00] flex items-center justify-center shrink-0">
                    📍
                  </span>
                  <span className="font-mono font-medium">Karachi, Pakistan</span>
                </div>
              </div>

              {/* Contact Form (Right) */}
              <div className="md:col-span-7">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#f8f8f9] border border-black/10 focus:border-[#ff4a00] rounded-xl px-4 py-3 text-sm text-black placeholder-neutral-400 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#f8f8f9] border border-black/10 focus:border-[#ff4a00] rounded-xl px-4 py-3 text-sm text-black placeholder-neutral-400 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#f8f8f9] border border-black/10 focus:border-[#ff4a00] rounded-xl px-4 py-3 text-sm text-black placeholder-neutral-400 outline-none transition-colors resize-none"
                    />
                  </div>

                  {submitted && (
                    <div className="p-3 bg-emerald-50 border border-emerald-400 text-emerald-800 text-xs font-mono font-bold rounded-xl text-center">
                      ✓ Thank you! Your message has been sent successfully.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-[#ff4a00] hover:bg-[#e04000] text-white font-['Space_Grotesk',sans-serif] font-black text-xs sm:text-sm uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all hover:scale-[1.01] shadow-lg shadow-orange-600/30 cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? "SENDING..." : "SEND MESSAGE"}</span>
                    <span className="text-base font-bold">✈</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
