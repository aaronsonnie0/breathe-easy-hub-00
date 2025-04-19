
import React, { useState, useEffect } from 'react';
import SymptomLogForm from '@/components/diary/SymptomLogForm';
import SymptomChart from '@/components/diary/SymptomChart';
import { getSymptomLogs } from '@/lib/diary';
import { SymptomLog } from '@/types/diary';
import { useToast } from '@/hooks/use-toast';

export default function DiarySection() {
  const [timeframe, setTimeframe] = useState<'weekly' | 'monthly'>('weekly');
  const [logs, setLogs] = useState<SymptomLog[]>([]);
  const { toast } = useToast();

  const fetchLogs = async () => {
    try {
      const data = await getSymptomLogs(timeframe);
      setLogs(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch symptom logs",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchLogs();
  }, [timeframe]);

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
            <SymptomLogForm onSuccess={fetchLogs} />
          </div>
          
          <div className="space-y-6">
            <SymptomChart
              data={logs}
              timeframe={timeframe}
              onTimeframeChange={setTimeframe}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
