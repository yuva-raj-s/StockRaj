import React from 'react';
import { TrendingUp, AlertCircle } from 'lucide-react';

interface Indicator {
  name: string;
  value: number;
  signal: 'buy' | 'sell' | 'neutral';
  strength: number;
}

const indicators: Indicator[] = [
  { name: 'RSI', value: 65.42, signal: 'buy', strength: 75 },
  { name: 'MACD', value: 12.34, signal: 'buy', strength: 80 },
  { name: 'Bollinger', value: 0.85, signal: 'neutral', strength: 60 }
];

export const TechnicalIndicators: React.FC = () => {
  return (
    <div className="glass p-4 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-accent-primary" />
          <h3 className="text-lg font-semibold text-white">Technical Indicators</h3>
        </div>
        <AlertCircle className="w-5 h-5 text-accent-secondary cursor-help" title="Based on real-time calculations" />
      </div>
      <div className="space-y-4">
        {indicators.map((indicator) => (
          <div key={indicator.name} className="glass p-3 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">{indicator.name}</span>
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                indicator.signal === 'buy' ? 'bg-green-500/20 text-green-400' :
                indicator.signal === 'sell' ? 'bg-red-500/20 text-red-400' :
                'bg-gray-500/20 text-gray-400'
              }`}>
                {indicator.signal.toUpperCase()}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white font-medium">{indicator.value}</span>
              <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent-primary"
                  style={{ width: `${indicator.strength}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};