"use client";

import Reveal from "@/components/Reveal";

/* ─── Red Line Art Icon Components ───────────────────────────────────────── */
function StrategyIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="#2f66f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
      <rect x="8" y="14" width="48" height="36" rx="4" />
      <line x1="8" y1="26" x2="56" y2="26" />
      <line x1="18" y1="36" x2="34" y2="36" />
      <line x1="18" y1="42" x2="44" y2="42" />
      <circle cx="48" cy="20" r="2" fill="#2f66f6" />
      <circle cx="6" cy="32" r="2" fill="#2f66f6" />
      <line x1="2" y1="32" x2="6" y2="32" />
      <circle cx="58" cy="32" r="2" fill="#2f66f6" />
      <line x1="54" y1="32" x2="58" y2="32" />
    </svg>
  );
}

function BrandingIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="#2f66f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
      <path d="M32 8 C 20 8 14 18 14 28 C 14 36 20 42 24 46 L 24 52 L 40 52 L 40 46 C 44 42 50 36 50 28 C 50 18 44 8 32 8 Z" />
      <line x1="24" y1="56" x2="40" y2="56" />
      <path d="M26 24 H 38 M 32 18 V 34" />
      <circle cx="10" cy="18" r="1.5" fill="#2f66f6" />
      <line x1="10" y1="18" x2="16" y2="22" />
      <circle cx="54" cy="18" r="1.5" fill="#2f66f6" />
      <line x1="54" y1="18" x2="48" y2="22" />
    </svg>
  );
}

function CreativeIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="#2f66f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
      <path d="M32 6 L 46 22 L 32 58 L 18 22 Z" />
      <path d="M18 22 L 46 22" />
      <path d="M32 6 V 58" />
      <circle cx="32" cy="14" r="2" fill="#2f66f6" />
    </svg>
  );
}

function FrontendIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="#2f66f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
      <rect x="6" y="10" width="22" height="44" rx="2" />
      <line x1="12" y1="18" x2="22" y2="18" />
      <line x1="12" y1="24" x2="22" y2="24" />
      <line x1="12" y1="30" x2="18" y2="30" />
      <rect x="36" y="10" width="22" height="44" rx="2" />
      <line x1="42" y1="18" x2="52" y2="18" />
      <line x1="42" y1="24" x2="52" y2="24" />
      <line x1="42" y1="30" x2="48" y2="30" />
    </svg>
  );
}

function WordpressIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="#2f66f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
      <rect x="10" y="20" width="34" height="26" rx="3" />
      <circle cx="27" cy="33" r="6" />
      <path d="M38 12 L 52 24 L 38 36" />
      <line x1="44" y1="24" x2="54" y2="24" />
    </svg>
  );
}

function WebDesignIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="#2f66f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
      <rect x="8" y="12" width="48" height="34" rx="3" />
      <line x1="8" y1="22" x2="56" y2="22" />
      <path d="M20 34 C 28 26, 36 42, 44 34" />
      <rect x="26" y="46" width="12" height="8" />
      <line x1="18" y1="54" x2="46" y2="54" />
    </svg>
  );
}

const CAPABILITIES = [
  {
    id: "strategy",
    title: "STRATEGY",
    icon: <StrategyIcon />,
    items: [
      "Content Strategy",
      "Social Media Strategy",
      "Campaign Development",
      "Marketing Campaigns",
    ],
  },
  {
    id: "branding",
    title: "BRANDING",
    icon: <BrandingIcon />,
    items: [
      "Brand Identity",
      "Conceptualization",
      "Naming & Voice",
      "Brand Guidelines",
    ],
  },
  {
    id: "creative",
    title: "CREATIVE SERVICES",
    icon: <CreativeIcon />,
    items: [
      "Identity & Logo Craft",
      "Web Interfaces",
      "Print Collateral",
      "Mobile Applications",
    ],
  },
  {
    id: "frontend",
    title: "FRONTEND DEV",
    icon: <FrontendIcon />,
    items: [
      "Responsive Next.js Sites",
      "Content Management Systems",
      "Mobile Apps (iOS, Android)",
      "Performance Tuning",
    ],
  },
  {
    id: "wordpress",
    title: "WORDPRESS CRAFT",
    icon: <WordpressIcon />,
    items: [
      "Custom Theme Engineering",
      "WooCommerce E-Commerce",
      "Headless WordPress",
      "Gutenberg Block Systems",
    ],
  },
  {
    id: "webdesign",
    title: "WEB DESIGN",
    icon: <WebDesignIcon />,
    items: [
      "Figma UI/UX Systems",
      "Interactive Prototypes",
      "Video & Motion Design",
      "2D & 3D Animations",
    ],
  },
];

export default function CapabilitiesGrid() {
  return (
    <section className="relative py-20 md:py-28 px-6 md:px-12 bg-transparent text-[#F5F5F3] overflow-hidden border-b border-white/10">
      <div className="max-w-[1500px] mx-auto">
        
        {/* ── Section Header ── */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-stone-400 block mb-3">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#F5F5F3]">
              Our <span className="text-[#2f66f6]">Capabilities</span>
            </h2>
          </Reveal>
        </div>

        {/* ── 3x2 Grid of Capability Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {CAPABILITIES.map((cap, idx) => (
            <Reveal key={cap.id} delay={idx * 0.08}>
              <div className="bg-white/5 rounded-xl md:rounded-2xl border border-white/10 shadow-sm overflow-hidden flex transition-all duration-300 hover:shadow-xl hover:border-[#2f66f6]/40 group h-full">
                
                {/* Left Red Icon Container with Vertical Divider */}
                <div className="w-28 md:w-36 shrink-0 bg-white/5 border-r border-white/10 flex items-center justify-center p-6 transition-colors group-hover:bg-blue-900/20">
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {cap.icon}
                  </div>
                </div>

                {/* Right Content Area */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="font-bold uppercase tracking-wider text-sm md:text-base text-[#F5F5F3] mb-3.5">
                    {cap.title}
                  </h3>

                  <ul className="space-y-2">
                    {cap.items.map((item) => (
                      <li key={item} className="text-xs md:text-sm font-medium text-stone-400 font-serif leading-snug">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
