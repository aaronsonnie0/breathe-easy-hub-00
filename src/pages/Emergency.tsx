
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EmergencySection from '@/components/sections/EmergencySection';
import ScrollReveal from '@/components/utils/ScrollReveal';

const Emergency = () => {
  // Ensure page starts at the top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-tertiary-light min-h-screen animate-fade-in-slow">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center animate-fade-in">
              Emergency Assistance
            </h1>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              Quick access to emergency contacts and guidance during asthma emergencies.
            </p>
          </ScrollReveal>
        </div>
        
        <ScrollReveal>
          <EmergencySection />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
};

export default Emergency;
