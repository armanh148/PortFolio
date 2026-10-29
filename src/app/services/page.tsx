import type { Metadata } from "next";
import { siteData } from "@/lib/siteData";
import ServicesPageContent from "@/components/ServicesPageContent";

export const metadata: Metadata = {
  title: `Services & Capabilities — ${siteData.name}`,
  description:
    "Specialized Next.js frontend engineering, custom WordPress architectures, and high-performance design systems crafted for founders, brands, and agencies.",
};

export default function ServicesPage() {
  return <ServicesPageContent site={siteData} />;
}
