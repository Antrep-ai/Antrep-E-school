import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Shield, Globe, Award, Heart } from 'lucide-react';

export default function SchoolFooter() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    program: [
      { name: 'Curriculum Preview', path: '/school/courses' },
      { name: 'Founder Dashboard', path: '/school/dashboard' },
      { name: 'FAQ', path: '#' }
    ],
    resources: [
      { name: 'Startup Library', path: '#' },
      { name: 'Investor Directory', path: '#' },
      { name: 'Co-founder Matching', path: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
      { name: 'Code of Conduct', path: '#' }
    ]
  };

  return (
    <footer className="bg-white border-t border-slate-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo and Info */}
          <div className="space-y-4 col-span-1 md:col-span-1">
            <Link to="/school" className="flex items-center gap-2 group">
              <div className="bg-brand-600 text-white p-1.5 rounded-lg">
                <Rocket className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg text-slate-900 tracking-tight">
                ANTREP <span className="text-slate-500 font-normal">School</span>
              </span>
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed">
              A practical entrepreneurship school designed for founders to validate, build, launch, and prepare for fundraising with zero fluff.
            </p>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Program</h4>
            <ul className="space-y-2.5">
              {footerLinks.program.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-sm text-slate-600 hover:text-brand-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link, idx) => (
                <li key={idx}>
                  <a href={link.path} className="text-sm text-slate-600 hover:text-brand-600 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link, idx) => (
                <li key={idx}>
                  <a href={link.path} className="text-sm text-slate-600 hover:text-brand-600 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px bg-slate-100 my-8 md:my-10" />

        {/* Bottom footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            &copy; {currentYear} ANTREP. All rights reserved. Not affiliated with Y Combinator or Startup School.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Built for modern founders with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>globally</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
