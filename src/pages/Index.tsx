
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import DiarySection from '@/components/sections/DiarySection';
import ScoreSection from '@/components/sections/ScoreSection';
import LungSection from '@/components/sections/LungSection';
import TriggersSection from '@/components/sections/TriggersSection';
import RemindersSection from '@/components/sections/RemindersSection';
import EmergencySection from '@/components/sections/EmergencySection';
import ChatbotSection from '@/components/sections/ChatbotSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Smooth scroll to hash on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  // Back to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      
      <main className="overflow-hidden">
        <HeroSection />
        <FeaturesSection />
        <DiarySection />
        <ScoreSection />
        <LungSection />
        <TriggersSection />
        <RemindersSection />
        <EmergencySection />
        <ChatbotSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      
      <Footer />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed bottom-8 right-8 bg-primary-dark text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none z-50 transition-all duration-300"
            onClick={scrollToTop}
            aria-label="Back to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
