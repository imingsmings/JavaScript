import { defineConfig } from 'vite'
import { readFileSync } from 'node:fs'

export default defineConfig({
  server: {
    port: 3333,
    host: '0.0.0.0',
    https: {
      key: readFileSync(process.env.SSL_KEY!),
      cert: readFileSync(process.env.SSL_CERT!)
    }
  }
})
