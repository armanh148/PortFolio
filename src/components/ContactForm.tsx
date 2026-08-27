"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const inputClass =
  "w-full border-b border-white/15 bg-transparent py-3 text-[15px] font-light text-snow placeholder:text-snow/30 outline-none transition-colors duration-300 focus:border-crimson";

export default function ContactForm({ email }: { email: string }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Frontend Development",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update =
    (field: keyof typeof form) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New project enquiry — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\n${form.message}`,
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
          className="flex h-full min-h-[460px] flex-col items-center justify-center rounded-3xl border border-stone-200 bg-panel/60 p-10 text-center backdrop-blur-sm"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-crimson text-snow">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <path d="m5 12 5 5 9-10" />
            </svg>
          </span>
          <h3 className="mt-6 font-serif text-3xl font-light text-snow">
            Thank you{form.name ? `, ${form.name.split(" ")[0]}` : ""}.
          </h3>
          <p className="mt-3 max-w-sm text-[15px] font-light text-smoke">
            Your message is on its way to my inbox — I&rsquo;ll reply within 24
            hours.
          </p>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="label mt-8 cursor-pointer border-b border-crimson pb-1 text-crimson transition-opacity hover:opacity-70"
          >
            Send another
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <label className="flex flex-col gap-1">
              <span className="label text-smoke">Your name</span>
              <input
                type="text"
                required
                value={form.name}
                onChange={update("name")}
                placeholder="Jane Doe"
                className={inputClass}
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="label text-smoke">Email address</span>
              <input
                type="email"
                required
                value={form.email}
                onChange={update("email")}
                placeholder="jane@studio.com"
                className={inputClass}
              />
            </label>
          </div>

          <label className="flex flex-col gap-1">
            <span className="label text-smoke">Service needed</span>
            <div className="relative">
              <select
                value={form.service}
                onChange={update("service")}
                className={`${inputClass} cursor-pointer appearance-none pr-8`}
              >
                <option>Frontend Development</option>
                <option>WordPress Customization</option>
                <option>UI / UX Design</option>
                <option>Something else</option>
              </select>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-smoke"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </label>

          <label className="flex flex-col gap-1">
            <span className="label text-smoke">Project details</span>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={update("message")}
              placeholder="Tell me about your project, timeline, and goals…"
              className={`${inputClass} resize-none`}
            />
          </label>

          <motion.button
            type="submit"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group mt-2 flex cursor-pointer items-center justify-between gap-6 self-start rounded-full bg-crimson px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.24em] text-snow transition-colors duration-300 hover:bg-crimson-deep"
          >
            Send message
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
