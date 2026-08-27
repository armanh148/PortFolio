"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide default cursor on desktop
    document.body.classList.add("custom-cursor-active");

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.onclick !== null ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        target.closest(".cursor-pointer") !== null;

      setIsHovered(!!isClickable);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block">
      {/* ── Outer White Ring (Slower spring for natural inertia) ── */}
      <motion.div
        animate={{
          x: position.x - 16, // Half of width (w-8 = 32px)
          y: position.y - 16, // Half of height (h-8 = 32px)
          scale: isHovered ? 1.5 : 1,
          borderColor: isHovered ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.5)",
          backgroundColor: isHovered ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)",
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 220,
          mass: 0.6,
        }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/60 pointer-events-none z-[9998] mix-blend-difference"
      />

      {/* ── Center White Dot (Fast spring to match actual cursor) ── */}
      <motion.div
        animate={{
          x: position.x - 5, // Half of width (w-2.5 = 10px)
          y: position.y - 5, // Half of height (h-2.5 = 10px)
          scale: isHovered ? 1.3 : 1,
        }}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 800,
          mass: 0.1,
        }}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference shadow-[0_0_10px_rgba(255,255,255,0.8)]"
      />
    </div>
  );
}
