
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, AlertTriangle } from 'lucide-react';

const mainNavItems = [
  { name: 'Home', href: '/' },
  { name: 'Diary', href: '/diary' },
  { name: 'Triggers', href: '/triggers' },
  { name: 'Score Assessment', href: '/score' },
  { 
    name: 'Emergency', 
    href: '/emergency',
    isEmergency: true
  },
  { name: 'Reminders', href: '/reminders' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary-dark">BreatheEasy</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {mainNavItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-3 py-2 rounded-md transition-colors duration-200 ${
                item.isEmergency 
                  ? 'bg-red-100 text-red-600 hover:bg-red-200 font-medium flex items-center' 
                  : 'text-gray-600 hover:text-primary-dark'
              }`}
            >
              {item.isEmergency && <AlertTriangle className="h-4 w-4 mr-1" />}
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-600" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <nav className="container mx-auto px-4 py-2 flex flex-col">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`py-3 border-b border-gray-100 ${
                  item.isEmergency 
                    ? 'text-red-600 font-medium flex items-center' 
                    : 'text-gray-600'
                } hover:text-primary-dark`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.isEmergency && <AlertTriangle className="h-4 w-4 mr-1" />}
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
