import React from 'react';
import { Award, Shield, Trophy, Percent } from 'lucide-react';
import { userProfile, programStats, calculateRank } from '../data/Data';

const UserProfile = ({ searchResult }) => {
  const formatAddress = (address) => {
    return `${address.slice(0, 8)}...${address.slice(-6)}`;
  };

  // Use searchResult if provided, otherwise use default userProfile
  const currentUser = searchResult ? {
    address: searchResult.address,
    totalPoints: searchResult.total_points,
    rank: calculateRank(searchResult.address),
    beefyPoints: searchResult.beefy_points,
    pooltogetherPoints: searchResult.pooltogether_points,
    weeklyTransactions: Math.floor(Math.random() * 20) + 5, // Mock data
    totalTransactions: Math.floor(Math.random() * 100) + 50, // Mock data
    tvl: Math.floor(Math.random() * 20000) + 5000, // Mock data
    joinedWeek: Math.floor(Math.random() * 9) + 1, // Mock data
    pointsBooster: searchResult.total_points > 1000, // Mock logic
    prePausePoints: Math.floor(searchResult.total_points * 0.5) // Mock data
  } : {
    ...userProfile,
    rank: calculateRank(userProfile.address)
  };

  const pointsPercentage = ((currentUser.totalPoints / programStats.totalPointsDistributed) * 100).toFixed(3);
  
  const rankPercentage = (((programStats.totalParticipants - currentUser.rank) / programStats.totalParticipants) * 100).toFixed(1);

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl card-shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-safe-500 to-safe-600 p-8 text-white">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  {searchResult ? 'SafeBoost Profile' : 'Your SafeBoost Profile'}
                </h1>
                <div className="flex items-center space-x-3">
                  <code className="text-lg font-mono bg-white bg-opacity-20 px-3 py-2 rounded-lg backdrop-blur-sm">
                    {formatAddress(currentUser.address)}
                  </code>
                  {currentUser.rank <= 3 && (
                    <div className="flex items-center space-x-1 bg-yellow-400 bg-opacity-20 px-3 py-1 rounded-full">
                      <Trophy className="w-4 h-4 text-yellow-200" />
                      <span className="text-sm font-medium text-yellow-200">Top Performer</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="text-5xl font-bold mb-2">{currentUser.totalPoints.toLocaleString()}</div>
              <div className="text-lg text-white text-opacity-90">Total Points</div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
              <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">#{currentUser.rank}</div>
              <div className="text-sm font-medium text-gray-700 mb-2">Current Rank</div>
              <div className="text-xs text-gray-600">
                Top {((currentUser.rank / programStats.totalParticipants) * 100).toFixed(1)}% • Better than {rankPercentage}% of participants
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Percent className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{pointsPercentage}%</div>
              <div className="text-sm font-medium text-gray-700 mb-2">Points Share</div>
              <div className="text-xs text-gray-600">Of total points distributed</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {currentUser.rank <= 10 ? 'Elite' : currentUser.rank <= 100 ? 'Top Tier' : currentUser.rank <= 1000 ? 'High' : 'Active'}
              </div>
              <div className="text-sm font-medium text-gray-700 mb-2">Performance</div>
              <div className="text-xs text-gray-600">
                {currentUser.rank <= 10 ? 'Top 10 performer' : currentUser.rank <= 100 ? 'Top 100 performer' : 'Active participant'}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">📊</span>
              </div>
              <span>Points Breakdown</span>
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-safe-50 rounded-lg border border-safe-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-safe-500 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">SafeBoost Points</div>
                    <div className="text-sm text-gray-600">Core activity rewards</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">
                    {(currentUser.totalPoints - currentUser.beefyPoints - currentUser.pooltogetherPoints).toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">
                    {(((currentUser.totalPoints - currentUser.beefyPoints - currentUser.pooltogetherPoints) / currentUser.totalPoints) * 100).toFixed(1)}%
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg">🐄</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Beefy Points</div>
                    <div className="text-sm text-gray-600">Beefy Finance rewards</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{currentUser.beefyPoints.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">
                    {((currentUser.beefyPoints / currentUser.totalPoints) * 100).toFixed(1)}%
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg">🎯</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">PoolTogether Points</div>
                    <div className="text-sm text-gray-600">PoolTogether rewards</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{currentUser.pooltogetherPoints.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">
                    {((currentUser.pooltogetherPoints / currentUser.totalPoints) * 100).toFixed(1)}%
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-900 rounded-lg text-white border-t-4 border-safe-500">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Total Points</div>
                    <div className="text-sm text-gray-300">All sources combined</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">{currentUser.totalPoints.toLocaleString()}</div>
                  <div className="text-sm text-gray-300">100%</div>
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