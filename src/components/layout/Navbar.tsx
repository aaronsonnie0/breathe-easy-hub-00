
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, AlertTriangle } from 'lucide-react';
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

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <span className="text-2xl font-bold text-primary-dark">BreatheEasy</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {mainNavItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`px-3 py-2 rounded-md transition-colors duration-200 ${
                item.isEmergency 
                  ? 'bg-red-100 text-red-600 hover:bg-red-200 font-medium flex items-center' 
                  : 'text-gray-600 hover:text-primary-dark'
              }`}
            >
              {item.isEmergency && <AlertTriangle className="h-4 w-4 mr-1" />}
              {item.name}
            </a>
          ))}

          {/* Tools Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="px-3 py-2 text-gray-600 hover:text-primary-dark rounded-md transition-colors duration-200 flex items-center">
              Tools
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                {toolsNavItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <a href={item.href}>{item.name}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Community Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="px-3 py-2 text-gray-600 hover:text-primary-dark rounded-md transition-colors duration-200 flex items-center">
              Community
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                {communityNavItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <a href={item.href}>{item.name}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
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
              <a
                key={item.name}
                href={item.href}
                className={`py-3 border-b border-gray-100 ${
                  item.isEmergency 
                    ? 'text-red-600 font-medium flex items-center' 
                    : 'text-gray-600'
                } hover:text-primary-dark`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.isEmergency && <AlertTriangle className="h-4 w-4 mr-1" />}
                {item.name}
              </a>
            ))}
            
            {/* Tools Section */}
            <div className="py-2 border-b border-gray-100">
              <div className="font-medium text-sm text-gray-500 px-1 py-1">Tools</div>
              {toolsNavItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="py-2 pl-3 text-gray-600 hover:text-primary-dark block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            {/* Community Section */}
            <div className="py-2">
              <div className="font-medium text-sm text-gray-500 px-1 py-1">Community</div>
              {communityNavItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="py-2 pl-3 text-gray-600 hover:text-primary-dark block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
