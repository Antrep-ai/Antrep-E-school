import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, BookOpen, Calendar, Clock, FileText, CheckCircle2, AlertCircle, 
  Send, Sparkles, User, Briefcase, Tag, TrendingUp, HelpCircle 
} from 'lucide-react';
import SchoolNavbar from '../../components/school/SchoolNavbar';
import SchoolFooter from '../../components/school/SchoolFooter';
import { dashboardData } from '../../data/dashboardData';
import Button from '../../components/ui/Button';
import Card, { CardBody } from '../../components/ui/Card';

export default function SchoolDashboard() {
  const { user, learningProgress, weeklyUpdate, pendingAssignments, mentorBooking, investorReadiness, recommendedResources } = dashboardData;

  // State for interactive weekly update submission
  const [weeklyStatus, setWeeklyStatus] = useState(weeklyUpdate.status); // Pending or Submitted
  const [updateText, setUpdateText] = useState('');
  const [isSubmittingUpdate, setIsSubmittingUpdate] = useState(false);
  const [submissions, setSubmissions] = useState(weeklyUpdate.submissionHistory);

  // State for booking slots
  const [availableSlots, setAvailableSlots] = useState(mentorBooking.availableSlots);
  const [bookedSessions, setBookedSessions] = useState([mentorBooking.nextSession]);
  const [justBooked, setJustBooked] = useState(false);

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    if (!updateText.trim()) return;

    setIsSubmittingUpdate(true);
    setTimeout(() => {
      setIsSubmittingUpdate(false);
      setWeeklyStatus('Submitted');
      const today = new Date().toISOString().split('T')[0];
      setSubmissions(prev => [
        { week: `Week ${prev.length + 1}`, status: 'Submitted', date: today },
        ...prev
      ]);
      setUpdateText('');
    }, 1200);
  };

  const handleQuickBook = () => {
    if (availableSlots <= 0) return;
    setAvailableSlots(prev => prev - 1);
    setBookedSessions(prev => [
      "June 12, 2026 at 4:30 PM with Marcus Chen (Growth Mentor)",
      ...prev
    ]);
    setJustBooked(true);
    setTimeout(() => setJustBooked(false), 3000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      <SchoolNavbar />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Welcome Dashboard Header */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              Welcome back, {user.name}! 
              <Sparkles className="w-5 h-5 text-brand-500 animate-pulse" />
            </h1>
            <p className="text-slate-400 text-sm">
              Keep shipping, shipping is the key to startup validation.
            </p>
          </div>
          {/* Startup badge info */}
          <div className="flex flex-wrap items-center gap-3 bg-slate-50 border border-slate-100 p-3.5 rounded-2xl">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
              <Briefcase className="w-4 h-4 text-brand-500" />
              {user.startupName}
            </div>
            <span className="w-1.5 h-1.5 bg-slate-350 rounded-full" />
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
              <TrendingUp className="w-4 h-4 text-brand-500" />
              {user.stage}
            </div>
            <span className="w-1.5 h-1.5 bg-slate-350 rounded-full" />
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
              <Tag className="w-4 h-4 text-brand-500" />
              {user.sector}
            </div>
          </div>
        </div>

        {/* Overview Stats Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          {/* 1. Progress & Learning Card */}
          <div className="lg:col-span-4 bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-50 pb-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Learning Progress</span>
                <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded">
                  {learningProgress.modulesCompleted} / {learningProgress.totalModules} Completed
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-slate-400 font-semibold block">CURRENT MODULE</span>
                <h3 className="text-base font-bold text-slate-800 line-clamp-1">{learningProgress.currentModule.title}</h3>
                <span className="text-[11px] text-brand-500 font-semibold uppercase">{learningProgress.currentModule.category}</span>
              </div>
            </div>

            <div className="pt-6 space-y-4">
              {/* Progress Bar */}
              <div>
                <div className="flex justify-between text-xs text-slate-500 font-semibold mb-1">
                  <span>Course Progress</span>
                  <span>{learningProgress.percentCompleted}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-brand-500 transition-all duration-500" 
                    style={{ width: `${learningProgress.percentCompleted}%` }}
                  />
                </div>
              </div>
              <Link to={`/school/courses/${learningProgress.currentModule.slug}`} className="w-full block">
                <Button variant="primary" size="sm" className="w-full font-bold justify-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  Resume Learning
                </Button>
              </Link>
            </div>
          </div>

          {/* 2. Weekly Status Update */}
          <div className="lg:col-span-4 bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-50 pb-3 mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Weekly Updates</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                  weeklyStatus === 'Submitted'
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                    : 'bg-amber-50 text-amber-700 border-amber-100'
                }`}>
                  {weeklyStatus}
                </span>
              </div>

              {weeklyStatus === 'Pending' ? (
                <form onSubmit={handleUpdateSubmit} className="space-y-3">
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Submit your weekly status update to report progress. Deadline: <span className="font-bold text-slate-700">{weeklyUpdate.deadline}</span>.
                  </p>
                  <textarea
                    placeholder="E.g., Concluded 5 user discovery calls, finalized pricing hypothesis, and draft deck."
                    required
                    value={updateText}
                    onChange={(e) => setUpdateText(e.target.value)}
                    rows={2}
                    className="block w-full px-3 py-2 border border-slate-200 rounded-xl text-xs placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 resize-none"
                  />
                  {isSubmittingUpdate ? (
                    <div className="flex items-center justify-center gap-2 py-2 bg-slate-50 border border-slate-100 rounded-xl">
                      <div className="w-4 h-4 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
                      <span className="text-[11px] font-bold text-slate-400">Submitting update...</span>
                    </div>
                  ) : (
                    <Button type="submit" variant="secondary" size="sm" className="w-full font-bold gap-1.5 justify-center">
                      <Send className="w-3.5 h-3.5" />
                      Submit Weekly Update
                    </Button>
                  )}
                </form>
              ) : (
                <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 space-y-3 animate-fade-in">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Weekly Update Checked In</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Great job! You have submitted your update for this week. Keep executing.
                  </p>
                  <button 
                    onClick={() => setWeeklyStatus('Pending')} 
                    className="text-[11px] font-bold text-brand-600 underline"
                  >
                    Edit Update
                  </button>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-50 mt-4">
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">History Log</span>
              <div className="space-y-1.5">
                {submissions.slice(0, 2).map((sub, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-slate-600">{sub.week}</span>
                    <span className="text-slate-400">{sub.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Investor Readiness */}
          <div className="lg:col-span-4 bg-white border border-slate-100 rounded-3xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-50 pb-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Investor Readiness</span>
              <span className="text-xs font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded flex items-center gap-1">
                <Award className="w-3.5 h-3.5" />
                Score: {investorReadiness.overallScore}/100
              </span>
            </div>

            {/* Readiness List */}
            <div className="space-y-3 pt-1">
              {investorReadiness.categories.map((cat, i) => {
                const getStatusStyle = (status) => {
                  switch (status) {
                    case 'High':
                      return 'bg-emerald-50 text-emerald-700 border-emerald-100';
                    case 'Medium':
                      return 'bg-blue-50 text-blue-755 border-blue-100';
                    case 'Needs Work':
                      return 'bg-amber-50 text-amber-700 border-amber-100';
                    default:
                      return 'bg-slate-50 text-slate-600 border-slate-100';
                  }
                };

                return (
                  <div key={i} className="flex items-center justify-between p-2 rounded-xl bg-slate-50/50 border border-slate-100 text-xs">
                    <span className="font-semibold text-slate-700">{cat.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">{cat.score}%</span>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${getStatusStyle(cat.status)}`}>
                        {cat.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Dashboard Main Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Pending Milestones & Deliverables */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
              <div className="border-b border-slate-100 pb-4 mb-4">
                <h2 className="text-lg font-bold text-slate-900">Pending Deliverable Milestones</h2>
                <p className="text-xs text-slate-400 mt-0.5">Tasks due for current curriculum review</p>
              </div>

              <div className="space-y-4">
                {pendingAssignments.map((task) => (
                  <div 
                    key={task.id} 
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-2xl border border-slate-100 bg-slate-50/30 hover:border-slate-200 transition-colors gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                          {task.courseTitle}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                          Due {task.dueDate}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-800">{task.title}</h4>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <span className="text-xs font-semibold text-slate-400 italic">
                        {task.status}
                      </span>
                      <Link 
                        to={`/school/courses/${task.courseTitle === 'Go-To-Market Strategy' ? 'gtm-strategy' : 'financial-modelling-basics'}`}
                        className="w-full sm:w-auto block"
                      >
                        <Button variant="white" size="sm" className="w-full text-xs font-bold text-slate-700 hover:bg-white shadow-sm border-slate-200">
                          Complete Task
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Mentor Office Hours Booking & Recommended Links */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Book Mentor Card */}
            <Card className="bg-white border-slate-100">
              <CardBody className="p-6 space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2 text-brand-700">
                    <Calendar className="w-5 h-5" />
                    <h3 className="font-bold text-slate-900">Mentor Office Hours</h3>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    {availableSlots} Slots left
                  </span>
                </div>

                <div className="space-y-4">
                  {bookedSessions.map((session, i) => (
                    <div key={i} className="flex gap-3 items-start p-3 bg-brand-50/50 rounded-xl border border-brand-100/50">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5 animate-scale-in" />
                      <div>
                        <span className="text-xs font-bold text-brand-900 block">Next Confirmed Call</span>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed">{session}</p>
                      </div>
                    </div>
                  ))}

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                    <span className="font-bold text-slate-700 block mb-1">Mentor Feedback Tip:</span>
                    <p className="text-slate-500 italic">
                      "{mentorBooking.recentFeedback}"
                    </p>
                  </div>

                  {availableSlots > 0 ? (
                    <Button 
                      onClick={handleQuickBook}
                      variant="primary" 
                      size="sm" 
                      className="w-full font-bold py-2 justify-center gap-1.5"
                    >
                      Book 1:1 Review Call
                    </Button>
                  ) : (
                    <div className="text-center py-2 text-xs font-bold text-slate-400 bg-slate-50 border border-slate-100 rounded-xl border-dashed">
                      No more booking slots left this week
                    </div>
                  )}

                  {justBooked && (
                    <div className="bg-emerald-50 text-emerald-800 p-2.5 rounded-lg border border-emerald-100 text-xs font-medium text-center animate-fade-in">
                      Slot Booked successfully! Check your email details.
                    </div>
                  )}
                </div>
              </CardBody>
            </Card>

            {/* Resources List Card */}
            <Card className="bg-white border-slate-100">
              <CardBody className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-slate-700 border-b border-slate-100 pb-3">
                  <HelpCircle className="w-5 h-5 text-slate-400" />
                  <h3 className="font-bold text-slate-900">Recommended Resources</h3>
                </div>

                <div className="space-y-3">
                  {recommendedResources.map((res) => (
                    <a
                      key={res.id}
                      href={res.link}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-brand-100 hover:bg-brand-50/10 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white rounded-lg text-slate-400 group-hover:text-brand-600 transition-colors shadow-sm">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-slate-700 block group-hover:text-slate-900 transition-colors">
                            {res.title}
                          </span>
                          <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider block">
                            {res.type} &bull; {res.duration}
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardBody>
            </Card>

          </div>

        </div>
      </main>

      <SchoolFooter />
    </div>
  );
}
