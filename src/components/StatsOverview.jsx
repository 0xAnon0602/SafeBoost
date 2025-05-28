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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="bg-white rounded-xl p-6 card-shadow hover:card-shadow-lg transition-all duration-300 animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <div className={`text-sm px-2 py-1 rounded-full ${
              stat.changeType === 'increase' 
                ? 'bg-green-100 text-green-700' 
                : 'bg-gray-100 text-gray-600'
            }`}>
              {stat.change}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-gray-600 text-sm">{stat.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview; 