import React, { useState } from 'react';
import { Newspaper, Globe, TrendingUp } from 'lucide-react';

interface NewsItem {
  title: string;
  source: string;
  time: string;
  category: 'top' | 'local' | 'world';
}

const newsData: NewsItem[] = [
  { title: "RBI's new policy impacts market sentiment", source: "Economic Times", time: "2h ago", category: "top" },
  { title: "IT sector leads market rally", source: "Mint", time: "3h ago", category: "local" },
  { title: "Global markets hit new highs", source: "Bloomberg", time: "1h ago", category: "world" },
  { title: "FII buying pushes indices higher", source: "Business Standard", time: "4h ago", category: "local" },
];

export const NewsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'top' | 'local' | 'world'>('top');

  const filteredNews = newsData.filter(news => news.category === activeTab);

  return (
    <div className="glass p-4 rounded-xl">
      <div className="flex items-center mb-4 space-x-2">
        <Newspaper className="w-5 h-5 text-accent-primary" />
        <h3 className="text-lg font-semibold text-white">Today's Financial News</h3>
      </div>
      
      <div className="flex space-x-2 mb-4">
        {[
          { id: 'top', label: 'Top Stories', icon: TrendingUp },
          { id: 'local', label: 'Local Market', icon: Newspaper },
          { id: 'world', label: 'World Markets', icon: Globe },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as 'top' | 'local' | 'world')}
            className={`flex items-center space-x-1 px-3 py-1 rounded-lg transition-all ${
              activeTab === tab.id 
                ? 'bg-accent-primary/20 text-accent-primary' 
                : 'text-gray-400 hover:bg-white/5'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filteredNews.map((news, index) => (
          <div key={index} className="glass p-3 rounded-lg hover:bg-white/5 cursor-pointer transition-all">
            <div className="text-white font-medium">{news.title}</div>
            <div className="flex items-center space-x-2 mt-1 text-sm text-gray-400">
              <span>{news.source}</span>
              <span>•</span>
              <span>{news.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};