import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

export default function FinalCTA() {
  return (
    <section className="bg-white py-16 lg:py-24 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative border border-slate-100 rounded-3xl p-8 sm:p-12 md:p-16 text-center shadow-md bg-gradient-to-b from-slate-50/50 to-white overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-brand-50" />
          <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-brand-50/80" />

          <div className="relative space-y-6">
            <div className="inline-flex p-3 rounded-full bg-brand-50 text-brand-600 mb-2">
              <Rocket className="w-6 h-6" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Ready to build a fundable startup?
            </h2>

            <p className="max-w-xl mx-auto text-base sm:text-lg text-slate-500 font-normal">
              Enroll today in ANTREP School of Entrepreneurship. Learn at your own pace, download templates, and get investor-ready.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/school/signup" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full font-bold shadow-md gap-2">
                  Start Learning
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/school/login" className="w-full sm:w-auto">
                <Button variant="white" size="lg" className="w-full font-bold text-slate-750 border-slate-200">
                  Sign In
                </Button>
              </Link>
            </div>

            <p className="text-xs text-slate-400 font-medium">
              100% Free. No credit card required. Self-paced enrollment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
