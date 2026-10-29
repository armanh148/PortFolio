"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate cursor if device supports hover pointer
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    document.body.classList.add("custom-cursor-active");

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.onclick !== null ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        target.closest("input") !== null ||
        target.closest("textarea") !== null ||
        target.closest("select") !== null ||
        target.closest(".cursor-pointer") !== null ||
        target.closest(".group") !== null;

      setIsHovered(!!isClickable);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block pointer-events-none">
      {/* ── Outer Ring with Fluid Spring & Glow ── */}
      <motion.div
        animate={{
          x: position.x - (isHovered ? 24 : 16),
          y: position.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          scale: isClicked ? 0.85 : 1,
          borderColor: isHovered ? "rgba(47, 102, 246, 0.9)" : "rgba(255, 255, 255, 0.45)",
          backgroundColor: isHovered ? "rgba(47, 102, 246, 0.12)" : "rgba(255, 255, 255, 0)",
          boxShadow: isHovered
            ? "0 0 20px rgba(47, 102, 246, 0.4), inset 0 0 10px rgba(47, 102, 246, 0.2)"
            : "0 0 0px rgba(0,0,0,0)",
        }}
        transition={{
          type: "spring",
          damping: 24,
          stiffness: 240,
          mass: 0.5,
        }}
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9998]"
      />

      {/* ── Center Dot with Instant Precision ── */}
      <motion.div
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isHovered ? 1.4 : isClicked ? 0.7 : 1,
          backgroundColor: isHovered ? "#2f66f6" : "#ffffff",
        }}
        transition={{
          type: "spring",
          damping: 38,
          stiffness: 850,
          mass: 0.1,
        }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] shadow-[0_0_8px_rgba(255,255,255,0.8)]"
      />
    </div>
  );
}
