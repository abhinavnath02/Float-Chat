import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video className='h-full w-full object-cover' autoPlay loop muted>
        <source src="/videos/Ocean_vid.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video
