import { defineConfig } from 'vite'
import { readFileSync } from 'node:fs'
import VitePluginGLSL from 'vite-plugin-glsl'

export default defineConfig({
  plugins: [VitePluginGLSL()],
  server: {
    port: 3333,
    host: '0.0.0.0',
    https: {
      key: readFileSync(process.env.SSL_KEY!),
      cert: readFileSync(process.env.SSL_CERT!)
    }
  }
})
