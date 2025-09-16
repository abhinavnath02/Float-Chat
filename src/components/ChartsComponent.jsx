import { useState } from 'react';

const ChartsComponent = () => {
  const [activeChart, setActiveChart] = useState('temperature-profile');

  // Mock data for demonstration (replace with real data when backend is ready)
  const mockChartData = {
    'temperature-profile': {
      title: 'Temperature Profile',
      description: 'Depth vs Temperature for selected floats',
      data: [
        { depth: 0, temperature: 28.5 },
        { depth: 50, temperature: 26.2 },
        { depth: 100, temperature: 22.8 },
        { depth: 200, temperature: 18.5 },
        { depth: 500, temperature: 12.3 },
        { depth: 1000, temperature: 6.8 }
      ]
    },
    'salinity-profile': {
      title: 'Salinity Profile',
      description: 'Depth vs Salinity for selected floats',
      data: [
        { depth: 0, salinity: 34.5 },
        { depth: 50, salinity: 35.1 },
        { depth: 100, salinity: 35.3 },
        { depth: 200, salinity: 35.0 },
        { depth: 500, salinity: 34.7 },
        { depth: 1000, salinity: 34.6 }
      ]
    },
    'time-series': {
      title: 'Time Series',
      description: 'Parameter values over time',
      data: [
        { date: '2024-01', value: 28.2 },
        { date: '2024-02', value: 27.8 },
        { date: '2024-03', value: 28.5 },
        { date: '2024-04', value: 29.1 },
        { date: '2024-05', value: 29.8 },
        { date: '2024-06', value: 30.2 }
      ]
    }
  };

  const chartTypes = [
    { id: 'temperature-profile', name: 'Temperature Profile' },
    { id: 'salinity-profile', name: 'Salinity Profile' },
    { id: 'time-series', name: 'Time Series' }
  ];

  const currentChart = mockChartData[activeChart];

  // Simple line chart visualization (placeholder for Plotly/Chart.js)
  const renderChart = () => {
    const data = currentChart.data;
    const maxValue = Math.max(...data.map(d => Object.values(d)[1]));
    const minValue = Math.min(...data.map(d => Object.values(d)[1]));
    const range = maxValue - minValue;

    return (
      <div className="relative h-64 bg-gray-50 border rounded p-4">
        <svg className="w-full h-full">
          {/* Chart lines */}
          {data.map((point, index) => {
            if (index === 0) return null;
            
            const prevPoint = data[index - 1];
            const x1 = ((index - 1) / (data.length - 1)) * 100;
            const x2 = (index / (data.length - 1)) * 100;
            
            const value1 = Object.values(prevPoint)[1];
            const value2 = Object.values(point)[1];
            
            const y1 = 100 - ((value1 - minValue) / range) * 80 - 10;
            const y2 = 100 - ((value2 - minValue) / range) * 80 - 10;
            
            return (
              <line
                key={index}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="#3B82F6"
                strokeWidth="2"
              />
            );
          })}
          
          {/* Data points */}
          {data.map((point, index) => {
            const x = (index / (data.length - 1)) * 100;
            const value = Object.values(point)[1];
            const y = 100 - ((value - minValue) / range) * 80 - 10;
            
            return (
              <circle
                key={index}
                cx={`${x}%`}
                cy={`${y}%`}
                r="4"
                fill="#3B82F6"
                className="hover:fill-blue-700"
              />
            );
          })}
        </svg>
        
        {/* Placeholder text for real chart library */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center bg-white bg-opacity-90 p-3 rounded">
            <p className="text-xs text-gray-500">
              Placeholder chart - Replace with Plotly/Chart.js
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col">
      {/* Chart Type Selector */}
      <div className="mb-4">
        <div className="flex space-x-2 mb-2">
          {chartTypes.map((chart) => (
            <button
              key={chart.id}
              onClick={() => setActiveChart(chart.id)}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                activeChart === chart.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {chart.name}
            </button>
          ))}
        </div>
        
        <div>
          <h3 className="font-semibold text-gray-800">{currentChart.title}</h3>
          <p className="text-sm text-gray-600">{currentChart.description}</p>
        </div>
      </div>

      {/* Chart Display */}
      <div className="flex-1">
        {renderChart()}
      </div>

      {/* Chart Controls */}
      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            Showing {currentChart.data.length} data points
          </div>
          
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded">
              Export CSV
            </button>
            <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded">
              Download PNG
            </button>
          </div>
        </div>
      </div>

      {/* Integration Notes */}
      <div className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded text-xs text-yellow-800">
        <strong>Integration Notes:</strong> Replace with Plotly or Chart.js when backend data is available. 
        Chart data should come from the RAG pipeline and be responsive to chat queries and filter changes.
      </div>
    </div>
  );
};

export default ChartsComponent;
