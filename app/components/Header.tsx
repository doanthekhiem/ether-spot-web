'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.svg" alt="ETHERSPOT Logo" className="h-8 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-primary transition-colors">
              Home
            </a>
            <a href="#how-it-works" className="text-white hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#token-utility" className="text-white hover:text-primary transition-colors">
              Token Utility
            </a>
            <a href="#use-cases" className="text-white hover:text-primary transition-colors">
              Use Cases
            </a>
            <a href="#roadmap" className="text-white hover:text-primary transition-colors">
              Roadmap
            </a>
            <a href="#whitepaper" className="text-white hover:text-primary transition-colors">
              Whitepaper
            </a>
            <button 
              className="px-6 py-2 rounded-lg font-semibold text-black transition-all duration-200 hover:scale-105"
              style={{
                background: 'rgba(95, 213, 46, 0.61)',
                border: '0.37px solid',
                borderImage: 'linear-gradient(135deg, #5FD52E 0%, #479F22 50%, rgba(50, 111, 24, 0.51) 100%) 1',
                boxShadow: '0px 2.24px 1.49px 0px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              Join Waitlist
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-primary transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 border-t border-gray-800">
              <a href="#home" className="block px-3 py-2 text-white hover:text-primary transition-colors">
                Home
              </a>
              <a href="#how-it-works" className="block px-3 py-2 text-white hover:text-primary transition-colors">
                How It Works
              </a>
              <a href="#token-utility" className="block px-3 py-2 text-white hover:text-primary transition-colors">
                Token Utility
              </a>
              <a href="#use-cases" className="block px-3 py-2 text-white hover:text-primary transition-colors">
                Use Cases
              </a>
              <a href="#roadmap" className="block px-3 py-2 text-white hover:text-primary transition-colors">
                Roadmap
              </a>
              <a href="#whitepaper" className="block px-3 py-2 text-white hover:text-primary transition-colors">
                Whitepaper
              </a>
              <button 
                className="w-full mt-4 px-6 py-2 rounded-lg font-semibold text-black transition-all duration-200 hover:scale-105"
                style={{
                  background: 'rgba(95, 213, 46, 0.61)',
                  border: '0.37px solid',
                  borderImage: 'linear-gradient(135deg, #5FD52E 0%, #479F22 50%, rgba(50, 111, 24, 0.51) 100%) 1',
                  boxShadow: '0px 2.24px 1.49px 0px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                Join Waitlist
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 