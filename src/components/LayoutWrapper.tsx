'use client';

import Navbar from './Navbar';
import ModernFooter from './ModernFooter';
import { siteData } from '@/lib/siteData';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar site={siteData} />
      <main className="flex-1">
        {children}
      </main>
      <ModernFooter site={siteData} />
    </>
  );
}
