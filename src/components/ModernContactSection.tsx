"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";

interface DropdownOption {
  value: string;
  label: string;
}

const COUNTRY_OPTIONS: DropdownOption[] = [
  { value: "USA", label: "United States (US)" },
  { value: "UK", label: "United Kingdom (UK)" },
  { value: "Pakistan", label: "Pakistan (PK)" },
  { value: "UAE", label: "United Arab Emirates (UAE)" },
  { value: "Germany", label: "Germany (DE)" },
  { value: "Canada", label: "Canada (CA)" },
  { value: "Other", label: "International / Other" },
];

const ROLE_OPTIONS: DropdownOption[] = [
  { value: "Client / Founder", label: "Client / Founder" },
  { value: "Agency Owner", label: "Agency Owner" },
  { value: "Recruiter", label: "Recruiter / Talent Partner" },
  { value: "UI/UX Designer", label: "UI/UX Designer" },
  { value: "Other", label: "Other" },
];

function CustomSelect({
  label,
  value,
  options,
  placeholder,
  onChange,
}: {
  label: string;
  value: string;
  options: DropdownOption[];
  placeholder?: string;
  onChange: (val: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);
  const displayText = selectedOption ? selectedOption.label : (placeholder || "Select option");

  return (
    <div className="relative" ref={ref}>
      <label className="text-[11px] uppercase tracking-widest font-semibold text-slate-700 block mb-1.5 ml-1">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`w-full bg-white border rounded-xl px-4 py-3 sm:py-3.5 text-left text-base sm:text-sm text-[#0f172a] outline-none transition-all flex items-center justify-between cursor-pointer shadow-2xs ${
          open ? "border-[#dc2626] ring-2 ring-red-500/10" : "border-slate-300 hover:border-slate-400"
        }`}
      >
        <span className={!selectedOption ? "text-slate-400" : "text-[#0f172a] font-medium"}>
          {displayText}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-slate-400 text-xs shrink-0 ml-2"
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-xl shadow-xl shadow-slate-300/40 z-50 overflow-hidden max-h-60 overflow-y-auto py-1"
          >
            {options.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-red-50 text-[#dc2626] font-bold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#0f172a]"
                  }`}
                >
                  <span>{opt.label}</span>
                  {isSelected && <span className="text-[#dc2626] text-xs">✓</span>}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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

  const setFormField = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
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
    <section className="relative py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 bg-white text-[#0f172a] overflow-hidden border-t border-slate-200">
      {/* Dynamic Background Glow with Float Motion */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.06, 0.12, 0.06],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-[800px] h-[500px] bg-red-500 blur-[140px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-blue-600 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-[1500px] mx-auto relative z-10">
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-start mb-12 sm:mb-20">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-6 pt-2 sm:pt-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-200 bg-red-50 text-xs font-semibold uppercase tracking-widest text-[#dc2626] mb-5 sm:mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] animate-pulse" />
                Let&rsquo;s Connect
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-[64px] font-black uppercase tracking-tight leading-[1.05] mb-5 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-slate-500">
                Let&rsquo;s build high-performance web experiences
              </h2>
              <p className="text-slate-600 font-normal text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 max-w-xl">
                Reach out to discuss new projects, custom Next.js builds, WordPress theme craft, or component design systems. I personalize experiences and deliver quality at every touchpoint.
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} className="w-full sm:w-auto">
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-[#dc2626] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#b91c1c] transition-all shadow-lg shadow-red-600/30"
                  >
                    Explore Works ↗
                  </Link>
                </motion.div>
                <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-200">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-emerald-800 uppercase tracking-widest">
                    Available for work
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Clean Form Card */}
          <div className="lg:col-span-6">
            <Reveal delay={0.15}>
              <div className="bg-[#f8fafc] p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#dc2626]/40 to-transparent" />

                {sent ? (
                  <div className="text-center py-12 sm:py-16">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#dc2626] to-[#b91c1c] text-white flex items-center justify-center mx-auto mb-5 font-bold text-2xl shadow-xl shadow-red-500/40"
                    >
                      ✓
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-2 sm:mb-3">
                      Message Ready!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-xs mx-auto mb-6 sm:mb-8 leading-relaxed">
                      Thank you for reaching out. Your default email client has been opened to finalize the message.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="text-xs font-bold text-[#dc2626] uppercase tracking-wider underline underline-offset-4 hover:opacity-80 transition-opacity cursor-pointer"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6 relative z-10">
                    {/* Row 1: First Name & Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="text-[11px] uppercase tracking-widest font-semibold text-slate-700 block mb-1.5 ml-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          required
                          value={form.firstName}
                          onChange={update("firstName")}
                          placeholder="James"
                          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 sm:py-3.5 text-base sm:text-sm text-[#0f172a] placeholder:text-slate-400 outline-none focus:border-[#dc2626] hover:border-slate-400 transition-all shadow-2xs"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] uppercase tracking-widest font-semibold text-slate-700 block mb-1.5 ml-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          required
                          value={form.lastName}
                          onChange={update("lastName")}
                          placeholder="Smith"
                          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 sm:py-3.5 text-base sm:text-sm text-[#0f172a] placeholder:text-slate-400 outline-none focus:border-[#dc2626] hover:border-slate-400 transition-all shadow-2xs"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email & Country */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="text-[11px] uppercase tracking-widest font-semibold text-slate-700 block mb-1.5 ml-1">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={update("email")}
                          placeholder="james@company.com"
                          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 sm:py-3.5 text-base sm:text-sm text-[#0f172a] placeholder:text-slate-400 outline-none focus:border-[#dc2626] hover:border-slate-400 transition-all shadow-2xs"
                        />
                      </div>
                      <div>
                        <CustomSelect
                          label="Country"
                          value={form.country}
                          options={COUNTRY_OPTIONS}
                          onChange={(val) => setFormField("country", val)}
                        />
                      </div>
                    </div>

                    {/* Row 3: Your Role */}
                    <div>
                      <CustomSelect
                        label="Your Role"
                        value={form.role}
                        options={ROLE_OPTIONS}
                        placeholder="Select your role"
                        onChange={(val) => setFormField("role", val)}
                      />
                    </div>

                    {/* Row 4: Message */}
                    <div>
                      <label className="text-[11px] uppercase tracking-widest font-semibold text-slate-700 block mb-1.5 ml-1">
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={update("message")}
                        placeholder="Tell me about your project..."
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 sm:py-3.5 text-base sm:text-sm text-[#0f172a] placeholder:text-slate-400 outline-none focus:border-[#dc2626] hover:border-slate-400 transition-all resize-none shadow-2xs"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end pt-2 sm:pt-3">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl bg-[#dc2626] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#b91c1c] transition-all shadow-lg shadow-red-600/30 cursor-pointer"
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
        <div className="py-8 sm:py-12 border-y border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 mb-12 sm:mb-16">
          <Reveal delay={0.1}>
            <motion.div
              whileHover={{ y: -6, backgroundColor: "#ffffff" }}
              className="bg-[#f8fafc] border border-slate-200 p-5 sm:p-8 rounded-2xl flex items-start gap-4 sm:gap-5 transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              <div className="relative shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80"
                  alt="Client avatar"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border border-slate-200 shadow-sm"
                />
                <span className="absolute -bottom-1 -right-1 bg-[#dc2626] text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full text-xs flex items-center justify-center font-bold shadow-md">
                  💬
                </span>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed italic mb-3 sm:mb-4">
                  &ldquo;We&rsquo;ve gained a 360-degree view of our web products. The unified builds allow us to personalize interactions, resulting in higher customer satisfaction.&rdquo;
                </p>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-[#0f172a]">Sarah Jenkins</span>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#dc2626] font-semibold">
                    VP of Engineering
                  </span>
                </div>
              </div>
            </motion.div>
          </Reveal>

          <Reveal delay={0.2}>
            <motion.div
              whileHover={{ y: -6, backgroundColor: "#ffffff" }}
              className="bg-[#f8fafc] border border-slate-200 p-5 sm:p-8 rounded-2xl flex items-start gap-4 sm:gap-5 transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              <div className="relative shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                  alt="Client avatar"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border border-slate-200 shadow-sm"
                />
                <span className="absolute -bottom-1 -right-1 bg-[#dc2626] text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full text-xs flex items-center justify-center font-bold shadow-md">
                  ⚡
                </span>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed italic mb-3 sm:mb-4">
                  &ldquo;Now, we truly understand our users. These high-performance Next.js profiles enable seamless interactions, boosting retention and strengthening loyalty.&rdquo;
                </p>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-[#0f172a]">Marcus Sterling</span>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#dc2626] font-semibold">
                    Founder &amp; CEO
                  </span>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>

        {/* Bottom Grid: 4 Feature / Value Columns */}
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
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#f8fafc] border border-slate-200 hover:border-[#dc2626]/40 hover:bg-white transition-all group cursor-pointer flex flex-col justify-between h-full shadow-2xs hover:shadow-md"
              >
                <div>
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-red-50 border border-red-200 text-[#dc2626] flex items-center justify-center text-lg sm:text-xl font-bold mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-xs sm:text-base font-bold text-[#0f172a] mb-1.5 sm:mb-2 group-hover:text-[#dc2626] transition-colors leading-snug line-clamp-1 sm:line-clamp-none">
                    {item.title}
                  </h4>
                </div>
                <p className="text-[11px] sm:text-sm text-slate-600 font-normal leading-relaxed line-clamp-2 sm:line-clamp-none">
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
