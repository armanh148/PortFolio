import type { Metadata } from "next";
import { siteData } from "@/lib/siteData";
import AboutPageContent from "@/components/AboutPageContent";

export const metadata: Metadata = {
  title: `About — ${siteData.name}`,
  description: `Full-Stack Web Developer & Frontend Specialist at Techmire Solutions (Karachi, Pakistan) specializing in modern web applications, scalable backends, and responsive UI.`,
};

export default function AboutPage() {
  return <AboutPageContent site={siteData} />;
}
