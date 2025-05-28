import React from 'react';
import { ExternalLink, DollarSign, Target } from 'lucide-react';
import { partnerPrograms } from '../data/Data';

const PartnerPrograms = () => {
  return (
    <div id="partners" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner Programs</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Unlock additional rewards by participating in partner programs. Each program offers unique 
          incentives on top of your standard SafeBoost points.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {partnerPrograms.map((program, index) => (
          <div 
            key={program.name}
            className="bg-white rounded-xl card-shadow hover:card-shadow-lg transition-all duration-300 overflow-hidden animate-slide-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div style={{ backgroundColor: program.color }} className={`${program.color} p-6 text-white`}>
              <div className="flex items-center justify-between mb-4">
                <img src={program.icon} className="w-10 h-10" />
                <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium">Active</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">{program.name}</h3>
              <p className="text-white text-opacity-90">{program.description}</p>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <DollarSign className="w-5 h-5 text-green-500" />
                  <span className="font-semibold text-gray-900">Prize Pool</span>
                </div>
                <p className="text-lg font-bold text-gray-900">{program.prizePool}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Target className="w-5 h-5 text-purple-500" />
                  <span className="font-semibold text-gray-900">Rules & Guidelines</span>
                </div>
                <ul className="space-y-2">
                  {program.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="https://kpk.io/safeboost-live-on-gnosis-chain/" target="_blank" rel="noopener noreferrer">
                <button style={{ backgroundColor: program.color }} className={`w-full ${program.color} text-white py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center space-x-2`}>
                  <span>Learn More</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerPrograms; 