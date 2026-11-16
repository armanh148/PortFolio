import type { Metadata } from "next";
import { siteData } from "@/lib/siteData";
import HeroSection from "@/components/HeroSection";
import FeaturedWorkSection from "@/components/FeaturedWorkSection";
import CaseStudySection from "@/components/CaseStudySection";
import SkillsTechnologiesSection from "@/components/SkillsTechnologiesSection";
import AboutMeSection from "@/components/AboutMeSection";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: `${siteData.name} — Software Developer & Full-Stack Specialist`,
  description:
    "Full-Stack Development, AI Solutions and Mobile Applications that turn ideas into real-world products.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. HERO SECTION & SERVICES QUICK BAR */}
      <HeroSection site={siteData} />

      {/* 2. FEATURED PROJECTS SECTION */}
      <FeaturedWorkSection />

      {/* 3. CASE STUDY SECTION */}
      <CaseStudySection />

      {/* 4. SKILLS & TECHNOLOGIES SECTION */}
      <SkillsTechnologiesSection />

      {/* 5. ABOUT ME SECTION */}
      <AboutMeSection />

      {/* 6. CONTACT SECTION (Have a project in mind?) */}
      <ContactSection />
    </>
  );
}
