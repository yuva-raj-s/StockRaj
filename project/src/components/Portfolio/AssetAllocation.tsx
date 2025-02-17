import React from 'react';
import { PieChart, TrendingUp, TrendingDown } from 'lucide-react';

const holdings = [
  { symbol: 'RELIANCE', allocation: 35, value: 245675, change: 2.36 },
  { symbol: 'INFY', allocation: 25, value: 72840, change: -2.88 },
  { symbol: 'TCS', allocation: 40, value: 267592.50, change: 1.45 },
];

export const AssetAllocation: React.FC = () => {
  const totalValue = holdings.reduce((sum, stock) => sum + stock.value, 0);

  return (
    <>
      <h3 className="text-lg font-semibold text-white flex items-center mb-4">
        <PieChart className="w-5 h-5 mr-2 text-accent" />
        Asset Allocation
      </h3>
      <div className="space-y-4">
        {holdings.map((holding) => (
          <div key={holding.symbol} className="glass p-4 rounded-lg hover:shadow-neon-sm transition-all duration-300">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-white font-medium">{holding.symbol}</div>
                <div className="text-sm text-text-secondary">
                  {holding.allocation}% of portfolio
                </div>
              </div>
              <div className="text-right">
                <div className="text-white">₹{holding.value.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</div>
                <div className={`flex items-center text-sm ${
                  holding.change >= 0 ? 'text-success' : 'text-danger'
                }`}>
                  {holding.change >= 0 ? (
                    <TrendingUp className="w-4 h-4 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 mr-1" />
                  )}
                  {holding.change}%
                </div>
              </div>
            </div>
            <div className="mt-2 w-full bg-secondary/30 rounded-full h-1">
              <div
                className="h-full rounded-full bg-accent"
                style={{ width: `${holding.allocation}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};