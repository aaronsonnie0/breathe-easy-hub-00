
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EmergencySection from '@/components/sections/EmergencySection';
import ScrollReveal from '@/components/utils/ScrollReveal';
import BackButton from '@/components/layout/BackButton';

const Emergency = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="bg-tertiary-light min-h-screen animate-fade-in-slow">
      <BackButton />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 animate-fade-in">
                Emergency Assistance
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Quick access to emergency contacts and guidance during asthma emergencies.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal threshold={0.1} rootMargin="0px 0px -100px 0px">
          <EmergencySection />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
};
export default Emergency;
