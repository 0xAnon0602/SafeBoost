import React from 'react';
import { ExternalLink, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">SafeBoost</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4 max-w-md leading-relaxed">
                SafeBoost rewards Safe users for their activity on Gnosis Chain. Earn points through 
                transactions, asset storage, and partner program participation.
              </p>
            </div>
            <div className="text-xs sm:text-sm text-gray-400">
              <p>Data is taken from the Dune Dashboard</p>
              <p>built by kpk Team.</p>
            </div>
          </div>

          <div className="order-2 sm:order-none">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-2">
              <li>
                <a 
                  href="#leaderboard" 
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors block py-1"
                >
                  Leaderboard
                </a>
              </li>
              <li>
                <a 
                  href="#partners" 
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors block py-1"
                >
                  Partner Programs
                </a>
              </li>
              <li>
                <a 
                  href="https://dune.com/kpk/safe-boost-gc" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors flex items-center space-x-1 py-1"
                >
                  <span>Dune Dashboard</span>
                  <ExternalLink className="w-3 h-3 sm:w-3 sm:h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div className="order-3 sm:order-none">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Resources</h4>
            <ul className="space-y-2 sm:space-y-2">
              <li>
                <a 
                  href="https://safe.global" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors flex items-center space-x-1 py-1"
                >
                  <span>Safe Wallet</span>
                  <ExternalLink className="w-3 h-3 sm:w-3 sm:h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://gnosischain.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors flex items-center space-x-1 py-1"
                >
                  <span>Gnosis Chain</span>
                  <ExternalLink className="w-3 h-3 sm:w-3 sm:h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://pooltogether.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors flex items-center space-x-1 py-1"
                >
                  <span>PoolTogether</span>
                  <ExternalLink className="w-3 h-3 sm:w-3 sm:h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://beefy.finance" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors flex items-center space-x-1 py-1"
                >
                  <span>Beefy Finance</span>
                  <ExternalLink className="w-3 h-3 sm:w-3 sm:h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              Built by 0xAnon0602
            </div>
            
            <div className="flex items-center justify-center sm:justify-end space-x-6">
              <a 
                href="https://github.com/0xAnon0602/SafeBoost" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 -m-2"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/0xAnon0602" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 -m-2"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 