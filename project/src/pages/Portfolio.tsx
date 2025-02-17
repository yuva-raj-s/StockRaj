import React from 'react';
import { Card } from '../components/ui/Card';
import { PortfolioChart } from '../components/Portfolio/PortfolioChart';
import { AssetAllocation } from '../components/Portfolio/AssetAllocation';
import { PortfolioMetrics } from '../components/Portfolio/PortfolioMetrics';
import { TechnicalSignals } from '../components/Watchlist/TechnicalSignals';
import { FundamentalSignals } from '../components/Portfolio/FundamentalSignals';
import { StocksList } from '../components/Portfolio/UserStocks/StocksList';
import { Briefcase, Download, Plus } from 'lucide-react';
import type { UserStock } from '../types/portfolio';

const mockMetrics = {
  totalValue: 586107,
  totalGain: 23450,
  metrics: {
    totalReturn: '+24.5%',
    todayPL: '-1.2%',
    beta: '1.15',
    sharpeRatio: '1.8'
  }
};

const mockStocks: UserStock[] = [
  {
    symbol: 'RELIANCE',
    name: 'Reliance Industries Ltd',
    quantity: 100,
    avgPrice: 2400,
    currentPrice: 2456.75
  },
  {
    symbol: 'TCS',
    name: 'Tata Consultancy Services',
    quantity: 50,
    avgPrice: 3500,
    currentPrice: 3567.90
  },
  {
    symbol: 'INFY',
    name: 'Infosys Limited',
    quantity: 75,
    avgPrice: 1500,
    currentPrice: 1456.80
  },
  {
    symbol: 'HDFCBANK',
    name: 'HDFC Bank Limited',
    quantity: 120,
    avgPrice: 1600,
    currentPrice: 1678.90
  }
];

export const Portfolio: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white flex items-center">
          <Briefcase className="w-6 h-6 mr-2 text-accent" />
          Portfolio Overview
        </h1>
        <div className="flex space-x-4">
          <button className="glass-button px-4 py-2 flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </button>
          <button className="glass-button px-4 py-2 flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Add Transaction
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card glowEffect>
            <PortfolioChart />
          </Card>
        </div>
        <Card>
          <PortfolioMetrics {...mockMetrics} />
        </Card>
      </div>

      <Card>
        <StocksList stocks={mockStocks} />
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <AssetAllocation />
        </Card>
        <Card>
          <TechnicalSignals />
        </Card>
        <Card>
          <FundamentalSignals />
        </Card>
      </div>
    </div>
  );
};