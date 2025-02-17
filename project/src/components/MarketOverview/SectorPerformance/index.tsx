import React from 'react';
import { BarChart2 } from 'lucide-react';
import { SectorBar } from './SectorBar';
import { sectorData } from './data';

export const SectorPerformanceChart: React.FC = () => {
  const maxPerformance = Math.max(...sectorData.map(d => Math.abs(d.performance)));

  return (
    <div className="glass p-6">
      <div className="flex items-center mb-6">
        <BarChart2 className="w-5 h-5 mr-2 text-accent-primary" />
        <h3 className="text-lg font-semibold text-white">Sector Performance</h3>
      </div>
      <div className="space-y-4">
        {sectorData.map((sector) => (
          <SectorBar
            key={sector.name}
            {...sector}
            maxPerformance={maxPerformance}
          />
        ))}
      </div>
    </div>
  );
};