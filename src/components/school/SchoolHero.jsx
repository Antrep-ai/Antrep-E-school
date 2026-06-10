import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ShieldCheck } from 'lucide-react';
import Button from '../ui/Button';
import indiaMap from '../../assets/india.svg';
import logo from '../../assets/logo.svg';

export default function SchoolHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 min-h-[640px] lg:min-h-[700px]">

      {/* India Map — large, bleeds off edges, mask fade, pulse glow */}
      <div
        className="absolute right-[-6%] top-[-12%] bottom-[-12%] w-[75%] lg:w-[68%] pointer-events-none select-none"
        style={{
          maskImage: 'radial-gradient(ellipse 78% 82% at 58% 50%, black 30%, transparent 72%)',
          WebkitMaskImage: 'radial-gradient(ellipse 78% 82% at 58% 50%, black 30%, transparent 72%)',
        }}
      >
        <img
          src={indiaMap}
          alt=""
          className="w-full h-full object-contain object-right-top"
          style={{ mixBlendMode: 'screen', filter: 'brightness(1.6) drop-shadow(0 0 18px rgba(94, 155, 195, 0.5))' }}
        />
      </div>

      {/* Left text-area fade */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-2xl space-y-8">

          {/* Brand Header */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg shadow-brand-900/50 flex-shrink-0">
              <img src={logo} alt="ANTREP Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl text-white tracking-tight leading-none">
                ANTREP
              </span>
              <span className="text-xs font-semibold text-brand-400 uppercase tracking-widest mt-1">
                School of Entrepreneurship
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            Learn how to build, validate, and fund a startup —{' '}
            <span className="text-brand-400">
              with practical guidance, mentorship, and investor readiness.
            </span>
          </h1>

          {/* Sub-copy */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
            A practical online learning experience for founders, students, and early-stage teams.
          </p>

          {/* CTA Row */}
          <div className="flex flex-row items-center gap-5 pt-2">
            <Link to="/school/signup">
              <Button
                variant="primary"
                size="lg"
                className="px-8 py-3.5 text-base font-bold shadow-lg shadow-brand-900/60 hover:-translate-y-0.5 transform transition-all bg-brand-500 hover:bg-brand-400 text-white rounded-xl"
              >
                Start Learning
              </Button>
            </Link>
            <Link
              to="/school/login"
              className="text-base font-bold text-brand-400 hover:text-brand-300 underline underline-offset-4 transition-colors"
            >
              Sign In
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-y-3 gap-x-6 pt-4 border-t border-slate-800">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-brand-400" />
              100% Free & Open
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-brand-400" />
              Self-Paced Curriculum
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
