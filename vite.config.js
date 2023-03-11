import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // "/api": "http://0.0.0.0:10000",
      "/api": "https://tickit-backend.onrender.com/",
    },
  },
  plugins: [react()]
})