"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string; // e.g. "37+", "70+", "8+", "100%"
  className?: string;
  duration?: number;
}

export default function AnimatedCounter({
  value,
  className = "",
  duration = 1.8,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  // Extract number and suffix/prefix (e.g. "37+" -> target: 37, suffix: "+")
  const numericMatch = value.match(/\d+/);
  const targetNumber = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const prefix = value.startsWith("+") ? "+" : "";
  const suffix = value.replace(/^\+?\d+/, "");

  useEffect(() => {
    if (!isInView || targetNumber === 0) {
      if (isInView && targetNumber === 0) setDisplayValue(value);
      return;
    }

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Easing function: easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = Math.floor(ease * targetNumber);

      setDisplayValue(`${prefix}${currentVal}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, targetNumber, duration, value, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}

