'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className={`p-2 rounded-lg ${
              isScrolled ? 'bg-orange-500' : 'bg-white'
            }`}>
              <Dumbbell className={`w-6 h-6 ${
                isScrolled ? 'text-white' : 'text-orange-500'
              }`} />
            </div>
            <span className={`text-2xl font-bold ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              FitPro
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-300'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-300'
              }`}
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-300'
              }`}
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-300'
              }`}
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 space-y-4">
            <button
              onClick={() => scrollToSection('services')}
              className={`block w-full text-left font-medium py-2 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className={`block w-full text-left font-medium py-2 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className={`block w-full text-left font-medium py-2 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`block w-full text-left font-medium py-2 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}