'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, Briefcase, Box, LogOut } from 'lucide-react';
import { clearTokens, getTokens } from '@/lib/api';
import { useEffect, useState } from 'react';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Projects', href: '/admin/projects', icon: Briefcase },
  { name: 'Services', href: '/admin/services', icon: Box },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Basic route protection
    const { access } = getTokens();
    if (!access && pathname !== '/admin/login') {
      router.push('/admin/login');
    }
  }, [pathname, router]);

  if (!mounted || pathname === '/admin/login') {
    return <>{children}</>;
  }

  const handleLogout = () => {
    clearTokens();
    router.push('/admin/login');
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-black text-white">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-zinc-950 border-b md:border-b-0 md:border-r border-zinc-800 flex flex-col flex-shrink-0">
        <div className="p-4 md:p-6 border-b border-zinc-800 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Portfolio Admin
          </Link>
          <button
            onClick={handleLogout}
            className="md:hidden flex items-center justify-center p-2 rounded-lg text-zinc-400 hover:bg-red-500/10 hover:text-red-400 transition-colors"
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex flex-row md:flex-col overflow-x-auto p-2 md:p-4 gap-2 md:gap-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2.5 md:py-3 rounded-lg transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-black'
                    : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
                }`}
              >
                <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-medium text-sm md:text-base">{item.name}</span>
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:block p-4 border-t border-zinc-800 mt-auto">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-zinc-400 hover:bg-red-500/10 hover:text-red-400 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="hidden md:flex h-16 bg-zinc-950 border-b border-zinc-800 items-center justify-between px-8 flex-shrink-0">
          <h1 className="text-xl font-semibold">
            {navigation.find((n) => n.href === pathname)?.name || 'Admin'}
          </h1>
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-zinc-900">
          {children}
        </main>
      </div>
    </div>
  );
}
