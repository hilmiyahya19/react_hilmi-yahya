import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom'], // tambahkan 'react' dan 'react-dom' sebagai modul eksternal juga
      output: {
        globals: {
          'react': 'React', // definisikan variabel global 'react'
          'react-dom': 'ReactDOM', // definisikan variabel global 'react-dom'
          'react-router-dom': 'ReactRouterDOM' // definisikan variabel global 'react-router-dom'
        }
      }
    }
  }
});
