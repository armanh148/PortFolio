"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-transparent pointer-events-none">
      <motion.div
        style={{ scaleX }}
        className="h-full bg-gradient-to-r from-[#dc2626] via-[#b91c1c] to-[#1e3a8a] origin-left shadow-[0_0_12px_rgba(220,38,38,0.5)]"
      />
    </div>
  );
}

