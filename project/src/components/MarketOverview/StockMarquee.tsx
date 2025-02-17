import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const nifty50Stocks = [
  { symbol: 'RELIANCE', price: 2456.75, change: 1.2 },
  { symbol: 'TCS', price: 3789.50, change: -0.8 },
  { symbol: 'HDFC', price: 1567.80, change: 2.3 },
  { symbol: 'INFY', price: 1456.90, change: -1.5 },
  { symbol: 'ICICI', price: 987.65, change: 0.7 },
  // Add more stocks to complete Nifty 50
];

export const StockMarquee: React.FC = () => {
  return (
    <div className="glass py-2 px-4 mb-6 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {[...nifty50Stocks, ...nifty50Stocks].map((stock, index) => (
          <div
            key={`${stock.symbol}-${index}`}
            className="inline-flex items-center mx-4"
          >
            <span className="text-white font-medium">{stock.symbol}</span>
            <span className="mx-2">₹{stock.price}</span>
            <span className={`flex items-center ${
              stock.change >= 0 ? 'text-success' : 'text-danger'
            }`}>
              {stock.change >= 0 ? (
                <TrendingUp className="w-4 h-4 mr-1" />
              ) : (
                <TrendingDown className="w-4 h-4 mr-1" />
              )}
              {stock.change}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};