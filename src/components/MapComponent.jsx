import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

// TODO: Add your Mapbox access token here
const MAPBOX_TOKEN = 'your-mapbox-token-here';

const MapComponent = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // Initialize map only once

    // TODO: Replace with your actual Mapbox token
    mapboxgl.accessToken = MAPBOX_TOKEN;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11', // You can change this style
      center: [75, 10], // Centered on Indian Ocean
      zoom: 4
    });

    // Add navigation control
    map.current.addControl(new mapboxgl.NavigationControl());

    // Mock Argo float data (replace with real data when backend is ready)
    const mockFloatData = [
      { id: 1, longitude: 77.5946, latitude: 12.9716, name: 'Float near Bangalore Coast', status: 'active' },
      { id: 2, longitude: 72.8777, latitude: 19.0760, name: 'Float near Mumbai Coast', status: 'active' },
      { id: 3, longitude: 80.2707, latitude: 13.0827, name: 'Float near Chennai Coast', status: 'inactive' },
      { id: 4, longitude: 69.0, latitude: 15.0, name: 'Arabian Sea Float', status: 'active' },
      { id: 5, longitude: 85.0, latitude: 18.0, name: 'Bay of Bengal Float', status: 'active' }
    ];

    map.current.on('load', () => {
      // Add mock float markers
      mockFloatData.forEach((float) => {
        const el = document.createElement('div');
        el.className = `w-3 h-3 rounded-full cursor-pointer ${
          float.status === 'active' ? 'bg-green-500' : 'bg-red-500'
        }`;
        el.title = float.name;

        new mapboxgl.Marker(el)
          .setLngLat([float.longitude, float.latitude])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML(`
                <div class="p-2">
                  <h3 class="font-semibold">${float.name}</h3>
                  <p class="text-sm text-gray-600">Status: ${float.status}</p>
                  <p class="text-sm text-gray-600">ID: ${float.id}</p>
                </div>
              `)
          )
          .addTo(map.current);
      });
    });

    return () => map.current?.remove();
  }, []);

  // Function to add real float data (to be called when backend is ready)
  const addFloatData = (floatData) => {
    // TODO: Implement this function to add real Argo float data to the map
    console.log('Adding float data:', floatData);
  };

  // Function to filter map by region (to be connected to filters)
  const filterByRegion = (region) => {
    // TODO: Implement region filtering
    console.log('Filtering by region:', region);
  };

  return (
    <div className="relative h-full">
      {/* Map Container */}
      <div ref={mapContainer} className="w-full h-full rounded-lg" />
      
      {/* Map Controls Overlay */}
      <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-2 rounded-lg shadow">
        <h3 className="font-semibold text-sm mb-2">Map Legend</h3>
        <div className="space-y-1 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Active Floats</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span>Inactive Floats</span>
          </div>
        </div>
      </div>

      {/* Placeholder for missing token */}
      {MAPBOX_TOKEN === 'your-mapbox-token-here' && (
        <div className="absolute inset-0 bg-gray-100 bg-opacity-95 flex items-center justify-center rounded-lg">
          <div className="text-center p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Mapbox Token Required</h3>
            <p className="text-gray-600 text-sm mb-4">
              Please add your Mapbox access token to display the map.
            </p>
            <p className="text-xs text-gray-500">
              Update the MAPBOX_TOKEN constant in MapComponent.jsx
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
