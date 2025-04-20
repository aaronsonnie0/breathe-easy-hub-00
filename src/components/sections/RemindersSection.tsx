import React, { useState } from 'react';
import { Bell, Calendar, Check, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReminderForm from '../reminders/ReminderForm';
import ReminderAlert from '../reminders/ReminderAlert';

const steps = [
  {
    id: 1,
    title: 'Set Up Your Medication Schedule',
    description: 'Enter your prescribed medications, dosages, and when they should be taken.',
    icon: <Clock className="h-8 w-8 text-primary-dark" />,
  },
  {
    id: 2,
    title: 'Choose Your Reminder Method',
    description: 'Select how you want to be notified: push notifications, email, or SMS.',
    icon: <Bell className="h-8 w-8 text-primary-dark" />,
  },
  {
    id: 3,
    title: 'Sync with Your Calendar',
    description: 'Connect with Google Calendar, Apple Calendar, or other apps you use.',
    icon: <Calendar className="h-8 w-8 text-primary-dark" />,
  },
  {
    id: 4,
    title: 'Track Your Adherence',
    description: 'Mark reminders as completed to track how well you\'re following your plan.',
    icon: <Check className="h-8 w-8 text-primary-dark" />,
  },
];

const integrations = [
  {
    name: 'Google Calendar',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg',
    action: 'Connect',
    color: 'bg-blue-500',
  },
  {
    name: 'Apple Calendar',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/ICloud_logo.svg',
    action: 'Connect',
    color: 'bg-gray-500',
  },
  {
    name: 'Microsoft Outlook',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg',
    action: 'Connect',
    color: 'bg-blue-700',
  },
  {
    name: 'Notion',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    action: 'Connect',
    color: 'bg-black',
  },
];

interface ReminderData {
  description: string;
  date: string;
  time: string;
}

const RemindersSection = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [currentReminder, setCurrentReminder] = useState<ReminderData | null>(null);

  const handleSubmitReminder = (data: ReminderData) => {
    setCurrentReminder(data);
    setShowAlert(true);
  };

  const handleDismissAlert = () => {
    setShowAlert(false);
  };

  return (
    <section id="reminders" className="py-16 md:py-24 bg-tertiary-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Smart Reminders
          </h2>
          <p className="text-lg text-gray-600">
            Never miss a dose with our intelligent reminder system tailored to your treatment plan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step) => (
            <div key={step.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-light mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {step.id}. {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Set Up Your Reminder
              </h3>
              <ReminderForm onSubmit={handleSubmitReminder} />
            </div>
            
            <div className="md:w-1/2 bg-gray-50 p-6 md:p-8">
              <h4 className="font-semibold text-lg mb-4 text-gray-800">
                Connect With Your Favorite Apps
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {integrations.map((app) => (
                  <div 
                    key={app.name}
                    className="bg-white rounded-lg p-4 border border-gray-200 flex flex-col items-center hover:shadow-md transition-shadow"
                  >
                    <div className={`w-12 h-12 rounded-full ${app.color} p-2 mb-2`}>
                      <img 
                        src={app.logo} 
                        alt={`${app.name} logo`} 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-800">{app.name}</span>
                    <button className="mt-2 text-xs text-primary-dark hover:underline">
                      {app.action}
                    </button>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-gray-500 text-center">
                Connect your calendar to automatically add medication reminders
              </p>
            </div>
          </div>
        </div>

        <ReminderAlert
          isOpen={showAlert}
          onDismiss={handleDismissAlert}
          reminder={currentReminder}
        />
      </div>
    </section>
  );
};

export default RemindersSection;
