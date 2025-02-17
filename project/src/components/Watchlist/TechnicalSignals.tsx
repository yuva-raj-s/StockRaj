import React from 'react';
import { BarChart2 } from 'lucide-react';

const signals = [
  { symbol: 'RELIANCE', signal: 'Strong Buy', strength: 85 },
  { symbol: 'TCS', signal: 'Hold', strength: 55 },
  { symbol: 'INFY', signal: 'Buy', strength: 75 },
];

export const TechnicalSignals: React.FC = () => {
  return (
    <>
      <h3 className="text-lg font-semibold text-white flex items-center mb-4">
        <BarChart2 className="w-5 h-5 mr-2 text-accent" />
        Technical Signals
      </h3>
      <div className="space-y-3">
        {signals.map((item) => (
          <div key={item.symbol} className="glass p-3 rounded-lg hover:shadow-neon-sm transition-all duration-300">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white">{item.symbol}</span>
              <span className={`text-sm ${
                item.strength >= 80 ? 'text-success' :
                item.strength >= 60 ? 'text-warning' :
                'text-text-secondary'
              }`}>
                {item.signal}
              </span>
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