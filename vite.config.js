import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // no root, no custom input — let Vite use /index.html at repo root
})
