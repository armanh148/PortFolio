import type { Metadata } from "next";
import { siteData } from "@/lib/siteData";
import ModernContactSection from "@/components/ModernContactSection";

export const metadata: Metadata = {
  title: `Contact — ${siteData.name}`,
  description: "Let's work together. Reach out to Arman Naqvi for your next web project.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <ModernContactSection email={siteData.email} />
    </div>
  );
}

