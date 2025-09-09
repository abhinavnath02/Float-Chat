import React from 'react';
import Video from '../components/Home/Video';
import { SearchBar } from '../components/Home/SearchBar';
import { BuoyDataDashboard } from '../components/Home/buoy-data-dashboard';

const Home = () => {
  return (
    <div className='h-screen w-screen relative overflow-hidden'>
      {/* Background */}
      <div className='bg absolute inset-0'>
        <Video />
      </div>

      {/* Main Content */}
      <div className='relative z-10 h-full w-full'>
        {/* Title */}
        <div className='absolute top-16 left-1/2 transform -translate-x-1/2'>
          <div className='relative'>
            {/* White text (front layer) */}
            <h1 className='text-white text-4xl md:text-6xl font-bold tracking-wide drop-shadow-lg text-center'>
              FLOAT-Chat
            </h1>
            {/* Black text (shadow layer) */}
            <h1 className='absolute top-0 left-0 text-black text-4xl md:text-6xl font-bold tracking-wide text-center transform translate-x-1 translate-y-1 opacity-30'>
              FLOAT-Chat
            </h1>
          </div>
        </div>

        {/* Search Bar */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full px-8 z-50">
          <div className="max-w-2xl mx-auto">
            <SearchBar />
          </div>
        </div>

        {/* Regional Statistics Card */}
        <div className="absolute bottom-4 left-4 w-64 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-4 z-40">
          <h3 className="font-bold text-gray-800 mb-3 text-lg">Indian Ocean Region</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Active Floats:</span>
              <span className="font-semibold text-blue-600 text-lg">37</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Avg Temperature:</span>
              <span className="font-semibold text-orange-600">26.2°C</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Last Updated:</span>
              <span className="font-medium text-green-600">2 hours ago</span>
            </div>
          </div>
        </div>

        {/* Buoy Data Dashboard */}
        <div className="absolute bottom-4 right-4 z-40">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl">
            <BuoyDataDashboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;