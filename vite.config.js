import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,

    allowedHosts: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {

          vendor: ['react', 'react-dom', 'react-router-dom'],

          animations: ['framer-motion', 'ogl'],

          icons: ['lucide-react', 'react-icons'],
        },
      },
    },
   
    chunkSizeWarningLimit: 600,
  },
});