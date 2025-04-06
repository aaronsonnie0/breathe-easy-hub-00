
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { FileText, MessageSquare } from 'lucide-react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      
      const scrolled = window.scrollY;
      const parallaxBg = section.querySelector('.parallax-bg');
      
      if (parallaxBg) {
        const yPos = -(scrolled * 0.3);
        (parallaxBg as HTMLElement).style.transform = `translateY(${yPos}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="relative min-h-screen flex items-center parallax-container pt-20"
    >
      {/* Parallax Background */}
      <div 
        className="parallax-bg bg-gradient-to-b from-primary-light to-tertiary opacity-50"
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-slow">
            <span className="inline-block bg-primary-light text-primary-dark px-4 py-2 rounded-full text-sm font-medium mb-6">
              Breathe Better. Live Better.
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
              Managing Asthma <span className="text-primary-dark">Made Simple</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Your personal asthma management platform. Track symptoms, monitor triggers, and take control of your respiratory health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" className="cta-button-primary" size="lg">
                <FileText className="mr-2 h-5 w-5" />
                Log Symptoms
              </Button>
              <Button variant="outline" className="border-primary-dark text-primary-dark hover:bg-primary-light" size="lg">
                <MessageSquare className="mr-2 h-5 w-5" />
                Chat with Asthma Bot
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden"
                  >
                    <span className="text-xs font-medium text-gray-600">{i}</span>
                  </div>
                ))}
              </div>
              <p className="ml-4 text-sm text-gray-600">
                <span className="font-medium text-gray-800">2,000+</span> active users
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-primary rounded-full opacity-10 blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1584650589355-e891babc1d85?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" 
                alt="Person using inhaler" 
                className="rounded-3xl shadow-lg relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-gray-800">Breathing Improved</span>
                </div>
                <div className="mt-1 flex items-center">
                  <span className="text-2xl font-bold text-green-500">+82%</span>
                  <span className="ml-1 text-sm text-gray-500">this month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
