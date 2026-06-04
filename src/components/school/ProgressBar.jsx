import React from 'react';

export default function ProgressBar({ value = 0 }) {
  return (
    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
      <div className="bg-brand-600 h-full transition-all duration-300" style={{ width: `${value}%` }} />
    </div>
  );
}
