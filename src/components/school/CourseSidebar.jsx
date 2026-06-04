import React from 'react';

export default function CourseSidebar({ modules = [], currentSlug }) {
  return (
    <aside className="w-64 bg-slate-50 border-r border-slate-200 p-4">
      <h3 className="font-bold text-slate-800 mb-4">Modules</h3>
      <ul className="space-y-2">
        {modules.map((m) => (
          <li key={m.slug} className={`p-2 rounded text-sm ${m.slug === currentSlug ? 'bg-brand-100 text-brand-800' : 'text-slate-600'}`}>
            {m.title}
          </li>
        ))}
      </ul>
    </aside>
  );
}
