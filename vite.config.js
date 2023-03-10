import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "https://tickit-backend.onrender.com",
      "domains": ["13.228.225.19", "18.142.128.26", "54.254.162.138"]
    },
  },
  plugins: [react()]
})