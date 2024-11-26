import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";
import { peerDependencies } from "./package.json";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      exclude: ["node_modules", "tests", "**/*.stories.tsx", "**/*.test.tsx"],
      outDir: "dist",
    }),
  ],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "boilerplate-design-system",
      formats: ["es", "umd"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      output: {
        dir: "dist", // Output directory
      },
      external: Object.keys(peerDependencies),
      plugins: [],
    },
    watch: {
      include: "src/**", // Watch for changes in the source directory
    },
  },
});
