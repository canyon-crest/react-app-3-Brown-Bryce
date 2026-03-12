import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// vite.config.js

export default defineConfig({
  plugins: [react()],
  base: 'react-app-3-Brown-Bryce', //Replace with your GitHub repo name
});
