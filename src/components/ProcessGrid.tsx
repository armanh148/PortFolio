"use client";

import Reveal from "@/components/Reveal";

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Prototyping",
    description: "Building interactive models to align expectations and simulate the UX early.",
  },
  {
    num: "02",
    title: "Wire Framing",
    description: "Structuring layout and informational hierarchy without visual distraction.",
  },
  {
    num: "03",
    title: "UI Design",
    description: "Crafting beautiful colors, premium typography, and grid-aligned visual style.",
  },
  {
    num: "04",
    title: "Improvement",
    description: "Iterating based on feedback, profiling performance, and refining micro-details.",
  },
];

export default function ProcessGrid() {
  return (
    <section className="relative py-24 bg-transparent text-[#F5F5F3] border-b border-white/10 px-6 md:px-12">
      {/* Intersection Crosshairs */}
      <span className="cross-mark text-white/20" style={{ left: "25%", top: "0", transform: "translate(-50%, -50%)" }}>+</span>
      <span className="cross-mark text-white/20" style={{ left: "50%", top: "0", transform: "translate(-50%, -50%)" }}>+</span>
      <span className="cross-mark text-white/20" style={{ left: "75%", top: "0", transform: "translate(-50%, -50%)" }}>+</span>

      <div className="max-w-[1500px] mx-auto">
        <div className="mb-16 text-center">
          <Reveal>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#2f66f6] block mb-3">
              Methodology
            </span>
            <h2 className="display-section text-[#F5F5F3]">
              Design Process <span className="text-[#2f66f6]">That Works</span>
            </h2>
          </Reveal>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-white/10">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`p-8 border-b sm:border-b-0 border-white/10 relative group hover:bg-white/5 transition-colors duration-300 ${
                i < 3 ? "lg:border-r border-white/10" : ""
              } ${i === 0 || i === 2 ? "sm:border-r" : ""}`}
            >
              <Reveal delay={i * 0.1}>
                {/* Step number */}
                <div className="text-sm font-mono font-bold text-[#2f66f6] mb-6">
                  {step.num}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#F5F5F3] uppercase mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  {step.description}
                </p>

                {/* Corner intersection element */}
                <div className="absolute right-0 bottom-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#2f66f6] font-bold p-3">
                  ✳
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
