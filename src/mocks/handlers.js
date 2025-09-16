// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'

// Mock data (same as before)
const mapDataResponse = { /* ... */ };
const chartDataResponse = { /* ... */ };
const textResponse = { /* ... */ };

// (You can copy the full JSON objects from the previous TypeScript example)

export const handlers = [
  http.post('/api/v1/chat', async ({ request }) => {
    const { query } = await request.json();

    if (query.toLowerCase().includes('highlight') || query.toLowerCase().includes('show')) {
      return HttpResponse.json(mapDataResponse);
    }
    if (query.toLowerCase().includes('plot') || query.toLowerCase().includes('profile')) {
      return HttpResponse.json(chartDataResponse);
    }
    return HttpResponse.json(textResponse);
  }),
]