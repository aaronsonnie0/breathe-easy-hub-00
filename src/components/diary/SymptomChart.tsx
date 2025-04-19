
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { SymptomLog } from '@/types/diary';

interface Props {
  data: SymptomLog[];
  timeframe: 'weekly' | 'monthly';
  onTimeframeChange: (timeframe: 'weekly' | 'monthly') => void;
}

export default function SymptomChart({ data, timeframe, onTimeframeChange }: Props) {
  const chartData = data.map(log => ({
    date: format(new Date(log.date), 'MM/dd'),
    'Night Awakenings': log.nighttimeAwakenings,
    'Inhaler Use': log.inhalerUse,
    'Stress Level': log.stressLevel,
    'Sleep Hours': log.hoursOfSleep,
    'Activity Impact': log.activityImpact,
    'Peak Flow': log.peakFlow,
  }));

  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Symptom History</h3>
        <div className="flex gap-2">
          <Button
            variant={timeframe === 'weekly' ? 'default' : 'outline'}
            onClick={() => onTimeframeChange('weekly')}
          >
            Weekly
          </Button>
          <Button
            variant={timeframe === 'monthly' ? 'default' : 'outline'}
            onClick={() => onTimeframeChange('monthly')}
          >
            Monthly
          </Button>
        </div>
      </div>

      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Night Awakenings" stroke="#8884d8" />
            <Line type="monotone" dataKey="Inhaler Use" stroke="#82ca9d" />
            <Line type="monotone" dataKey="Stress Level" stroke="#ffc658" />
            <Line type="monotone" dataKey="Sleep Hours" stroke="#ff7300" />
            <Line type="monotone" dataKey="Activity Impact" stroke="#0088fe" />
            <Line type="monotone" dataKey="Peak Flow" stroke="#00C49F" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
