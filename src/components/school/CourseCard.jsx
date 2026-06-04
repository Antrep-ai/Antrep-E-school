import React from 'react';

export default function CourseCard({ course }) {
  return (
    <div className="border border-slate-100 p-6 rounded-xl bg-white shadow-sm">
      <h3 className="font-bold text-lg text-slate-800">{course?.title || 'Course Module'}</h3>
      <p className="text-sm text-slate-500 mt-2">{course?.description || 'Learn startup basics'}</p>
    </div>
  );
}
