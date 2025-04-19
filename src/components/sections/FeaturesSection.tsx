import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, CloudCog, AlertTriangle, ChartLine, Bell, MessageSquare } from 'lucide-react';
import ScrollReveal from '@/components/utils/ScrollReveal';

const features = [
  {
    id: 1,
    name: 'Asthma Diary',
    description: 'Log your daily symptoms, medication usage, and peak flow readings to track your asthma over time.',
    icon: Calendar,
    color: 'bg-gray-50 text-gray-700',
    link: '#diary',
    isPage: false,
  },
  {
    id: 2,
    name: 'Prediction & Triggers',
    description: 'Identify patterns and common triggers that may cause asthma flare-ups in your daily life.',
    icon: CloudCog,
    color: 'bg-gray-50 text-gray-700',
    link: '#triggers',
    isPage: false,
  },
  {
    id: 3,
    name: 'Emergency Access',
    description: 'Quick access to emergency contacts and nearby medical facilities when you need help fast.',
    icon: AlertTriangle,
    color: 'bg-gray-50 text-gray-700',
    link: '/emergency',
    isPage: true,
  },
  {
    id: 4,
    name: 'Score Assessment',
    description: 'Regular assessments to monitor your asthma control level and track improvements.',
    icon: ChartLine,
    color: 'bg-gray-50 text-gray-700',
    link: '/score',
    isPage: true,
  },
  {
    id: 5,
    name: 'Smart Reminders',
    description: 'Never miss a medication dose with customizable reminders for your treatment plan.',
    icon: Bell,
    color: 'bg-gray-50 text-gray-700',
    link: '/reminders',
    isPage: true,
  },
  {
    id: 6,
    name: 'Asthma Chatbot',
    description: 'Get answers to your questions about asthma management, treatments, and more.',
    icon: MessageSquare,
    color: 'bg-gray-50 text-gray-700',
    link: '#chatbot',
    isPage: false,
  },
];

const FeaturesSection = () => {
  const navigate = useNavigate();

  const handleNavigation = (link: string, isPage: boolean) => {
    if (isPage) {
      navigate(link);
    } else {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal className="mb-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Features Designed for <span className="text-primary">Better Breathing</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive tools help you manage every aspect of your asthma care journey, from daily tracking to emergency support.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerChildren={true}>
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="feature-card group hover:border-primary/20"
              onClick={() => handleNavigation(feature.link, feature.isPage)}
              tabIndex={0}
              role="button"
              aria-label={`Go to ${feature.name} section`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleNavigation(feature.link, feature.isPage);
                }
              }}
            >
              <div className={`rounded-lg w-12 h-12 flex items-center justify-center mb-4 ${feature.color}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-primary transition-colors">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturesSection;
