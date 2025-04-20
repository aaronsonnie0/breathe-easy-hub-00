
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const pollutantData = {
  city: 'SIDCO Kurichi, Coimbatore, India',
  aqi: 73,
  status: 'ok',
  dominantPollutant: 'pm25',
  pollutants: {
    co: 4.6,
    no2: 3.6,
    o3: 2.6,
    pm10: 51,
    pm25: 73,
    so2: 7.9
  }
};

const AQIWidget = () => {
  const [showData, setShowData] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowData(true);
    setShowMessage(true);
  };

  const getAQIColor = (aqi: number) => {
    if (aqi <= 50) return 'bg-green-500';
    if (aqi <= 100) return 'bg-yellow-400';
    if (aqi <= 150) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <div className="text-center">
          <Button
            variant="outline"
            onClick={handleClick}
            className="mb-6"
          >
            Get AQI for My Location
          </Button>
          
          <div
            className={cn(
              'space-y-4 transition-all duration-300',
              showData ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 hidden'
            )}
          >
            <div className="text-xl font-semibold">{pollutantData.city}</div>
            
            <div className="flex justify-center gap-4">
              <div className={cn(
                "w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-bold",
                getAQIColor(pollutantData.aqi)
              )}>
                {pollutantData.aqi}
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600">CO</div>
                <div className="font-semibold">{pollutantData.pollutants.co} μg/m³</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600">NO2</div>
                <div className="font-semibold">{pollutantData.pollutants.no2} μg/m³</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600">O3</div>
                <div className="font-semibold">{pollutantData.pollutants.o3} μg/m³</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600">PM10</div>
                <div className="font-semibold">{pollutantData.pollutants.pm10} μg/m³</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600">PM2.5</div>
                <div className="font-semibold">{pollutantData.pollutants.pm25} μg/m³</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600">SO2</div>
                <div className="font-semibold">{pollutantData.pollutants.so2} μg/m³</div>
              </div>
            </div>

            <div className="mt-6 flex justify-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">0-50</div>
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white text-xs">51-100</div>
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs">101-150</div>
              <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">150+</div>
            </div>

            {showMessage && (
              <div className="mt-4 text-sm text-gray-500 italic">
                This is a simulated result. For real data, connect to an AQI API.
                <div className="mt-1 text-xs">(Basic climate info support coming soon)</div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AQIWidget;
