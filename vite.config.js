import { defineConfig } from 'vite'; // Import the defineConfig function from Vite
import react from '@vitejs/plugin-react'; // Import the React plugin for Vite

export default defineConfig({
  plugins: [react()], // Use the React plugin
  server: {
    port: 3000, // Set the development server port to 3000
  },
});
