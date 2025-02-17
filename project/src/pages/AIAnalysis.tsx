import React, { useState } from 'react';
import { SearchBar } from '../components/Search/SearchBar';
import { Card } from '../components/ui/Card';
import { TechnicalIndicators } from '../components/Analysis/TechnicalIndicators';
import { SentimentAnalysis } from '../components/Analysis/SentimentAnalysis';
import { SentimentMeter } from '../components/Analysis/SentimentMeter';
import { PredictionCard } from '../components/Analysis/PredictionCard';
import StockChart from '../components/Charts/StockChart';
import { Brain, AlertTriangle } from 'lucide-react';

const mockData = {
  stockData: {
    symbol: 'RELIANCE',
    price: 2456.75,
    change: 45.80,
    changePercent: 1.89,
  },
  prediction: {
    probability: 78,
    targetPrice: 2598.45,
    timeframe: '7 Days',
    confidence: 85
  },
  sentiment: {
    news: { positive: 45, neutral: 30, negative: 25 },
    social: { positive: 55, neutral: 25, negative: 20 },
    overall: 'Moderately Bullish'
  },
  sentimentScore: 72
};

export const AIAnalysis: React.FC = () => {
  const [selectedStock, setSelectedStock] = useState('RELIANCE');

  const handleSearch = (query: string) => {
    setSelectedStock(query);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-center">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="w-6 h-6 text-accent-primary" />
            <h2 className="text-xl font-bold text-white">
              AI Analysis for {selectedStock}
            </h2>
          </div>
          <div className="flex items-center text-yellow-400">
            <AlertTriangle className="w-5 h-4 mr-2" />
            <span className="text-sm">High Confidence Signals</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card>
          <StockChart symbol={selectedStock} data={mockData.stockData} />
        </Card>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <TechnicalIndicators />
          </Card>
          <Card>
            <SentimentAnalysis data={mockData.sentiment} />
          </Card>
          <Card>
            <SentimentMeter score={mockData.sentimentScore} />
          </Card>
        </div>

        <Card>
          <PredictionCard prediction={mockData.prediction} />
        </Card>
      </div>
    </div>
  );
};