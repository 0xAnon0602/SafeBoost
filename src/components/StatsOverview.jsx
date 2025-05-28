import React from 'react';
import { Users, Trophy, Calendar, Target } from 'lucide-react';
import { programStats } from '../data/Data';

const StatsOverview = () => {
  const calculateDaysLeft = (endDate) => {
    const today = new Date();
    const end = new Date(endDate);
    const diffTime = end - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) {
      return 'Program ended';
    } else if (diffDays === 0) {
      return 'Ends today';
    } else if (diffDays === 1) {
      return '1 day left';
    } else {
      return `${diffDays} days left`;
    }
  };

  const stats = [
    {
      title: 'Total Participants',
      value: programStats.totalParticipants.toLocaleString(),
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      title: 'Points Distributed',
      value: parseInt(programStats.totalPointsDistributed).toLocaleString(),
      icon: Trophy,
      color: 'bg-yellow-500',
    },
    {
      title: 'Active Partners',
      value: programStats.activePartners,
      icon: Target,
      color: 'bg-green-500',
    },
    {
      title: 'Program Ends',
      value: new Date(programStats.programEndDate).toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        year: 'numeric'
      }),
      icon: Calendar,
      color: 'bg-purple-500',
      change: calculateDaysLeft(programStats.programEndDate),
      changeType: 'neutral'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 card-shadow hover:card-shadow-lg transition-all duration-300 animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-4">
            <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${stat.color} rounded-md sm:rounded-lg flex items-center justify-center mb-2 sm:mb-0`}>
              <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            {stat.change && (
              <div className={`text-xs sm:text-sm px-2 py-1 rounded-full self-start sm:self-auto ${
                stat.changeType === 'increase' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {stat.change}
              </div>
            )}
          </div>
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 leading-tight">
              {stat.value}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-tight">{stat.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview; 