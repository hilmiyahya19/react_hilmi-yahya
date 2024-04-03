import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-router-dom'],
      output: {
        globals: {
          'react-router-dom': 'ReactRouterDOM' // Pastikan Anda mengganti 'ReactRouterDOM' dengan variabel global yang sesuai jika Anda menggunakan bundler lain atau memanggil 'react-router-dom' secara berbeda.
        }
      }
    }
  }
})
