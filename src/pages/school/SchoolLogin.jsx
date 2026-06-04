import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ShieldCheck, KeyRound } from 'lucide-react';
import SchoolNavbar from '../../components/school/SchoolNavbar';
import SchoolFooter from '../../components/school/SchoolFooter';
import Button from '../../components/ui/Button';

export default function SchoolLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate login verification
    setTimeout(() => {
      setLoading(false);
      navigate('/school/dashboard');
    }, 1200);
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
              Welcome back
            </h2>
            <p className="text-sm text-slate-500">
              Sign in to your ANTREP School account to continue
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="p-3 bg-rose-50 border border-rose-100 rounded-xl text-xs text-rose-700 font-medium">
                {error}
              </div>
            )}

            <div className="space-y-4">
              {/* Email */}
              <div className="space-y-1.5">
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
                    placeholder="you@example.com"
                    className="block w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Password
                  </label>
                  <a href="#" className="text-xs font-semibold text-brand-600 hover:text-brand-700 underline">
                    Forgot?
                  </a>
                </div>
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
                    className="block w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            {loading ? (
              <div className="flex items-center justify-center gap-2 py-3 bg-brand-50 border border-brand-100 rounded-xl text-brand-700 text-sm font-bold shadow-sm">
                <div className="w-4 h-4 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
                <span>Verifying credentials...</span>
              </div>
            ) : (
              <Button type="submit" variant="primary" size="lg" className="w-full font-bold shadow-sm py-3 justify-center gap-1.5">
                <KeyRound className="w-4 h-4" />
                Sign In
              </Button>
            )}

            {/* Quick Demo Assist */}
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-[10px] text-slate-400 flex gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
              <span>
                <strong>Demo note:</strong> Submit any dummy credentials to gain immediate access to the dashboard.
              </span>
            </div>

            {/* Sign up toggle link */}
            <p className="text-center text-xs text-slate-500">
              Don't have an account?{' '}
              <Link to="/school/signup" className="font-bold text-brand-600 hover:text-brand-700 underline">
                Sign Up
              </Link>
            </p>
          </form>

        </div>
      </main>

      <SchoolFooter />
    </div>
  );
}
