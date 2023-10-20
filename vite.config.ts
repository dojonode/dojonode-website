import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: "globalThis",
    "process.env.NODE_DEBUG": false,
    "process.env.LINK_API_URL": false,
    "process.env.SDK_VERSION": "'unknown'",
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  plugins: [svelte()],
  base: "/",
});
