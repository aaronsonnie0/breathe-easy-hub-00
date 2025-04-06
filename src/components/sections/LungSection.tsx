
import React, { useEffect, useRef } from 'react';

const LungSection = () => {
  const animationRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-breathe');
          } else {
            entry.target.classList.remove('animate-breathe');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (animationRef.current) {
      observer.observe(animationRef.current);
    }
    
    return () => {
      if (animationRef.current) {
        observer.unobserve(animationRef.current);
      }
    };
  }, []);

  return (
    <section id="lungs" className="py-16 md:py-24 bg-primary-light relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Understanding Your Lungs
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Visualize what happens inside your lungs during an asthma attack. Knowledge is power when it comes to managing your condition.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2 text-primary-dark">Normal Breathing</h3>
                <p className="text-gray-600">
                  During normal breathing, air moves freely through your airways, allowing oxygen to reach your lungs and carbon dioxide to exit your body.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2 text-amber-600">Early Asthma Symptoms</h3>
                <p className="text-gray-600">
                  As an asthma episode begins, the muscles around your airways tighten, making the airways narrower and reducing airflow.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2 text-red-600">Asthma Attack</h3>
                <p className="text-gray-600">
                  During an asthma attack, your airways become inflamed and swollen, and excess mucus is produced, further restricting airflow and making it difficult to breathe.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2 text-green-600">Treatment Effect</h3>
                <p className="text-gray-600">
                  Asthma medications work by relaxing the airway muscles, reducing inflammation, and clearing mucus, opening the airways so you can breathe easily again.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div 
                ref={animationRef}
                className="w-full max-w-md"
              >
                {/* SVG Lung Animation */}
                <svg
                  viewBox="0 0 600 500"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                >
                  {/* Trachea */}
                  <path
                    d="M300,50 L300,150 Q300,170 280,170 L230,170 Q210,170 210,190 L210,400 Q210,450 150,470 Q100,490 70,450 Q40,400 60,350 Q80,300 100,270 Q130,220 170,210 Q190,205 210,210"
                    fill="none"
                    stroke="#0077FF"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M300,50 L300,150 Q300,170 320,170 L370,170 Q390,170 390,190 L390,400 Q390,450 450,470 Q500,490 530,450 Q560,400 540,350 Q520,300 500,270 Q470,220 430,210 Q410,205 390,210"
                    fill="none"
                    stroke="#0077FF"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  
                  {/* Left Lung */}
                  <path
                    d="M210,210 Q160,220 130,270 Q100,320 80,370 Q60,420 90,460 Q120,500 170,480 Q220,460 210,400 Z"
                    fill="#D3E4FD"
                    stroke="#0077FF"
                    strokeWidth="4"
                  />
                  
                  {/* Right Lung */}
                  <path
                    d="M390,210 Q440,220 470,270 Q500,320 520,370 Q540,420 510,460 Q480,500 430,480 Q380,460 390,400 Z"
                    fill="#D3E4FD"
                    stroke="#0077FF"
                    strokeWidth="4"
                  />
                  
                  {/* Bronchioles - Left */}
                  <path
                    d="M210,230 Q190,240 170,270"
                    fill="none"
                    stroke="#0077FF"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M210,280 Q180,300 160,330"
                    fill="none"
                    stroke="#0077FF"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M210,330 Q190,360 170,380"
                    fill="none"
                    stroke="#0077FF"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  
                  {/* Bronchioles - Right */}
                  <path
                    d="M390,230 Q410,240 430,270"
                    fill="none"
                    stroke="#0077FF"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M390,280 Q420,300 440,330"
                    fill="none"
                    stroke="#0077FF"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M390,330 Q410,360 430,380"
                    fill="none"
                    stroke="#0077FF"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  
                  {/* Alveoli clusters */}
                  <circle cx="170" cy="270" r="8" fill="#F2FCE2" stroke="#0077FF" strokeWidth="1" />
                  <circle cx="175" cy="260" r="6" fill="#F2FCE2" stroke="#0077FF" strokeWidth="1" />
                  <circle cx="160" cy="265" r="7" fill="#F2FCE2" stroke="#0077FF" strokeWidth="1" />
                  
                  <circle cx="160" cy="330" r="8" fill="#F2FCE2" stroke="#0077FF" strokeWidth="1" />
                  <circle cx="150" cy="335" r="6" fill="#F2FCE2" stroke="#0077FF" strokeWidth="1" />
                  <circle cx="155" cy="320" r="7" fill="#F2FCE2" stroke="#0077FF" strokeWidth="1" />
                  
                  <circle cx="430" cy="270" r="8" fill="#F2FCE2" stroke="#0077FF" strokeWidth="1" />
                  <circle cx="425" cy="260" r="6" fill="#F2FCE2" stroke="#0077FF" strokeWidth="1" />
                  <circle cx="440" cy="265" r="7" fill="#F2FCE2" stroke="#0077FF" strokeWidth="1" />
                  
                  <circle cx="440" cy="330" r="8" fill="#F2FCE2" stroke="#0077FF" strokeWidth="1" />
                  <circle cx="450" cy="335" r="6" fill="#F2FCE2" stroke="#0077FF" strokeWidth="1" />
                  <circle cx="445" cy="320" r="7" fill="#F2FCE2" stroke="#0077FF" strokeWidth="1" />
                  
                  {/* Head outline */}
                  <path
                    d="M260,30 Q300,0 340,30 L340,80 Q340,100 320,110 L280,110 Q260,100 260,80 Z"
                    fill="#F8F9FA"
                    stroke="#0077FF"
                    strokeWidth="2"
                  />
                  
                  {/* Nose */}
                  <path
                    d="M295,35 Q300,25 305,35 L305,60 Q300,65 295,60 Z"
                    fill="#F2FCE2"
                    stroke="#0077FF"
                    strokeWidth="1"
                  />
                </svg>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-75">
                <div className="animate-pulse-slow text-primary font-bold text-2xl">
                  Breathe
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300 rounded-full opacity-10"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-300 rounded-full opacity-10"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-400 rounded-full opacity-10"></div>
    </section>
  );
};

export default LungSection;
