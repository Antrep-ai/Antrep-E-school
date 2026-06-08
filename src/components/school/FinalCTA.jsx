import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-slate-900 to-slate-950 py-20 lg:py-28 border-b border-slate-800">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-brand-700/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex p-3 rounded-full bg-brand-500/20 text-brand-400 mb-6">
          <Rocket className="w-7 h-7" />
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Ready to build a{' '}
          <span className="text-brand-400">fundable startup?</span>
        </h2>

        <p className="mt-6 max-w-xl mx-auto text-lg text-slate-400 leading-relaxed">
          Enroll today in ANTREP School of Entrepreneurship. Learn at your own pace, download templates, and get investor-ready — completely free.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link to="/school/signup">
            <button className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-brand-900/60 hover:-translate-y-0.5 transform transition-all">
              Start Learning Free
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          <Link to="/school/login">
            <button className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-bold text-base px-8 py-4 rounded-xl transition-all">
              Sign In
            </button>
          </Link>
        </div>

        <p className="mt-6 text-xs text-slate-600 font-medium">
          100% Free · No credit card required · Self-paced enrollment
        </p>
      </div>
    </section>
  );
}
