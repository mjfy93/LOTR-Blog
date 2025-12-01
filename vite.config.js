import { defineConfig } from 'vite'
import { reactRouter } from '@react-router/dev/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [reactRouter()],
  server: {
    proxy: {
      // Proxy API requests to Vercel serverless functions
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
