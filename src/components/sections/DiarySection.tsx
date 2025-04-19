
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-block bg-primary-light text-primary-dark px-4 py-2 rounded-full text-sm font-medium mb-6">
              Daily Tracking
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Log Your Symptoms
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Track your daily symptoms to better understand and manage your asthma.
            </p>
            <SymptomLogForm onSuccess={fetchLogs} />
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
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
