import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { SearchBar } from '../components/Search/SearchBar';
import { List, Plus, Bell, Star, TrendingUp, TrendingDown } from 'lucide-react';
import { WatchlistTable } from '../components/Watchlist/WatchlistTable';
import { WatchlistAlerts } from '../components/Watchlist/WatchlistAlerts';
import { TechnicalSignals } from '../components/Watchlist/TechnicalSignals';

export const Watchlist: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white flex items-center">
          <List className="w-6 h-6 mr-2 text-accent" />
          Your Watchlist
        </h2>
        <div className="flex space-x-3">
          <button className="glass-button px-4 py-2 flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Add Symbols
          </button>
          <button className="glass-button px-4 py-2">Create List</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card glowEffect>
            <WatchlistTable />
          </Card>
        </div>
        <div className="space-y-6">
          <Card>
            <WatchlistAlerts />
          </Card>
          <Card>
            <TechnicalSignals />
          </Card>
        </div>
      </div>
    </div>
  );
};