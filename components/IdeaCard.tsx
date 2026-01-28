'use client';

import { Idea } from './KanbanBoard';

interface IdeaCardProps {
  idea: Idea;
  onStatusChange: (id: string, status: 'new' | 'review' | 'approved') => void;
  onDelete: (id: string) => void;
}

export default function IdeaCard({ idea, onStatusChange, onDelete }: IdeaCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="mb-3">
        <h3 className="font-semibold text-gray-900 mb-1">{idea.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{idea.description}</p>
      </div>

      <div className="flex gap-2 mb-3 text-xs">
        <span className="px-2 py-1 bg-green-100 text-green-800 rounded">
          €{idea.cost}
        </span>
        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">
          {idea.timeHours}h
        </span>
        <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded">
          {idea.source}
        </span>
      </div>

      <div className="flex gap-2">
        {idea.status === 'new' && (
          <>
            <button
              onClick={() => onStatusChange(idea.id, 'review')}
              className="flex-1 px-3 py-1.5 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Review
            </button>
            <button
              onClick={() => onDelete(idea.id)}
              className="px-3 py-1.5 text-xs bg-red-100 text-red-700 rounded hover:bg-red-200"
            >
              Delete
            </button>
          </>
        )}
        {idea.status === 'review' && (
          <>
            <button
              onClick={() => onStatusChange(idea.id, 'approved')}
              className="flex-1 px-3 py-1.5 text-xs bg-green-600 text-white rounded hover:bg-green-700"
            >
              Approve
            </button>
            <button
              onClick={() => onStatusChange(idea.id, 'new')}
              className="flex-1 px-3 py-1.5 text-xs bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            >
              Back
            </button>
          </>
        )}
        {idea.status === 'approved' && (
          <div className="flex-1 text-center text-xs text-green-600 font-medium py-1.5">
            ✓ Approved
          </div>
        )}
      </div>

      <div className="mt-2 text-xs text-gray-400">
        {new Date(idea.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
}
