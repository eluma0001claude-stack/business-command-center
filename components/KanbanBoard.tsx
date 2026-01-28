'use client';

import { useState, useEffect } from 'react';
import IdeaCard from './IdeaCard';
import AddIdeaForm from './AddIdeaForm';

export interface Idea {
  id: string;
  title: string;
  description: string;
  cost: number;
  timeHours: number;
  source: string;
  status: 'new' | 'review' | 'approved';
  createdAt: string;
}

export default function KanbanBoard() {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    // Load ideas from localStorage
    const stored = localStorage.getItem('bcc_ideas');
    if (stored) {
      setIdeas(JSON.parse(stored));
    }
  }, []);

  const saveIdeas = (newIdeas: Idea[]) => {
    setIdeas(newIdeas);
    localStorage.setItem('bcc_ideas', JSON.stringify(newIdeas));
  };

  const addIdea = (idea: Omit<Idea, 'id' | 'status' | 'createdAt'>) => {
    const newIdea: Idea = {
      ...idea,
      id: Date.now().toString(),
      status: 'new',
      createdAt: new Date().toISOString(),
    };
    saveIdeas([...ideas, newIdea]);
    setShowAddForm(false);
  };

  const updateIdeaStatus = (id: string, status: 'new' | 'review' | 'approved') => {
    saveIdeas(ideas.map(idea => idea.id === id ? { ...idea, status } : idea));
  };

  const deleteIdea = (id: string) => {
    if (confirm('Delete this idea?')) {
      saveIdeas(ideas.filter(idea => idea.id !== id));
    }
  };

  const columns = [
    { id: 'new', title: 'New Ideas', status: 'new' as const },
    { id: 'review', title: 'In Review', status: 'review' as const },
    { id: 'approved', title: 'Approved', status: 'approved' as const },
  ];

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <div className="text-sm text-gray-600">
          {ideas.length} total ideas • {ideas.filter(i => i.status === 'approved').length} approved
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
        >
          + Add Idea
        </button>
      </div>

      {showAddForm && (
        <AddIdeaForm
          onAdd={addIdea}
          onCancel={() => setShowAddForm(false)}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map(column => (
          <div key={column.id} className="bg-gray-100 rounded-lg p-4">
            <h2 className="font-bold text-lg mb-4 text-gray-800">
              {column.title}
              <span className="ml-2 text-sm font-normal text-gray-600">
                ({ideas.filter(i => i.status === column.status).length})
              </span>
            </h2>
            <div className="space-y-3">
              {ideas
                .filter(idea => idea.status === column.status)
                .map(idea => (
                  <IdeaCard
                    key={idea.id}
                    idea={idea}
                    onStatusChange={updateIdeaStatus}
                    onDelete={deleteIdea}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
