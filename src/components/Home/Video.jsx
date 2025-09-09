import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
      {/* Using the react.svg from assets as a placeholder since image.png is not available */}
      <img
        src="/public/ocean-map.png"
        alt="Ocean Map Background"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Video