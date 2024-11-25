import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "boilerplate-design-system",
      formats: ["es", "umd"],
      fileName: (format) => `${format}/index.js`,
    },
    rollupOptions: {
      output: {
        dir: "dist", // Output directory
      },
    },
    watch: {
      include: "src/**", // Watch for changes in the source directory
    },
  },
});
