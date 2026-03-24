import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ACML/",
  assetsInclude: ["**/*.docx", "**/*.pptx"],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
