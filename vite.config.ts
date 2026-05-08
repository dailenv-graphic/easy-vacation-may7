import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Google Drive / cloud-synced folders often break native FS events; polling keeps HMR reliable.
  server: {
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
