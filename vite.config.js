import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // This ensures it binds to 127.0.0.1
  },
})