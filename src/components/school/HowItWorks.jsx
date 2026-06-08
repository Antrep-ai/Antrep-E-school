import React from 'react';
import { BookOpen, Calendar, Rocket, Users } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: BookOpen,
    title: 'Structured Curriculum',
    description: 'Follow a curated, step-by-step path from raw idea to launch, designed specifically for early-stage builders.'
  },
  {
    number: '02',
    icon: Calendar,
    title: 'Weekly Learning',
    description: 'Learn at your own pace. Spend 2-3 hours a week reviewing lessons, downloading worksheets, and executing milestones.'
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Founder-Oriented Modules',
    description: 'Skip the dry academic theory. Every module focuses on real-world deliverables like GTM plans, TAM sizing, and runway.'
  },
  {
    number: '04',
    icon: Users,
    title: 'Mentor & Investor Pathways',
    description: 'Hit key progress milestones on your dashboard to unlock feedback reviews and 1:1 pitches with active investors.'
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-950 py-16 lg:py-24 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-400 bg-brand-900/50 px-3 py-1.5 rounded-full uppercase tracking-wider">
            Methodology
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl mt-4">
            How ANTREP School Works
          </h2>
          <p className="mt-4 text-base text-slate-400">
            A practical, action-first framework built to help you make weekly progress on your venture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-brand-500/50 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="absolute top-4 right-5 text-4xl font-extrabold text-slate-700 select-none">
                  {step.number}
                </span>
                <div className="inline-flex p-3 rounded-xl bg-brand-900/60 text-brand-400 mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
