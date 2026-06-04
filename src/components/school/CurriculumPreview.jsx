import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BarChart, ChevronRight, BookOpen } from 'lucide-react';
import { schoolModules } from '../../data/schoolModules';
import Card, { CardBody, CardFooter } from '../ui/Card';
import Button from '../ui/Button';

export default function CurriculumPreview() {
  // Slugs in the exact order requested by the user
  const targetSlugs = [
    'idea-validation',
    'customer-discovery',
    'pitch-deck-prep',
    'financial-modelling-basics',
    'fundraising-readiness',
    'investor-outreach'
  ];

  // Map and rename modules to match the user's requirements exactly
  const previewModules = targetSlugs.map(slug => {
    const original = schoolModules.find(m => m.slug === slug);
    if (!original) return null;

    let displayTitle = original.title;
    if (slug === 'customer-discovery') displayTitle = 'Market Research';
    if (slug === 'pitch-deck-prep') displayTitle = 'Pitch Deck Basics';
    if (slug === 'financial-modelling-basics') displayTitle = 'Financial Model Basics';
    if (slug === 'investor-outreach') displayTitle = 'Investor Communication';

    return {
      ...original,
      displayTitle
    };
  }).filter(Boolean);

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Startup Basics':
        return 'bg-blue-50 text-blue-700 border-blue-100';
      case 'Product':
        return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      case 'GTM':
        return 'bg-purple-50 text-purple-700 border-purple-100';
      case 'Fundraising':
        return 'bg-amber-50 text-amber-700 border-amber-100';
      case 'Finance':
        return 'bg-rose-50 text-rose-700 border-rose-100';
      default:
        return 'bg-brand-50 text-brand-700 border-brand-100';
    }
  };

  return (
    <section className="bg-slate-50/50 py-16 lg:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-brand-600 bg-brand-50 px-3 py-1.5 rounded-full uppercase tracking-wider">
              Curriculum Overview
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl mt-4">
              Practical curriculum designed for builders
            </h2>
            <p className="mt-4 text-base text-slate-500">
              Skip the fluff. Learn what matters at each stage of your startup lifecycle. Structured from initial idea to investor readiness.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link to="/school/courses">
              <Button variant="outline" className="gap-2 font-semibold border-slate-200 text-slate-700 hover:bg-slate-50">
                View All Modules
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewModules.map((module) => (
            <Card key={module.id} className="bg-white flex flex-col h-full justify-between border-slate-100" hover>
              <CardBody className="pt-6">
                {/* Header info */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${getCategoryColor(module.category)}`}>
                    {module.category}
                  </span>
                  <div className="flex items-center gap-3 text-slate-400 text-xs font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-300" />
                      {module.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <BarChart className="w-3.5 h-3.5 text-slate-300" />
                      {module.level}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {module.displayTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                  {module.description}
                </p>

                {/* Lessons summary */}
                <div className="space-y-2 border-t border-slate-50 pt-4 mt-auto">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Preview Lessons ({module.lessons.length})
                  </span>
                  {module.lessons.slice(0, 2).map((lesson) => (
                    <div key={lesson.id} className="flex items-center gap-2 text-xs text-slate-600">
                      <BookOpen className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{lesson.title}</span>
                    </div>
                  ))}
                  {module.lessons.length > 2 && (
                    <span className="text-[10px] text-slate-400 font-medium italic block mt-1">
                      + {module.lessons.length - 2} more lessons
                    </span>
                  )}
                </div>
              </CardBody>

              <CardFooter className="pt-3 pb-4">
                <Link to={`/school/courses/${module.slug}`} className="w-full">
                  <Button variant="secondary" size="sm" className="w-full font-semibold group justify-center border-slate-200 text-slate-700 bg-slate-50/50 hover:bg-slate-50">
                    Start Learning
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform text-slate-400" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
