import React from 'react';

interface SectorBarProps {
  name: string;
  performance: number;
  marketCap: string;
  maxPerformance: number;
}

export const SectorBar: React.FC<SectorBarProps> = ({
  name,
  performance,
  marketCap,
  maxPerformance
}) => {
  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white">{name}</span>
        <div className="flex items-center space-x-4">
          <span className="text-gray-400">{marketCap}</span>
          <span className={`${
            performance >= 0 ? 'text-success' : 'text-danger'
          }`}>
            {performance}%
          </span>
        </div>
      </div>
      <div className="h-2 bg-primary/30 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            performance >= 0 ? 'bg-success' : 'bg-danger'
          }`}
          style={{
            width: `${(Math.abs(performance) / maxPerformance) * 100}%`,
            marginLeft: performance < 0 ? 'auto' : 0,
          }}
        />
      </div>
    </div>
  );
};