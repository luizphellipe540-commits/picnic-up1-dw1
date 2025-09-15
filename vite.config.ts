import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 3002,       // porta fixa
    strictPort: true, // se a porta já estiver ocupada, dá erro em vez de trocar
    open: true,       // abre o navegador automaticamente
  },
});
