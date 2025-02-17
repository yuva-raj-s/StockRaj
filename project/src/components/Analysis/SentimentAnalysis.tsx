import React from 'react';
import { Brain } from 'lucide-react';

interface SentimentData {
  news: { positive: number; negative: number; neutral: number };
  social: { positive: number; negative: number; neutral: number };
  overall: string;
}

interface SentimentAnalysisProps {
  data: SentimentData;
}

export const SentimentAnalysis: React.FC<SentimentAnalysisProps> = ({ data }) => {
  const renderSentimentBar = (positive: number, neutral: number, negative: number) => (
    <div className="h-2 w-full flex rounded-full overflow-hidden">
      <div className="bg-success" style={{ width: `${positive}%` }} />
      <div className="bg-warning" style={{ width: `${neutral}%` }} />
      <div className="bg-danger" style={{ width: `${negative}%` }} />
    </div>
  );

  return (
    <>
      <h3 className="text-lg font-semibold text-white flex items-center mb-4">
        <Brain className="w-5 h-5 mr-2 text-accent-primary" />
        Sentiment Analysis
      </h3>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">News Sentiment</span>
            <span className="text-white">{data.overall}</span>
          </div>
          {renderSentimentBar(data.news.positive, data.news.neutral, data.news.negative)}
          <div className="flex justify-between text-xs text-gray-400">
            <span>Positive {data.news.positive}%</span>
            <span>Neutral {data.news.neutral}%</span>
            <span>Negative {data.news.negative}%</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Social Media Sentiment</span>
          </div>
          {renderSentimentBar(data.social.positive, data.social.neutral, data.social.negative)}
          <div className="flex justify-between text-xs text-gray-400">
            <span>Positive {data.social.positive}%</span>
            <span>Neutral {data.social.neutral}%</span>
            <span>Negative {data.social.negative}%</span>
          </div>
        </div>
      </div>
    </>
  );
};