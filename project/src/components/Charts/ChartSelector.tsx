import React from 'react';
import { BarChart2, LineChart, CandlestickChart } from 'lucide-react';

interface ChartSelectorProps {
  onSelect: (type: string) => void;
  selected: string;
}

export const ChartSelector: React.FC<ChartSelectorProps> = ({ onSelect, selected }) => {
  const chartTypes = [
    { id: 'line', name: 'Line', icon: <LineChart className="w-4 h-4" /> },
    { id: 'candle', name: 'Candlestick', icon: <CandlestickChart className="w-4 h-4" /> },
    { id: 'bar', name: 'Bar', icon: <BarChart2 className="w-4 h-4" /> },
  ];

  return (
    <div className="flex space-x-2">
      {chartTypes.map((type) => (
        <button
          key={type.id}
          onClick={() => onSelect(type.id)}
          className={`glass px-3 py-2 rounded-lg flex items-center space-x-2 transition-all
            ${selected === type.id 
              ? 'bg-accent-primary/20 text-accent-primary' 
              : 'hover:bg-white/5 text-gray-400'}`}
        >
          {type.icon}
          <span className="text-sm">{type.name}</span>
        </button>
      ))}
    </div>
  );
};