
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, AlertTriangle, Ambulance } from 'lucide-react';

const EmergencySection = () => {
  const [locationAllowed, setLocationAllowed] = useState(false);

  const handleAllowLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Open Google Maps with user's location and nearby hospitals
          window.open(`https://www.google.com/maps/search/hospitals+near+me/@${latitude},${longitude},15z`, '_blank');
          setLocationAllowed(true);
        },
        (error) => {
          console.error("Error accessing location:", error);
          alert("Unable to access location. Please check your device settings.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <section id="emergency" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Emergency Alert Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center bg-red-100 rounded-full px-4 py-1 mb-6">
            <AlertTriangle className="w-4 h-4 text-red-600 mr-2" />
            <span className="text-red-600 font-medium">Emergency Access</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Fast Help When You Need It Most
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Quick access to emergency services and resources during severe asthma attacks. Remember that severe breathing difficulties require immediate medical attention.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                <MapPin className="inline-block mr-2 h-5 w-5 text-red-600" />
                Nearby Hospitals
              </h3>
              
              <div className="h-64 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p>Interactive map would be displayed here</p>
                  <p className="text-sm mt-2">Shows nearby hospitals and emergency rooms</p>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={handleAllowLocation}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  size="sm"
                >
                  Allow Location Access
                </Button>
                <p className="text-xs text-gray-500 mt-2">
                  Enable location services to see nearby facilities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;
