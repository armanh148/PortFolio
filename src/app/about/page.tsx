import type { Metadata } from "next";
import { siteData } from "@/lib/siteData";
import AboutSectionRef from "@/components/AboutSectionRef";

export const metadata: Metadata = {
  title: `About — ${siteData.name}`,
  description: `Frontend & WordPress Developer with 8+ years of expertise crafting intuitive digital experiences.`,
};

export default function AboutPage() {
  return (
    <div className="bg-ink min-h-screen pt-24 text-white">
      <AboutSectionRef site={siteData} />
    </div>
  );
}
