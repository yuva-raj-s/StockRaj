import React from 'react';
import { TrendingUp, DollarSign, BarChart2 } from 'lucide-react';

const signals = [
  { metric: 'P/E Ratio', value: '22.5', status: 'Moderate', strength: 65 },
  { metric: 'ROE', value: '18.2%', status: 'Strong', strength: 85 },
  { metric: 'Debt/Equity', value: '0.45', status: 'Good', strength: 75 },
];

export const FundamentalSignals: React.FC = () => {
  return (
    <>
      <h3 className="text-lg font-semibold text-white flex items-center mb-4">
        <DollarSign className="w-5 h-5 mr-2 text-accent" />
        Fundamental Signals
      </h3>
      <div className="space-y-3">
        {signals.map((item) => (
          <div key={item.metric} className="glass p-3 rounded-lg hover:shadow-neon-sm transition-all duration-300">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white">{item.metric}</span>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">{item.value}</span>
                <span className={`text-sm ${
                  item.strength >= 80 ? 'text-success' :
                  item.strength >= 60 ? 'text-warning' :
                  'text-text-secondary'
                }`}>
                  {item.status}
                </span>
              </div>
            </div>
            <div className="w-full bg-secondary/30 rounded-full h-1">
              <div
                className={`h-full rounded-full ${
                  item.strength >= 80 ? 'bg-success' :
                  item.strength >= 60 ? 'bg-warning' :
                  'bg-text-secondary'
                }`}
                style={{ width: `${item.strength}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};