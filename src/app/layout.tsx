import type { Metadata } from "next";
import { siteData } from "@/lib/siteData";
import TransitionWrapper from "@/components/TransitionWrapper";
import CustomCursor from "@/components/CustomCursor";
import SmoothScrolling from "@/components/SmoothScrolling";
import LayoutWrapper from "@/components/LayoutWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteData.name} — ${siteData.role}`,
  description:
    "Full-Stack Web Developer & Frontend Specialist crafting high-performance, purposeful web experiences.",
  keywords: [
    "frontend developer",
    "full-stack developer",
    "wordpress developer",
    "arman naqvi",
    "portfolio",
    "next.js",
  ],
  openGraph: {
    title: `${siteData.name} — ${siteData.role}`,
    description: "Editorial-grade web engineering and full-stack architecture.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="min-h-screen antialiased font-sans"
    >
      <body className="grain min-h-screen flex flex-col" suppressHydrationWarning>
        <SmoothScrolling>
          <CustomCursor />
          <LayoutWrapper>
            <TransitionWrapper>{children}</TransitionWrapper>
          </LayoutWrapper>
        </SmoothScrolling>
      </body>
    </html>
  );
}
