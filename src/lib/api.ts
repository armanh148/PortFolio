export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';

export function getTokens() {
  if (typeof window !== 'undefined') {
    return {
      access: localStorage.getItem('access_token'),
      refresh: localStorage.getItem('refresh_token'),
    };
  }
  return { access: null, refresh: null };
}

export function setTokens(access: string, refresh: string) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('access_token', access);
    localStorage.setItem('refresh_token', refresh);
  }
}

export function clearTokens() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }
}

export async function fetchWithAuth(endpoint: string, options: RequestInit = {}) {
  const { access } = getTokens();
  
  const headers = new Headers(options.headers || {});
  
  if (access) {
    headers.set('Authorization', `Bearer ${access}`);
  }
  
  if (!(options.body instanceof FormData)) {
      if (!headers.has('Content-Type')) {
          headers.set('Content-Type', 'application/json');
      }
  }

  const config: RequestInit = {
    ...options,
    headers,
  };

  let response = await fetch(`${API_BASE_URL}${endpoint}`, config);

  if (response.status === 401 && access) {
    // Attempt to refresh token
    const { refresh } = getTokens();
    if (refresh) {
      const refreshResponse = await fetch(`${API_BASE_URL}/token/refresh/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refresh }),
      });

      if (refreshResponse.ok) {
        const data = await refreshResponse.json();
        setTokens(data.access, refresh);
        
        // Retry the original request
        headers.set('Authorization', `Bearer ${data.access}`);
        config.headers = headers;
        response = await fetch(`${API_BASE_URL}${endpoint}`, config);
      } else {
        // Refresh token invalid, clear tokens
        clearTokens();
        if (typeof window !== 'undefined') {
          window.location.href = '/admin/login';
        }
      }
    } else {
        clearTokens();
        if (typeof window !== 'undefined') {
          window.location.href = '/admin/login';
        }
    }
  }

  return response;
}
