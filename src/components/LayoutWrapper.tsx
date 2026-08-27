'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import ModernFooter from './ModernFooter';
import { siteData } from '@/lib/siteData';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');

  if (isAdmin) {
    return <>{children}</>;
  }

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
