import React from 'react';
import { Mail, Phone, MapPin, Heart, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tertiary pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">BreatheEasy</h3>
            <p className="text-gray-600 mb-4">
              Your dedicated companion for asthma management and respiratory health. We're committed to helping you breathe easier.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-dark hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-dark hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-dark hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-dark hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Features', href: '#features' },
                { name: 'Asthma Diary', href: '#diary' },
                { name: 'Score Assessment', href: '#score' },
                { name: 'Emergency Access', href: '#emergency' },
                { name: 'Testimonials', href: '#testimonials' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-600 hover:text-primary-dark transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Resources</h3>
            <ul className="space-y-2">
              {[
                { name: 'Asthma Guide', href: '/guide' },
                { name: 'Medical Research', href: '/research' },
                { name: 'FAQs', href: '/faqs' },
                { name: 'Support', href: '/support' },
                { name: 'Privacy Policy', href: '/privacy' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-600 hover:text-primary-dark transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary-dark flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">123 Health Street, Wellness City, 90210</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary-dark flex-shrink-0" />
                <a href="tel:+11234567890" className="text-gray-600 hover:text-primary-dark">+1 (123) 456-7890</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary-dark flex-shrink-0" />
                <a href="mailto:info@breatheeasy.com" className="text-gray-600 hover:text-primary-dark">info@breatheeasy.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} BreatheEasy. All rights reserved.
            </p>
            <p className="text-gray-600 text-sm flex items-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for better breathing
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
