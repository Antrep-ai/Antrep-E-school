import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import logo from '../../assets/logo.svg';

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
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">

          <div className="space-y-4 col-span-1">
            <Link to="/school" className="flex items-center gap-2 group">
              <div className="w-7 h-7 rounded-lg overflow-hidden flex-shrink-0">
                <img src={logo} alt="ANTREP Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight group-hover:text-brand-400 transition-colors">
                ANTREP <span className="text-slate-500 font-normal">School</span>
              </span>
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed">
              A practical entrepreneurship school designed for founders to validate, build, launch, and prepare for fundraising with zero fluff.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Program</h4>
            <ul className="space-y-2.5">
              {footerLinks.program.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-sm text-slate-400 hover:text-brand-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link, idx) => (
                <li key={idx}>
                  <a href={link.path} className="text-sm text-slate-400 hover:text-brand-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link, idx) => (
                <li key={idx}>
                  <a href={link.path} className="text-sm text-slate-400 hover:text-brand-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px bg-slate-800 my-8 md:my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            &copy; {currentYear} ANTREP. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <span>Built for modern founders with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>globally</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
