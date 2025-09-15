// import React from "react";
// import { Map, Marker } from "@vis.gl/react-maplibre";

// const Home = () => {
//   // Generate a random point within bounds
//   const minLng = 60, maxLng = 100, minLat = -40, maxLat = 35;
//   const randomLng = Math.random() * (maxLng - minLng) + minLng;
//   const randomLat = Math.random() * (maxLat - minLat) + minLat;
//   return (
//     <div className="grid grid-cols-2 grid-rows-2 h-screen w-screen gap-2 bg-white p-2">
//       {/* First cell spanning two rows */}
//       <div className="row-span-2 bg-white flex items-center justify-center text-white text-2xl font-bold ">
//         <Map className= "rounded-3xl"
//           initialViewState={{
//             longitude: 78,
//             latitude: 15,
//             zoom: 3,
//             attributionControl: false,
//           }}
//           maxBounds={[[60, -40], [100, 35]]
            
//           }
//           mapStyle="/styles/dark.json"
//         >
//           <Marker longitude={randomLng} latitude={randomLat} anchor="center">
//             <div style={{
//               width: 24,
//               height: 24,
//               borderRadius: "50%",
//               background: "#ff0000",
//               border: "2px solid #fff",
//               boxShadow: "0 0 6px rgba(0,0,0,0.3)"
//             }} />
//           </Marker>
//         </Map>
//       </div>

//       {/* Top-right cell */}
//       <div className="bg-green-500 flex items-center justify-center text-white text-2xl font-bold rounded-3xl">
//         Cell 2
//       </div>

//       {/* Bottom-right cell */}
//       <div className="bg-red-500 flex items-center justify-center text-white text-2xl font-bold rounded-3xl">
//         Cell 3
//       </div>     
//     </div>
//   );
// };

// export default Home;

import React, { useState } from "react";
import Map from "../components/Map";
import Button from "../components/UI/button";

export default function Home() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-screen h-screen grid grid-cols-2">
      {/* Cell 1: full height left column */}
      <div className="bg-blue-500 flex items-center justify-center text-white text-xl">
       <Map />
      </div>

      {/* Right column: flex column for smooth height animation */}
      <div className="flex flex-col h-full">
        {/* Cell 2 */}
        <div
          className={`bg-green-500 flex items-center justify-center text-white text-xl transition-all duration-700`}
          style={{
            flexGrow: expanded ? 1 : 10, // Big when collapsed, equal when expanded
            flexShrink: 0,
            flexBasis: 0,
          }}
        >
        <Button>Hello</Button>
        </div>

        {/* Cell 3 */}
        <div
          className={`bg-red-500 flex items-center justify-center text-white text-xl cursor-pointer transition-all duration-700`}
          style={{
            flexGrow: expanded ? 1 : 1.5, // Small when collapsed, equal when expanded
            flexShrink: 0,
            flexBasis: 0,
          }}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Collapse Me" : "Expand Me (Cell 3)"}
        </div>
      </div>
    </div>
  );
}
