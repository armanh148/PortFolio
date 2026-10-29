import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { siteData } from "@/lib/siteData";
import TransitionWrapper from "@/components/TransitionWrapper";
import CustomCursor from "@/components/CustomCursor";
import SmoothScrolling from "@/components/SmoothScrolling";
import LayoutWrapper from "@/components/LayoutWrapper";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: `${siteData.name} — ${siteData.role}`,
  description:
    "Frontend & WordPress Developer crafting high-performance, purposeful web experiences.",
  keywords: [
    "frontend developer",
    "wordpress developer",
    "arman naqvi",
    "portfolio",
    "next.js",
  ],
  openGraph: {
    title: `${siteData.name} — ${siteData.role}`,
    description: "Editorial-grade frontend engineering and WordPress craft.",
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
      className={`${cormorant.variable} ${inter.variable} min-h-screen antialiased`}
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

