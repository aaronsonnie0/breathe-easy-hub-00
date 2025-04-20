import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Loader2, MapPin, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface AQIData {
  city: string;
  aqi: number;
  status: string;
  pollutants: {
    co: number;
    no2: number;
    o3: number;
    pm10: number;
    pm25: number;
    so2: number;
  };
}

const AQIWidget = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showData, setShowData] = useState(false);
  const [aqiData, setAqiData] = useState<AQIData | null>(null);
  const [locationStatus, setLocationStatus] = useState<'idle' | 'requesting' | 'granted' | 'denied'>('idle');
  const [manualLocation, setManualLocation] = useState('');
  const [showManualInput, setShowManualInput] = useState(false);

  const getAQIColor = (aqi: number) => {
    if (aqi <= 50) return 'bg-green-500';
    if (aqi <= 100) return 'bg-yellow-400';
    if (aqi <= 150) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const getAQIDescription = (aqi: number) => {
    if (aqi <= 50) return 'Good';
    if (aqi <= 100) return 'Moderate';
    if (aqi <= 150) return 'Unhealthy for Sensitive Groups';
    if (aqi <= 200) return 'Unhealthy';
    if (aqi <= 300) return 'Very Unhealthy';
    return 'Hazardous';
  };

  const handleManualSearch = async () => {
    if (!manualLocation.trim()) {
      setError('Please enter a location');
      return;
    }

    setLoading(true);
    setError(null);
    setShowData(false);

    try {
      // Simulate AQI data fetch
      const simulatedData: AQIData = {
        city: manualLocation,
        aqi: Math.floor(Math.random() * 150) + 30,
        status: "ok",
        pollutants: {
          co: Math.random() * 10,
          no2: Math.random() * 10,
          o3: Math.random() * 10,
          pm10: Math.floor(Math.random() * 100),
          pm25: Math.floor(Math.random() * 100),
          so2: Math.random() * 10
        }
      };

      setAqiData(simulatedData);
      setShowData(true);
      setError(null);
    } catch (err) {
      setError("Unable to fetch air quality data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGetLocation = async () => {
    setLoading(true);
    setError(null);
    setLocationStatus('requesting');
    setShowData(false);

    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          timeout: 10000,
          enableHighAccuracy: false
        });
      });

      setLocationStatus('granted');
      const { latitude, longitude } = position.coords;

      // Simulate AQI data fetch
      const simulatedData: AQIData = {
        city: "Your Location",
        aqi: Math.floor(Math.random() * 150) + 30,
        status: "ok",
        pollutants: {
          co: Math.random() * 10,
          no2: Math.random() * 10,
          o3: Math.random() * 10,
          pm10: Math.floor(Math.random() * 100),
          pm25: Math.floor(Math.random() * 100),
          so2: Math.random() * 10
        }
      };

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );
        const data = await response.json();
        simulatedData.city = data.address.city || data.address.town || "Your Location";
      } catch (error) {
        console.error('Failed to get city name:', error);
      }

      setAqiData(simulatedData);
      setShowData(true);
      setError(null);
    } catch (err) {
      setLocationStatus('denied');
      setShowManualInput(true);
      setShowData(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <div className="text-center">
          <div className="flex flex-col gap-4 items-center">
            <Button
              variant="outline"
              onClick={handleGetLocation}
              disabled={loading}
              className="mb-2"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Getting Location...
                </>
              ) : (
                <>
                  <MapPin className="mr-2 h-4 w-4" />
                  Get AQI for My Location
                </>
              )}
            </Button>

            {(showManualInput || locationStatus === 'denied') && (
              <div className="flex w-full max-w-sm items-center gap-2">
                <Input
                  type="text"
                  placeholder="Enter city name"
                  value={manualLocation}
                  onChange={(e) => setManualLocation(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleManualSearch()}
                />
                <Button 
                  variant="outline"
                  onClick={handleManualSearch}
                  disabled={loading}
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>

          {locationStatus === 'idle' && !showManualInput ? (
            <div className="text-gray-500 text-sm mt-4">
              Click the button above to check air quality in your area
            </div>
          ) : error ? (
            <div className="text-red-500 text-sm mt-4 mb-4">
              {error}
            </div>
          ) : null}
          
          {showData && aqiData && (
            <div className="space-y-4 transition-all duration-300 mt-6">
              <div className="text-xl font-semibold">{aqiData.city}</div>
              
              <div className="flex justify-center gap-4">
                <div className={cn(
                  "w-24 h-24 rounded-full flex flex-col items-center justify-center text-white",
                  getAQIColor(aqiData.aqi)
                )}>
                  <div className="text-2xl font-bold">{aqiData.aqi}</div>
                  <div className="text-xs">{getAQIDescription(aqiData.aqi)}</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600">PM2.5</div>
                  <div className="font-semibold">{aqiData.pollutants.pm25.toFixed(1)} μg/m³</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600">PM10</div>
                  <div className="font-semibold">{aqiData.pollutants.pm10.toFixed(1)} μg/m³</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600">O₃</div>
                  <div className="font-semibold">{aqiData.pollutants.o3.toFixed(1)} ppb</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600">NO₂</div>
                  <div className="font-semibold">{aqiData.pollutants.no2.toFixed(1)} ppb</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600">SO₂</div>
                  <div className="font-semibold">{aqiData.pollutants.so2.toFixed(1)} ppb</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600">CO</div>
                  <div className="font-semibold">{aqiData.pollutants.co.toFixed(1)} ppm</div>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-4">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">0-50</div>
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white text-xs">51-100</div>
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs">101-150</div>
                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">150+</div>
              </div>

              <div className="mt-4 text-sm text-gray-500">
                <p>Data is simulated for demonstration. In a production environment, this would use real-time AQI data from an air quality API.</p>
                <p className="mt-2">Last updated: {new Date().toLocaleTimeString()}</p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AQIWidget;
