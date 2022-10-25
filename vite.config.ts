import { defineConfig } from "vite";
import { splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  server: {
    host: "localhost",
    port: 3000,
    strictPort: true,
  },
  build: {
    cssCodeSplit: true,
  },
});
