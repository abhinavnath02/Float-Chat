import { useState } from 'react';

const FiltersComponent = () => {
  const [selectedRegion, setSelectedRegion] = useState('indian-ocean');
  const [dateRange, setDateRange] = useState('last-3-months');
  const [dataType, setDataType] = useState('temperature');

  return (
    <div className="space-y-4">
      {/* Region Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Region
        </label>
        <select 
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="indian-ocean">Indian Ocean</option>
          <option value="arabian-sea">Arabian Sea</option>
          <option value="bay-of-bengal">Bay of Bengal</option>
          <option value="andaman-sea">Andaman Sea</option>
        </select>
      </div>

      {/* Date Range Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Time Period
        </label>
        <select 
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="last-week">Last Week</option>
          <option value="last-month">Last Month</option>
          <option value="last-3-months">Last 3 Months</option>
          <option value="last-year">Last Year</option>
          <option value="custom">Custom Range</option>
        </select>
      </div>

      {/* Data Type Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Data Type
        </label>
        <select 
          value={dataType}
          onChange={(e) => setDataType(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="temperature">Temperature</option>
          <option value="salinity">Salinity</option>
          <option value="pressure">Pressure</option>
          <option value="oxygen">Dissolved Oxygen</option>
          <option value="all">All Parameters</option>
        </select>
      </div>

      {/* Active Filters Display */}
      <div className="pt-2">
        <p className="text-xs text-gray-500 mb-2">Active Filters:</p>
        <div className="flex flex-wrap gap-1">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            {selectedRegion.replace('-', ' ')}
          </span>
          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
            {dateRange.replace('-', ' ')}
          </span>
          <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
            {dataType}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FiltersComponent;
