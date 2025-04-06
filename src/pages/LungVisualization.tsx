
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LungSection from '@/components/sections/LungSection';

const LungVisualization = () => {
  // Ensure page starts at the top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-tertiary-light min-h-screen">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Lung Visualization</h1>
          <p className="text-lg text-gray-600 mb-8">
            Interactive 3D visualization to help you understand what happens in your lungs during asthma episodes.
          </p>
        </div>
        
        <LungSection />
      </main>

      <Footer />
    </div>
  );
};

export default LungVisualization;
