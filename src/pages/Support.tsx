
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackButton from '@/components/layout/BackButton';
import { Shield } from 'lucide-react';

const Support = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-tertiary-light">
      <BackButton />
      <Navbar />
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Support</h1>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
              <p className="text-gray-600 mb-4">Our support team is available 24/7 to help you with any questions or concerns.</p>
              <p className="text-gray-600">Email: support@breatheeasy.com</p>
              <p className="text-gray-600">Phone: +1 (123) 456-7890</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Resources</h2>
              <ul className="space-y-2 text-gray-600">
                <li>User Guides</li>
                <li>Video Tutorials</li>
                <li>Troubleshooting Tips</li>
                <li>Community Forum</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
