import React, { useState } from 'react';
import { ChartSelector } from './ChartSelector';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface StockChartProps {
  symbol: string;
  data: {
    price: number;
    change: number;
    changePercent: number;
  };
}

const StockChart: React.FC<StockChartProps> = ({ symbol, data }) => {
  const [chartType, setChartType] = useState('candle');
  const isPositive = data.change >= 0;

  return (
    <div className="glass p-6 rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white">{symbol}</h3>
          <div className="flex items-center mt-1">
            <span className="text-2xl font-bold text-white">₹{data.price.toFixed(2)}</span>
            <span className={`ml-2 flex items-center ${
              isPositive ? 'text-green-400' : 'text-red-400'
            }`}>
              {isPositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
              {Math.abs(data.changePercent).toFixed(2)}%
            </span>
          </div>
        </div>
        <ChartSelector onSelect={setChartType} selected={chartType} />
      </div>

      <div className="h-64 glass p-4 rounded-lg flex items-center justify-center">
        <div className="text-center text-gray-400">
          <div className="text-lg mb-2">Sample {chartType.charAt(0).toUpperCase() + chartType.slice(1)} Chart</div>
          <div className="text-sm">Real chart implementation will be integrated here</div>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button className="glass-button px-4 py-1 text-sm">1D</button>
        <button className="glass-button px-4 py-1 text-sm">1W</button>
        <button className="glass-button px-4 py-1 text-sm">1M</button>
        <button className="glass-button px-4 py-1 text-sm">3M</button>
        <button className="glass-button px-4 py-1 text-sm">1Y</button>
        <button className="glass-button px-4 py-1 text-sm">ALL</button>
      </div>
    </div>
  );
};

export default StockChart;