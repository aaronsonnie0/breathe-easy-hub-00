
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, AlertTriangle } from 'lucide-react';

const EmergencySection = () => {
  return (
    <section id="emergency" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center justify-center bg-red-100 rounded-full px-4 py-1 mb-6">
              <AlertTriangle className="w-4 h-4 text-red-600 mr-2" />
              <span className="text-red-600 font-medium">Emergency Access</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Fast Help When You Need It Most
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Quick access to emergency services and resources during severe asthma attacks. Remember that severe breathing difficulties require immediate medical attention.
            </p>
            
            <a href="tel:911" className="emergency-button mb-6 block sm:inline-block text-center">
              <Phone className="mr-2 h-6 w-6" />
              Call Emergency Services
            </a>
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Emergency Action Plan</h3>
              
              <div className="space-y-4">
                <div className="bg-tertiary-light p-4 rounded-lg">
                  <p className="font-medium text-gray-800 mb-2">Step 1: Assess Severity</p>
                  <ul className="list-disc list-inside text-gray-600 ml-2 text-sm">
                    <li>Difficulty speaking full sentences</li>
                    <li>Breathing is fast and labored</li>
                    <li>Rescue inhaler not helping</li>
                    <li>Blue tint to lips or fingernails</li>
                  </ul>
                </div>
                
                <div className="bg-tertiary-light p-4 rounded-lg">
                  <p className="font-medium text-gray-800 mb-2">Step 2: Use Rescue Medication</p>
                  <ul className="list-disc list-inside text-gray-600 ml-2 text-sm">
                    <li>Use your rescue inhaler (usually 2-4 puffs)</li>
                    <li>Wait 20 minutes to see if symptoms improve</li>
                    <li>If no improvement, use inhaler again and seek help</li>
                  </ul>
                </div>
                
                <div className="bg-tertiary-light p-4 rounded-lg">
                  <p className="font-medium text-gray-800 mb-2">Step 3: Get Help</p>
                  <ul className="list-disc list-inside text-gray-600 ml-2 text-sm">
                    <li>Call emergency services (911) if severe symptoms persist</li>
                    <li>Remain calm and try to control your breathing</li>
                    <li>Have someone stay with you until help arrives</li>
                  </ul>
                </div>
              </div>
            </div>
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
            
            <div className="bg-red-50 rounded-xl p-6 border border-red-100">
              <h3 className="text-xl font-semibold mb-4 text-red-800">
                Signs of a Severe Asthma Attack
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-200 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-red-800 text-xs">!</span>
                  </span>
                  <p className="text-red-800">Severe shortness of breath, unable to speak in full sentences</p>
                </div>
                
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-200 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-red-800 text-xs">!</span>
                  </span>
                  <p className="text-red-800">Symptoms not improving after using rescue inhaler</p>
                </div>
                
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-200 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-red-800 text-xs">!</span>
                  </span>
                  <p className="text-red-800">Bluish tint to lips, face, or fingernails (cyanosis)</p>
                </div>
                
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-200 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-red-800 text-xs">!</span>
                  </span>
                  <p className="text-red-800">Difficulty walking or talking due to shortness of breath</p>
                </div>
                
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-200 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-red-800 text-xs">!</span>
                  </span>
                  <p className="text-red-800">Mental confusion or drowsiness</p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-red-800 font-medium">
                  If you experience these symptoms, call emergency services immediately.
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
