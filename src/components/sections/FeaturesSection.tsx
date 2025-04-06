
import React from 'react';
import { Calendar, CloudCog, AlertTriangle, ChartLine, Stethoscope, Bell, MessageSquare } from 'lucide-react';

const features = [
  {
    id: 1,
    name: 'Asthma Diary',
    description: 'Log your daily symptoms, medication usage, and peak flow readings to track your asthma over time.',
    icon: Calendar,
    color: 'bg-blue-50 text-blue-600',
    link: '#diary',
  },
  {
    id: 2,
    name: 'Prediction & Triggers',
    description: 'Identify patterns and common triggers that may cause asthma flare-ups in your daily life.',
    icon: CloudCog,
    color: 'bg-purple-50 text-purple-600',
    link: '#triggers',
  },
  {
    id: 3,
    name: 'Emergency Access',
    description: 'Quick access to emergency contacts and nearby medical facilities when you need help fast.',
    icon: AlertTriangle,
    color: 'bg-red-50 text-red-600',
    link: '#emergency',
  },
  {
    id: 4,
    name: 'Score Assessment',
    description: 'Regular assessments to monitor your asthma control level and track improvements.',
    icon: ChartLine,
    color: 'bg-amber-50 text-amber-600',
    link: '#score',
  },
  {
    id: 5,
    name: 'Lung Visualization',
    description: 'Interactive visualizations to understand what happens in your lungs during asthma episodes.',
    icon: Stethoscope,
    color: 'bg-green-50 text-green-600',
    link: '#lungs',
  },
  {
    id: 6,
    name: 'Smart Reminders',
    description: 'Never miss a medication dose with customizable reminders for your treatment plan.',
    icon: Bell,
    color: 'bg-indigo-50 text-indigo-600',
    link: '#reminders',
  },
  {
    id: 7,
    name: 'Asthma Chatbot',
    description: 'Get answers to your questions about asthma management, treatments, and more.',
    icon: MessageSquare,
    color: 'bg-cyan-50 text-cyan-600',
    link: '#chatbot',
  },
];

const FeaturesSection = () => {
  const handleScrollToSection = (link: string) => {
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="features" className="py-16 md:py-24 bg-tertiary-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Features Designed for <span className="text-primary-dark">Better Breathing</span>
          </h2>
          <p className="text-lg text-gray-600">
            Our comprehensive tools help you manage every aspect of your asthma care journey, from daily tracking to emergency support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="feature-card group"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleScrollToSection(feature.link)}
              tabIndex={0}
              role="button"
              aria-label={`Go to ${feature.name} section`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleScrollToSection(feature.link);
                }
              }}
            >
              <div className={`rounded-lg w-12 h-12 flex items-center justify-center mb-4 ${feature.color}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-primary-dark transition-colors">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
