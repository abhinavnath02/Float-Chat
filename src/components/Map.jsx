import { use, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

export default function Map() {
    const mapRef = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapRef.current,
            center: [78, 15], // Centered on India and Indian Ocean
            zoom: 4, // Wider view for the region
            style: "mapbox://styles/abhinav-nath-02/cmfkpg7fi006n01s4ffwj8pce", // style URL
        });
        return () => map.remove();
    }, []);

    return <div ref={mapRef} className="w-screen h-screen rounded-3xl" />;
}