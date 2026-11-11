import type { Metadata } from "next";
import { siteData } from "@/lib/siteData";
import HeroSection from "@/components/HeroSection";
import BrutalistServicesSection from "@/components/BrutalistServicesSection";
import BrutalistProjectsGrid from "@/components/BrutalistProjectsGrid";
import BrutalistTechStatsSection from "@/components/BrutalistTechStatsSection";
import BrutalistReviewsContactSection from "@/components/BrutalistReviewsContactSection";

export const metadata: Metadata = {
  title: `${siteData.name} — ${siteData.role}`,
  description:
    "Full-Stack Web Developer & Frontend Specialist crafting high-performance, purposeful web experiences.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section id="hero">
        <HeroSection site={siteData} />
      </section>

      {/* 2. WHAT WE DO & MANIFESTO BANNER */}
      <section id="services">
        <BrutalistServicesSection />
      </section>

      {/* 3. FEATURED WORK BENTO GRID */}
      <section id="projects">
        <BrutalistProjectsGrid />
      </section>

      {/* 4. TECHNOLOGIES & EXPERIENCE STATS */}
      <section id="about">
        <BrutalistTechStatsSection />
      </section>

      {/* 5. REVIEWS & GET IN TOUCH CONTACT */}
      <section id="contact">
        <BrutalistReviewsContactSection />
      </section>
    </>
  );
}
