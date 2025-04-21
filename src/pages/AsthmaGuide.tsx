
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackButton from '@/components/layout/BackButton';
import { BookOpen } from 'lucide-react';

const AsthmaGuide = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-tertiary-light">
      <BackButton />
      <Navbar />
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-8 h-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Asthma Guide</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2>Understanding Asthma</h2>
            <p>Asthma is a chronic respiratory condition that affects the airways in your lungs. When you have asthma, your airways can become inflamed and narrowed, making it difficult to breathe.</p>
            
            <h2>Common Triggers</h2>
            <ul>
              <li>Allergens (pollen, dust mites, pet dander)</li>
              <li>Respiratory infections</li>
              <li>Exercise</li>
              <li>Cold air</li>
              <li>Air pollutants</li>
            </ul>

            <h2>Managing Your Asthma</h2>
            <p>Effective asthma management involves:</p>
            <ul>
              <li>Regular monitoring of symptoms</li>
              <li>Taking medications as prescribed</li>
              <li>Avoiding known triggers</li>
              <li>Having an action plan for emergencies</li>
              <li>Regular check-ups with your healthcare provider</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AsthmaGuide;
