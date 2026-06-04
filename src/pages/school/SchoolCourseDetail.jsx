import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, BarChart, BookOpen, Download, CheckCircle, FileText, Send, Sparkles } from 'lucide-react';
import SchoolNavbar from '../../components/school/SchoolNavbar';
import SchoolFooter from '../../components/school/SchoolFooter';
import { schoolModules } from '../../data/schoolModules';
import Button from '../../components/ui/Button';
import Card, { CardBody } from '../../components/ui/Card';

export default function SchoolCourseDetail() {
  const { slug } = useParams();
  const module = schoolModules.find(m => m.slug === slug);

  if (!module) {
    return (
      <div className="flex flex-col min-h-screen bg-slate-50/50">
        <SchoolNavbar />
        <main className="flex-grow flex items-center justify-center py-20">
          <div className="text-center max-w-md bg-white p-8 border border-slate-100 rounded-3xl shadow-sm">
            <h2 className="text-2xl font-black text-slate-800">Module Not Found</h2>
            <p className="text-slate-400 text-sm mt-2 mb-6">The curriculum module you are looking for does not exist or has been moved.</p>
            <Link to="/school/courses">
              <Button variant="primary">Back to Curriculum</Button>
            </Link>
          </div>
        </main>
        <SchoolFooter />
      </div>
    );
  }

  // State to track completed lessons
  const [completedLessons, setCompletedLessons] = useState({});
  // State for assignment submission
  const [submissionUrl, setSubmissionUrl] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('Pending'); // Pending, Submitting, Submitted
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleLesson = (id) => {
    setCompletedLessons(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleAssignmentSubmit = (e) => {
    e.preventDefault();
    if (!submissionUrl.trim()) return;

    setIsSubmitting(true);
    setSubmissionStatus('Submitting');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus('Submitted');
    }, 1500);
  };

  const numCompleted = Object.values(completedLessons).filter(Boolean).length;
  const progressPercent = Math.round((numCompleted / module.lessons.length) * 100);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      <SchoolNavbar />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        {/* Back navigation link */}
        <Link 
          to="/school/courses" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-brand-600 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          BACK TO CURRICULUM
        </Link>

        {/* Hero Banner Header */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-brand-50/30 to-slate-50/50 rounded-full filter blur-xl -z-10" />
          
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded border border-brand-100 bg-brand-50 text-brand-700 uppercase tracking-wider">
              {module.category}
            </span>
            <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
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

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
            {module.title}
          </h1>
          
          <p className="text-sm sm:text-base text-slate-500 max-w-4xl leading-relaxed">
            {module.description}
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Lessons list */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Module Lessons</h2>
                  <p className="text-xs text-slate-400 mt-0.5">Toggle lessons to track completion progress</p>
                </div>
                {/* Progress Circle/Pill */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-md">
                    {progressPercent}% Complete
                  </span>
                </div>
              </div>

              {/* Lessons Stack */}
              <div className="space-y-3">
                {module.lessons.map((lesson, idx) => {
                  const isDone = !!completedLessons[lesson.id];
                  return (
                    <button
                      key={lesson.id}
                      onClick={() => toggleLesson(lesson.id)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl border text-left transition-all ${
                        isDone 
                          ? 'bg-brand-50/20 border-brand-100 hover:border-brand-200' 
                          : 'bg-white border-slate-100 hover:border-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`p-1.5 rounded-lg shrink-0 ${
                          isDone ? 'bg-brand-500 text-white animate-scale-in' : 'bg-slate-50 text-slate-400'
                        }`}>
                          {isDone ? <CheckCircle className="w-4 h-4" /> : <BookOpen className="w-4 h-4" />}
                        </div>
                        <div>
                          <span className={`text-xs font-bold block ${isDone ? 'text-brand-800' : 'text-slate-400'}`}>
                            LESSON 0{idx + 1}
                          </span>
                          <span className={`text-sm font-semibold ${isDone ? 'text-slate-800 line-through' : 'text-slate-700'}`}>
                            {lesson.title}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-slate-400 shrink-0">
                        {lesson.duration}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Assignment Submission and Downloads */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Assignment Card */}
            <Card className="bg-white border-slate-100">
              <CardBody className="p-6 space-y-5">
                <div className="flex items-center gap-2.5 text-brand-700 border-b border-slate-100 pb-3">
                  <FileText className="w-5 h-5" />
                  <h3 className="font-bold text-slate-900">Milestone: {module.assignment.title}</h3>
                </div>

                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {module.assignment.description}
                  </p>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-500">
                    <span className="font-bold text-slate-700 block mb-1">Required Deliverable:</span>
                    {module.assignment.deliverable}
                  </div>
                </div>

                {/* Submission Form */}
                {submissionStatus === 'Pending' && (
                  <form onSubmit={handleAssignmentSubmit} className="space-y-3 pt-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Submit Google Docs/Drive URL
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="url"
                        placeholder="https://docs.google.com/..."
                        required
                        value={submissionUrl}
                        onChange={(e) => setSubmissionUrl(e.target.value)}
                        className="block w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                      />
                      <Button type="submit" variant="primary" size="sm" className="gap-1 px-4 py-2 font-bold shrink-0">
                        Submit
                        <Send className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </form>
                )}

                {submissionStatus === 'Submitting' && (
                  <div className="flex items-center justify-center gap-3 py-6 bg-slate-50/50 rounded-xl border border-slate-100 border-dashed">
                    <div className="w-5 h-5 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
                    <span className="text-xs font-bold text-slate-500">Submitting deliverable...</span>
                  </div>
                )}

                {submissionStatus === 'Submitted' && (
                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 text-xs text-emerald-800 space-y-2 animate-fade-in">
                    <div className="flex items-center gap-2 font-bold">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>Deliverable Submitted!</span>
                    </div>
                    <p className="text-[11px] text-emerald-600/90 italic">
                      "Submitted URL: {submissionUrl}"
                    </p>
                    <p className="text-[11px] text-slate-400 pt-1 border-t border-emerald-100/50">
                      Our mentors will review this file and provide detailed feedback directly on your dashboard.
                    </p>
                  </div>
                )}
              </CardBody>
            </Card>

            {/* Resources Downloads Card */}
            <Card className="bg-white border-slate-100">
              <CardBody className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-slate-700 border-b border-slate-100 pb-3">
                  <Download className="w-5 h-5 text-slate-400" />
                  <h3 className="font-bold text-slate-900">Downloadable Resources</h3>
                </div>

                <div className="space-y-3.5">
                  {module.resources.map((res, i) => (
                    <a
                      key={i}
                      href={res.url}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white rounded-lg text-slate-400 group-hover:text-brand-600 transition-colors shadow-sm">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs sm:text-sm font-semibold text-slate-700 block group-hover:text-slate-900 transition-colors truncate max-w-[200px] sm:max-w-xs">
                            {res.name}
                          </span>
                        </div>
                      </div>
                      <Download className="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors shrink-0" />
                    </a>
                  ))}
                </div>
              </CardBody>
            </Card>

            {/* Interactive Mentor Tip */}
            <div className="bg-brand-50 border border-brand-100 rounded-3xl p-6 flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center shrink-0 shadow-sm font-bold text-xs">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-brand-900">Founder Advice:</h4>
                <p className="text-xs text-slate-500 leading-relaxed italic">
                  "Don't optimize for the grade; optimize for learnings. Discuss your homework deliverables with real prospective customers and adjust based on their feedback."
                </p>
              </div>
            </div>

          </div>

        </div>
      </main>

      <SchoolFooter />
    </div>
  );
}
