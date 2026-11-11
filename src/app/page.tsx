import type { Metadata } from "next";
import { siteData } from "@/lib/siteData";
import HeroSection from "@/components/HeroSection";
import BrutalistServicesSection from "@/components/BrutalistServicesSection";
import BrutalistProjectsGrid from "@/components/BrutalistProjectsGrid";
import BrutalistTechStatsSection from "@/components/BrutalistTechStatsSection";
import BrandTicker from "@/components/BrandTicker";
import AboutSectionRef from "@/components/AboutSectionRef";
import CapabilitiesGrid from "@/components/CapabilitiesGrid";
import ProcessGrid from "@/components/ProcessGrid";
import ClientTestimonialsSection from "@/components/ClientTestimonialsSection";
import ModernFaqSection from "@/components/ModernFaqSection";

export const metadata: Metadata = {
  title: `${siteData.name} — ${siteData.role}`,
  description:
    "Frontend & WordPress Developer crafting high-performance, purposeful web experiences.",
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
      <section id="tech-stats">
        <BrutalistTechStatsSection />
      </section>

      {/* 5. BRAND TRUST LOGOS */}
      <BrandTicker />

      {/* 6. ABOUT SECTION */}
      <section id="about">
        <AboutSectionRef site={siteData} />
      </section>

      {/* 7. CAPABILITIES GRID */}
      <CapabilitiesGrid />

      {/* 8. DESIGN PROCESS GRID */}
      <ProcessGrid />

      {/* 9. CLIENT TESTIMONIALS */}
      <ClientTestimonialsSection />

      {/* 10. FAQ SECTION */}
      <ModernFaqSection />
    </>
  );
}

