import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // outDir: "dist",
    sourcemap: true,
  },  
  base: '/hex2rgb/',
  plugins: [react()],
})
