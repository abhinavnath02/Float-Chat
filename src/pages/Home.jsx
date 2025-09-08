import React from 'react';
import Video from '../components/Home/Video';
import { SearchBar } from '../components/Home/SearchBar';
import { BuoyDataDashboard } from '../components/Home/buoy-data-dashboard'; // Make sure this path is correct

const Home = () => {
  return (
    <div className='h-screen w-screen relative'>
      <div className='bg'>
        <div>
          <div>
            <div className='absolute inset-0 flex z-1 top-15 ml-15 pl-[35%]'>
              <h1 className='text-white text-4xl md:text-6xl font-bold tracking-wide drop-shadow-lg'>
                FLOAT-Chat
              </h1>
            </div>
            <div className='absolute inset-0 flex top-15.5 ml-16 pl-[35%]'>
              <h1 className='text-black text-[10vw] md:text-6xl font-bold tracking-wide drop-shadow-lg'>
                FLOAT-Chat
              </h1>
            </div>
          </div>
          <div className="absolute bottom-5 left-1/2 flex justify-center items-center transform -translate-x-1/2 w-full z-50">
            <div className="w-7xl ml-125">
              <SearchBar />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 w-48 bg-white rounded-lg shadow-xl p-4 z-50">
            <h3 className="font-bold text-gray-800 mb-3">Indian Ocean Region</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Active Floats:</span>
                <span className="font-medium text-gray-800">37</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Avg Temperature:</span>
                <span className="font-medium text-gray-800">26.2°C</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Last Updated:</span>
                <span className="font-medium text-gray-800">2 hours ago</span>
              </div>
            </div>
          </div>
          <div className="relative ml-250 h-[15vw] w-[30vw] bg-gray-50 z-2 p-4">
            <BuoyDataDashboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;