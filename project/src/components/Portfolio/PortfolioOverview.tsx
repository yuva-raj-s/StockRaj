import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const holdings = [
  { symbol: 'RELIANCE', shares: 100, avgPrice: 2400, currentPrice: 2456.75, change: 2.36 },
  { symbol: 'INFY', shares: 50, avgPrice: 1500, currentPrice: 1456.80, change: -2.88 },
  { symbol: 'TCS', shares: 75, avgPrice: 3500, currentPrice: 3567.90, change: 1.45 },
];

export const PortfolioOverview: React.FC = () => {
  const totalValue = holdings.reduce((sum, stock) => sum + (stock.currentPrice * stock.shares), 0);
  const totalGain = holdings.reduce((sum, stock) => 
    sum + ((stock.currentPrice - stock.avgPrice) * stock.shares), 0);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="glass p-4 rounded-lg">
          <div className="text-text-secondary">Total Value</div>
          <div className="text-xl font-bold text-white">
            ₹{totalValue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
          </div>
        </div>
        <div className="glass p-4 rounded-lg">
          <div className="text-text-secondary">Total Gain/Loss</div>
          <div className={`text-xl font-bold ${totalGain >= 0 ? 'text-success' : 'text-danger'}`}>
            ₹{totalGain.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {holdings.map((stock) => (
          <div key={stock.symbol} className="glass p-4 rounded-lg hover:shadow-neon-sm transition-all duration-300">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-white font-medium">{stock.symbol}</div>
                <div className="text-sm text-text-secondary">{stock.shares} shares</div>
              </div>
              <div className="text-right">
                <div className="text-white">₹{stock.currentPrice.toFixed(2)}</div>
                <div className={`flex items-center text-sm ${
                  stock.change >= 0 ? 'text-success' : 'text-danger'
                }`}>
                  {stock.change >= 0 ? (
                    <TrendingUp className="w-4 h-4 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 mr-1" />
                  )}
                  {stock.change}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};