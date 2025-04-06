
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RemindersSection from '@/components/sections/RemindersSection';

const Reminders = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <RemindersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Reminders;
