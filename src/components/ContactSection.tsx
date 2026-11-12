"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "Full-Stack Web Application",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Inquiry from ${form.name} [${form.projectType}]`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.projectType}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:armannaqvi.tms@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative w-full border-t border-black/10 select-none overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
        {/* ══════════════════════════════════════════════════════════
            LEFT HALF: WARM CREAM "HAVE A PROJECT IN MIND?"
           ══════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-6 bg-[#f4f1ea] text-black p-8 sm:p-12 md:p-16 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle concrete / grunge grain background */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Brutalist Asymmetric Diagonal Slice in bottom right matching reference layout */}
          <div
            className="hidden lg:block absolute bottom-0 right-0 w-40 h-40 bg-[#0a0a0a] pointer-events-none z-0"
            style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
          />

          <div className="relative z-10">
            <h2 className="font-['Bebas_Neue','Oswald',sans-serif] text-5xl sm:text-6xl lg:text-7xl leading-[0.88] uppercase tracking-wide text-black mb-4">
              HAVE A PROJECT<br />
              IN MIND?
            </h2>

            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm font-bold uppercase tracking-wider text-[#ff3d00] mb-8">
              LET&rsquo;S BUILD SOMETHING BOLD TOGETHER.
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-8">
              <a
                href="mailto:armannaqvi.tms@gmail.com"
                className="inline-flex items-center gap-3 bg-black hover:bg-neutral-800 text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-xs uppercase tracking-wider px-6 py-3.5 transition-all cursor-pointer"
              >
                <span>LET&rsquo;S TALK</span>
                <span className="text-sm font-bold text-[#ff3d00]">→</span>
              </a>

              <a
                href="mailto:armannaqvi.tms@gmail.com"
                className="font-mono text-xs sm:text-sm font-bold text-neutral-800 hover:text-[#ff3d00] transition-colors underline underline-offset-4"
              >
                armannaqvi.tms@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            RIGHT HALF: PITCH BLACK ASYMMETRIC INQUIRY FORM
           ══════════════════════════════════════════════════════════ */}
        <div className="lg:col-span-6 bg-[#0a0a0a] text-white flex flex-col md:flex-row relative">
          <div className="flex-1 p-8 sm:p-12 md:p-16 flex flex-col justify-center">
            {submitted ? (
              <div className="text-center py-12">
                <span className="w-12 h-12 rounded-full bg-[#ff3d00] text-white flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  ✓
                </span>
                <h3 className="font-['Bebas_Neue','Oswald',sans-serif] text-3xl uppercase tracking-wider text-white mb-2">
                  MESSAGE PREPARED!
                </h3>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs text-neutral-400">
                  Thank you! Your default email client has been opened.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-['Plus_Jakarta_Sans',sans-serif] uppercase tracking-widest text-neutral-400 block mb-1.5 font-bold">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#141414] border border-white/10 focus:border-[#ff3d00] px-3.5 py-3 text-xs sm:text-sm text-white placeholder-neutral-600 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-['Plus_Jakarta_Sans',sans-serif] uppercase tracking-widest text-neutral-400 block mb-1.5 font-bold">
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#141414] border border-white/10 focus:border-[#ff3d00] px-3.5 py-3 text-xs sm:text-sm text-white placeholder-neutral-600 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label className="text-[10px] font-['Plus_Jakarta_Sans',sans-serif] uppercase tracking-widest text-neutral-400 block mb-1.5 font-bold">
                    PROJECT TYPE
                  </label>
                  <select
                    value={form.projectType}
                    onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                    className="w-full bg-[#141414] border border-white/10 focus:border-[#ff3d00] px-3.5 py-3 text-xs sm:text-sm text-white outline-none transition-colors cursor-pointer"
                  >
                    <option value="Full-Stack Web Application" className="bg-[#141414] text-white">Full-Stack Web Application</option>
                    <option value="Next.js & Frontend Engineering" className="bg-[#141414] text-white">Next.js &amp; Frontend Engineering</option>
                    <option value="Shopify & E-Commerce Platform" className="bg-[#141414] text-white">Shopify &amp; E-Commerce Platform</option>
                    <option value="WordPress Custom Architecture" className="bg-[#141414] text-white">WordPress Custom Architecture</option>
                    <option value="Consultation & Speed Optimization" className="bg-[#141414] text-white">Consultation &amp; Speed Optimization</option>
                  </select>
                </div>

                {/* Project Message */}
                <div>
                  <label className="text-[10px] font-['Plus_Jakarta_Sans',sans-serif] uppercase tracking-widest text-neutral-400 block mb-1.5 font-bold">
                    TELL ME ABOUT YOUR PROJECT
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Brief overview of goals, requirements and timeline..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#141414] border border-white/10 focus:border-[#ff3d00] px-3.5 py-3 text-xs sm:text-sm text-white placeholder-neutral-600 outline-none transition-colors resize-none"
                  />
                </div>

                {/* Send Message Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 bg-[#ff3d00] hover:bg-[#e03500] text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-xs uppercase tracking-wider py-4 px-6 transition-all shadow-lg hover:scale-[1.01] cursor-pointer"
                >
                  <span>SEND MESSAGE</span>
                  <span className="text-base font-bold">→</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Vertical Rail: "FAST REPLY. REAL SOLUTIONS." */}
          <div className="w-full md:w-12 shrink-0 border-t md:border-t-0 md:border-l border-white/10 py-3 md:py-6 px-3 flex items-center justify-center bg-[#0a0a0a]">
            <span className="font-['Bebas_Neue','Oswald',sans-serif] text-base font-bold uppercase tracking-[0.25em] text-[#ff3d00] md:[writing-mode:vertical-rl] md:rotate-180 whitespace-nowrap">
              FAST REPLY. REAL SOLUTIONS.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
