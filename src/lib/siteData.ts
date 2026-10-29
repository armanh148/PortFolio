/**
 * Static site data — replace getSiteSettings() from Sanity.
 *
 * When Django backend is ready, replace the `siteData` export below with:
 *
 *   export async function getSiteData(): Promise<SiteData> {
 *     const res = await fetch("https://your-django-api.com/api/site-settings/");
 *     return res.json();
 *   }
 *
 * Then update imports in layout.tsx, page.tsx, and contact/page.tsx accordingly.
 */

export interface Social {
  label: string;
  href: string;
}

export interface SiteData {
  name: string;
  role: string;
  company?: string;
  email: string;
  location: string;
  heroImage: string;
  socials: Social[];
}

export const siteData: SiteData = {
  name: "Arman Naqvi",
  role: "Full-Stack Web Developer & Frontend Specialist",
  company: "Techmire Solutions",
  email: "armannaqvi.tms@gmail.com",
  location: "Lahore, Pakistan",
  heroImage: "/hero-img.png",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/arman-naqvi" },
    { label: "GitHub", href: "https://github.com/armanh148" },
    { label: "X", href: "https://x.com" },
  ],
};

// ─── Types for other components ───────────────────────────

export interface Project {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  tags?: string[];
  year?: number;
  description?: string;
  coverImage?: string;
  link?: string;
  gradient?: string;
}

export interface Skill {
  _id: string;
  title: string;
  name?: string;
  category?: string;
  level?: number;
}

export interface Service {
  _id: string;
  title: string;
  description?: string;
  price?: string;
  tags?: string[];
  index?: string;
  blurb?: string;
}

