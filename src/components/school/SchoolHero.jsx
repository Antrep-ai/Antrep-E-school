import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, ShieldCheck } from 'lucide-react';
import Button from '../ui/Button';
import indiaMap from '../../assets/india.png';

export default function SchoolHero() {
  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-20 border-b border-slate-100">
      {/* Background design accents */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-50/50 opacity-60 blur-3xl -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Brand Header */}
            <div className="flex items-center gap-3">
              <div className="bg-brand-500 text-white w-12 h-12 rounded-xl flex items-center justify-center font-black text-2xl shadow-sm shadow-brand-200">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-slate-900 tracking-tight leading-none">
                  ANTREP
                </span>
                <span className="text-xs font-semibold text-brand-600 uppercase tracking-widest mt-1">
                  School of Entrepreneurship
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Learn how to build, validate, and fund a startup —{" "}
              <span className="text-brand-600">
                with practical guidance, mentorship, and investor readiness.
              </span>
            </h1>

            {/* Intro Copy */}
            <p className="text-lg sm:text-xl text-slate-500 font-normal leading-relaxed max-w-2xl">
              A practical online learning experience for founders, students, and early-stage teams.
            </p>

            {/* Signup / Login CTA Row */}
            <div className="flex flex-row items-center gap-4 sm:gap-6 pt-2">
              <Link to="/school/signup">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="px-8 py-3.5 text-base font-bold shadow-md shadow-brand-100 hover:shadow-brand-200 hover:-translate-y-0.5 transform transition-all bg-brand-600 hover:bg-brand-700 text-white rounded-xl"
                >
                  Start Learning
                </Button>
              </Link>
              <Link 
                to="/school/login" 
                className="text-base font-bold text-brand-600 hover:text-brand-700 underline underline-offset-4 transition-colors"
              >
                Sign In
              </Link>
            </div>

            {/* Trust badge/features row */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 pt-4 border-t border-slate-100 max-w-xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-brand-500" />
                100% Free & Open
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-brand-500" />
                Self-Paced Curriculum
              </div>
            </div>
          </div>

          {/* Right Column: India Dotted Map */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg animate-fade-in">
              {/* Subtle background glow behind the map */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-100/30 to-indigo-100/30 rounded-full filter blur-2xl -z-10" />
              
              <img 
                src={indiaMap} 
                alt="ANTREP India Network Map" 
                className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500 drop-shadow-sm"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
