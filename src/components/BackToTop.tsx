"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.15, y: -4 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-[80] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-xl border border-slate-300 text-slate-800 flex items-center justify-center shadow-[0_8px_30px_rgba(15,23,42,0.12)] hover:border-[#dc2626] hover:shadow-[0_0_25px_rgba(220,38,38,0.25)] transition-colors group cursor-pointer"
        >
          <span className="text-sm font-bold transition-transform duration-300 group-hover:-translate-y-0.5 text-slate-700 group-hover:text-[#dc2626]">
            ↑
          </span>
          <span className="sr-only">Back to top</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

