import { defineConfig } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: 'react',
        replacement: path.resolve(import.meta.dirname, '../packages/react')
        // replacement: path.resolve(import.meta.dirname, '../dist/react')
      },
      {
        find: 'react-dom',
        replacement: path.resolve(import.meta.dirname, '../packages/react-dom')
        // replacement: path.resolve(import.meta.dirname, '../dist/react-dom')
      }
    ]
  }
})
