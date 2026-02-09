import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/psychic-system/', // GitHub Pages base path
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
