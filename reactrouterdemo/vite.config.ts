import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import taiwlwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { readFileSync } from 'node:fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    taiwlwindcss(),
    TanStackRouterVite({
      target: 'react',
      autoCodeSplitting: true
    })
  ],
  server: {
    https: {
      key: readFileSync(process.env.SSL_KEY!),
      cert: readFileSync(process.env.SSL_CERT!)
    }
  }
})
