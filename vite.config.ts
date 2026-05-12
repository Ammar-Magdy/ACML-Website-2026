import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  assetsInclude: ["**/*.docx", "**/*.pptx", "**/*.wmv", "**/*.xlsx"],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react'],
          'i18n-vendor': ['i18next', 'react-i18next'],
          'animation-vendor': ['framer-motion'],
        },
      },
    },
  },
});
