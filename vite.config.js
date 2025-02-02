import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    outDir: 'dist', // Ensure this is correctly set
  },
  plugins: [react()],
})
