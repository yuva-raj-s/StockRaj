import React from 'react';
import { Briefcase } from 'lucide-react';
import { StockCard } from './StockCard';
import type { UserStock } from '../../../types/portfolio';

interface StocksListProps {
  stocks: UserStock[];
}

export const StocksList: React.FC<StocksListProps> = ({ stocks }) => {
  return (
    <>
      <h3 className="text-lg font-semibold text-white flex items-center mb-4">
        <Briefcase className="w-5 h-5 mr-2 text-accent" />
        Your Stocks
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stocks.map((stock) => (
          <StockCard key={stock.symbol} stock={stock} />
        ))}
      </div>
    </>
  );
};