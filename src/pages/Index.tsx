
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
import { ArrowUp } from 'lucide-react';

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

  // Back to top button visibility control
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowBackToTop(scrollTop > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const sections = document.querySelectorAll('section > div');
    sections.forEach((section) => {
      observer.observe(section);
    });
    
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card) => {
      observer.observe(card);
    });
    
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      featureCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
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
      
      {/* Back to top button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Index;
