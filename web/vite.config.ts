import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: "..",
  server: {
    port: 4000,
    proxy: {
      "/trpc": {
        target: `http://localhost:4001`,
        changeOrigin: false,
      },
    },
  },
});
