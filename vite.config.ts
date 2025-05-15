import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/Ev1too-s-Hub/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: true,
  },
  server: {
    port: 3000,
    strictPort: true,
    host: 'localhost',
    open: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}) 