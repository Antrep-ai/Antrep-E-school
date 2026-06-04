import React from 'react';
import { Quote, Star } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';

export default function TestimonialSection() {
  const testimonials = [
    {
      quote: "Before ANTREP School, I was writing a 40-page business plan that led nowhere. Their validation framework helped me run structured interviews, pivot our concept, and launch an MVP in under three weeks.",
      author: "Amit Sharma",
      role: "Founder, PeakSaaS",
      avatarInitials: "AS",
      stars: 5
    },
    {
      quote: "As a student entrepreneur, balancing courses and a startup seemed impossible. The self-paced layout and templates gave me exactly what I needed to build a pitch deck and present to active angels.",
      author: "Sneha Iyer",
      role: "Student Founder, AgriVeda",
      avatarInitials: "SI",
      stars: 5
    },
    {
      quote: "We spent months guessing how to project our hiring and burn rates. The financial modeling module made runway forecasting simple. We used the resulting sheet to close our pre-seed funding.",
      author: "Vikram Malhotra",
      role: "Co-founder, FlowCart",
      avatarInitials: "VM",
      stars: 5
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-600 bg-brand-50 px-3 py-1.5 rounded-full uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl mt-4">
            Loved by builders and founders
          </h2>
          <p className="mt-4 text-base text-slate-500">
            See how founders, students, and early teams are using ANTREP to validate concepts and close funding.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <Card key={idx} className="bg-slate-50/50 border border-slate-100" hover>
              <CardBody className="pt-6 flex flex-col h-full justify-between">
                <div>
                  {/* Stars */}
                  <div className="flex gap-0.5 text-amber-400 mb-4">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-brand-100 -z-10" />
                    <p className="text-sm text-slate-600 leading-relaxed italic relative z-10 pl-2">
                      "{t.quote}"
                    </p>
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                    {t.avatarInitials}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{t.author}</h4>
                    <p className="text-[10px] text-slate-400 font-medium">{t.role}</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
