"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function ModernContactSection({ email = "arman@example.com" }: { email?: string }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "USA",
    role: "Select your role",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(`New Portfolio Enquiry from ${form.firstName} ${form.lastName}`);
    const mailBody = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nCountry: ${form.country}\nRole: ${form.role}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${email}?subject=${mailSubject}&body=${mailBody}`;
    setSent(true);
  };

  return (
    <section className="relative py-24 px-6 md:px-12 bg-transparent text-[#F5F5F3] overflow-hidden border-t border-white/10">
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[500px] bg-[#2f66f6] opacity-[0.07] blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-[#1d4ed8] opacity-[0.06] blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

      {/* Subtle curved background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none">
          <path
            d="M-100 100 C 300 0, 800 200, 1540 50"
            stroke="url(#paint0_linear)"
            strokeWidth="1.5"
          />
          <path
            d="M-100 150 C 350 50, 850 250, 1540 100"
            stroke="url(#paint1_linear)"
            strokeWidth="1"
          />
          <defs>
            <linearGradient id="paint0_linear" x1="-100" y1="100" x2="1540" y2="50" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2f66f6" stopOpacity="0" />
              <stop offset="0.5" stopColor="#2f66f6" />
              <stop offset="1" stopColor="#2f66f6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="-100" y1="150" x2="1540" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" stopOpacity="0" />
              <stop offset="0.5" stopColor="#ffffff" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-[1500px] mx-auto relative z-10">
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-20">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-6 pt-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2f66f6]/30 bg-[#2f66f6]/10 text-xs font-semibold uppercase tracking-widest text-[#2f66f6] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2f66f6] animate-pulse"></span>
                Let&rsquo;s Connect
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-black uppercase tracking-tight leading-[1.05] mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white via-stone-200 to-stone-500">
                Let&rsquo;s build high-performance web experiences
              </h2>
              <p className="text-stone-400 font-medium text-base md:text-lg leading-relaxed mb-10 max-w-xl">
                Reach out to discuss new projects, custom Next.js builds, WordPress theme craft, or component design systems. I personalize experiences and deliver quality at every touchpoint.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#2f66f6] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1d4ed8] transition-all hover:scale-105"
                >
                  Explore Works
                </Link>
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-stone-200 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-stone-600 uppercase tracking-widest">Available for work</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Glassmorphism Form Card */}
          <div className="lg:col-span-6">
            <Reveal delay={0.15}>
              <div className="bg-white/5 backdrop-blur-2xl p-8 sm:p-10 rounded-3xl border border-white/10 shadow-[0_0_80px_-20px_rgba(79,70,229,0.15)] relative overflow-hidden">
                {/* Subtle top glare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                {sent ? (
                  <div className="text-center py-16">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2f66f6] to-[#1d4ed8] text-white flex items-center justify-center mx-auto mb-6 font-bold text-2xl shadow-xl shadow-blue-500/30"
                    >
                      ✓
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-3">Message Ready!</h3>
                    <p className="text-sm text-stone-600 max-w-xs mx-auto mb-8 leading-relaxed">
                      Thank you for reaching out. Your default email client has been opened to finalize the message.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="text-xs font-bold text-[#2f66f6] uppercase tracking-wider underline underline-offset-4 hover:opacity-80 transition-opacity"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                    {/* Row 1: First Name & Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-[11px] uppercase tracking-widest font-semibold text-stone-600 block mb-2 ml-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          required
                          value={form.firstName}
                          onChange={update("firstName")}
                          placeholder="James"
                          className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-stone-400 outline-none focus:border-[#2f66f6] focus:bg-white/10 hover:border-white/20 transition-all shadow-inner"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] uppercase tracking-widest font-semibold text-stone-600 block mb-2 ml-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          required
                          value={form.lastName}
                          onChange={update("lastName")}
                          placeholder="Smith"
                          className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-stone-400 outline-none focus:border-[#2f66f6] focus:bg-white/10 hover:border-white/20 transition-all shadow-inner"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email & Country */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-[11px] uppercase tracking-widest font-semibold text-stone-600 block mb-2 ml-1">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={update("email")}
                          placeholder="james@company.com"
                          className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-stone-400 outline-none focus:border-[#2f66f6] focus:bg-white/10 hover:border-white/20 transition-all shadow-inner"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] uppercase tracking-widest font-semibold text-stone-600 block mb-2 ml-1">
                          Country
                        </label>
                        <div className="relative">
                          <select
                            value={form.country}
                            onChange={update("country")}
                            className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white outline-none focus:border-[#2f66f6] focus:bg-white/10 hover:border-white/20 transition-all appearance-none cursor-pointer shadow-inner pr-10"
                          >
                            <option value="USA">🇺🇸 USA</option>
                            <option value="UK">🇬🇧 United Kingdom</option>
                            <option value="Pakistan">🇵🇰 Pakistan</option>
                            <option value="UAE">🇦🇪 UAE</option>
                            <option value="Germany">🇩🇪 Germany</option>
                            <option value="Canada">🇨🇦 Canada</option>
                            <option value="Other">🌐 International</option>
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-500">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Your Role */}
                    <div>
                      <label className="text-[11px] uppercase tracking-widest font-semibold text-stone-600 block mb-2 ml-1">
                        Your Role
                      </label>
                      <div className="relative">
                        <select
                          value={form.role}
                          onChange={update("role")}
                          className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white outline-none focus:border-[#2f66f6] focus:bg-white/10 hover:border-white/20 transition-all appearance-none cursor-pointer shadow-inner pr-10"
                        >
                          <option value="Select your role" disabled>Select your role</option>
                          <option value="Client / Founder">Client / Founder</option>
                          <option value="Agency Owner">Agency Owner</option>
                          <option value="Recruiter">Recruiter</option>
                          <option value="UI/UX Designer">UI/UX Designer</option>
                          <option value="Other">Other</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-500">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                        </div>
                      </div>
                    </div>

                    {/* Row 4: Message */}
                    <div>
                      <label className="text-[11px] uppercase tracking-widest font-semibold text-stone-600 block mb-2 ml-1">
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={update("message")}
                        placeholder="Tell me about your project..."
                        className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-stone-400 outline-none focus:border-[#2f66f6] focus:bg-white/10 hover:border-white/20 transition-all resize-none shadow-inner"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end pt-3">
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#2f66f6] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#1d4ed8] transition-all shadow-[0_0_20px_-5px_rgba(47,102,246,0.5)] hover:shadow-[0_0_25px_-5px_rgba(47,102,246,0.7)] hover:-translate-y-0.5 active:translate-y-0"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Middle Banner: Testimonials / Social Proof Row */}
        <div className="py-12 border-y border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-16">
          <Reveal delay={0.1}>
            <div className="bg-white/[0.02] border border-white/10 p-6 md:p-8 rounded-2xl flex items-start gap-5 hover:bg-white/[0.04] transition-colors">
              <div className="relative shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80"
                  alt="Client avatar"
                  className="w-14 h-14 rounded-full object-cover border border-[#2f66f6]/30"
                />
                <span className="absolute -bottom-1 -right-1 bg-[#2f66f6] text-white w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold shadow-lg shadow-blue-900/50">
                  💬
                </span>
              </div>
              <div>
                <p className="text-sm text-stone-400 font-medium leading-relaxed italic mb-4">
                  &ldquo;We&rsquo;ve gained a 360-degree view of our web products. The unified builds allow us to personalize interactions, resulting in higher customer satisfaction.&rdquo;
                </p>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">Sarah Jenkins</span>
                  <span className="text-[11px] uppercase tracking-widest text-stone-500 font-semibold">VP of Engineering</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-white/[0.02] border border-white/10 p-6 md:p-8 rounded-2xl flex items-start gap-5 hover:bg-white/[0.04] transition-colors">
              <div className="relative shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                  alt="Client avatar"
                  className="w-14 h-14 rounded-full object-cover border border-[#2f66f6]/30"
                />
                <span className="absolute -bottom-1 -right-1 bg-[#2f66f6] text-white w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold shadow-lg shadow-blue-900/50">
                  ⚡
                </span>
              </div>
              <div>
                <p className="text-sm text-stone-400 font-medium leading-relaxed italic mb-4">
                  &ldquo;Now, we truly understand our users. These high-performance Next.js profiles enable seamless interactions, boosting retention and strengthening loyalty.&rdquo;
                </p>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">Marcus Sterling</span>
                  <span className="text-[11px] uppercase tracking-widest text-stone-500 font-semibold">Founder & CEO</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom Grid: 4 Feature / Value Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <Reveal delay={0.1}>
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 hover:border-[#2f66f6]/30 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2f66f6]/20 to-[#2f66f6]/5 border border-[#2f66f6]/20 text-[#2f66f6] flex items-center justify-center text-lg font-bold mb-4 group-hover:scale-110 transition-transform">
                🕒
              </div>
              <h4 className="text-base font-bold text-white mb-2">Fast Response</h4>
              <p className="text-sm text-stone-400 font-medium leading-relaxed">
                Guaranteed response within 24 hours for all project enquiries.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 hover:border-[#2f66f6]/30 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2f66f6]/20 to-[#2f66f6]/5 border border-[#2f66f6]/20 text-[#2f66f6] flex items-center justify-center text-lg font-bold mb-4 group-hover:scale-110 transition-transform">
                📊
              </div>
              <h4 className="text-base font-bold text-white mb-2">Actionable Insights</h4>
              <p className="text-sm text-stone-400 font-medium leading-relaxed">
                Employ performance profiling to optimize load times and conversion.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 hover:border-[#2f66f6]/30 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2f66f6]/20 to-[#2f66f6]/5 border border-[#2f66f6]/20 text-[#2f66f6] flex items-center justify-center text-lg font-bold mb-4 group-hover:scale-110 transition-transform">
                🎛️
              </div>
              <h4 className="text-base font-bold text-white mb-2">Design Systems</h4>
              <p className="text-sm text-stone-400 font-medium leading-relaxed">
                Live Figma component libraries and Tailwind tokens to scale layouts.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 hover:border-[#2f66f6]/30 transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2f66f6]/20 to-[#2f66f6]/5 border border-[#2f66f6]/20 text-[#2f66f6] flex items-center justify-center text-lg font-bold mb-4 group-hover:scale-110 transition-transform">
                🌍
              </div>
              <h4 className="text-base font-bold text-white mb-2">Global Reach</h4>
              <p className="text-sm text-stone-400 font-medium leading-relaxed">
                Collaborating with creative studios, agencies, and founders worldwide.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
