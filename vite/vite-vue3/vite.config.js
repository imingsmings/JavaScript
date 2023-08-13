import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoprefixer from 'autoprefixer'
import ConfigPlugin from './src/plugins/vite-plugin-config'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // ConfigPlugin('post'),
    ConfigPlugin('pre')
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  css: {
    postcss: {
      plugins: [autoprefixer]
    }
  }
})
