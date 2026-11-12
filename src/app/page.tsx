import type { Metadata } from "next";
import { siteData } from "@/lib/siteData";
import HeroSection from "@/components/HeroSection";
import AboutMeSection from "@/components/AboutMeSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import FeaturedWorkSection from "@/components/FeaturedWorkSection";
import NumbersSkillsSection from "@/components/NumbersSkillsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: `${siteData.name} — Full-Stack Specialist`,
  description:
    "I help brands stand out and scale up with bold digital experiences and data-driven solutions.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. HERO SECTION (Dark Canvas with Fiery Orange Sun & Monumental Typography) */}
      <HeroSection site={siteData} />

      {/* 2. ABOUT ME SECTION (Warm Cream Canvas with Vertical Rail & Signature Collage) */}
      <AboutMeSection />

      {/* 3. EXPERTISE SECTION (Pitch Black Canvas with Wireframe Orange Icons) */}
      <ExpertiseSection />

      {/* 4. FEATURED WORK SECTION (Warm Sand Canvas with 3 Large Project Cards) */}
      <FeaturedWorkSection />

      {/* 5. NUMBERS & SKILLS SECTION (Dual Split: Pitch Black Stats + Solid Orange Skills) */}
      <NumbersSkillsSection />

      {/* 6. TESTIMONIALS SECTION (Warm Cream Canvas with Vertical Rail & 3 Client Reviews) */}
      <TestimonialsSection />

      {/* 7. CONTACT SECTION (Asymmetric Split: Cream "HAVE A PROJECT IN MIND?" + Black Form) */}
      <ContactSection />
    </>
  );
}
