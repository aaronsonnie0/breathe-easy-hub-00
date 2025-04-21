
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackButton from '@/components/layout/BackButton';
import { Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-tertiary-light">
      <BackButton />
      <Navbar />
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Privacy Policy</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="lead">Last updated: April 21, 2025</p>
            
            <h2>Introduction</h2>
            <p>BreatheEasy ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.</p>

            <h2>Information We Collect</h2>
            <ul>
              <li>Personal information (name, email, phone number)</li>
              <li>Health information (symptoms, medications, triggers)</li>
              <li>Usage data (app interactions, features used)</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Personalize your experience</li>
              <li>Send important updates and notifications</li>
              <li>Analyze app usage and trends</li>
            </ul>

            <h2>Data Protection</h2>
            <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
