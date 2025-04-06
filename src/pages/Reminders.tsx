
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RemindersSection from '@/components/sections/RemindersSection';
import ScrollReveal from '@/components/utils/ScrollReveal';

const Reminders = () => {
  // Ensure page starts at the top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-tertiary-light min-h-screen animate-fade-in-slow">
      <Navbar />
      <main className="pt-24 pb-16">
        <ScrollReveal>
          <RemindersSection />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
};

export default Reminders;
