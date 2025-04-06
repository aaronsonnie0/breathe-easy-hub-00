
import React from 'react';

const triggers = [
  {
    id: 1,
    name: 'Pollen',
    description: 'Tree, grass, and weed pollen can trigger seasonal asthma symptoms.',
    icon: '🌿',
    tips: 'Check pollen forecasts and stay indoors when counts are high.',
  },
  {
    id: 2,
    name: 'Dust Mites',
    description: 'These microscopic bugs thrive in warm, humid environments like bedding.',
    icon: '🏠',
    tips: 'Use allergen-proof bed covers and wash bedding weekly in hot water.',
  },
  {
    id: 3,
    name: 'Pet Dander',
    description: 'Tiny flecks of skin shed by cats, dogs, and other animals with fur.',
    icon: '🐱',
    tips: 'Keep pets out of bedrooms and off furniture. Consider air purifiers.',
  },
  {
    id: 4,
    name: 'Smoke',
    description: 'Tobacco smoke, wood smoke, and wildfire smoke can all trigger asthma.',
    icon: '🚭',
    tips: 'Avoid smoking and secondhand smoke exposure. Stay indoors during wildfires.',
  },
  {
    id: 5,
    name: 'Cold Air',
    description: 'Cold, dry air can irritate airways and cause asthma symptoms.',
    icon: '❄️',
    tips: 'Cover your nose and mouth with a scarf when outdoors in cold weather.',
  },
  {
    id: 6,
    name: 'Respiratory Infections',
    description: 'Colds, flu, and other respiratory infections can trigger flare-ups.',
    icon: '🦠',
    tips: 'Get vaccinated against flu and COVID-19. Wash hands frequently.',
  },
  {
    id: 7,
    name: 'Exercise',
    description: 'Physical activity can trigger symptoms in some people with asthma.',
    icon: '🏃',
    tips: 'Use an inhaler before exercise if recommended by your doctor.',
  },
  {
    id: 8,
    name: 'Strong Odors',
    description: 'Perfumes, cleaning products, and other strong smells can trigger symptoms.',
    icon: '🧪',
    tips: 'Use fragrance-free products and ensure good ventilation when cleaning.',
  }
];

const TriggersSection = () => {
  return (
    <section id="triggers" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Know Your Asthma Triggers
          </h2>
          <p className="text-lg text-gray-600">
            Understanding what triggers your asthma is the first step toward prevention. Here are common triggers and tips to help you manage them.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {triggers.map((trigger) => (
            <div 
              key={trigger.id}
              className="bg-tertiary-light rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
            >
              <div className="text-4xl mb-4">{trigger.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{trigger.name}</h3>
              <p className="text-gray-600 mb-4 text-sm">{trigger.description}</p>
              <div className="bg-white rounded-lg p-3 text-sm">
                <span className="font-medium text-primary-dark">Tip:</span> {trigger.tips}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-tertiary-light rounded-xl shadow-md p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Air Quality Index</h3>
              <p className="text-gray-600 mb-4">
                Air quality can significantly impact your asthma symptoms. Stay informed about the air quality in your area with live data from trusted sources.
              </p>
              <p className="text-sm text-gray-500">
                This widget provides real-time AQI (Air Quality Index) data. Green indicates good air quality, while yellow, orange, and red indicate progressively worse conditions.
              </p>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-gray-400 mb-2">Air Quality Widget</div>
                  <p className="text-sm text-gray-500">
                    Live air quality data would be embedded here from services like IQAir or AirVisual.
                  </p>
                  <div className="mt-4 flex justify-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">0-50</div>
                    <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white text-xs">51-100</div>
                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs">101-150</div>
                    <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">150+</div>
                  </div>
                  <div className="mt-4">
                    <button className="text-primary-dark hover:underline text-sm">
                      Connect to Air Quality API
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TriggersSection;
