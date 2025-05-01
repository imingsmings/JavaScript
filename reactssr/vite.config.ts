import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: './dist/client',
    rollupOptions: {
      input: path.resolve(__dirname, './index.html')
    }
  }
})
