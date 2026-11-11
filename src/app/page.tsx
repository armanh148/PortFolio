import type { Metadata } from "next";
import { siteData } from "@/lib/siteData";
import HeroSection from "@/components/HeroSection";
import BrutalistServicesSection from "@/components/BrutalistServicesSection";
import BrandTicker from "@/components/BrandTicker";
import AboutSectionRef from "@/components/AboutSectionRef";
import StatsCounter from "@/components/StatsCounter";
import CapabilitiesGrid from "@/components/CapabilitiesGrid";
import ProcessGrid from "@/components/ProcessGrid";
import AccordionProjectsSection from "@/components/AccordionProjectsSection";
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

      {/* 3. BRAND TRUST LOGOS */}
      <BrandTicker />

      {/* 4. ABOUT SECTION */}
      <section id="about">
        <AboutSectionRef site={siteData} />
      </section>

      {/* 5. IMPACT STATS COUNTERS */}
      <StatsCounter />

      {/* 6. CAPABILITIES GRID */}
      <CapabilitiesGrid />

      {/* 7. DESIGN PROCESS GRID */}
      <ProcessGrid />

      {/* 8. ACCORDION PROJECTS SECTION */}
      <section id="projects">
        <AccordionProjectsSection />
      </section>

      {/* 9. CLIENT TESTIMONIALS */}
      <ClientTestimonialsSection />

      {/* 10. FAQ SECTION */}
      <ModernFaqSection />
    </>
  );
}

