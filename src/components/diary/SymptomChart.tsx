import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const weeklyData = [
  {
    day: 'Mon',
    'Nighttime Awakenings': 3,
    'Inhaler Use': 4,
    'Stress Level': 7,
    'Sleep Hours': 5,
    'Peak Flow': 320,
  },
  {
    day: 'Tue',
    'Nighttime Awakenings': 1,
    'Inhaler Use': 2,
    'Stress Level': 4,
    'Sleep Hours': 7,
    'Peak Flow': 380,
  },
  {
    day: 'Wed',
    'Nighttime Awakenings': 4,
    'Inhaler Use': 5,
    'Stress Level': 8,
    'Sleep Hours': 4,
    'Peak Flow': 290,
  },
  {
    day: 'Thu',
    'Nighttime Awakenings': 2,
    'Inhaler Use': 3,
    'Stress Level': 5,
    'Sleep Hours': 6,
    'Peak Flow': 350,
  },
  {
    day: 'Fri',
    'Nighttime Awakenings': 0,
    'Inhaler Use': 1,
    'Stress Level': 3,
    'Sleep Hours': 8,
    'Peak Flow': 410,
  },
  {
    day: 'Sat',
    'Nighttime Awakenings': 1,
    'Inhaler Use': 2,
    'Stress Level': 4,
    'Sleep Hours': 7,
    'Peak Flow': 385,
  },
  {
    day: 'Sun',
    'Nighttime Awakenings': 2,
    'Inhaler Use': 3,
    'Stress Level': 6,
    'Sleep Hours': 6,
    'Peak Flow': 340,
  },
];

const monthlyData = [
  {
    week: 'Week 1',
    'Nighttime Awakenings': 2.5,
    'Inhaler Use': 3.8,
    'Stress Level': 6.5,
    'Sleep Hours': 5.8,
    'Peak Flow': 330,
  },
  {
    week: 'Week 2',
    'Nighttime Awakenings': 1.8,
    'Inhaler Use': 2.5,
    'Stress Level': 4.2,
    'Sleep Hours': 6.9,
    'Peak Flow': 365,
  },
  {
    week: 'Week 3',
    'Nighttime Awakenings': 1.2,
    'Inhaler Use': 2.0,
    'Stress Level': 3.8,
    'Sleep Hours': 7.4,
    'Peak Flow': 395,
  },
  {
    week: 'Week 4',
    'Nighttime Awakenings': 0.8,
    'Inhaler Use': 1.5,
    'Stress Level': 3.0,
    'Sleep Hours': 7.8,
    'Peak Flow': 420,
  },
];

const chartColors = {
  'Nighttime Awakenings': '#8884d8',
  'Inhaler Use': '#82ca9d',
  'Stress Level': '#ffc658',
  'Sleep Hours': '#ff7300',
  'Peak Flow': '#00C49F',
};

interface Props {
  timeframe: 'weekly' | 'monthly';
  onTimeframeChange: (timeframe: 'weekly' | 'monthly') => void;
}

export default function SymptomChart({ timeframe, onTimeframeChange }: Props) {
  const data = timeframe === 'weekly' ? weeklyData : monthlyData;
  const xAxisKey = timeframe === 'weekly' ? 'day' : 'week';

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
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey={xAxisKey}
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
              {Object.entries(chartColors).map(([key, color]) => (
                <Bar
                  key={key}
                  dataKey={key}
                  fill={color}
                  radius={[4, 4, 0, 0]}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {Object.entries(chartColors).map(([key, color]) => (
            <div key={key} className="flex items-center">
              <div
                className="w-4 h-4 rounded mr-2"
                style={{ backgroundColor: color }}
              />
              <span className="text-sm text-gray-600">{key}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
