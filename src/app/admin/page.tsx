'use client';

import { useState, useEffect } from 'react';
import { fetchWithAuth } from '@/lib/api';
import { Briefcase, Box } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    projects: 0,
    services: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [projectsRes, servicesRes] = await Promise.all([
          fetchWithAuth('/projects/'),
          fetchWithAuth('/services/'),
        ]);

        const projects = projectsRes.ok ? await projectsRes.json() : [];
        const services = servicesRes.ok ? await servicesRes.json() : [];

        setStats({
          projects: projects.length,
          services: services.length,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  if (loading) {
    return <div className="text-zinc-400">Loading dashboard...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Projects Card */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-zinc-400 text-sm font-medium mb-1">Total Projects</p>
              <h3 className="text-4xl font-light text-white">{stats.projects}</h3>
            </div>
            <div className="p-3 bg-zinc-900 rounded-lg text-zinc-400">
              <Briefcase className="w-6 h-6" />
            </div>
          </div>
          <Link href="/admin/projects" className="text-sm text-[#dc2626] hover:underline font-medium">
            Manage Projects →
          </Link>
        </div>

        {/* Services Card */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-zinc-400 text-sm font-medium mb-1">Total Services</p>
              <h3 className="text-4xl font-light text-white">{stats.services}</h3>
            </div>
            <div className="p-3 bg-zinc-900 rounded-lg text-zinc-400">
              <Box className="w-6 h-6" />
            </div>
          </div>
          <Link href="/admin/services" className="text-sm text-[#dc2626] hover:underline font-medium">
            Manage Services →
          </Link>
        </div>
      </div>
    </div>
  );
}
