"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "Frontend Engineering",
  "WordPress Specialty",
  "Editorial Design",
  "Performance First",
  "Pixel Perfect",
];

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-stone-200 py-6 md:py-8">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex shrink-0 items-center"
        >
          {[0, 1, 2].map((group) => (
            <div
              key={group}
              className="flex items-center"
              aria-hidden={group > 0}
            >
              {ITEMS.map((item, i) => (
                <span key={`${group}-${i}`} className="flex items-center">
                  <span className="px-8 font-serif text-2xl font-light text-snow/85 md:text-3xl">
                    {item}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
