import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ACML-Website-2026/",
  assetsInclude: ["**/*.docx", "**/*.pptx", "**/*.wmv"],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
