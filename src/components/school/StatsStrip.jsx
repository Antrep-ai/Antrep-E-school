import React from 'react';

const stats = [
  { value: '500+', label: 'Founders Enrolled' },
  { value: '12', label: 'Curriculum Modules' },
  { value: '100%', label: 'Free & Open Access' },
  { value: '3 Wks', label: 'Avg. Time to MVP' },
  { value: '1:1', label: 'Investor Sessions' },
];

export default function StatsStrip() {
  return (
    <div className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-slate-800">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-6 px-4 text-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-brand-400 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
