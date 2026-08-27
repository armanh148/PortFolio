"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Client-side motion wrapper used in the Server Component hero section.
 * Provides entrance animations for hero elements.
 */
export default function HeroClient({
  children,
  delay = 0,
  y = 32,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
