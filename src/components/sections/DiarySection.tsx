
import React, { useState } from 'react';
import SymptomLogForm from '@/components/diary/SymptomLogForm';
import SymptomChart from '@/components/diary/SymptomChart';

export default function DiarySection() {
  const [showChart, setShowChart] = useState(false);
  const [timeframe, setTimeframe] = useState<'weekly' | 'monthly'>('weekly');

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
              <SymptomChart
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
