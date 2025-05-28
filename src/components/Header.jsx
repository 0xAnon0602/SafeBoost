import React, { useState } from 'react';
import { BarChart3, Users, ExternalLink, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">SafeBoost</h1>
                <p className="text-xs text-gray-500 hidden sm:block">Points Dashboard</p>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="#leaderboard" 
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <BarChart3 className="w-4 h-4" />
              <span>Leaderboard</span>
            </a>
            <a 
              href="#partners" 
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Users className="w-4 h-4" />
              <span>Partners</span>
            </a>
            <a 
              href="https://kpk.io/safeboost-live-on-gnosis-chain/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Learn More</span>
            </a>
          </nav>

          <div className="flex items-center space-x-2">
            <div className="hidden sm:flex items-center space-x-2 bg-gnosis-50 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-gnosis-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gnosis-700">Gnosis Chain</span>
            </div>
            
            <div className="sm:hidden flex items-center space-x-1 bg-gnosis-50 px-2 py-1 rounded-full">
              <div className="w-2 h-2 bg-gnosis-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-gnosis-700">Gnosis</span>
            </div>

            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a 
                href="#leaderboard" 
                onClick={closeMobileMenu}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                <BarChart3 className="w-4 h-4" />
                <span>Leaderboard</span>
              </a>
              <a 
                href="#partners" 
                onClick={closeMobileMenu}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                <Users className="w-4 h-4" />
                <span>Partners</span>
              </a>
              <a 
                href="https://kpk.io/safeboost-live-on-gnosis-chain/" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Learn More</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 