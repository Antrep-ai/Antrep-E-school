import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function PromoBanner() {
  return (
    <div className="bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 py-2.5 px-4 text-center">
      <p className="text-xs sm:text-sm font-semibold text-white flex items-center justify-center gap-1.5 flex-wrap">
        <Sparkles className="w-3.5 h-3.5 text-brand-200" />
        <span className="text-brand-100">Looking to build and fund your startup?</span>
        <Link
          to="/school/signup"
          className="inline-flex items-center gap-1 font-bold text-white hover:text-brand-100 underline underline-offset-2 transition-colors group"
        >
          Join ANTREP School
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </p>
    </div>
  );
}
