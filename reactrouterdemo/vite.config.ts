import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import taiwlwindcss from '@tailwindcss/vite'
import { readFileSync } from 'node:fs'
import os from 'node:os'

const homeDir = os.homedir()

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), taiwlwindcss()],
  server: {
    https: {
      key: readFileSync(`${homeDir}/devhttps/dev-key.pem`),
      cert: readFileSync(`${homeDir}/devhttps/dev.pem`)
    }
  }
})
