# FLOAT-Chat

An interactive React + Vite application for exploring ocean float (buoy) data with a modern UI. The app features a searchable interface, a mini dashboard for buoy metadata, and a responsive line chart to visualize parameters like pressure, temperature, and salinity. Built with Tailwind CSS utilities, Recharts for charts, and a lightweight UI layer.

## Features
- **Hero + Search**: Prominent title with a centered search bar; Enter key currently shows a notification (placeholder until backend integration).
- **Float Data Dashboard**: Compact card showing:
  - **Parameter selection** (Pressure, Temperature, Salinity)
  - **Responsive line chart** using Recharts
  - **Metadata** such as Buoy ID and coordinates
- **Indian Ocean Region Summary**: Quick stats widget for active floats, average temperature, and last update time.
- **Modern UI Components**: Reusable `Button` and `Card` primitives.
- **Asset-backed Visuals**: Background image/video support via `public/asets/image/`.

## Tech Stack
- **Vite** for fast dev/build
- **React** 19
- **Tailwind CSS** (via `@tailwindcss/vite` plugin)
- **Recharts** for data visualization
- **Lucide React** and **react-icons** for icons

## Project Structure (key files)
- `src/pages/Home.jsx` — Main page composing the hero, search, summary widget, and `BuoyDataDashboard`
- `src/components/Home/` — Feature components: `SearchBar`, `Video`, `buoy-data-dashboard`, `select`
- `src/components/ui/` — UI primitives: `button`, `card`
- `public/asets/image/` — Static assets (image, video)

## Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm (comes with Node)

### Install
```bash
npm install
```

### Development
```bash
npm run dev
```
Vite will start a local dev server and print the URL (typically `http://localhost:5173`).

### Build
```bash
npm run build
```
Outputs a production build to `dist/`.

### Preview Production Build
```bash
npm run preview
```
Serves the built app locally for testing.

## Environment & Assets
- No environment variables are required at this stage.
- The search bar currently fetches mock users from `https://jsonplaceholder.typicode.com/users` to demonstrate filtering; pressing Enter shows a temporary notification: "Backend Model not connected yet...."
- Background image path used in `Video.jsx`: `/image/image.png` (ensure it exists under `public/asets/image/image.png`).

## Dependencies
Runtime dependencies (from `package.json`):
- `react`, `react-dom`
- `react-router-dom` (routing ready, not heavily used yet)
- `recharts` (charts)
- `lucide-react`, `react-icons`, `react-feather` (icons)
- `tailwindcss`, `@tailwindcss/vite` (styling)
- `gsap` (available for animations if needed)
- `radix-ui` (headless UI; app includes a custom `select` component)

Dev dependencies:
- `vite`, `@vitejs/plugin-react`
- `eslint`, `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `globals`
- `@types/react`, `@types/react-dom`

## Scripts
- `npm run dev` — Start dev server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Lint the codebase

## Roadmap
- Integrate real backend for float data search and retrieval
- Connect charts to live data (pressure, temperature, salinity over time)
- Enhance map/region overview with real-time stats

## License
This project is currently unlicensed. Add a license if you plan to open-source it.
