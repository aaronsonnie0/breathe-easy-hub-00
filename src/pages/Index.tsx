
import React, { useEffect } from 'react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import DiarySection from '@/components/sections/DiarySection';
import TriggersSection from '@/components/sections/TriggersSection';
import ChatbotSection from '@/components/sections/ChatbotSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
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
          <TriggersSection />
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
