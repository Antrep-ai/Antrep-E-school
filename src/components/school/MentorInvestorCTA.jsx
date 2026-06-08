import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, Award, MessageSquareCode } from 'lucide-react';
import Button from '../ui/Button';

export default function MentorInvestorCTA() {
  return (
    <section className="bg-slate-950 py-16 lg:py-24 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex p-3 rounded-2xl bg-brand-900/60 text-brand-400">
              <Users className="w-6 h-6" />
            </div>

            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Get feedback from experienced mentors and active investors.
            </h2>

            <p className="text-base text-slate-400 leading-relaxed">
              Don't build in a silo. Once you complete key curriculum milestones and demonstrate readiness on your dashboard, unlock access to 1-on-1 office hours.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-brand-900/60 text-brand-400 p-1.5 rounded-md shrink-0 mt-0.5">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-sm font-bold text-white block">Weekly Pitch Reviews</span>
                  <span className="text-sm text-slate-400">Get your pitch deck stress-tested by mentors who have built or funded SaaS, fintech, and marketplace platforms.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-brand-900/60 text-brand-400 p-1.5 rounded-md shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-sm font-bold text-white block">Investor-Ready Certification</span>
                  <span className="text-sm text-slate-400">Earn an ANTREP certificate of readiness to attach to your warm outreach, showing investors you've completed rigorous validation.</span>
                </div>
              </li>
            </ul>

            <div className="pt-2">
              <Link to="/school/signup">
                <Button
                  variant="primary"
                  size="md"
                  className="font-semibold bg-brand-500 hover:bg-brand-400 shadow-md shadow-brand-900/40 focus:ring-offset-slate-950"
                >
                  Join the Next Cohort
                </Button>
              </Link>
            </div>
          </div>

          {/* Booking Mock */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-900/30 to-brand-800/20 rounded-2xl -z-10 transform rotate-1 scale-105" />

            <div className="bg-slate-800 border border-slate-700 rounded-xl shadow-xl p-5 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                <div>
                  <h4 className="text-sm font-extrabold text-white">Mentor Availability</h4>
                  <p className="text-xs text-slate-500">Book your 1:1 session</p>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-900/40 px-2.5 py-1 rounded-full border border-emerald-800">
                  4 Slots Available
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-700/50 border border-slate-600 hover:border-brand-500/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-800 text-brand-300 flex items-center justify-center font-bold text-sm shrink-0">
                    SJ
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Sarah Jenkins</h5>
                    <p className="text-[10px] text-slate-500">Ex-Founder, Partner at Apex Capital</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-[11px] py-1 px-2.5 font-bold border-slate-600 text-slate-300 hover:bg-slate-600 hover:text-white focus:ring-offset-slate-800"
                >
                  Book
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-700/50 border border-slate-600 hover:border-brand-500/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-800 text-brand-300 flex items-center justify-center font-bold text-sm shrink-0">
                    MK
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Marcus Chen</h5>
                    <p className="text-[10px] text-slate-500">Growth Lead, Former Stripe Eng</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-[11px] py-1 px-2.5 font-bold border-slate-600 text-slate-300 hover:bg-slate-600 hover:text-white focus:ring-offset-slate-800"
                >
                  Book
                </Button>
              </div>

              <div className="bg-brand-900/40 rounded-xl p-3.5 border border-brand-800 text-xs text-slate-300 space-y-1.5">
                <div className="flex items-center gap-1.5 text-brand-400 font-bold">
                  <MessageSquareCode className="w-3.5 h-3.5" />
                  <span>Recent Mentor Feedback:</span>
                </div>
                <p className="italic text-slate-400">
                  "Alex's customer interview log is highly detailed. Moving onto MVP planning next. Recommendation: target the GTM experiments module."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
