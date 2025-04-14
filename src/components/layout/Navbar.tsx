
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, AlertTriangle } from 'lucide-react';

// Updated navigation items
const mainNavItems = [
  { name: 'Home', href: '/', isScroll: false },
  { name: 'Features', href: '/#features', isScroll: true },
  { name: 'Diary', href: '/#diary', isScroll: true },
  { 
    name: 'Emergency', 
    href: '/emergency',
    isEmergency: true,
    isScroll: false
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
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

  // Handle smooth scrolling for anchor links
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isScroll: boolean) => {
    if (!isScroll) return; // If not a scroll link, use normal navigation
    
    // If we're already on the home page, scroll to the section
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.querySelector(href.replace('/', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
    // If on another page, the link will navigate to homepage with the anchor
  };

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
            item.isScroll ? (
              <a
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md transition-colors duration-200 ${
                  item.isEmergency 
                    ? 'bg-red-100 text-red-600 hover:bg-red-200 font-medium flex items-center' 
                    : 'text-gray-600 hover:text-primary-dark'
                }`}
                onClick={(e) => handleNavigation(e, item.href, item.isScroll)}
              >
                {item.isEmergency && <AlertTriangle className="h-4 w-4 mr-1" />}
                {item.name}
              </a>
            ) : (
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
            )
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
            {/* Main Navigation Items */}
            {mainNavItems.map((item) => (
              item.isScroll ? (
                <a
                  key={item.name}
                  href={item.href}
                  className={`py-3 border-b border-gray-100 ${
                    item.isEmergency 
                      ? 'text-red-600 font-medium flex items-center' 
                      : 'text-gray-600'
                  } hover:text-primary-dark`}
                  onClick={(e) => handleNavigation(e, item.href, item.isScroll)}
                >
                  {item.isEmergency && <AlertTriangle className="h-4 w-4 mr-1" />}
                  {item.name}
                </a>
              ) : (
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
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
