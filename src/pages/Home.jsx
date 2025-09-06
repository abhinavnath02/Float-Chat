import React from 'react';
import Video from '../components/Home/Video';

const Home = () => {
  return (
    <div className='h-screen w-screen relative'>
      <Video />
      <div>
        <div className='absolute inset-0 flex top-20 pl-[35%]'>
          <h1 className='text-red-500 text-4xl md:text-6xl font-bold tracking-wide drop-shadow-lg'>
            FLOAT-ChatBot
          </h1>
        </div>
        <div className='absolute inset-0 flex top-100 pl-[35%]'>
          <h1 className='text-white text-4xl md:text-6xl font-bold tracking-wide drop-shadow-lg'>
            FLOAT-ChatBot
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;