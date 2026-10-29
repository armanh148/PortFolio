"use client";

import { useEffect, useRef } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import BackToTop from "@/components/BackToTop";

function LenisLifecycleManager() {
  const pathname = usePathname();
  const lenis = useLenis();
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  // Recalculate dimensions and scroll to top on every route change
  useEffect(() => {
    if (!lenis) return;

    // Immediately reset scroll on route change
    lenis.scrollTo(0, { immediate: true });

    // Recalculate dimensions progressively as images, fonts, and Framer Motion finish rendering
    const timers = [
      setTimeout(() => lenis.resize(), 50),
      setTimeout(() => lenis.resize(), 200),
      setTimeout(() => lenis.resize(), 500),
      setTimeout(() => lenis.resize(), 1000),
    ];

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [pathname, lenis]);

  // Recalculate dimensions whenever DOM height changes or window resizes
  useEffect(() => {
    if (!lenis) return;

    const handleResize = () => {
      lenis.resize();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    // Watch for DOM size shifts (e.g. image loads, font loads, dynamic content)
    if (typeof ResizeObserver !== "undefined" && document.body) {
      resizeObserverRef.current = new ResizeObserver(() => {
        lenis.resize();
      });
      resizeObserverRef.current.observe(document.body);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
    };
  }, [lenis]);

  return null;
}

function AnchorScrollHandler() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // Handle incoming hash on initial load or navigation from another page
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash;
      const timer = setTimeout(() => {
        try {
          const targetEl = document.querySelector<HTMLElement>(hash);
          if (targetEl) {
            lenis.scrollTo(targetEl, { offset: -80, duration: 1.2 });
          }
        } catch {
          // ignore invalid selector
        }
      }, 250);

      return () => clearTimeout(timer);
    }

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      try {
        const targetEl = document.querySelector<HTMLElement>(href);
        if (targetEl) {
          e.preventDefault();
          lenis.scrollTo(targetEl, {
            offset: -80,
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      } catch {
        // ignore invalid selector
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, [lenis]);

  return null;
}

export default function SmoothScrolling({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.2,
        syncTouch: false,
        smoothWheel: true,
        wheelMultiplier: 1.0,
      }}
    >
      <LenisLifecycleManager />
      <ScrollProgressBar />
      <AnchorScrollHandler />
      {children}
      <BackToTop />
    </ReactLenis>
  );
}
