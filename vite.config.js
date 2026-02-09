import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './', // Use relative paths for deployment flexibility
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
