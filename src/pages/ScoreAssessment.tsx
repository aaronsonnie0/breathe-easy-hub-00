
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScoreSection from '@/components/sections/ScoreSection';

const ScoreAssessment = () => {
  // Ensure page starts at the top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-tertiary-light min-h-screen">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Asthma Score Assessment</h1>
          <p className="text-lg text-gray-600 mb-8">
            Regularly assess your asthma control level with our comprehensive scoring tool.
          </p>
        </div>
        
        <ScoreSection />
      </main>

      <Footer />
    </div>
  );
};

export default ScoreAssessment;
