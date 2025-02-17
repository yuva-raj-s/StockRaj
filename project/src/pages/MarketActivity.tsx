import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { MarketPulse } from '../components/MarketOverview/MarketPulse';
import { MarketStats } from '../components/MarketOverview/MarketStats';
import { MarketTrends } from '../components/MarketOverview/MarketTrends';
import { SectorPerformanceChart } from '../components/MarketOverview/SectorPerformance';
import { SectorLineChart } from '../components/MarketOverview/SectorPerformance/SectorLineChart';
import { Activity } from 'lucide-react';

export const MarketActivity: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white flex items-center">
          <Activity className="w-6 h-6 mr-2 text-accent-primary" />
          Market Activity
        </h1>
        <div className="flex space-x-3">
          {['overview', 'sectors', 'global'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`glass-button px-4 py-2 capitalize ${
                activeTab === tab ? 'bg-accent-primary/20' : ''
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <MarketPulse />
        <MarketStats />
        <MarketTrends />
      </div>

      <SectorPerformanceChart />
      <SectorLineChart />
    </div>
  );
};