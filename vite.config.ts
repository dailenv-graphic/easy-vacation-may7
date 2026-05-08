import type { Connect } from 'vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/** Serve /emails/confirmation and /emails/reminder without .html (matches production URLs). */
function emailPageRoutes(): {
  name: string;
  configureServer: (server: { middlewares: Connect.Server }) => void;
  configurePreviewServer: (server: { middlewares: Connect.Server }) => void;
} {
  const rewriteEmails: Connect.NextHandleFunction = (req, _res, next) => {
    const raw = req.url ?? '';
    const [pathname, query = ''] = raw.split('?');
    const q = query ? `?${query}` : '';
    if (pathname === '/emails/confirmation' || pathname === '/emails/confirmation/') {
      req.url = `/emails/confirmation/index.html${q}`;
    } else if (pathname === '/emails/reminder' || pathname === '/emails/reminder/') {
      req.url = `/emails/reminder/index.html${q}`;
    }
    next();
  };
  return {
    name: 'email-page-routes',
    configureServer(server) {
      server.middlewares.use(rewriteEmails);
    },
    configurePreviewServer(server) {
      server.middlewares.use(rewriteEmails);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), emailPageRoutes()],
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
