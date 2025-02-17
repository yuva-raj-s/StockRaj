import React from 'react';
import { Bell, Star, TrendingUp, TrendingDown } from 'lucide-react';

const mockWatchlist = [
  { symbol: 'RELIANCE', name: 'Reliance Industries', price: 2456.75, change: 1.2, alerts: true, volume: 15678900, marketCap: 1567890000000 },
  { symbol: 'TCS', name: 'Tata Consultancy Services', price: 3789.50, change: -0.8, alerts: false, volume: 12345678, marketCap: 1234567890000 },
  { symbol: 'INFY', name: 'Infosys Limited', price: 1567.80, change: 2.3, alerts: true, volume: 8765432, marketCap: 876543210000 },
];

export const WatchlistTable: React.FC = () => {
  return (
    <div className="space-y-4">
      {mockWatchlist.map((item) => (
        <div key={item.symbol} className="glass p-4 rounded-lg hover:shadow-neon-sm transition-all duration-300">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-white font-medium flex items-center">
                {item.symbol}
                <Star className="w-4 h-4 ml-2 text-warning fill-current" />
              </div>
              <div className="text-sm text-text-secondary">{item.name}</div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <div className="text-white">₹{item.price.toFixed(2)}</div>
                <div className={`flex items-center text-sm ${
                  item.change >= 0 ? 'text-success' : 'text-danger'
                }`}>
                  {item.change >= 0 ? (
                    <TrendingUp className="w-4 h-4 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 mr-1" />
                  )}
                  {item.change}%
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-text-secondary">Volume</div>
                <div className="text-white">{(item.volume / 1000000).toFixed(2)}M</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-text-secondary">Market Cap</div>
                <div className="text-white">₹{(item.marketCap / 10000000).toFixed(2)}Cr</div>
              </div>
              <button className={`glass-button p-2 ${item.alerts ? 'text-warning' : ''}`}>
                <Bell className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};