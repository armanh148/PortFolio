import type { Metadata } from "next";
import { siteData } from "@/lib/siteData";
import Reveal from "@/components/Reveal";
import ServicesRows from "@/components/ServicesRows";
import CapabilitiesGrid from "@/components/CapabilitiesGrid";
import ProcessGrid from "@/components/ProcessGrid";

export const metadata: Metadata = {
  title: `Services — ${siteData.name}`,
  description: "Focused design services, transparent pricing, and a single point of contact from first sketch to final deploy.",
};

export default function ServicesPage() {
  return (
    <div className="bg-canvas min-h-screen pt-24 text-ink">
      {/* ── Header Banner ── */}
      <section className="bg-ink text-white py-20 px-6 md:px-12 text-center relative overflow-hidden">
        <Reveal>
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent block mb-3">
            Capabilities &amp; Offering
          </span>
          <h1 className="display-section text-white">
            Design <span className="text-accent">Services</span>
          </h1>
        </Reveal>
      </section>

      {/* ── Capabilities Grid ── */}
      <CapabilitiesGrid />

      {/* ── Numbered Services List ── */}
      <ServicesRows />

      {/* ── Design Process ── */}
      <ProcessGrid />
    </div>
  );
}
