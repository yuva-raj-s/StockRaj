import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  volume: number;
  marketCap: number;
}

const stocksData: Stock[] = [
  { symbol: 'RELIANCE', name: 'Reliance Industries', price: 2456.75, change: 1.2, volume: 15678900, marketCap: 1567890000000 },
  { symbol: 'TCS', name: 'Tata Consultancy Services', price: 3789.50, change: -0.8, volume: 12345678, marketCap: 1234567890000 },
  { symbol: 'HDFCBANK', name: 'HDFC Bank Ltd.', price: 1678.90, change: 0.5, volume: 9876543, marketCap: 987654321000 },
  // Add more stocks as needed
];

export const StockList: React.FC = () => {
  return (
    <div className="glass p-4 rounded-xl">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 text-sm">
              <th className="text-left p-2">Symbol</th>
              <th className="text-left p-2">Name</th>
              <th className="text-right p-2">Price</th>
              <th className="text-right p-2">Change</th>
              <th className="text-right p-2">Volume</th>
              <th className="text-right p-2">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {stocksData.map((stock) => (
              <tr key={stock.symbol} className="hover:bg-white/5 cursor-pointer">
                <td className="p-2">
                  <span className="text-white font-medium">{stock.symbol}</span>
                </td>
                <td className="p-2 text-gray-400">{stock.name}</td>
                <td className="p-2 text-right text-white">₹{stock.price.toFixed(2)}</td>
                <td className="p-2 text-right">
                  <div className={`flex items-center justify-end ${
                    stock.change >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {stock.change >= 0 ? (
                      <TrendingUp className="w-4 h-4 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 mr-1" />
                    )}
                    {stock.change}%
                  </div>
                </td>
                <td className="p-2 text-right text-gray-400">
                  {(stock.volume / 1000000).toFixed(2)}M
                </td>
                <td className="p-2 text-right text-gray-400">
                  ₹{(stock.marketCap / 10000000).toFixed(2)}Cr
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};