import React from 'react';
import { GraduationCap, Lightbulb, Users2, ShieldAlert } from 'lucide-react';

const audiences = [
  {
    icon: GraduationCap,
    title: 'Students',
    description: 'Validate ideas and build real startup experience alongside your coursework. Access templates and learn execution skills not taught in textbooks.',
    focus: 'Practical Frameworks'
  },
  {
    icon: Lightbulb,
    title: 'First-time Founders',
    description: 'Stop guessing what to do next. Learn how to run structured customer discovery, build high-converting MVPs, and prepare for investor conversations.',
    focus: 'Idea to Launch'
  },
  {
    icon: Users2,
    title: 'Early-stage Teams',
    description: 'Align co-founders and early hires on key objectives. Create a cohesive culture around user metrics, TAM validation, and pitch preparation.',
    focus: 'Execution Alignment'
  },
  {
    icon: ShieldAlert,
    title: 'Startup Operators',
    description: 'Level up your startup strategy. Deep dive into product-market fit, unit economics, cohort analysis, and modern pre-seed fundraising structures.',
    focus: 'Growth & Operations'
  }
];

export default function AudienceSection() {
  return (
    <section className="bg-slate-900 py-16 lg:py-24 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-400 bg-brand-900/50 px-3 py-1.5 rounded-full uppercase tracking-wider">
            Audience
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl mt-4">
            Who is ANTREP School For?
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Designed for execution-oriented builders looking to transform high-potential ideas into sustainable ventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((aud, index) => {
            const Icon = aud.icon;
            return (
              <div
                key={index}
                className="flex flex-col bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-brand-500/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-brand-900/60 text-brand-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{aud.title}</h3>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-6">
                  {aud.description}
                </p>

                <div className="border-t border-slate-700 pt-4 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Focus Area</span>
                  <span className="text-[10px] font-bold text-brand-400 bg-brand-900/50 px-2 py-0.5 rounded">
                    {aud.focus}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
