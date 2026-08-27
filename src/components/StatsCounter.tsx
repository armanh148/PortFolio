"use client";

import Reveal from "@/components/Reveal";

const STATS = [
  { value: "37+", label: "Projects Completed", description: "Production-ready next-gen web applications." },
  { value: "70+", label: "Happy Clients", description: "WordPress partners and agencies worldwide." },
  { value: "8+", label: "Years of Craft", description: "Specialized in frontend, layout design and styling." },
  { value: "100%", label: "Satisfaction Rate", description: "Delivering quality products on time." },
];

export default function StatsCounter() {
  return (
    <section className="relative py-24 bg-transparent text-[#F5F5F3] border-b border-white/10 px-6 md:px-12">
      {/* Grid line separator */}
      <div className="absolute left-1/4 top-0 bottom-0 border-r border-white/[0.06] hidden lg:block" />
      <div className="absolute left-2/4 top-0 bottom-0 border-r border-white/[0.06] hidden lg:block" />
      <div className="absolute left-3/4 top-0 bottom-0 border-r border-white/[0.06] hidden lg:block" />

      {/* Intersection Crosshairs */}
      <span className="cross-mark text-white/20" style={{ left: "25%", top: "0", transform: "translate(-50%, -50%)" }}>+</span>
      <span className="cross-mark text-white/20" style={{ left: "50%", top: "0", transform: "translate(-50%, -50%)" }}>+</span>
      <span className="cross-mark text-white/20" style={{ left: "75%", top: "0", transform: "translate(-50%, -50%)" }}>+</span>

      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#2f66f6] block mb-3">
                Proven Track Record
              </span>
              <h2 className="display-section text-[#F5F5F3]">
                My Impact Through <br/>
                <span className="text-[#2f66f6]">User Experience</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <p className="text-stone-400 font-light text-base md:text-lg leading-relaxed">
                By bridging premium design sensibilities with clean code, I build high-performance portfolios and WordPress platforms that align perfectly with brand identity.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-white/10">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:shadow-2xl hover:border-[#2f66f6]/40 transition-all duration-300 hover:-translate-y-1">
                <span className="absolute top-4 right-4 text-[#2f66f6] text-lg font-light group-hover:scale-110 transition-transform">✳</span>
                <div className="text-5xl font-black text-[#F5F5F3] tracking-tight mb-2 group-hover:text-[#2f66f6] transition-colors">
                  {stat.value}
                </div>
                <h4 className="text-sm font-bold text-[#F5F5F3] uppercase tracking-wider mb-2">
                  {stat.label}
                </h4>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
