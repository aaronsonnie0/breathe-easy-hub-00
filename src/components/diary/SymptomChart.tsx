import React, { useEffect, useState, useCallback } from 'react';
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
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from '@/hooks/use-auth';
import { getSymptomLogs, subscribeToSymptomLogs } from '@/lib/diary';
import { format, startOfWeek, endOfWeek, eachDayOfInterval, isWithinInterval, startOfMonth, endOfMonth, startOfDay, endOfDay, addDays } from 'date-fns';

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
  simulateOnly?: boolean;
}

const generateSampleData = (timeframe: 'weekly' | 'monthly') => {
  if (timeframe === 'weekly') {
    const weekStart = startOfWeek(new Date());
    return Array.from({ length: 7 }, (_, i) => ({
      day: format(addDays(weekStart, i), 'EEE'),
      'Nighttime Awakenings': Math.floor(Math.random() * 3),
      'Inhaler Use': Math.floor(Math.random() * 4),
      'Stress Level': Math.floor(Math.random() * 5) + 1,
      'Sleep Hours': Math.floor(Math.random() * 4) + 5,
      'Peak Flow': Math.floor(Math.random() * 100) + 300,
    }));
  } else {
    return Array.from({ length: 4 }, (_, i) => ({
      week: `Week ${i + 1}`,
      'Nighttime Awakenings': Math.floor(Math.random() * 3),
      'Inhaler Use': Math.floor(Math.random() * 4),
      'Stress Level': Math.floor(Math.random() * 5) + 1,
      'Sleep Hours': Math.floor(Math.random() * 4) + 5,
      'Peak Flow': Math.floor(Math.random() * 100) + 300,
    }));
  }
};

const generateEmptyData = (timeframe: 'weekly' | 'monthly') => {
  if (timeframe === 'weekly') {
    const weekStart = startOfWeek(new Date());
    return Array.from({ length: 7 }, (_, i) => ({
      day: format(addDays(weekStart, i), 'EEE'),
      'Nighttime Awakenings': 0,
      'Inhaler Use': 0,
      'Stress Level': 0,
      'Sleep Hours': 0,
      'Peak Flow': 0,
    }));
  } else {
    return Array.from({ length: 4 }, (_, i) => ({
      week: `Week ${i + 1}`,
      'Nighttime Awakenings': 0,
      'Inhaler Use': 0,
      'Stress Level': 0,
      'Sleep Hours': 0,
      'Peak Flow': 0,
    }));
  }
};

export default function SymptomChart({ timeframe, onTimeframeChange, simulateOnly = false }: Props) {
  const [data, setData] = useState(() => simulateOnly ? generateSampleData(timeframe) : generateEmptyData(timeframe));
  const [loading, setLoading] = useState(!simulateOnly);
  const { user } = useAuth();

  const processData = useCallback((logs: any[]) => {
    if (!logs || logs.length === 0) {
      return generateEmptyData(timeframe);
    }

    if (timeframe === 'weekly') {
      const weekStart = startOfWeek(new Date());
      const weekEnd = endOfWeek(new Date());
      const days = eachDayOfInterval({ start: weekStart, end: weekEnd });
      
      return days.map(day => {
        const dayLogs = logs.filter(log => {
          const logDate = log.date instanceof Date ? log.date : new Date(log.date);
          return isWithinInterval(logDate, { 
            start: startOfDay(day), 
            end: endOfDay(day) 
          });
        });
        
        const dayData = {
          day: format(day, 'EEE'),
          'Nighttime Awakenings': dayLogs.reduce((sum, log) => sum + (log.nighttimeAwakenings || 0), 0),
          'Inhaler Use': dayLogs.reduce((sum, log) => sum + (log.inhalerUse || 0), 0),
          'Stress Level': dayLogs.length ? Math.round(dayLogs.reduce((sum, log) => sum + (log.stressLevel || 0), 0) / dayLogs.length) : 0,
          'Sleep Hours': dayLogs.length ? Math.round(dayLogs.reduce((sum, log) => sum + (log.hoursOfSleep || 0), 0) / dayLogs.length) : 0,
          'Peak Flow': dayLogs.length ? Math.round(dayLogs.reduce((sum, log) => sum + (log.peakFlow || 0), 0) / dayLogs.length) : 0,
        };
        return dayData;
      });
    } else {
      const today = new Date();
      const monthStart = startOfMonth(today);
      const monthEnd = endOfMonth(today);
      const weeks = [];
      
      let weekStart = startOfWeek(monthStart);
      
      while (weekStart <= monthEnd) {
        const weekEnd = endOfWeek(weekStart);
        const weekLogs = logs.filter(log => {
          const logDate = log.date instanceof Date ? log.date : new Date(log.date);
          return isWithinInterval(logDate, { 
            start: weekStart, 
            end: weekEnd 
          });
        });
        
        const weekData = {
          week: `Week ${weeks.length + 1}`,
          'Nighttime Awakenings': Math.round(weekLogs.reduce((sum, log) => sum + (log.nighttimeAwakenings || 0), 0) / 7),
          'Inhaler Use': Math.round(weekLogs.reduce((sum, log) => sum + (log.inhalerUse || 0), 0) / 7),
          'Stress Level': weekLogs.length ? Math.round(weekLogs.reduce((sum, log) => sum + (log.stressLevel || 0), 0) / weekLogs.length) : 0,
          'Sleep Hours': weekLogs.length ? Math.round(weekLogs.reduce((sum, log) => sum + (log.hoursOfSleep || 0), 0) / weekLogs.length) : 0,
          'Peak Flow': weekLogs.length ? Math.round(weekLogs.reduce((sum, log) => sum + (log.peakFlow || 0), 0) / weekLogs.length) : 0,
        };
        weeks.push(weekData);
        
        weekStart = addDays(weekStart, 7);
      }
      
      return weeks;
    }
  }, [timeframe]);

  useEffect(() => {
    if (simulateOnly) {
      setData(generateSampleData(timeframe));
      setLoading(false);
      return;
    }

    if (!user) {
      setLoading(false);
      return;
    }

    const fetchInitialData = async () => {
      try {
        setLoading(true);
        const logs = await getSymptomLogs(timeframe, user.uid);
        const processedData = processData(logs);
        setData(processedData);
      } catch (error) {
        console.error('Error fetching symptom logs:', error);
        setData(generateEmptyData(timeframe));
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();

    // Subscribe to real-time updates
    const unsubscribe = subscribeToSymptomLogs(timeframe, (logs) => {
      const processedData = processData(logs);
      setData(processedData);
    }, user.uid);

    return () => unsubscribe();
  }, [timeframe, user, processData, simulateOnly]);

  useEffect(() => {
    if (simulateOnly) {
      setData(generateSampleData(timeframe));
    }
  }, [timeframe, simulateOnly]);

  const renderChart = () => {
    const chartData = data || (simulateOnly ? generateSampleData(timeframe) : generateEmptyData(timeframe));
    const xAxisKey = timeframe === 'weekly' ? 'day' : 'week';

    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={chartData}
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
    );
  };

  return (
    <Card className="w-full">
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
        {loading ? (
          <div className="w-full h-[400px]">
            <Skeleton className="w-full h-full" />
          </div>
        ) : (
          renderChart()
        )}
      </CardContent>
    </Card>
  );
}
