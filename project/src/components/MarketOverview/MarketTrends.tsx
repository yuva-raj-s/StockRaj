import React, { useState } from 'react';
import { TrendingUp, TrendingDown, BarChart2 } from 'lucide-react';

interface StockTrend {
  symbol: string;
  name: string;
  price: number;
  change: number;
  volume: number;
}

const trendData: Record<string, StockTrend[]> = {
  active: [
    { symbol: 'RELIANCE', name: 'Reliance Industries', price: 2456.75, change: 1.2, volume: 15678900 },
    { symbol: 'TCS', name: 'Tata Consultancy Services', price: 3789.50, change: -0.8, volume: 12345678 },
  ],
  gainers: [
    { symbol: 'TATASTEEL', name: 'Tata Steel Limited', price: 145.80, change: 5.6, volume: 9876543 },
    { symbol: 'BAJFINANCE', name: 'Bajaj Finance Limited', price: 6789.45, change: 4.2, volume: 7654321 },
  ],
  losers: [
    { symbol: 'HCLTECH', name: 'HCL Technologies', price: 1234.56, change: -3.4, volume: 6543210 },
    { symbol: 'WIPRO', name: 'Wipro Limited', price: 456.78, change: -2.9, volume: 5432109 },
  ],
};

export const MarketTrends: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'active' | 'gainers' | 'losers'>('active');

  return (
    <div className="glass p-4 rounded-xl">
      <div className="flex items-center mb-4 space-x-2">
        <TrendingUp className="w-5 h-5 text-accent-primary" />
        <h3 className="text-lg font-semibold text-white">Market Trends</h3>
      </div>

      <div className="flex space-x-2 mb-4">
        {[
          { id: 'active', label: 'Most Active', icon: BarChart2 },
          { id: 'gainers', label: 'Top Gainers', icon: TrendingUp },
          { id: 'losers', label: 'Top Losers', icon: TrendingDown },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as 'active' | 'gainers' | 'losers')}
            className={`flex items-center space-x-1 px-3 py-1 rounded-lg transition-all ${
              activeTab === tab.id 
                ? 'bg-accent-primary/20 text-accent-primary' 
                : 'text-gray-400 hover:bg-white/5'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {trendData[activeTab].map((stock, index) => (
          <div key={index} className="glass p-3 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-white font-medium">{stock.symbol}</div>
                <div className="text-xs text-gray-400">{stock.name}</div>
              </div>
              <div className="text-right">
                <div className="text-white">₹{stock.price.toFixed(2)}</div>
                <div className={`text-sm ${stock.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {stock.change >= 0 ? '+' : ''}{stock.change}%
                </div>
              </div>
            </div>
            <div className="text-xs text-gray-400 mt-1">
              Vol: {(stock.volume / 1000000).toFixed(2)}M
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};