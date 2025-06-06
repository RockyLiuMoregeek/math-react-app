import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/RockyLiuMoregeek.github.io/',
  plugins: [react()],
})
