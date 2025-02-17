import React, { useEffect, useRef } from 'react';
import { TrendingUp } from 'lucide-react';

interface SearchSuggestionsProps {
  query: string;
  onSelect: (stock: string) => void;
  onClickOutside: () => void;
}

// Mock data - In production, this would come from an API
const mockStocks = [
  { symbol: 'RELIANCE', name: 'Reliance Industries Ltd.' },
  { symbol: 'TCS', name: 'Tata Consultancy Services Ltd.' },
  { symbol: 'INFY', name: 'Infosys Ltd.' },
  { symbol: 'HDFCBANK', name: 'HDFC Bank Ltd.' },
];

export const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({
  query,
  onSelect,
  onClickOutside,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClickOutside]);

  const filteredStocks = mockStocks.filter(
    (stock) =>
      stock.symbol.toLowerCase().includes(query.toLowerCase()) ||
      stock.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      ref={ref}
      className="absolute z-50 w-full mt-2 glass rounded-lg shadow-lg overflow-hidden"
    >
      <div className="max-h-60 overflow-y-auto">
        {filteredStocks.map((stock) => (
          <button
            key={stock.symbol}
            onClick={() => onSelect(stock.symbol)}
            className="w-full px-4 py-2 flex items-center space-x-3 hover:bg-white/5 transition-colors"
          >
            <TrendingUp className="w-4 h-4 text-accent-primary" />
            <div className="text-left">
              <div className="text-white font-medium">{stock.symbol}</div>
              <div className="text-sm text-gray-400">{stock.name}</div>
            </div>
          </button>
        ))}
        {filteredStocks.length === 0 && (
          <div className="px-4 py-3 text-gray-400 text-center">
            No stocks found matching "{query}"
          </div>
        )}
      </div>
    </div>
  );
};