import React from 'react';
import { BarChart2, PieChart } from 'lucide-react';

const stats = {
  advances: 1234,
  declines: 876,
  unchanged: 234,
  totalTurnover: 123456.78,
  marketCap: 3456789.12
};

export const MarketStats: React.FC = () => {
  return (
    <div className="glass p-4 rounded-xl">
      <div className="flex items-center mb-4 space-x-2">
        <BarChart2 className="w-5 h-5 text-accent-primary" />
        <h3 className="text-lg font-semibold text-white">Market Statistics</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <div>
            <div className="text-sm text-gray-400 mb-1">Market Breadth</div>
            <div className="flex space-x-4">
              <div>
                <div className="text-green-400 font-medium">{stats.advances}</div>
                <div className="text-xs text-gray-400">Advances</div>
              </div>
              <div>
                <div className="text-red-400 font-medium">{stats.declines}</div>
                <div className="text-xs text-gray-400">Declines</div>
              </div>
              <div>
                <div className="text-gray-400 font-medium">{stats.unchanged}</div>
                <div className="text-xs text-gray-400">Unchanged</div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-400 mb-1">Total Turnover</div>
            <div className="text-lg font-bold text-white">
              ₹{(stats.totalTurnover / 1000).toFixed(2)}K Cr
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative">
            <PieChart className="w-20 h-20 text-accent-primary animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-xs text-center">
                <div className="text-white font-medium">Market Cap</div>
                <div className="text-accent-primary">
                  ₹{(stats.marketCap / 1000).toFixed(0)}K Cr
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};