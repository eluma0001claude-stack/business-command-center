'use client';

import { useState, useEffect } from 'react';
import KanbanBoard from '@/components/KanbanBoard';
import LoginForm from '@/components/LoginForm';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if already authenticated
    const auth = localStorage.getItem('bcc_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (password: string) => {
    // Simple password check (MVP - will be env var)
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD || password === 'amule2026') {
      localStorage.setItem('bcc_auth', 'true');
      setIsAuthenticated(true);
    } else {
      alert('Wrong password!');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('bcc_auth');
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Business Command Center</h1>
            <p className="text-gray-600 mt-2">Amule Business Ideas Pipeline</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:border-gray-400"
          >
            Logout
          </button>
        </div>
        <KanbanBoard />
      </div>
    </main>
  );
}
