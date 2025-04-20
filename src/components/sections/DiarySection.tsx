
import React, { useState } from 'react';
import SymptomLogForm from '@/components/diary/SymptomLogForm';
import SymptomChart from '@/components/diary/SymptomChart';

export default function DiarySection() {
  const [showChart, setShowChart] = useState(false);
  const [timeframe, setTimeframe] = useState<'weekly' | 'monthly'>('weekly');
  
  // Sample data for demonstration
  const sampleLogs = [
    {
      date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
      nighttimeAwakenings: 2,
      inhalerUse: 3,
      stressLevel: 4,
      hoursOfSleep: 7,
      activityImpact: 3,
      peakFlow: 350,
      triggers: ['dust', 'pollen'],
      id: 'sample1',
      createdAt: new Date(),
    },
    {
      date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      nighttimeAwakenings: 1,
      inhalerUse: 2,
      stressLevel: 3,
      hoursOfSleep: 8,
      activityImpact: 2,
      peakFlow: 380,
      triggers: ['cold weather'],
      id: 'sample2',
      createdAt: new Date(),
    },
    {
      date: new Date(),
      nighttimeAwakenings: 0,
      inhalerUse: 1,
      stressLevel: 2,
      hoursOfSleep: 8,
      activityImpact: 1,
      peakFlow: 400,
      triggers: [],
      id: 'sample3',
      createdAt: new Date(),
    },
  ];

  const handleFormSuccess = () => {
    setShowChart(true);
  };

  return (
    <section id="diary" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Asthma Diary
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track your daily symptoms and monitor your asthma patterns over time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
          <div className="lg:sticky lg:top-24">
            <SymptomLogForm onSuccess={handleFormSuccess} simulateOnly={true} />
          </div>
          
          {showChart && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-sm text-muted-foreground text-center mb-4">
                Sample Symptom History Visualization
              </div>
              <SymptomChart
                data={sampleLogs}
                timeframe={timeframe}
                onTimeframeChange={setTimeframe}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
