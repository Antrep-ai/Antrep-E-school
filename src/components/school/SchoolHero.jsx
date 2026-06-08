import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ShieldCheck } from 'lucide-react';
import Button from '../ui/Button';
import indiaMap from '../../assets/india.png';

export default function SchoolHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-brand-900 py-16 lg:py-24">
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-brand-600/20 blur-3xl -z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-900/30 blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">

          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Brand Header */}
            <div className="flex items-center gap-3">
              <div className="bg-brand-500 text-white w-12 h-12 rounded-xl flex items-center justify-center font-black text-2xl shadow-lg shadow-brand-900/50">
                A
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Learn how to build, validate, and fund a startup —{" "}
              <span className="text-brand-400">
                with practical guidance, mentorship, and investor readiness.
              </span>
            </h1>

            {/* Intro Copy */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              A practical online learning experience for founders, students, and early-stage teams.
            </p>

            {/* CTA Row */}
            <div className="flex flex-row items-center gap-4 sm:gap-6 pt-2">
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
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 pt-4 border-t border-slate-700/50 max-w-xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-brand-400" />
                100% Free & Open
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-brand-400" />
                Self-Paced Curriculum
              </div>
            </div>
          </div>

          {/* Right Column: India Map */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <div className="relative w-full h-full flex items-center animate-fade-in">
              <div className="absolute inset-0 bg-brand-500/15 rounded-full filter blur-3xl -z-10" />
              <img
                src={indiaMap}
                alt="ANTREP India Network Map"
                className="w-full h-full object-contain hover:scale-[1.02] transition-transform duration-500"
                style={{
                  minHeight: '400px',
                  maxHeight: '600px',
                  filter: 'brightness(1.1) saturate(1.3) drop-shadow(0 0 48px rgba(99,130,246,0.35))'
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
