import type { Metadata } from "next";
import { siteData } from "@/lib/siteData";
import AboutPageContent from "@/components/AboutPageContent";

export const metadata: Metadata = {
  title: `About — ${siteData.name}`,
  description: `Frontend Engineer & WordPress Architect with 8+ years of expertise crafting high-performance, purposeful digital experiences.`,
};

export default function AboutPage() {
  return <AboutPageContent site={siteData} />;
}
