import React, { useState } from 'react';
import { Search, Crown, Medal, Award, Copy, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { getLeaderboardWithRanks } from '../data/Data';

const Leaderboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const leaderboardData = getLeaderboardWithRanks();

  const filteredData = leaderboardData.filter(user =>
    user.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const getRankIcon = (rank) => {
    if (rank === 1) return <Crown className="w-5 h-5 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-5 h-5 text-gray-400" />;
    if (rank === 3) return <Award className="w-5 h-5 text-amber-600" />;
    return <span className="text-gray-600 font-semibold">#{rank}</span>;
  };

  const copyAddress = (address) => {
    navigator.clipboard.writeText(address);
  };

  const formatAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const formatAddressMobile = (address) => {
    return `${address.slice(0, 4)}...${address.slice(-3)}`;
  };

  return (
    <div id="leaderboard" className="bg-white rounded-xl card-shadow overflow-hidden">
      <div className="p-4 sm:p-6 border-b border-gray-200">
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Leaderboard</h2>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
              <span className="block sm:inline">{leaderboardData.length.toLocaleString()} participants</span>
              <span className="hidden sm:inline"> • </span>
              <span className="block sm:inline">Updated weekly on Mondays</span>
            </p>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search address..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safe-500 focus:border-transparent outline-none text-sm sm:text-base"
            />
          </div>
        </div>
      </div>

      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rank
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Points
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Beefy Points
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                PoolTogether Points
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedData.map((user, index) => (
              <tr 
                key={user.address}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {getRankIcon(user.rank)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <code className="text-sm font-mono text-gray-900 bg-gray-100 px-2 py-1 rounded">
                      {formatAddress(user.address)}
                    </code>
                    {user.rank <= 3 && (
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <span className="text-lg font-semibold text-gray-900">
                    {user.total_points.toLocaleString()}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <span className="text-gray-900">
                    {user.beefy_points.toLocaleString()}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <span className="text-gray-900">
                    {user.pooltogether_points.toLocaleString()}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      onClick={() => copyAddress(user.address)}
                      className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                      title="Copy address"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <a
                      href={`https://gnosisscan.io/address/${user.address}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                      title="View on Gnosis Scan"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden">
        <div className="divide-y divide-gray-200">
          {paginatedData.map((user, index) => (
            <div key={user.address} className="p-4 hover:bg-gray-50 transition-colors duration-150">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    {getRankIcon(user.rank)}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <code className="text-xs font-mono text-gray-900 bg-gray-100 px-2 py-1 rounded">
                        {formatAddressMobile(user.address)}
                      </code>
                      {user.rank <= 3 && (
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => copyAddress(user.address)}
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-md hover:bg-gray-100"
                    title="Copy address"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <a
                    href={`https://gnosisscan.io/address/${user.address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-md hover:bg-gray-100"
                    title="View on Gnosis Scan"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Total Points</span>
                  <span className="text-lg font-semibold text-gray-900">
                    {user.total_points.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Beefy</span>
                  <span className="text-sm text-gray-900">
                    {user.beefy_points.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">PoolTogether</span>
                  <span className="text-sm text-gray-900">
                    {user.pooltogether_points.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {totalPages > 1 && (
        <div className="px-4 sm:px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between sm:hidden">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center px-3 py-2 text-sm border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Prev
            </button>
            <span className="text-sm text-gray-700">
              {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="flex items-center px-3 py-2 text-sm border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="hidden sm:flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredData.length)} of{' '}
              {filteredData.length} results
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 text-sm border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 text-sm border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leaderboard; 