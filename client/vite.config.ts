/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import EnvironmentPlugin from "vite-plugin-environment";

export default defineConfig({
  plugins: [react(), EnvironmentPlugin("all", { defineOn: "import.meta.env" })],
  define: {
    global: {},
  },
  test: {
    globals: true,
    // environment: "jsdom",
    environment: 'happy-dom',
    // setupFiles: "./test/setup.ts",
    css: true,
    reporters: ["default", "html"],
    coverage: {
      provider: "istanbul",
      reporter: ['text', 'json', 'html'],
    },
  },
});
