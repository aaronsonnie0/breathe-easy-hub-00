
import React, { useEffect } from 'react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import DiarySection from '@/components/sections/DiarySection';
import ScoreSection from '@/components/sections/ScoreSection';
import EmergencySection from '@/components/sections/EmergencySection';
import LungSection from '@/components/sections/LungSection';
import RemindersSection from '@/components/sections/RemindersSection';
import ChatbotSection from '@/components/sections/ChatbotSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import TriggersSection from '@/components/sections/TriggersSection';
import ScrollReveal from '@/components/utils/ScrollReveal';

const Index = () => {
  // Ensure page starts at the top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-tertiary-light min-h-screen">
      <Navbar />

      <main>
        <HeroSection />
        
        <ScrollReveal>
          <FeaturesSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <DiarySection />
        </ScrollReveal>
        
        <ScrollReveal>
          <ScoreSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <TriggersSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <EmergencySection />
        </ScrollReveal>
        
        <ScrollReveal>
          <LungSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <RemindersSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <ChatbotSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <TestimonialsSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <NewsletterSection />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
