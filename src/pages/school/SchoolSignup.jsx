import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Briefcase, Mail, Lock, ShieldCheck, Sparkles } from 'lucide-react';
import SchoolNavbar from '../../components/school/SchoolNavbar';
import SchoolFooter from '../../components/school/SchoolFooter';
import Button from '../../components/ui/Button';

export default function SchoolSignup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [startupName, setStartupName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate signup completion
    setTimeout(() => {
      setLoading(false);
      navigate('/school/dashboard');
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      <SchoolNavbar />
      
      <main className="flex-grow flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 border border-slate-100 rounded-3xl shadow-sm relative overflow-hidden">
          
          {/* Top accent glow */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-400 to-brand-600" />

          {/* Heading */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Start learning free
            </h2>
            <p className="text-sm text-slate-500">
              Join ANTREP School of Entrepreneurship today
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            
            <div className="space-y-3.5">
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Full Name
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="block w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  />
                </div>
              </div>

              {/* Startup Name */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Startup Project Name
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Briefcase className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    required
                    value={startupName}
                    onChange={(e) => setStartupName(e.target.value)}
                    placeholder="E.g., OmniFlow"
                    className="block w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="block w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Choose Password
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </span>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="block w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            {loading ? (
              <div className="flex items-center justify-center gap-2 py-3 bg-brand-50 border border-brand-100 rounded-xl text-brand-700 text-sm font-bold shadow-sm">
                <div className="w-4 h-4 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
                <span>Creating founder profile...</span>
              </div>
            ) : (
              <Button type="submit" variant="primary" size="lg" className="w-full font-bold shadow-sm py-3 justify-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                Create Account
              </Button>
            )}

            {/* Quick Demo Assist */}
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-[10px] text-slate-400 flex gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
              <span>
                <strong>Note:</strong> Enrollment is 100% free. Accounts are simulated for demonstration purposes.
              </span>
            </div>

            {/* Sign in toggle link */}
            <p className="text-center text-xs text-slate-500">
              Already have an account?{' '}
              <Link to="/school/login" className="font-bold text-brand-600 hover:text-brand-700 underline">
                Sign In
              </Link>
            </p>
          </form>

        </div>
      </main>

      <SchoolFooter />
    </div>
  );
}
