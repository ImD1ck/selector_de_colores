import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/selector_de_colores/",
  server: { host: "0.0.0.0" },
  build: {
    outDir: "build",
  },
});
