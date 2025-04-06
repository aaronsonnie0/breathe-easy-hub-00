
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

// Reorganized navigation items
const mainNavItems = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'Diary', href: '#diary' },
  { name: 'Score Assessment', href: '#score' },
  { 
    name: 'Emergency', 
    href: '#emergency',
    isEmergency: true 
  },
];

const toolsNavItems = [
  { name: 'Lung Visualization', href: '#lungs' },
  { name: 'Triggers', href: '#triggers' },
  { name: 'Reminders', href: '#reminders' },
];

const communityNavItems = [
  { name: 'Chatbot', href: '#chatbot' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Newsletter', href: '#newsletter' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
      
      // Determine active section for highlighting
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if(offset >= sectionTop && offset < sectionTop + sectionHeight) {
          setActiveSection('#' + section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll function
  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  };

  const isActive = (href: string) => activeSection === href;

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <motion.a 
          href="#home" 
          className="flex items-center"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">BreatheEasy</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {mainNavItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className={`px-3 py-2 rounded-md transition-colors duration-300 ${
                item.isEmergency 
                  ? 'bg-red-100 text-red-600 hover:bg-red-200 font-medium flex items-center' 
                  : isActive(item.href)
                    ? 'text-primary-dark font-medium'
                    : 'text-gray-600 hover:text-primary-dark'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.isEmergency && <AlertTriangle className="h-4 w-4 mr-1" />}
              {item.name}
              {isActive(item.href) && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-dark" 
                  layoutId="navIndicator"
                />
              )}
            </motion.a>
          ))}

          {/* Tools Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.button 
                className="px-3 py-2 text-gray-600 hover:text-primary-dark rounded-md transition-colors duration-300 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Tools
                <ChevronDown className="ml-1 h-4 w-4" />
              </motion.button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-lg rounded-lg p-2 w-48">
              <DropdownMenuGroup>
                {toolsNavItems.map((item) => (
                  <DropdownMenuItem 
                    key={item.name} 
                    className="cursor-pointer rounded-md hover:bg-blue-50 transition-colors"
                    onClick={() => scrollToSection(item.href)}
                  >
                    <span className="text-gray-700">{item.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Community Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.button 
                className="px-3 py-2 text-gray-600 hover:text-primary-dark rounded-md transition-colors duration-300 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Community
                <ChevronDown className="ml-1 h-4 w-4" />
              </motion.button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-lg rounded-lg p-2 w-48">
              <DropdownMenuGroup>
                {communityNavItems.map((item) => (
                  <DropdownMenuItem 
                    key={item.name} 
                    className="cursor-pointer rounded-md hover:bg-blue-50 transition-colors" 
                    onClick={() => scrollToSection(item.href)}
                  >
                    <span className="text-gray-700">{item.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Navigation Toggle */}
        <motion.button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-600" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600" />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="lg:hidden bg-white/95 backdrop-blur-md shadow-lg"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="container mx-auto px-4 py-2 flex flex-col">
              {/* Main Navigation Items */}
              {mainNavItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`py-3 border-b border-gray-100 ${
                    item.isEmergency 
                      ? 'text-red-600 font-medium flex items-center' 
                      : 'text-gray-600'
                  } hover:text-primary-dark`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  whileHover={{ x: 5 }}
                >
                  {item.isEmergency && <AlertTriangle className="h-4 w-4 mr-1" />}
                  {item.name}
                </motion.a>
              ))}
              
              {/* Tools Section */}
              <div className="py-2 border-b border-gray-100">
                <div className="font-medium text-sm text-gray-500 px-1 py-1">Tools</div>
                {toolsNavItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="py-2 pl-3 text-gray-600 hover:text-primary-dark block"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
              
              {/* Community Section */}
              <div className="py-2">
                <div className="font-medium text-sm text-gray-500 px-1 py-1">Community</div>
                {communityNavItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="py-2 pl-3 text-gray-600 hover:text-primary-dark block"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
