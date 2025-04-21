
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RemindersSection from '@/components/sections/RemindersSection';
import ScrollReveal from '@/components/utils/ScrollReveal';
import BackButton from '@/components/layout/BackButton';

const Reminders = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="bg-tertiary-light min-h-screen animate-fade-in-slow relative">
      <BackButton />
      <Navbar />
      <main className="pt-24 pb-16">
        <ScrollReveal>
          <div className="container mx-auto px-4 md:px-6 text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Smart Medication Reminders
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Never miss a dose with personalized reminders and tracking.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal threshold={0.1} rootMargin="0px 0px -100px 0px">
          <RemindersSection />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
};
export default Reminders;
