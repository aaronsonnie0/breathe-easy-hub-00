
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, CheckCircle } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically have API logic to submit the email
    setIsSubmitted(true);
    setEmail('');
  };
  
  return (
    <section id="newsletter" className="py-16 md:py-24 bg-gradient-to-br from-primary-light to-tertiary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                Stay Updated with Asthma Tips
              </h2>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter for the latest asthma research, management strategies, and health updates delivered to your inbox.
              </p>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-input"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <input
                        id="newsletter-consent"
                        type="checkbox"
                        className="h-4 w-4 mt-1 text-primary-dark border-gray-300 rounded"
                        required
                      />
                      <label htmlFor="newsletter-consent" className="ml-2 block text-xs text-gray-500">
                        I agree to receive emails with asthma tips, updates, and occasional promotional content. You can unsubscribe at any time.
                      </label>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full cta-button-primary">
                    <Mail className="mr-2 h-5 w-5" />
                    Subscribe
                  </Button>
                </form>
              ) : (
                <div className="text-center py-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    Thank You for Subscribing!
                  </h3>
                  <p className="text-gray-600">
                    Check your inbox for a confirmation email with a special welcome guide for managing asthma.
                  </p>
                </div>
              )}
            </div>
            
            <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-primary to-primary-dark p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">Newsletter Benefits</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p>Expert asthma management tips and strategies</p>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p>Latest research findings and treatment options</p>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p>Seasonal guides for managing triggers</p>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p>Free downloadable resources and checklists</p>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-3">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p>Exclusive webinars with respiratory specialists</p>
                </li>
              </ul>
              
              <p className="mt-8 text-sm text-white text-opacity-80">
                "The newsletter has been a great source of information that helps me stay on top of my asthma management."
              </p>
              <p className="mt-2 font-medium">— Jamie L., BreatheEasy User</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
