import React, { useState } from 'react';
import Header from './components/Header';
import StatsOverview from './components/StatsOverview';
import Leaderboard from './components/Leaderboard';
import PartnerPrograms from './components/PartnerPrograms';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import { Search } from 'lucide-react';
import { leaderboardData, calculateRank } from './data/Data';

function App() {
  const [searchAddress, setSearchAddress] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [searchError, setSearchError] = useState('');

  const handleSearch = () => {
    setSearchError('');
    
    if (!searchAddress.trim()) {
      setSearchError('Please enter a wallet address');
      return;
    }

    const user = leaderboardData.find(
      user => user.address.toLowerCase() === searchAddress.toLowerCase()
    );

    if (user) {
      const userWithRank = {
        ...user,
        rank: calculateRank(user.address)
      };
      setSearchResult(userWithRank);
    } else {
      setSearchError('Address not found in leaderboard');
      setSearchResult(null);
    }
  };

  const clearSearch = () => {
    setSearchAddress('');
    setSearchResult(null);
    setSearchError('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="bg-gradient-to-br from-safe-500 via-safe-600 to-gnosis-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              SafeBoost Points
            </h1>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white text-opacity-90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Track your rewards across partner protocols and climb the leaderboard
            </p>
            
            <div className="max-w-2xl mx-auto px-4 sm:px-0">
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="relative">
                  <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                  <input
                    type="text"
                    placeholder="Enter wallet address..."
                    value={searchAddress}
                    onChange={(e) => setSearchAddress(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 text-gray-900 placeholder-gray-500 bg-white rounded-lg sm:rounded-xl border-0 focus:ring-2 sm:focus:ring-4 focus:ring-white focus:ring-opacity-20 outline-none text-sm sm:text-base lg:text-lg"
                  />
                </div>
                <button
                  onClick={handleSearch}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-safe-600 font-semibold rounded-lg sm:rounded-xl hover:bg-gray-50 transition-colors duration-200 text-sm sm:text-base"
                >
                  Search Profile
                </button>
              </div>
              
              {searchError && (
                <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-red-500 bg-opacity-20 border border-red-300 rounded-lg">
                  <p className="text-red-200 text-sm sm:text-base">{searchError}</p>
                </div>
              )}
              
              {searchResult && (
                <div className="mt-3 sm:mt-4">
                  <button
                    onClick={clearSearch}
                    className="text-white text-opacity-80 hover:text-opacity-100 underline text-sm sm:text-base"
                  >
                    ← View Full Leaderboard
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="space-y-8 sm:space-y-12">
          {searchResult ? (
            <>
              <UserProfile searchResult={searchResult} />
            </>
          ) : (
            <>
              <StatsOverview />
              <Leaderboard />
              <PartnerPrograms />
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App; 