import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'node:fs'
import os from 'node:os'

const homeDir = os.homedir()

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: readFileSync(`${homeDir}/devhttps/dev-key.pem`),
      cert: readFileSync(`${homeDir}/devhttps/dev.pem`)
    }
  }
})
