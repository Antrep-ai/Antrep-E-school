import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, BarChart, ChevronRight } from 'lucide-react';
import SchoolNavbar from '../../components/school/SchoolNavbar';
import SchoolFooter from '../../components/school/SchoolFooter';
import { schoolModules } from '../../data/schoolModules';
import Button from '../../components/ui/Button';
import Card, { CardBody, CardFooter } from '../../components/ui/Card';

export default function SchoolCourses() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Startup Basics', 'Product', 'GTM', 'Finance', 'Fundraising', 'Legal'];

  const filteredModules = schoolModules.filter(module => {
    const matchesSearch = module.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          module.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || module.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Startup Basics':
        return 'bg-blue-50 text-blue-750 border-blue-100';
      case 'Product':
        return 'bg-emerald-50 text-emerald-750 border-emerald-100';
      case 'GTM':
        return 'bg-purple-50 text-purple-750 border-purple-100';
      case 'Fundraising':
        return 'bg-amber-50 text-amber-750 border-amber-100';
      case 'Finance':
        return 'bg-rose-50 text-rose-750 border-rose-100';
      case 'Legal':
        return 'bg-teal-50 text-teal-750 border-teal-100';
      default:
        return 'bg-brand-50 text-brand-755 border-brand-100';
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      <SchoolNavbar />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-brand-600 bg-brand-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Curriculum
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            ANTREP School Modules
          </h1>
          <p className="mt-3 text-base text-slate-500">
            A structured path from validation to closing your seed round. Taught through execution-oriented checklists, worksheets, and templates.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-slate-100 shadow-sm mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-600 text-white shadow-sm shadow-brand-100'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </span>
            <input
              type="text"
              placeholder="Search modules..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
            />
          </div>
        </div>

        {/* Course Cards Grid */}
        {filteredModules.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredModules.map((module) => (
              <Card key={module.id} className="bg-white flex flex-col h-full justify-between border-slate-100" hover>
                <CardBody className="pt-6">
                  {/* Category, Duration, and Level */}
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
                    {module.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                    {module.description}
                  </p>

                  {/* Deliverable/Assignment Summary preview */}
                  <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 text-xs mt-auto">
                    <span className="font-bold text-slate-700 block mb-1">Deliverable Milestone:</span>
                    <p className="text-slate-500 italic">"{module.assignment.title}"</p>
                  </div>
                </CardBody>

                <CardFooter className="pt-3 pb-4">
                  <Link to={`/school/courses/${module.slug}`} className="w-full">
                    <Button variant="secondary" size="sm" className="w-full font-bold group justify-center border-slate-200 text-slate-700 bg-slate-50/50 hover:bg-slate-50">
                      View Module Details
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform text-slate-400" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-slate-100 rounded-3xl">
            <p className="text-slate-400 font-semibold text-lg">No modules match your filters.</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-4 text-sm font-bold text-brand-600 underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      <SchoolFooter />
    </div>
  );
}
