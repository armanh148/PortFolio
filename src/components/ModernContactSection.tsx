"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";

interface DropdownOption {
  value: string;
  label: string;
}

const PROJECT_TYPES: DropdownOption[] = [
  { value: "Next.js Web Application", label: "Next.js / React Web Application" },
  { value: "E-Commerce / Shopify", label: "Custom Shopify / E-Commerce Store" },
  { value: "Full-Stack Development", label: "Full-Stack Web Engineering (Node/Django)" },
  { value: "UI/UX & Frontend Optimization", label: "UI/UX & Frontend Optimization" },
  { value: "WordPress / Headless CMS", label: "WordPress / Headless CMS Platform" },
  { value: "Other / Consultation", label: "Other / General Consultation" },
];

const BUDGET_OPTIONS: DropdownOption[] = [
  { value: "Under $1,000", label: "Under $1,000" },
  { value: "$1,000 - $3,000", label: "$1,000 - $3,000" },
  { value: "$3,000 - $5,000", label: "$3,000 - $5,000" },
  { value: "$5,000+", label: "$5,000+ (Enterprise / Retainer)" },
];

function BrutalistSelect({
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
      <label className="text-xs font-['Space_Grotesk',sans-serif] uppercase tracking-wider font-bold text-neutral-600 block mb-2">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`w-full bg-[#f8f8f9] border rounded-xl px-4 py-3.5 text-left text-sm text-black outline-none transition-all flex items-center justify-between cursor-pointer ${
          open ? "border-[#ff4a00] ring-2 ring-orange-500/20 bg-white" : "border-black/10 hover:border-black/30"
        }`}
      >
        <span className={!selectedOption ? "text-neutral-400 font-medium" : "text-black font-semibold"}>
          {displayText}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-neutral-500 text-xs shrink-0 ml-2 font-bold"
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
            className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-black/15 rounded-xl shadow-2xl z-50 overflow-hidden max-h-60 overflow-y-auto py-1"
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
                  className={`w-full text-left px-4 py-2.5 text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer font-['Space_Grotesk',sans-serif] ${
                    isSelected
                      ? "bg-orange-50 text-[#ff4a00] font-bold"
                      : "text-neutral-700 hover:bg-neutral-100 hover:text-black"
                  }`}
                >
                  <span>{opt.label}</span>
                  {isSelected && <span className="text-[#ff4a00] text-xs font-bold">✓</span>}
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
    projectType: "Next.js Web Application",
    budget: "$1,000 - $3,000",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

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
      `New Project Inquiry from ${form.firstName} ${form.lastName} [${form.projectType}]`
    );
    const mailBody = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nProject Type: ${form.projectType}\nEstimated Budget: ${form.budget}\n\nProject Details:\n${form.message}`
    );
    window.location.href = `mailto:${email}?subject=${mailSubject}&body=${mailBody}`;
    setSent(true);
  };

  return (
    <section className="relative py-12 sm:py-20 md:py-24 px-5 sm:px-8 md:px-12 lg:px-16 bg-white text-black select-none overflow-hidden">
      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* ── TOP BAR: Breadcrumb + Status ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-['Space_Grotesk',sans-serif] font-bold text-neutral-500 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#ff4a00] transition-colors">
              HOME
            </Link>
            <span>/</span>
            <span className="text-black">CONTACT</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f8f8f9] border border-black/10 text-xs font-['Space_Grotesk',sans-serif] font-bold text-black uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#ff4a00] animate-pulse" />
            OPEN FOR Q1/Q2 2026 ENGAGEMENTS
          </div>
        </div>

        {/* ── HERO HEADLINE ROW ── */}
        <div className="mb-12 sm:mb-16 pb-10 border-b border-black/10">
          <Reveal>
            <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-[#ff4a00] block mb-3">
              LET&rsquo;S COLLABORATE
            </span>
            <h1 className="font-['Anton',Impact,'Arial_Black',sans-serif] text-[clamp(3.5rem,9.5vw,9.5rem)] leading-[0.88] tracking-[-0.02em] uppercase text-black max-w-5xl">
              LET&rsquo;S BUILD<br />
              SOMETHING <span className="text-[#ff4a00]">ICONIC.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-['Space_Grotesk',sans-serif] text-sm sm:text-base md:text-lg text-neutral-700 max-w-2xl leading-relaxed mt-6">
              Have a high-impact web project, bespoke e-commerce store, or full-stack software challenge? Reach out directly and let&rsquo;s craft an unforgettable digital experience.
            </p>
          </Reveal>
        </div>

        {/* ── MAIN 2-COLUMN GRID: DIRECT INFO + INQUIRY FORM ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* ══════════════════════════════════════════════════════════
              LEFT COLUMN: CONTACT CARDS & CHANNELS
             ══════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* 1. Direct Email Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#f8f8f9] border border-black/10 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-black/10 text-[#ff4a00] flex items-center justify-center font-bold text-base shadow-sm">
                  ✉
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-600 hover:text-black bg-white border border-black/10 px-2.5 py-1 rounded-md transition-colors cursor-pointer"
                >
                  {copied ? "✓ Copied" : "Copy Email"}
                </button>
              </div>

              <span className="font-['Space_Grotesk',sans-serif] text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                Direct Email
              </span>
              <a
                href={`mailto:${email}`}
                className="font-mono text-sm sm:text-base font-bold text-black hover:text-[#ff4a00] transition-colors break-all"
              >
                {email}
              </a>
            </div>

            {/* 2. Direct Phone & WhatsApp Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#f8f8f9] border border-black/10 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-black/10 text-[#ff4a00] flex items-center justify-center font-bold text-base shadow-sm">
                  📞
                </div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                  WhatsApp Available
                </span>
              </div>

              <span className="font-['Space_Grotesk',sans-serif] text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                Direct Phone / WhatsApp
              </span>
              <a
                href="tel:+923001234567"
                className="font-mono text-sm sm:text-base font-bold text-black hover:text-[#ff4a00] transition-colors"
              >
                +92 300 1234567
              </a>
            </div>

            {/* 3. Location & Office Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#f8f8f9] border border-black/10 shadow-sm flex flex-col justify-between">
              <div className="w-10 h-10 rounded-xl bg-white border border-black/10 text-[#ff4a00] flex items-center justify-center font-bold text-base shadow-sm mb-4">
                📍
              </div>

              <span className="font-['Space_Grotesk',sans-serif] text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                Headquarters &amp; Office
              </span>
              <h4 className="font-['Anton',Impact,sans-serif] text-xl uppercase tracking-tight text-black">
                Karachi, Pakistan
              </h4>
              <p className="font-mono text-xs text-neutral-600 mt-0.5">
                On-site Full-Stack Engineer @ Techmire Solutions (PKT / UTC+5)
              </p>
            </div>

            {/* 4. Social Links Bar */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#f8f8f9] border border-black/10 shadow-sm">
              <span className="font-['Space_Grotesk',sans-serif] text-[11px] font-bold uppercase tracking-wider text-neutral-500 block mb-3">
                Connect on Social Networks
              </span>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { label: "LinkedIn", href: "https://linkedin.com/in/arman-naqvi" },
                  { label: "GitHub", href: "https://github.com/armanh148" },
                  { label: "X (Twitter)", href: "https://x.com" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl bg-white hover:bg-[#ff4a00] hover:text-white border border-black/10 text-black transition-all shadow-2xs"
                  >
                    {s.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              RIGHT COLUMN: EDITORIAL BRUTALIST INQUIRY FORM
             ══════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 md:p-12 rounded-3xl bg-[#f8f8f9] border border-black/10 shadow-xl relative overflow-hidden">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 sm:py-16"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#ff4a00] text-white flex items-center justify-center mx-auto mb-6 font-bold text-3xl shadow-xl shadow-orange-500/30">
                    ✓
                  </div>
                  <h3 className="font-['Anton',Impact,sans-serif] text-3xl sm:text-4xl uppercase tracking-tight text-black mb-3">
                    MESSAGE READY TO SEND!
                  </h3>
                  <p className="font-['Space_Grotesk',sans-serif] text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto mb-8 leading-relaxed">
                    Thank you for reaching out! Your default email client has been prepared with your project details. We will respond within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="font-['Space_Grotesk',sans-serif] text-xs font-black uppercase tracking-wider text-[#ff4a00] hover:text-black transition-colors underline underline-offset-4 cursor-pointer"
                  >
                    Send Another Project Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">
                  <div>
                    <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-[#ff4a00] block mb-1">
                      PROJECT INQUIRY FORM
                    </span>
                    <h2 className="font-['Anton',Impact,sans-serif] text-2xl sm:text-3xl uppercase tracking-tight text-black">
                      TELL ME ABOUT YOUR PROJECT
                    </h2>
                  </div>

                  {/* Row 1: First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-['Space_Grotesk',sans-serif] uppercase tracking-wider font-bold text-neutral-600 block mb-2">
                        First Name <span className="text-[#ff4a00]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex"
                        value={form.firstName}
                        onChange={update("firstName")}
                        className="w-full bg-white border border-black/10 focus:border-[#ff4a00] focus:ring-2 focus:ring-orange-500/20 rounded-xl px-4 py-3.5 text-sm text-black placeholder-neutral-400 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-['Space_Grotesk',sans-serif] uppercase tracking-wider font-bold text-neutral-600 block mb-2">
                        Last Name <span className="text-[#ff4a00]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Morgan"
                        value={form.lastName}
                        onChange={update("lastName")}
                        className="w-full bg-white border border-black/10 focus:border-[#ff4a00] focus:ring-2 focus:ring-orange-500/20 rounded-xl px-4 py-3.5 text-sm text-black placeholder-neutral-400 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email Address */}
                  <div>
                    <label className="text-xs font-['Space_Grotesk',sans-serif] uppercase tracking-wider font-bold text-neutral-600 block mb-2">
                      Work Email <span className="text-[#ff4a00]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={form.email}
                      onChange={update("email")}
                      className="w-full bg-white border border-black/10 focus:border-[#ff4a00] focus:ring-2 focus:ring-orange-500/20 rounded-xl px-4 py-3.5 text-sm text-black placeholder-neutral-400 outline-none transition-all"
                    />
                  </div>

                  {/* Row 3: Project Type Select */}
                  <BrutalistSelect
                    label="What service or build are you looking for?"
                    value={form.projectType}
                    options={PROJECT_TYPES}
                    onChange={(val) => setFormField("projectType", val)}
                  />

                  {/* Row 4: Budget Select */}
                  <BrutalistSelect
                    label="Estimated Budget Range"
                    value={form.budget}
                    options={BUDGET_OPTIONS}
                    onChange={(val) => setFormField("budget", val)}
                  />

                  {/* Row 5: Message Textarea */}
                  <div>
                    <label className="text-xs font-['Space_Grotesk',sans-serif] uppercase tracking-wider font-bold text-neutral-600 block mb-2">
                      Project Goals &amp; Timeline <span className="text-[#ff4a00]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share a brief overview of what you want to achieve, your target timeline, and any reference links..."
                      value={form.message}
                      onChange={update("message")}
                      className="w-full bg-white border border-black/10 focus:border-[#ff4a00] focus:ring-2 focus:ring-orange-500/20 rounded-xl px-4 py-3.5 text-sm text-black placeholder-neutral-400 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 bg-[#ff4a00] hover:bg-[#e04000] text-white font-['Space_Grotesk',sans-serif] font-black text-sm uppercase tracking-wider px-8 py-4.5 rounded-xl transition-all hover:scale-[1.01] shadow-xl shadow-orange-500/20 cursor-pointer"
                  >
                    <span>SEND MESSAGE</span>
                    <span className="text-lg">✈</span>
                  </button>

                  <p className="text-center font-['Space_Grotesk',sans-serif] text-[11px] text-neutral-500">
                    Typically responds within 24 hours • Direct communication with Arman Naqvi
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
