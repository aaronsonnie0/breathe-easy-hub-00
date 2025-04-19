
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
import { SymptomLog } from '@/types/diary';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

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

  const chartColors = {
    'Night Awakenings': '#8884d8',
    'Inhaler Use': '#82ca9d',
    'Stress Level': '#ffc658',
    'Sleep Hours': '#ff7300',
    'Activity Impact': '#0088fe',
    'Peak Flow': '#00C49F',
  };

  return (
    <Card className="w-full mt-8 animate-fade-in">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-2xl font-bold">Symptom History</CardTitle>
        <ToggleGroup
          type="single"
          value={timeframe}
          onValueChange={(value) => value && onTimeframeChange(value as 'weekly' | 'monthly')}
          className="justify-start"
        >
          <ToggleGroupItem value="weekly" aria-label="Weekly view">
            Weekly
          </ToggleGroupItem>
          <ToggleGroupItem value="monthly" aria-label="Monthly view">
            Monthly
          </ToggleGroupItem>
        </ToggleGroup>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="date"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #f0f0f0",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
              />
              <Legend />
              {Object.keys(chartColors).map((key) => (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stroke={chartColors[key as keyof typeof chartColors]}
                  dot={false}
                  activeDot={{ r: 4 }}
                  strokeWidth={2}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
