import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vitest } from 'vitest/jest';

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',// Enable globals like describe and test
     // Set up a jsdom environment for testing
    
  },
  coverage: {
      // you can include other reporters, but 'json-summary' is required, json is recommended
      reporter: ['text', 'json-summary', 'json'],
      // If you want a coverage reports even if your tests are failing, include the reportOnFailure option
      reportOnFailure: true,
    }
})
