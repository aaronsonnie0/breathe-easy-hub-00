
import React from 'react';
import { Button } from "@/components/ui/button";
import { FileText, MessageSquare } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center"
    >
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <span className="inline-block bg-secondary/40 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            Breathe Better. Live Better.
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
            Managing Asthma <span className="text-primary">Made Simple</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto">
            Your personal asthma management platform. Track symptoms, monitor triggers, and take control of your respiratory health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" className="cta-button-primary" size="lg">
              <FileText className="mr-2 h-5 w-5" />
              Log Symptoms
            </Button>
            <Button variant="outline" className="border-gray-300 text-primary hover:bg-gray-100" size="lg">
              <MessageSquare className="mr-2 h-5 w-5" />
              Chat with Asthma Bot
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center">
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
      </div>
    </section>
  );
};

export default HeroSection;
