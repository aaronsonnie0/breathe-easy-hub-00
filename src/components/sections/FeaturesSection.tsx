
import React from 'react';
import { Calendar, CloudCog, AlertTriangle, ChartLine, Stethoscope, Bell, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    name: 'Asthma Diary',
    description: 'Log your daily symptoms, medication usage, and peak flow readings to track your asthma over time.',
    icon: Calendar,
    color: 'bg-blue-50 text-blue-600',
    href: '#diary',
    gradient: 'from-blue-50 to-blue-100',
  },
  {
    id: 2,
    name: 'Prediction & Triggers',
    description: 'Identify patterns and common triggers that may cause asthma flare-ups in your daily life.',
    icon: CloudCog,
    color: 'bg-purple-50 text-purple-600',
    href: '#triggers',
    gradient: 'from-purple-50 to-purple-100',
  },
  {
    id: 3,
    name: 'Emergency Access',
    description: 'Quick access to emergency contacts and nearby medical facilities when you need help fast.',
    icon: AlertTriangle,
    color: 'bg-red-50 text-red-600',
    href: '#emergency',
    gradient: 'from-red-50 to-red-100',
  },
  {
    id: 4,
    name: 'Score Assessment',
    description: 'Regular assessments to monitor your asthma control level and track improvements.',
    icon: ChartLine,
    color: 'bg-amber-50 text-amber-600',
    href: '#score',
    gradient: 'from-amber-50 to-amber-100',
  },
  {
    id: 5,
    name: 'Lung Visualization',
    description: 'Interactive visualizations to understand what happens in your lungs during asthma episodes.',
    icon: Stethoscope,
    color: 'bg-green-50 text-green-600',
    href: '#lungs',
    gradient: 'from-green-50 to-green-100',
  },
  {
    id: 6,
    name: 'Smart Reminders',
    description: 'Never miss a medication dose with customizable reminders for your treatment plan.',
    icon: Bell,
    color: 'bg-indigo-50 text-indigo-600',
    href: '#reminders',
    gradient: 'from-indigo-50 to-indigo-100',
  },
  {
    id: 7,
    name: 'Asthma Chatbot',
    description: 'Get answers to your questions about asthma management, treatments, and more.',
    icon: MessageSquare,
    color: 'bg-cyan-50 text-cyan-600',
    href: '#chatbot',
    gradient: 'from-cyan-50 to-cyan-100',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const FeaturesSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-br from-tertiary-light to-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Features Designed for <span className="text-primary-dark">Better Breathing</span>
          </h2>
          <p className="text-lg text-gray-600">
            Our comprehensive tools help you manage every aspect of your asthma care journey, from daily tracking to emergency support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true, margin: "-50px" }}
              className={`feature-card rounded-xl overflow-hidden cursor-pointer group bg-white hover:shadow-xl transition-all duration-300 border border-gray-100`}
              onClick={() => scrollToSection(feature.href)}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
              }}
            >
              <div className={`p-6 bg-gradient-to-br ${feature.gradient} group-hover:bg-gradient-to-r`}>
                <div className={`rounded-full w-12 h-12 flex items-center justify-center mb-4 ${feature.color} transform group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-primary-dark transition-colors duration-300">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
