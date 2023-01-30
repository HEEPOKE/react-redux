import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import EnvironmentPlugin from "vite-plugin-environment";

export default defineConfig({
  plugins: [react(), EnvironmentPlugin("all", { defineOn: "import.meta.env" })],
  // test: {
  //   globals: true,
  //   environment: "jsdom",
  //   setupFiles: "./test/setup.ts",
  // },
  define: {
    global: {},
  },
});
