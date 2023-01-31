import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    // environment: "jsdom",
    environment: 'happy-dom',
    setupFiles: "./test/setup.ts",
    css: true,
    reporters: ["default", "html"],
    coverage: {
      provider: "istanbul",
      reporter: ['text', 'json', 'html'],
    },
  },
});
