import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Rocket, User } from 'lucide-react';
import Button from '../ui/Button';

export default function SchoolNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Curriculum', path: '/school/courses' },
    { name: 'Dashboard', path: '/school/dashboard' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/school" className="flex items-center gap-2.5 group">
              <div className="bg-brand-600 text-white p-2 rounded-lg group-hover:bg-brand-700 transition-colors">
                <Rocket className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors">
                ANTREP <span className="font-medium text-slate-500">School</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'text-brand-600'
                      : 'text-slate-600 hover:text-slate-900'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            <span className="h-4 w-px bg-slate-200" />

            <Link to="/school/login">
              <Button variant="white" size="sm" className="gap-1.5 font-semibold text-slate-700">
                <User className="w-4 h-4 text-slate-400" />
                Sign In
              </Button>
            </Link>
            <Link to="/school/signup">
              <Button variant="primary" size="sm" className="font-semibold shadow-sm hover:shadow-brand-100">
                Start Learning
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-50 focus:outline-none transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-2 pb-6 space-y-4 shadow-inner">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          
          <div className="h-px bg-slate-100 my-4" />

          <div className="grid grid-cols-2 gap-3">
            <Link to="/school/login" onClick={() => setIsOpen(false)} className="w-full">
              <Button variant="white" size="md" className="w-full justify-center text-slate-700 font-semibold gap-1.5">
                <User className="w-4 h-4 text-slate-400" />
                Sign In
              </Button>
            </Link>
            <Link to="/school/signup" onClick={() => setIsOpen(false)} className="w-full">
              <Button variant="primary" size="md" className="w-full justify-center font-semibold">
                Start Learning
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
