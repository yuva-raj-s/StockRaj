import React from 'react';
import { BarChart2 } from 'lucide-react';

const sectorData = [
  { name: 'IT', performance: 2.5, marketCap: '₹15.2L Cr' },
  { name: 'Banking', performance: -1.2, marketCap: '₹12.8L Cr' },
  { name: 'Energy', performance: 3.1, marketCap: '₹10.5L Cr' },
  { name: 'FMCG', performance: 0.8, marketCap: '₹8.9L Cr' },
  { name: 'Auto', performance: -0.5, marketCap: '₹7.6L Cr' },
  { name: 'Pharma', performance: 1.7, marketCap: '₹6.9L Cr' },
];

export const SectorPerformanceChart: React.FC = () => {
  const maxPerformance = Math.max(...sectorData.map(d => Math.abs(d.performance)));

  return (
    <div className="glass p-6 rounded-xl">
      <div className="flex items-center mb-6">
        <BarChart2 className="w-5 h-5 mr-2 text-accent-primary" />
        <h3 className="text-lg font-semibold text-white">Sector Performance</h3>
      </div>
      <div className="space-y-4">
        {sectorData.map((sector) => (
          <div key={sector.name} className="relative">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white">{sector.name}</span>
              <div className="flex items-center space-x-4">
                <span className="text-gray-400">{sector.marketCap}</span>
                <span className={`${
                  sector.performance >= 0 ? 'text-success' : 'text-danger'
                }`}>
                  {sector.performance}%
                </span>
              </div>
            </div>
            <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  sector.performance >= 0 ? 'bg-success' : 'bg-danger'
                }`}
                style={{
                  width: `${(Math.abs(sector.performance) / maxPerformance) * 100}%`,
                  marginLeft: sector.performance < 0 ? 'auto' : 0,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};