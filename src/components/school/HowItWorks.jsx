import React from 'react';
import { BookOpen, Calendar, Rocket, Users } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';

export default function HowItWorks() {
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

  return (
    <section className="bg-slate-50/50 py-16 lg:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-600 bg-brand-50 px-3 py-1.5 rounded-full uppercase tracking-wider">
            Methodology
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl mt-4">
            How ANTREP School Works
          </h2>
          <p className="mt-4 text-base text-slate-500">
            A practical, action-first framework built to help you make weekly progress on your venture.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative bg-white border border-slate-100" hover>
                <CardBody className="pt-8">
                  {/* Step Number Badge */}
                  <span className="absolute top-4 right-5 text-4xl font-extrabold text-slate-100/70 select-none">
                    {step.number}
                  </span>

                  {/* Icon Container */}
                  <div className="inline-flex p-3 rounded-xl bg-brand-50 text-brand-600 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
