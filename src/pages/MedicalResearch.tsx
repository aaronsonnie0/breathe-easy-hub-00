
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackButton from '@/components/layout/BackButton';
import { FileText } from 'lucide-react';

const MedicalResearch = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-tertiary-light">
      <BackButton />
      <Navbar />
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-8 h-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Medical Research</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2>Latest Research</h2>
            <p>Recent studies have shown significant advances in understanding asthma triggers and developing new treatment approaches.</p>

            <h2>Clinical Trials</h2>
            <p>Ongoing clinical trials are investigating new medications and treatment methods for asthma management.</p>

            <h2>Research Publications</h2>
            <ul>
              <li>Impact of environmental factors on asthma severity</li>
              <li>New developments in bronchodilator medications</li>
              <li>Long-term effects of various treatment approaches</li>
              <li>Genetic factors in asthma development</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MedicalResearch;
