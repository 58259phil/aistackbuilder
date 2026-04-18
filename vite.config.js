import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'blog': ['./src/Blog.jsx'],
          'comparisons': ['./src/Comparisons.jsx'],
        }
      }
    }
  }
})
