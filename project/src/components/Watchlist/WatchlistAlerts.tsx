import React from 'react';
import { Bell } from 'lucide-react';

const alerts = [
  { symbol: 'RELIANCE', price: 2580.50, type: 'above' },
  { symbol: 'INFY', price: 1600.75, type: 'below' },
];

export const WatchlistAlerts: React.FC = () => {
  return (
    <>
      <h3 className="text-lg font-semibold text-white flex items-center mb-4">
        <Bell className="w-5 h-5 mr-2 text-accent" />
        Price Alerts
      </h3>
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div key={alert.symbol} className="glass p-3 rounded-lg hover:shadow-neon-sm transition-all duration-300">
            <div className="flex justify-between items-center">
              <span className="text-white">{alert.symbol}</span>
              <span className="text-sm text-text-secondary">
                {alert.type === 'above' ? '↑' : '↓'} ₹{alert.price.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};