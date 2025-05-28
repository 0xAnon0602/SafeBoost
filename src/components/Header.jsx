import React from 'react';
import { BarChart3, Users, ExternalLink } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div>
                <h1 className="text-xl font-bold text-gray-900">SafeBoost</h1>
                <p className="text-xs text-gray-500">Points Dashboard</p>
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 