
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScoreSection from '@/components/sections/ScoreSection';
import ScrollReveal from '@/components/utils/ScrollReveal';
import BackButton from '@/components/layout/BackButton';

const ScoreAssessment = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="bg-tertiary-light min-h-screen animate-fade-in-slow">
      <BackButton />
      <Navbar />
      <main className="pt-24 pb-16">
        <ScrollReveal>
          <div className="container mx-auto px-4 md:px-6 text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Asthma Score Assessment
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Track your asthma symptoms and get personalized recommendations.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal threshold={0.1} rootMargin="0px 0px -100px 0px">
          <ScoreSection />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
};
export default ScoreAssessment;
