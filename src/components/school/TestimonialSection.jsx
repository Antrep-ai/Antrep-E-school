import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Before ANTREP School, I was writing a 40-page business plan that led nowhere. Their validation framework helped me run structured interviews, pivot our concept, and launch an MVP in under three weeks.",
    author: "Amit Sharma",
    role: "Founder, PeakSaaS",
    initials: "AS",
    stars: 5
  },
  {
    quote: "As a student entrepreneur, balancing courses and a startup seemed impossible. The self-paced layout and templates gave me exactly what I needed to build a pitch deck and present to active angels.",
    author: "Sneha Iyer",
    role: "Student Founder, AgriVeda",
    initials: "SI",
    stars: 5
  },
  {
    quote: "We spent months guessing how to project our hiring and burn rates. The financial modeling module made runway forecasting simple. We used the resulting sheet to close our pre-seed funding.",
    author: "Vikram Malhotra",
    role: "Co-founder, FlowCart",
    initials: "VM",
    stars: 5
  },
  {
    quote: "The investor outreach module alone was worth everything. I finally understood how to write warm intros, structure my deck, and get responses from VCs who were actually relevant to my sector.",
    author: "Priya Nair",
    role: "Founder, MediRoute",
    initials: "PN",
    stars: 5
  },
  {
    quote: "ANTREP gave us the language and framework to talk to enterprise customers confidently. We closed our first pilot within 6 weeks of completing the GTM module.",
    author: "Rohit Gupta",
    role: "Co-founder, StackOps",
    initials: "RG",
    stars: 5
  },
  {
    quote: "I was a non-technical founder terrified of MVPs. The product validation module broke it down into steps I could actually execute without writing a single line of code.",
    author: "Divya Menon",
    role: "Founder, StyleLoop",
    initials: "DM",
    stars: 5
  },
];

function TestimonialCard({ quote, author, role, initials, stars }) {
  return (
    <div className="flex-shrink-0 w-80 sm:w-96 bg-slate-800 border border-slate-700 rounded-2xl p-6 mx-3">
      <div className="flex gap-0.5 text-amber-400 mb-3">
        {[...Array(stars)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
        ))}
      </div>
      <p className="text-sm text-slate-300 leading-relaxed italic mb-5">
        "{quote}"
      </p>
      <div className="flex items-center gap-3 border-t border-slate-700 pt-4">
        <div className="w-9 h-9 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
          {initials}
        </div>
        <div>
          <h4 className="text-xs font-bold text-white">{author}</h4>
          <p className="text-[10px] text-slate-500 font-medium">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3, 6);

  return (
    <section className="bg-slate-900 py-16 lg:py-24 border-b border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-brand-400 bg-brand-900/50 px-3 py-1.5 rounded-full uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl mt-4">
            Loved by builders and founders
          </h2>
          <p className="mt-4 text-base text-slate-400">
            See how founders, students, and early teams are using ANTREP to validate concepts and close funding.
          </p>
        </div>
      </div>

      <div className="relative mb-4">
        <div className="flex animate-marquee-left">
          {[...row1, ...row1, ...row1].map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="flex animate-marquee-right">
          {[...row2, ...row2, ...row2].map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
