import Sidebar from './components/Sidebar'
import MapComponent from './components/MapComponent'
import ChartsComponent from './components/ChartsComponent'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            FloatChat Dashboard
          </h1>
          <p className="text-gray-600">
            AI-powered oceanographic data exploration for Argo float program
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-3 grid-rows-2 gap-6 h-[calc(100vh-200px)]">
          {/* Sidebar: spans 2 rows */}
          <Sidebar />
          
          {/* Map: top right */}
          <section className="col-span-2 row-span-1 bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Argo Float Map
              </h2>
              <div className="text-sm text-gray-500">
                Interactive Map • Indian Ocean Region
              </div>
            </div>
            <div className="h-full">
              <MapComponent />
            </div>
          </section>
          
          {/* Charts: bottom right */}
          <section className="col-span-2 row-span-1 bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Data Visualization
              </h2>
              <div className="text-sm text-gray-500">
                Interactive Charts • Real-time Analysis
              </div>
            </div>
            <div className="h-full">
              <ChartsComponent />
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-6 text-center text-sm text-gray-500">
          <p>
            FloatChat • Democratizing Ocean Data Access • 
            <span className="ml-2">
              Backend Integration Ready • Add your Mapbox token to enable maps
            </span>
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
