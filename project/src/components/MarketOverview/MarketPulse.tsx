import React from 'react';
import { Activity, TrendingUp, TrendingDown } from 'lucide-react';

interface IndexData {
  name: string;
  value: number;
  change: number;
  changePercent: number;
}

const indices: IndexData[] = [
  { name: 'NIFTY 50', value: 22345.30, change: 123.45, changePercent: 0.55 },
  { name: 'SENSEX', value: 73456.78, change: -234.56, changePercent: -0.32 },
  { name: 'NIFTY BANK', value: 46789.12, change: 345.67, changePercent: 0.74 }
];

export const MarketPulse: React.FC = () => {
  return (
    <div className="glass p-4 rounded-xl">
      <div className="flex items-center mb-4 space-x-2">
        <Activity className="w-5 h-5 text-accent-primary" />
        <h3 className="text-lg font-semibold text-white">Market Pulse</h3>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {indices.map((index) => (
          <div key={index.name} className="glass p-3 rounded-lg">
            <div className="text-sm text-gray-400">{index.name}</div>
            <div className="text-lg font-bold text-white">
              {index.value.toLocaleString('en-IN')}
            </div>
            <div className={`flex items-center text-sm ${
              index.change >= 0 ? 'text-green-400' : 'text-red-400'
            }`}>
              {index.change >= 0 ? (
                <TrendingUp className="w-4 h-4 mr-1" />
              ) : (
                <TrendingDown className="w-4 h-4 mr-1" />
              )}
              {index.change.toFixed(2)} ({index.changePercent.toFixed(2)}%)
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};