import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PromoBanner() {
  return (
    <div className="bg-brand-50 border-b border-brand-100 py-2.5 px-4 text-center">
      <p className="text-xs sm:text-sm font-semibold text-brand-800 flex items-center justify-center gap-1.5 flex-wrap">
        <span>Looking to build and fund your startup?</span>
        <Link 
          to="/school/signup" 
          className="inline-flex items-center gap-1 font-bold text-brand-600 hover:text-brand-700 underline underline-offset-2 transition-colors group"
        >
          Join ANTREP School
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </p>
    </div>
  );
}
