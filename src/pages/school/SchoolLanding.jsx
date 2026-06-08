import React from 'react';
import PromoBanner from '../../components/school/PromoBanner';
import SchoolNavbar from '../../components/school/SchoolNavbar';
import SchoolHero from '../../components/school/SchoolHero';
import StatsStrip from '../../components/school/StatsStrip';
import HowItWorks from '../../components/school/HowItWorks';
import AudienceSection from '../../components/school/AudienceSection';
import CurriculumPreview from '../../components/school/CurriculumPreview';
import TestimonialSection from '../../components/school/TestimonialSection';
import MentorInvestorCTA from '../../components/school/MentorInvestorCTA';
import FinalCTA from '../../components/school/FinalCTA';
import DemoCallCTA from '../../components/school/DemoCallCTA';
import SchoolFooter from '../../components/school/SchoolFooter';

export default function SchoolLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Top Banner Announcement */}
      <PromoBanner />
      
      {/* Top sticky navbar */}
      <SchoolNavbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <SchoolHero />

        {/* Stats Strip */}
        <StatsStrip />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Who Is It For Section */}
        <AudienceSection />

        {/* Curriculum Preview Grid */}
        <CurriculumPreview />

        {/* Testimonials Section */}
        <TestimonialSection />

        {/* Mentor / Investor Connect CTA */}
        <MentorInvestorCTA />

        {/* Final CTA Section */}
        <FinalCTA />

        {/* Demo Call CTA */}
        <DemoCallCTA />
      </main>

      {/* Footer */}
      <SchoolFooter />
    </div>
  );
}
