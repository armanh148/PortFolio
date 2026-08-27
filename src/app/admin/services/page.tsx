'use client';

import { useState, useEffect } from 'react';
import { fetchWithAuth } from '@/lib/api';
import { Plus, Pencil, Trash2, X } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string;
  order: number;
}

export default function ServicesAdmin() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentService, setCurrentService] = useState<Partial<Service>>({});

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await fetchWithAuth('/services/');
      if (res.ok) {
        const data = await res.json();
        setServices(data);
      }
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this service?')) return;
    try {
      const res = await fetchWithAuth(`/services/${id}/`, { method: 'DELETE' });
      if (res.ok) {
        setServices(services.filter(s => s.id !== id));
      }
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = currentService.id ? `/services/${currentService.id}/` : '/services/';
      const method = currentService.id ? 'PUT' : 'POST';
      
      const res = await fetchWithAuth(url, {
        method,
        body: JSON.stringify(currentService),
      });

      if (res.ok) {
        fetchServices();
        setIsEditing(false);
        setCurrentService({});
      } else {
        console.error('Error saving service', await res.json());
      }
    } catch (error) {
      console.error('Error saving service:', error);
    }
  };

  if (loading) return <div className="text-zinc-400">Loading services...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Services</h2>
        {!isEditing && (
          <button
            onClick={() => { setIsEditing(true); setCurrentService({}); }}
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-zinc-200 transition-colors"
          >
            <Plus className="w-4 h-4" /> Add Service
          </button>
        )}
      </div>

      {isEditing ? (
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">{currentService.id ? 'Edit Service' : 'New Service'}</h3>
            <button onClick={() => setIsEditing(false)} className="text-zinc-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-zinc-400 mb-1">Title</label>
                <input 
                  type="text" 
                  value={currentService.title || ''} 
                  onChange={e => setCurrentService({...currentService, title: e.target.value})}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-white" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-1">Lucide Icon Name</label>
                <input 
                  type="text" 
                  value={currentService.icon || ''} 
                  onChange={e => setCurrentService({...currentService, icon: e.target.value})}
                  placeholder="e.g. Code2, Layout, Smartphone"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-white" 
                  required 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-1">Description</label>
              <textarea 
                value={currentService.description || ''} 
                onChange={e => setCurrentService({...currentService, description: e.target.value})}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-white h-24" 
                required 
              />
            </div>
            
            <div>
              <label className="block text-sm text-zinc-400 mb-1">Features (comma separated)</label>
              <textarea 
                value={currentService.features || ''} 
                onChange={e => setCurrentService({...currentService, features: e.target.value})}
                placeholder="Responsive design, SEO optimization, Fast loading"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-white h-24" 
                required 
              />
            </div>
            
            <div>
              <label className="block text-sm text-zinc-400 mb-1">Order</label>
              <input 
                type="number" 
                value={currentService.order || 0} 
                onChange={e => setCurrentService({...currentService, order: parseInt(e.target.value)})}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-white" 
              />
            </div>
            
            <div className="flex justify-end gap-3 pt-4 border-t border-zinc-800">
              <button 
                type="button" 
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-zinc-400 hover:text-white font-medium transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-zinc-200 transition-colors"
              >
                Save Service
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-900 border-b border-zinc-800 text-zinc-400 uppercase">
              <tr>
                <th className="px-6 py-4 font-medium">Title</th>
                <th className="px-6 py-4 font-medium">Icon</th>
                <th className="px-6 py-4 font-medium">Description</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {services.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-zinc-500">No services found. Add one above!</td>
                </tr>
              ) : (
                services.map((service) => (
                  <tr key={service.id} className="hover:bg-zinc-900/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">{service.title}</td>
                    <td className="px-6 py-4 text-zinc-400">{service.icon}</td>
                    <td className="px-6 py-4 text-zinc-400 truncate max-w-[200px]">{service.description}</td>
                    <td className="px-6 py-4 flex justify-end gap-2">
                      <button 
                        onClick={() => { setCurrentService(service); setIsEditing(true); }}
                        className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(service.id)}
                        className="p-2 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
