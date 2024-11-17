import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import presetEnv from 'postcss-preset-env'
import tailwindcss from 'tailwindcss'

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
            '@assets': resolve(__dirname, './src/assets')
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                //
            }
        },
        modules: {
            generateScopedName:
                '[name]_[local]_[hash:base64:5]'
        },
        postcss: {
            plugins: [
                presetEnv({
                    browsers: [
                        'last 2 versions',
                        '> 1%',
                        'IE 11'
                    ],
                    autoprefixer: {}
                }),
                tailwindcss()
            ]
        }
    },
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ['react', 'react-dom']
                }
            }
        }
    }
}) as UserConfig
