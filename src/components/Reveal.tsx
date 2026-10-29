"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
  blur?: boolean;
  className?: string;
  once?: boolean;
}

export default function Reveal({
  children,
  delay = 0,
  duration = 0.8,
  y,
  direction = "up",
  blur = true,
  className,
  once = true,
}: RevealProps) {
  // If custom y is provided, use it directly (backward compatibility)
  const initialVariants = () => {
    if (y !== undefined) {
      return {
        opacity: 0,
        y,
        filter: blur ? "blur(8px)" : "blur(0px)",
      };
    }

    switch (direction) {
      case "up":
        return { opacity: 0, y: 35, filter: blur ? "blur(8px)" : "blur(0px)" };
      case "down":
        return { opacity: 0, y: -35, filter: blur ? "blur(8px)" : "blur(0px)" };
      case "left":
        return { opacity: 0, x: 45, filter: blur ? "blur(8px)" : "blur(0px)" };
      case "right":
        return { opacity: 0, x: -45, filter: blur ? "blur(8px)" : "blur(0px)" };
      case "scale":
        return { opacity: 0, scale: 0.92, filter: blur ? "blur(8px)" : "blur(0px)" };
      case "fade":
      default:
        return { opacity: 0, filter: blur ? "blur(8px)" : "blur(0px)" };
    }
  };

  return (
    <motion.div
      className={className}
      initial={initialVariants()}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
