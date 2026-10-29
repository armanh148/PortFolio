import type { Metadata } from "next";
import { siteData } from "@/lib/siteData";
import ProjectsFilter from "@/components/ProjectsFilter";

export const metadata: Metadata = {
  title: `Projects — ${siteData.name}`,
  description: "A selection of frontend builds, WordPress experiences, and design systems shipped for clients around the world.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-[#09090b] min-h-screen pt-24 pb-16">
      <ProjectsFilter />
    </div>
  );
}
