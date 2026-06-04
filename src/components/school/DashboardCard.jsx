import React from 'react';

export default function DashboardCard({ title, children }) {
  return (
    <div className="border border-slate-100 p-6 rounded-xl bg-white shadow-sm">
      <h3 className="font-bold text-slate-800 text-lg mb-4">{title}</h3>
      {children}
    </div>
  );
}
