// vite.config.js
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url'


export default defineConfig({
  plugins: [vue()],
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})