import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BarChart, ChevronRight, BookOpen } from 'lucide-react';
import { schoolModules } from '../../data/schoolModules';
import Button from '../ui/Button';

export default function CurriculumPreview() {
  const targetSlugs = [
    'idea-validation',
    'customer-discovery',
    'pitch-deck-prep',
    'financial-modelling-basics',
    'fundraising-readiness',
    'investor-outreach'
  ];

  const previewModules = targetSlugs.map(slug => {
    const original = schoolModules.find(m => m.slug === slug);
    if (!original) return null;

    let displayTitle = original.title;
    if (slug === 'customer-discovery') displayTitle = 'Market Research';
    if (slug === 'pitch-deck-prep') displayTitle = 'Pitch Deck Basics';
    if (slug === 'financial-modelling-basics') displayTitle = 'Financial Model Basics';
    if (slug === 'investor-outreach') displayTitle = 'Investor Communication';

    return { ...original, displayTitle };
  }).filter(Boolean);

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Startup Basics': return 'bg-blue-900/50 text-blue-300 border-blue-800';
      case 'Product':        return 'bg-emerald-900/50 text-emerald-300 border-emerald-800';
      case 'GTM':            return 'bg-purple-900/50 text-purple-300 border-purple-800';
      case 'Fundraising':    return 'bg-amber-900/50 text-amber-300 border-amber-800';
      case 'Finance':        return 'bg-rose-900/50 text-rose-300 border-rose-800';
      default:               return 'bg-brand-900/50 text-brand-300 border-brand-800';
    }
  };

  return (
    <section className="bg-slate-950 py-16 lg:py-24 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-brand-400 bg-brand-900/50 px-3 py-1.5 rounded-full uppercase tracking-wider">
              Curriculum Overview
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl mt-4">
              Practical curriculum designed for builders
            </h2>
            <p className="mt-4 text-base text-slate-400">
              Skip the fluff. Learn what matters at each stage of your startup lifecycle.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link to="/school/courses">
              <Button
                variant="outline"
                className="gap-2 font-semibold border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white focus:ring-offset-slate-950"
              >
                View All Modules
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewModules.map((module) => (
            <div
              key={module.id}
              className="flex flex-col bg-slate-800 border border-slate-700 rounded-xl hover:border-brand-500/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-6 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${getCategoryColor(module.category)}`}>
                    {module.category}
                  </span>
                  <div className="flex items-center gap-3 text-slate-500 text-xs font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {module.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <BarChart className="w-3.5 h-3.5" />
                      {module.level}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-2">{module.displayTitle}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">{module.description}</p>

                <div className="space-y-2 border-t border-slate-700 pt-4">
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                    Preview Lessons ({module.lessons.length})
                  </span>
                  {module.lessons.slice(0, 2).map((lesson) => (
                    <div key={lesson.id} className="flex items-center gap-2 text-xs text-slate-400">
                      <BookOpen className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                      <span className="truncate">{lesson.title}</span>
                    </div>
                  ))}
                  {module.lessons.length > 2 && (
                    <span className="text-[10px] text-slate-500 font-medium italic block mt-1">
                      + {module.lessons.length - 2} more lessons
                    </span>
                  )}
                </div>
              </div>

              <div className="px-6 pb-5">
                <Link to={`/school/courses/${module.slug}`} className="w-full">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-center font-semibold border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white group focus:ring-offset-slate-800"
                  >
                    Start Learning
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
