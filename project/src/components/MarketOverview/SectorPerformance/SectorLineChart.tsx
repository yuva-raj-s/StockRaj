import React from 'react';
import { LineChart } from 'lucide-react';

interface DataPoint {
  time: string;
  values: Record<string, number>;
}

const historicalData: DataPoint[] = [
  {
    time: '9:15',
    values: { IT: 0, Banking: 0, Energy: 0, FMCG: 0, Auto: 0, Pharma: 0 }
  },
  {
    time: '11:00',
    values: { IT: 1.2, Banking: -0.5, Energy: 1.8, FMCG: 0.3, Auto: -0.2, Pharma: 0.8 }
  },
  {
    time: '13:00',
    values: { IT: 1.8, Banking: -0.8, Energy: 2.5, FMCG: 0.5, Auto: -0.4, Pharma: 1.2 }
  },
  {
    time: '15:30',
    values: { IT: 2.5, Banking: -1.2, Energy: 3.1, FMCG: 0.8, Auto: -0.5, Pharma: 1.7 }
  }
];

const colors = {
  IT: '#60A5FA', // blue
  Banking: '#F87171', // red
  Energy: '#34D399', // green
  FMCG: '#FBBF24', // yellow
  Auto: '#A78BFA', // purple
  Pharma: '#F472B6' // pink
};

export const SectorLineChart: React.FC = () => {
  const width = 800;
  const height = 400;
  const padding = 40;

  const sectors = Object.keys(historicalData[0].values);
  const timePoints = historicalData.map(d => d.time);
  
  // Calculate min and max values for y-axis
  const allValues = historicalData.flatMap(d => Object.values(d.values));
  const minValue = Math.floor(Math.min(...allValues));
  const maxValue = Math.ceil(Math.max(...allValues));

  // Scale functions
  const xScale = (index: number) => 
    padding + (index * (width - 2 * padding) / (timePoints.length - 1));
  
  const yScale = (value: number) =>
    height - padding - ((value - minValue) * (height - 2 * padding) / (maxValue - minValue));

  // Generate path for each sector
  const generatePath = (sector: string) => {
    return historicalData.map((point, index) => {
      const x = xScale(index);
      const y = yScale(point.values[sector]);
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  };

  return (
    <div className="glass p-6 mt-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <LineChart className="w-5 h-5 mr-2 text-accent-primary" />
          <h3 className="text-lg font-semibold text-white">Sector Performance Trends</h3>
        </div>
        <div className="flex flex-wrap gap-4">
          {sectors.map(sector => (
            <div key={sector} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: colors[sector as keyof typeof colors] }}
              />
              <span className="text-sm text-gray-300">{sector}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative w-full" style={{ height: `${height}px` }}>
        <svg width={width} height={height} className="mx-auto">
          {/* Grid lines */}
          {Array.from({ length: 5 }).map((_, i) => {
            const y = padding + i * (height - 2 * padding) / 4;
            const value = maxValue - (i * (maxValue - minValue) / 4);
            return (
              <g key={i}>
                <line
                  x1={padding}
                  y1={y}
                  x2={width - padding}
                  y2={y}
                  stroke="#374151"
                  strokeWidth="1"
                  strokeDasharray="4"
                />
                <text
                  x={padding - 10}
                  y={y}
                  textAnchor="end"
                  alignmentBaseline="middle"
                  className="text-xs fill-gray-400"
                >
                  {value.toFixed(1)}%
                </text>
              </g>
            );
          })}

          {/* Time labels */}
          {timePoints.map((time, i) => (
            <text
              key={time}
              x={xScale(i)}
              y={height - padding / 2}
              textAnchor="middle"
              className="text-xs fill-gray-400"
            >
              {time}
            </text>
          ))}

          {/* Sector lines */}
          {sectors.map(sector => (
            <path
              key={sector}
              d={generatePath(sector)}
              fill="none"
              stroke={colors[sector as keyof typeof colors]}
              strokeWidth="2"
            />
          ))}
        </svg>
      </div>
    </div>
  );
};