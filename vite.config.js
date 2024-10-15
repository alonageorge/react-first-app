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
    reporters: [
      'default',
      ['vitest-junit', {
        outputDirectory: 'reports',
        outputName: 'vitest-results.xml',
      }],
    ],
  },
})
