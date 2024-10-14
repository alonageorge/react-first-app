import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [react()],
  test: {
    globals: true, // Enable globals like describe and test
     // Set up a jsdom environment for testing
  },
})
