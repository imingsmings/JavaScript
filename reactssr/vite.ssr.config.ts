import path from 'path'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, 'server.js'),
          dest: ''
        }
      ]
    })
  ],
  build: {
    outDir: './dist/server',
    ssr: true,
    rollupOptions: {
      input: path.resolve(__dirname, './src/entry-server.tsx')
    }
  }
})
