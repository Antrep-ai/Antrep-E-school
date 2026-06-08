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
    <nav className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/school" className="flex items-center gap-2.5 group">
              <div className="bg-brand-500 text-white p-2 rounded-lg group-hover:bg-brand-400 transition-colors">
                <Rocket className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-lg sm:text-xl text-white tracking-tight group-hover:text-brand-400 transition-colors">
                ANTREP <span className="font-medium text-slate-400">School</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors duration-200 ${
                    isActive ? 'text-brand-400' : 'text-slate-400 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <span className="h-4 w-px bg-slate-700" />

            <Link to="/school/login">
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 font-semibold border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white focus:ring-offset-slate-950"
              >
                <User className="w-4 h-4" />
                Sign In
              </Button>
            </Link>
            <Link to="/school/signup">
              <Button
                variant="primary"
                size="sm"
                className="font-semibold bg-brand-500 hover:bg-brand-400 shadow-md shadow-brand-900/40 focus:ring-offset-slate-950"
              >
                Start Learning
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 pt-2 pb-6 space-y-4">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-900/50 text-brand-400'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="h-px bg-slate-800 my-4" />

          <div className="grid grid-cols-2 gap-3">
            <Link to="/school/login" onClick={() => setIsOpen(false)} className="w-full">
              <Button
                variant="outline"
                size="md"
                className="w-full justify-center border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white gap-1.5"
              >
                <User className="w-4 h-4" />
                Sign In
              </Button>
            </Link>
            <Link to="/school/signup" onClick={() => setIsOpen(false)} className="w-full">
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center bg-brand-500 hover:bg-brand-400"
              >
                Start Learning
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
