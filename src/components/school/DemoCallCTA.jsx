import React from 'react';
import { CalendarCheck } from 'lucide-react';
import Button from '../ui/Button';

export default function DemoCallCTA() {
  return (
    <section className="bg-slate-900 py-16 lg:py-24 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text + CTA */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-brand-400 bg-brand-900/50 px-3 py-1.5 rounded-full uppercase tracking-widest">
              <CalendarCheck className="w-4 h-4" />
              Demo Call
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Stop Cold Outreach.{' '}
              <span className="text-brand-400">Start Warm Connections.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-lg">
              Let us show you how to uncover active investors, warm connections,
              and funding opportunities before you even start pitching.
            </p>

            <div className="pt-2">
              <a href="mailto:support@antrepinvest.com?subject=Book a Demo">
                <Button
                  variant="primary"
                  size="lg"
                  className="font-bold bg-brand-500 hover:bg-brand-400 shadow-lg shadow-brand-900/40 hover:-translate-y-0.5 transform transition-all focus:ring-offset-slate-900"
                >
                  Book a Demo
                </Button>
              </a>
            </div>
          </div>

          {/* Right: Founder Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-500/10 rounded-2xl filter blur-2xl -z-10 transform scale-110" />

              <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden w-64 shadow-xl hover:border-brand-500/50 transition-colors">
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-brand-900 to-slate-800 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-900/60">
                    <span className="text-4xl font-black text-white select-none">S</span>
                  </div>
                </div>

                <div className="px-5 py-4 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-white text-base">Sandeep</span>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-brand-400 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                  <p className="text-xs text-brand-400 font-semibold uppercase tracking-wider">
                    Founder of ANTREP
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
