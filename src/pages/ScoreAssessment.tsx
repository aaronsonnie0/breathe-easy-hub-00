
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScoreSection from '@/components/sections/ScoreSection';

const ScoreAssessment = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <ScoreSection />
      </main>
      <Footer />
    </div>
  );
};

export default ScoreAssessment;
