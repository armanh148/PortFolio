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
        className="h-full bg-gradient-to-r from-blue-500 via-[#2f66f6] to-cyan-400 origin-left shadow-[0_0_12px_rgba(47,102,246,0.8)]"
      />
    </div>
  );
}

