'use client';

import { useState, useEffect } from 'react';
import { fetchWithAuth, API_BASE_URL } from '@/lib/api';
import { Plus, Pencil, Trash2, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string | null;
  live_url: string;
  github_url: string;
  technologies: string;
  order: number;
}

export default function ProjectsAdmin() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProject, setCurrentProject] = useState<Partial<Project>>({});
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetchWithAuth('/projects/');
      if (res.ok) {
        const data = await res.json();
        setProjects(data);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    try {
      const res = await fetchWithAuth(`/projects/${id}/`, { method: 'DELETE' });
      if (res.ok) {
        setProjects(projects.filter(p => p.id !== id));
        alert("Project deleted successfully");
      } else {
        const errorText = await res.text();
        alert(`Failed to delete project. Status: ${res.status}. Error: ${errorText}`);
        console.error('Failed to delete project', res.status, errorText);
      }
    } catch (error) {
      alert(`Network or CORS error: ${error}`);
      console.error('Error deleting project:', error);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('title', currentProject.title || '');
    formData.append('description', currentProject.description || '');
    formData.append('live_url', currentProject.live_url || '');
    formData.append('github_url', currentProject.github_url || '');
    formData.append('technologies', currentProject.technologies || '');
    formData.append('order', (currentProject.order || 0).toString());
    
    if (selectedFile) {
      formData.append('image', selectedFile);
    }

    try {
      const url = currentProject.id ? `/projects/${currentProject.id}/` : '/projects/';
      const method = currentProject.id ? 'PUT' : 'POST';
      
      const res = await fetchWithAuth(url, {
        method,
        body: formData, // FormData automatically sets multipart/form-data header
      });

      if (res.ok) {
        fetchProjects();
        setIsEditing(false);
        setCurrentProject({});
        setSelectedFile(null);
      } else {
        console.error('Error saving project', await res.json());
      }
    } catch (error) {
      console.error('Error saving project:', error);
    }
  };

  if (loading) return <div className="text-zinc-400">Loading projects...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Projects</h2>
        {!isEditing && (
          <button
            onClick={() => { setIsEditing(true); setCurrentProject({}); setSelectedFile(null); }}
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-zinc-200 transition-colors"
          >
            <Plus className="w-4 h-4" /> Add Project
          </button>
        )}
      </div>

      {isEditing ? (
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">{currentProject.id ? 'Edit Project' : 'New Project'}</h3>
            <button onClick={() => setIsEditing(false)} className="text-zinc-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-sm text-zinc-400 mb-1">Title</label>
              <input 
                type="text" 
                value={currentProject.title || ''} 
                onChange={e => setCurrentProject({...currentProject, title: e.target.value})}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-white" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-1">Description</label>
              <textarea 
                value={currentProject.description || ''} 
                onChange={e => setCurrentProject({...currentProject, description: e.target.value})}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-white h-32" 
                required 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-zinc-400 mb-1">Live URL</label>
                <input 
                  type="url" 
                  value={currentProject.live_url || ''} 
                  onChange={e => setCurrentProject({...currentProject, live_url: e.target.value})}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-white" 
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-1">GitHub URL</label>
                <input 
                  type="url" 
                  value={currentProject.github_url || ''} 
                  onChange={e => setCurrentProject({...currentProject, github_url: e.target.value})}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-white" 
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-1">Technologies (comma separated)</label>
              <input 
                type="text" 
                value={currentProject.technologies || ''} 
                onChange={e => setCurrentProject({...currentProject, technologies: e.target.value})}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-white" 
                required 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-zinc-400 mb-1">Order</label>
                <input 
                  type="number" 
                  value={currentProject.order || 0} 
                  onChange={e => setCurrentProject({...currentProject, order: parseInt(e.target.value)})}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-white" 
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-1">Image</label>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={e => setSelectedFile(e.target.files ? e.target.files[0] : null)}
                  className="w-full text-sm text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-zinc-800 file:text-white hover:file:bg-zinc-700"
                />
                {currentProject.image && !selectedFile && (
                  <p className="mt-2 text-sm text-zinc-500">Current: {currentProject.image.split('/').pop()}</p>
                )}
              </div>
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
                Save Project
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
                <th className="px-6 py-4 font-medium">Technologies</th>
                <th className="px-6 py-4 font-medium">Order</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {projects.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-zinc-500">No projects found. Add one above!</td>
                </tr>
              ) : (
                projects.map((project) => (
                  <tr key={project.id} className="hover:bg-zinc-900/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">{project.title}</td>
                    <td className="px-6 py-4 text-zinc-400">{project.technologies}</td>
                    <td className="px-6 py-4 text-zinc-400">{project.order}</td>
                    <td className="px-6 py-4 flex justify-end gap-2">
                      <button 
                        onClick={() => { setCurrentProject(project); setIsEditing(true); }}
                        className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(project.id)}
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
