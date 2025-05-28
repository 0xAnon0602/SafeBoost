import React from 'react';
import { Award, Shield, Trophy, Percent } from 'lucide-react';
import { programStats, calculateRank } from '../data/Data';

const UserProfile = ({ searchResult }) => {
  const formatAddress = (address) => {
    return `${address.slice(0, 8)}...${address.slice(-6)}`;
  };

  const formatAddressMobile = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const currentUser = {
    address: searchResult.address,
    totalPoints: searchResult.total_points,
    rank: calculateRank(searchResult.address),
    beefyPoints: searchResult.beefy_points,
    pooltogetherPoints: searchResult.pooltogether_points,
  };

  const pointsPercentage = ((currentUser.totalPoints / programStats.totalPointsDistributed) * 100).toFixed(3);
  
  const rankPercentage = (((programStats.totalParticipants - currentUser.rank) / programStats.totalParticipants) * 100).toFixed(1);

  return (
    <div className="space-y-6 sm:space-y-8 px-4 sm:px-0">
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl card-shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-safe-500 to-safe-600 p-4 sm:p-6 lg:p-8 text-white">
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 w-full">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-20 rounded-xl sm:rounded-2xl flex items-center justify-center backdrop-blur-sm mx-auto sm:mx-0">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
                    {searchResult ? 'SafeBoost Profile' : 'Your SafeBoost Profile'}
                  </h1>
                  <div className="flex flex-row flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
                    <code className="text-sm sm:text-base lg:text-lg font-mono bg-white bg-opacity-20 px-2 sm:px-3 py-1 sm:py-2 rounded-md sm:rounded-lg backdrop-blur-sm">
                      <span className="sm:hidden">{formatAddressMobile(currentUser.address)}</span>
                      <span className="hidden sm:inline">{formatAddress(currentUser.address)}</span>
                    </code>
                    {currentUser.rank <= 3 && (
                      <div className="flex items-center justify-center sm:justify-start space-x-1 bg-yellow-400 bg-opacity-20 px-2 sm:px-3 py-1 rounded-full">
                        <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-200" />
                        <span className="text-xs sm:text-sm font-medium text-yellow-200">Top Performer</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="text-center sm:text-right mt-2 sm:mt-0">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">{currentUser.totalPoints.toLocaleString()}</div>
                <div className="text-sm sm:text-base lg:text-lg text-white text-opacity-90">Total Points</div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg sm:rounded-xl border border-yellow-200">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">#{currentUser.rank}</div>
              <div className="text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Current Rank</div>
              <div className="text-xs text-gray-600 leading-tight">
                <span className="block sm:inline">Top {((currentUser.rank / programStats.totalParticipants) * 100).toFixed(1)}%</span>
                <span className="hidden sm:inline"> • </span>
                <span className="block sm:inline">Better than {rankPercentage}%</span>
              </div>
            </div>

            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg sm:rounded-xl border border-blue-200">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Percent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{pointsPercentage}%</div>
              <div className="text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Points Share</div>
              <div className="text-xs text-gray-600">Of total points distributed</div>
            </div>

            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg sm:rounded-xl border border-purple-200">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                {currentUser.rank <= 10 ? 'Elite' : currentUser.rank <= 100 ? 'Top Tier' : currentUser.rank <= 1000 ? 'High' : 'Active'}
              </div>
              <div className="text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Performance</div>
              <div className="text-xs text-gray-600 leading-tight">
                {currentUser.rank <= 10 ? 'Top 10 performer' : currentUser.rank <= 100 ? 'Top 100 performer' : 'Active participant'}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 flex items-center space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-900 rounded-md sm:rounded-lg flex items-center justify-center">
                <span className="text-white text-xs sm:text-sm font-bold">📊</span>
              </div>
              <span>Points Breakdown</span>
            </h3>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between p-3 sm:p-4 bg-safe-50 rounded-lg border border-safe-200">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-safe-500 rounded-md sm:rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">SafeBoost Points</div>
                    <div className="text-xs sm:text-sm text-gray-600">Core activity rewards</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg sm:text-2xl font-bold text-gray-900">
                    {(currentUser.totalPoints - currentUser.beefyPoints - currentUser.pooltogetherPoints).toLocaleString()}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {(((currentUser.totalPoints - currentUser.beefyPoints - currentUser.pooltogetherPoints) / currentUser.totalPoints) * 100).toFixed(1)}%
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 sm:p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div style={{ backgroundColor: '#232742' }} className="w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg flex items-center justify-center">
                    <img src="https://avatars.githubusercontent.com/u/71276150?s=200&v=4" className="w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg" alt="Beefy Finance" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">Beefy Points</div>
                    <div className="text-xs sm:text-sm text-gray-600">Beefy Finance rewards</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg sm:text-2xl font-bold text-gray-900">{currentUser.beefyPoints.toLocaleString()}</div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {((currentUser.beefyPoints / currentUser.totalPoints) * 100).toFixed(1)}%
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 sm:p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div style={{ backgroundColor: '#21064F' }} className="w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg flex items-center justify-center">
                    <img src="https://avatars.githubusercontent.com/u/52546024?s=200&v=4" className="w-6 h-6 sm:w-7 sm:h-7" alt="PoolTogether" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">PoolTogether Points</div>
                    <div className="text-xs sm:text-sm text-gray-600">PoolTogether rewards</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg sm:text-2xl font-bold text-gray-900">{currentUser.pooltogetherPoints.toLocaleString()}</div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {((currentUser.pooltogetherPoints / currentUser.totalPoints) * 100).toFixed(1)}%
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 sm:p-4 bg-gray-900 rounded-lg text-white border-t-4 border-safe-500">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-20 rounded-md sm:rounded-lg flex items-center justify-center">
                    <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-base sm:text-lg">Total Points</div>
                    <div className="text-xs sm:text-sm text-gray-300">All sources combined</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl sm:text-3xl font-bold">{currentUser.totalPoints.toLocaleString()}</div>
                  <div className="text-xs sm:text-sm text-gray-300">100%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile; 