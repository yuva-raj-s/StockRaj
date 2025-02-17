import React from 'react';
import { SearchBar } from '../components/Search/SearchBar';
import { StockList } from '../components/StockList/StockList';
import { NewsSection } from '../components/News/NewsSection';
import { MarketPulse } from '../components/MarketOverview/MarketPulse';
import { MarketTrends } from '../components/MarketOverview/MarketTrends';
import { MarketStats } from '../components/MarketOverview/MarketStats';
import { TopMovers } from '../components/MarketOverview/TopMovers';
import { StockMarquee } from '../components/MarketOverview/StockMarquee';
import { Bell } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  return (
    <div className="space-y-6">
      <StockMarquee />
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">Market Dashboard</h1>
        <div className="flex-1 max-w-2xl mx-4">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="flex space-x-2">
          <button className="glass-button p-2">
            <Bell className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <MarketPulse />
        <MarketStats />
        <MarketTrends />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-xl font-bold text-white mb-4">Market Overview</h2>
            <StockList />
          </div>
        </div>
        <div className="lg:col-span-1">
          <NewsSection />
        </div>
      </div>
    </div>
  );
};