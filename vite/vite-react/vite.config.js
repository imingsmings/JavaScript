import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ConfigPlugin from './src/plugins/vite-plugin-config'

export default defineConfig({
  build: {
    outDir: 'dist'
  },
  plugins: [
    react(),
    ConfigPlugin()
  ],
  resolve: {
    alias: {
      '@': ''
    }
  }
})
