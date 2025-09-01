import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Powerstage/',
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx']  // Explizit .jsx Unterstützung hinzufügen
  }
})