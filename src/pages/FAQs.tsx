
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackButton from '@/components/layout/BackButton';
import { MessageSquare } from 'lucide-react';

const FAQs = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-tertiary-light">
      <BackButton />
      <Navbar />
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <MessageSquare className="w-8 h-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Frequently Asked Questions</h1>
          </div>
          
          <div className="space-y-8">
            <div className="border-b pb-6">
              <h3 className="text-xl font-semibold mb-2">What is BreatheEasy?</h3>
              <p className="text-gray-600">BreatheEasy is a comprehensive asthma management platform designed to help you track symptoms, manage medications, and improve your respiratory health.</p>
            </div>

            <div className="border-b pb-6">
              <h3 className="text-xl font-semibold mb-2">How do I track my symptoms?</h3>
              <p className="text-gray-600">Use our Asthma Diary feature to log your daily symptoms, triggers, and medication usage. The app will help you identify patterns and track your progress over time.</p>
            </div>

            <div className="border-b pb-6">
              <h3 className="text-xl font-semibold mb-2">What should I do in an emergency?</h3>
              <p className="text-gray-600">If you're experiencing severe symptoms, use our Emergency Access feature for quick access to your action plan and emergency contacts. Always call emergency services if you're in distress.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;
