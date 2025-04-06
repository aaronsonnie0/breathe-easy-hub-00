
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScoreSection from '@/components/sections/ScoreSection';
import ScrollReveal from '@/components/utils/ScrollReveal';

const ScoreAssessment = () => {
  // Ensure page starts at the top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-tertiary-light min-h-screen animate-fade-in-slow">
      <Navbar />
      <main className="pt-24 pb-16">
        <ScrollReveal>
          <ScoreSection />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
};

export default ScoreAssessment;
