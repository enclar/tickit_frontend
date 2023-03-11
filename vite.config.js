import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        // target: 'https://tickit-backend.onrender.com',
        target: 'http://localhost:10000',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      }
    },
  },
  plugins: [react()]
})