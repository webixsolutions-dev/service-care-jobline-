import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Increase chunk size warning limit (optional)
    chunkSizeWarningLimit: 1000,
    // Rollup options for manual chunks
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries into separate chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion'],
          'ui-vendor': ['react-icons'],
        },
      },
    },
    // Rolldown specific code splitting (if using Rolldown)
    // Note: Rolldown is used by default in Vite 6+
    // If you're using an older version, you may need to adjust
    rolldownOptions: {
      output: {
        codeSplitting: {
          minSize: 20000,
          groups: [
            {
              name: 'vendor',
              test: /node_modules/,
              priority: 10,
            },
            {
              name: 'react-vendor',
              test: /node_modules[\\/]react/,
              priority: 20,
            },
            {
              name: 'animation-vendor',
              test: /node_modules[\\/]framer-motion/,
              priority: 15,
            },
            {
              name: 'ui-vendor',
              test: /node_modules[\\/]react-icons/,
              priority: 15,
            },
          ],
        },
      },
    },
  },
})