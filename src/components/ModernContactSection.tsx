"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function ModernContactSection({
  email = "armannaqvi.tms@gmail.com",
}: {
  email?: string;
}) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "USA",
    role: "Select your role",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update =
    (field: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(
      `New Portfolio Enquiry from ${form.firstName} ${form.lastName}`
    );
    const mailBody = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nCountry: ${form.country}\nRole: ${form.role}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${email}?subject=${mailSubject}&body=${mailBody}`;
    setSent(true);
  };

  return (
    <section className="relative py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 bg-transparent text-[#F5F5F3] overflow-hidden border-t border-white/10">
      {/* Dynamic Background Glow with Float Motion */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-[800px] h-[500px] bg-[#2f66f6] blur-[140px] rounded-full pointer-events-none mix-blend-screen"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.06, 0.12, 0.06],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-[#1d4ed8] blur-[120px] rounded-full pointer-events-none mix-blend-screen"
      />

      <div className="max-w-[1500px] mx-auto relative z-10">
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-start mb-12 sm:mb-20">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-6 pt-2 sm:pt-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2f66f6]/30 bg-[#2f66f6]/10 text-xs font-semibold uppercase tracking-widest text-[#2f66f6] mb-5 sm:mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2f66f6] animate-pulse" />
                Let&rsquo;s Connect
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-[64px] font-black uppercase tracking-tight leading-[1.05] mb-5 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white via-stone-200 to-stone-500">
                Let&rsquo;s build high-performance web experiences
              </h2>
              <p className="text-stone-300 font-normal text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 max-w-xl">
                Reach out to discuss new projects, custom Next.js builds, WordPress theme craft, or component design systems. I personalize experiences and deliver quality at every touchpoint.
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} className="w-full sm:w-auto">
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-[#2f66f6] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1d4ed8] transition-all shadow-lg shadow-blue-600/40"
                  >
                    Explore Works ↗
                  </Link>
                </motion.div>
                <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-stone-300 uppercase tracking-widest">
                    Available for work
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Glassmorphism Form Card */}
          <div className="lg:col-span-6">
            <Reveal delay={0.15}>
              <div className="bg-white/5 backdrop-blur-2xl p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/10 shadow-[0_0_80px_-20px_rgba(47,102,246,0.2)] relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {sent ? (
                  <div className="text-center py-12 sm:py-16">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#2f66f6] to-[#1d4ed8] text-white flex items-center justify-center mx-auto mb-5 font-bold text-2xl shadow-xl shadow-blue-500/40"
                    >
                      ✓
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                      Message Ready!
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-300 max-w-xs mx-auto mb-6 sm:mb-8 leading-relaxed">
                      Thank you for reaching out. Your default email client has been opened to finalize the message.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="text-xs font-bold text-[#2f66f6] uppercase tracking-wider underline underline-offset-4 hover:opacity-80 transition-opacity cursor-pointer"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6 relative z-10">
                    {/* Row 1: First Name & Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="text-[11px] uppercase tracking-widest font-semibold text-stone-400 block mb-1.5 ml-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          required
                          value={form.firstName}
                          onChange={update("firstName")}
                          placeholder="James"
                          className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 sm:py-3.5 text-base sm:text-sm text-white placeholder:text-stone-500 outline-none focus:border-[#2f66f6] focus:bg-white/10 hover:border-white/20 transition-all shadow-inner"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] uppercase tracking-widest font-semibold text-stone-400 block mb-1.5 ml-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          required
                          value={form.lastName}
                          onChange={update("lastName")}
                          placeholder="Smith"
                          className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 sm:py-3.5 text-base sm:text-sm text-white placeholder:text-stone-500 outline-none focus:border-[#2f66f6] focus:bg-white/10 hover:border-white/20 transition-all shadow-inner"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email & Country */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="text-[11px] uppercase tracking-widest font-semibold text-stone-400 block mb-1.5 ml-1">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={update("email")}
                          placeholder="james@company.com"
                          className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 sm:py-3.5 text-base sm:text-sm text-white placeholder:text-stone-500 outline-none focus:border-[#2f66f6] focus:bg-white/10 hover:border-white/20 transition-all shadow-inner"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] uppercase tracking-widest font-semibold text-stone-400 block mb-1.5 ml-1">
                          Country
                        </label>
                        <div className="relative">
                          <select
                            value={form.country}
                            onChange={update("country")}
                            className="w-full bg-[#18181c] border border-white/10 rounded-xl px-4 py-3 sm:py-3.5 text-base sm:text-sm text-white outline-none focus:border-[#2f66f6] hover:border-white/20 transition-all appearance-none cursor-pointer shadow-inner pr-10"
                          >
                            <option value="USA">🇺🇸 USA</option>
                            <option value="UK">🇬🇧 United Kingdom</option>
                            <option value="Pakistan">🇵🇰 Pakistan</option>
                            <option value="UAE">🇦🇪 UAE</option>
                            <option value="Germany">🇩🇪 Germany</option>
                            <option value="Canada">🇨🇦 Canada</option>
                            <option value="Other">🌐 International</option>
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
                            ▼
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Your Role */}
                    <div>
                      <label className="text-[11px] uppercase tracking-widest font-semibold text-stone-400 block mb-1.5 ml-1">
                        Your Role
                      </label>
                      <div className="relative">
                        <select
                          value={form.role}
                          onChange={update("role")}
                          className="w-full bg-[#18181c] border border-white/10 rounded-xl px-4 py-3 sm:py-3.5 text-base sm:text-sm text-white outline-none focus:border-[#2f66f6] hover:border-white/20 transition-all appearance-none cursor-pointer shadow-inner pr-10"
                        >
                          <option value="Select your role" disabled>
                            Select your role
                          </option>
                          <option value="Client / Founder">Client / Founder</option>
                          <option value="Agency Owner">Agency Owner</option>
                          <option value="Recruiter">Recruiter</option>
                          <option value="UI/UX Designer">UI/UX Designer</option>
                          <option value="Other">Other</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
                          ▼
                        </div>
                      </div>
                    </div>

                    {/* Row 4: Message */}
                    <div>
                      <label className="text-[11px] uppercase tracking-widest font-semibold text-stone-400 block mb-1.5 ml-1">
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={update("message")}
                        placeholder="Tell me about your project..."
                        className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 sm:py-3.5 text-base sm:text-sm text-white placeholder:text-stone-500 outline-none focus:border-[#2f66f6] focus:bg-white/10 hover:border-white/20 transition-all resize-none shadow-inner"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end pt-2 sm:pt-3">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl bg-[#2f66f6] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#1d4ed8] transition-all shadow-[0_0_20px_-5px_rgba(47,102,246,0.5)] hover:shadow-[0_0_25px_-5px_rgba(47,102,246,0.8)] cursor-pointer"
                      >
                        Send Message ↗
                      </motion.button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Middle Banner: Testimonials Row with Hover Lift */}
        <div className="py-8 sm:py-12 border-y border-white/10 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 mb-12 sm:mb-16">
          <Reveal delay={0.1}>
            <motion.div
              whileHover={{ y: -6, backgroundColor: "rgba(255, 255, 255, 0.04)" }}
              className="bg-white/[0.02] border border-white/10 p-5 sm:p-8 rounded-2xl flex items-start gap-4 sm:gap-5 transition-colors cursor-pointer"
            >
              <div className="relative shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80"
                  alt="Client avatar"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border border-[#2f66f6]/40 shadow-md"
                />
                <span className="absolute -bottom-1 -right-1 bg-[#2f66f6] text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full text-xs flex items-center justify-center font-bold shadow-lg shadow-blue-900/50">
                  💬
                </span>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-stone-300 font-medium leading-relaxed italic mb-3 sm:mb-4">
                  &ldquo;We&rsquo;ve gained a 360-degree view of our web products. The unified builds allow us to personalize interactions, resulting in higher customer satisfaction.&rdquo;
                </p>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-white">Sarah Jenkins</span>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#2f66f6] font-semibold">
                    VP of Engineering
                  </span>
                </div>
              </div>
            </motion.div>
          </Reveal>

          <Reveal delay={0.2}>
            <motion.div
              whileHover={{ y: -6, backgroundColor: "rgba(255, 255, 255, 0.04)" }}
              className="bg-white/[0.02] border border-white/10 p-5 sm:p-8 rounded-2xl flex items-start gap-4 sm:gap-5 transition-colors cursor-pointer"
            >
              <div className="relative shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                  alt="Client avatar"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border border-[#2f66f6]/40 shadow-md"
                />
                <span className="absolute -bottom-1 -right-1 bg-[#2f66f6] text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full text-xs flex items-center justify-center font-bold shadow-lg shadow-blue-900/50">
                  ⚡
                </span>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-stone-300 font-medium leading-relaxed italic mb-3 sm:mb-4">
                  &ldquo;Now, we truly understand our users. These high-performance Next.js profiles enable seamless interactions, boosting retention and strengthening loyalty.&rdquo;
                </p>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-white">Marcus Sterling</span>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#2f66f6] font-semibold">
                    Founder &amp; CEO
                  </span>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>

        {/* Bottom Grid: 4 Feature / Value Columns (2 per row on mobile, 4 on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {[
            { icon: "🕒", title: "Fast Response", desc: "Guaranteed response within 24 hours for all project enquiries." },
            { icon: "📊", title: "Actionable Insights", desc: "Employ performance profiling to optimize load times and conversion." },
            { icon: "🎛️", title: "Design Systems", desc: "Live Figma component libraries and Tailwind tokens to scale layouts." },
            { icon: "🌍", title: "Global Reach", desc: "Collaborating with creative studios, agencies, and founders worldwide." },
          ].map((item, idx) => (
            <Reveal key={item.title} delay={0.08 * (idx + 1)}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 hover:border-[#2f66f6]/40 transition-all group cursor-pointer flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#2f66f6]/20 to-[#2f66f6]/5 border border-[#2f66f6]/30 text-[#2f66f6] flex items-center justify-center text-lg sm:text-xl font-bold mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-xs sm:text-base font-bold text-white mb-1.5 sm:mb-2 group-hover:text-[#2f66f6] transition-colors leading-snug line-clamp-1 sm:line-clamp-none">
                    {item.title}
                  </h4>
                </div>
                <p className="text-[11px] sm:text-sm text-stone-400 font-normal leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {item.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
