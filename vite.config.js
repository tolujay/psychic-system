import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/', // Custom domain at root
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
