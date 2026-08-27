"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const fieldClass =
  "w-full bg-transparent text-[13px] font-light text-snow/70 placeholder:text-snow/25 outline-none";

export default function ContactFormRef({ email }: { email: string }) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New enquiry — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nPhone: ${form.phone}\nSubject: ${form.subject}\n\n${form.message}`,
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease }}
          className="relative overflow-hidden rounded-2xl border border-ember/30 p-10 text-center"
        >
          <div className="pointer-events-none absolute right-[-10%] top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full bg-ember/25 blur-[80px]" aria-hidden="true" />
          <div className="relative z-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ember text-white">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="m5 12 5 5 9-10" />
              </svg>
            </div>
            <h3 className="mt-5 font-sans text-2xl font-semibold text-snow">Message sent!</h3>
            <p className="mt-2 text-sm font-light text-smoke">I&rsquo;ll reply within 24 hours.</p>
            <button type="button" onClick={() => setSent(false)} className="mt-6 text-[12px] text-ember underline underline-offset-2 hover:opacity-70">
              Send another
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="relative overflow-hidden rounded-2xl border border-ember/30"
        >
          {/* Ember glow */}
          <div className="pointer-events-none absolute right-[-8%] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-ember/25 blur-[80px]" aria-hidden="true" />
          <div className="pointer-events-none absolute left-[-5%] bottom-[-15%] h-[200px] w-[200px] rounded-full bg-ember/15 blur-[60px]" aria-hidden="true" />

          <div className="relative z-10 p-8 md:p-10">
            <h2 className="text-center font-sans text-2xl font-light text-snow md:text-3xl">
              Let&rsquo;s work together!
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2">
              {/* Full Name */}
              <div className="border-b border-white/12 pb-3 pt-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-smoke/50">Full Name *</p>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Arman Naqvi"
                  className={`${fieldClass} mt-1`}
                />
              </div>

              {/* Full Name (Company) */}
              <div className="border-b border-white/12 pb-3 pt-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-smoke/50">Full Name *</p>
                <input
                  type="text"
                  value={form.company}
                  onChange={update("company")}
                  placeholder="Company / Studio"
                  className={`${fieldClass} mt-1`}
                />
              </div>

              {/* Phone */}
              <div className="border-b border-white/12 pb-3 pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-smoke/50">Phone (Optional)</p>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="+1 000 000 0000"
                  className={`${fieldClass} mt-1`}
                />
              </div>

              {/* Subject */}
              <div className="border-b border-white/12 pb-3 pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-smoke/50">Subject *</p>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={update("subject")}
                  placeholder="Project enquiry"
                  className={`${fieldClass} mt-1`}
                />
              </div>

              {/* Message - full width */}
              <div className="col-span-full border-b border-white/12 pb-3 pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-smoke/50">Phone (Optional)</p>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell me about your project…"
                  className={`${fieldClass} mt-1 resize-none`}
                />
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                type="submit"
                className="rounded-full bg-ember px-8 py-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-white shadow-[0_4px_20px_rgba(249,115,22,0.35)] transition-all duration-300 hover:bg-ember-deep hover:shadow-[0_4px_28px_rgba(249,115,22,0.5)]"
              >
                Send Message
              </button>
              <p className="mt-3 text-[11px] text-smoke/35">
                Please fill in the information first
              </p>
            </div>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
