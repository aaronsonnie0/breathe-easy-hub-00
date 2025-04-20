import React, { useState, useCallback } from 'react';
import SymptomLogForm from '@/components/diary/SymptomLogForm';
import SymptomChart from '@/components/diary/SymptomChart';
import { useAuth } from '@/hooks/use-auth';
import { Skeleton } from '@/components/ui/skeleton';

export default function DiarySection() {
  const [timeframe, setTimeframe] = useState<'weekly' | 'monthly'>('weekly');
  const [refreshKey, setRefreshKey] = useState(0);
  const { user, loading } = useAuth();

  const handleFormSuccess = useCallback(() => {
    // Increment refreshKey to trigger chart refresh
    setRefreshKey(prev => prev + 1);
  }, []);

  if (loading) {
    return (
      <section id="diary" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
            <Skeleton className="h-[600px] w-full" />
            <Skeleton className="h-[600px] w-full" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="diary" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Asthma Diary
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {user 
              ? "Track your daily symptoms and monitor your asthma patterns over time."
              : "Please sign in to track your symptoms and view your history."}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
          <div className="lg:sticky lg:top-24">
            <SymptomLogForm 
              onSuccess={handleFormSuccess} 
              simulateOnly={!user}
            />
          </div>
          
          <div className="lg:sticky lg:top-24">
            <SymptomChart
              key={refreshKey}
              timeframe={timeframe}
              onTimeframeChange={setTimeframe}
              simulateOnly={!user}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
