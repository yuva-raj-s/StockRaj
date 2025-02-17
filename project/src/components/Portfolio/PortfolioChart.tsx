import React from 'react';
import { Card } from '../ui/Card';
import { Briefcase, BarChart2 } from 'lucide-react';

interface TimeframeButton {
  label: string;
  value: string;
}

const timeframes: TimeframeButton[] = [
  { label: '1D', value: 'day' },
  { label: '1W', value: 'week' },
  { label: '1M', value: 'month' },
  { label: '1Y', value: 'year' },
];

export const PortfolioChart: React.FC = () => {
  return (
    <Card className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-white flex items-center">
          <Briefcase className="w-5 h-5 mr-2 text-accent-primary" />
          Portfolio Performance
        </h2>
        <div className="flex space-x-2">
          {timeframes.map((tf) => (
            <button key={tf.value} className="glass-button px-3 py-1">
              {tf.label}
            </button>
          ))}
        </div>
      </div>
      <div className="h-64 glass rounded-lg flex items-center justify-center">
        <BarChart2 className="w-8 h-8 text-accent-primary" />
      </div>
    </Card>
  );
};