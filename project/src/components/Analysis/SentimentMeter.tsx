import React from 'react';

interface SentimentMeterProps {
  score: number; // 0-100
}

export const SentimentMeter: React.FC<SentimentMeterProps> = ({ score }) => {
  // Convert score to radians for the gauge
  const rotation = (score / 100) * 180;
  
  return (
    <div className="relative w-full max-w-[300px] mx-auto">
      <div className="relative h-[160px] overflow-hidden">
        {/* Gauge Background */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full border-[30px] border-gray-700" 
             style={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)' }} />
        
        {/* Colored Sections */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full"
             style={{ 
               background: 'conic-gradient(from 180deg, #22c55e 0deg, #fbbf24 90deg, #ef4444 180deg)',
               clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)',
               opacity: 0.3
             }} />

        {/* Needle */}
        <div className="absolute bottom-0 left-1/2 w-2 h-[140px] bg-white origin-bottom"
             style={{ transform: `translateX(-50%) rotate(${rotation}deg)` }} />

        {/* Center Point */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white" />
      </div>

      {/* Score Display */}
      <div className="text-center mt-4">
        <div className="text-3xl font-bold text-white">{score}</div>
        <div className="text-sm text-gray-400">Sentiment Score</div>
      </div>
    </div>
  );
};