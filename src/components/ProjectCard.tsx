import type { Project } from "@/lib/siteData";

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <article className="group flex cursor-pointer flex-col">
      <div
        className="relative flex aspect-[4/5] items-end overflow-hidden rounded-2xl p-5"
        style={{ background: project.gradient }}
      >
        <span className="absolute right-5 top-5 font-serif text-sm italic text-snow/60">
          {project.year}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 opacity-70 transition-opacity duration-500 group-hover:opacity-40" />
        <span className="relative font-serif text-2xl font-light leading-tight text-snow transition-transform duration-500 group-hover:-translate-y-2">
          {project.title}
        </span>
        <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-crimson text-snow shadow-[0_0_40px_-5px] shadow-crimson/70">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              aria-hidden="true"
            >
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </span>
        </span>
      </div>

      <div className="mt-4 flex items-baseline justify-between">
        <h3 className="font-serif text-lg font-medium text-snow">
          {project.title}
        </h3>
        <span className="text-[11px] uppercase tracking-[0.2em] text-crimson">
          {project.category}
        </span>
      </div>
      <p className="mt-2 text-[12px] font-light leading-relaxed text-smoke">
        {project.tags?.join("  Â·  ")}
      </p>
    </article>
  );
}

