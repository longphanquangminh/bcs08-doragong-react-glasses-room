import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Base URL for your application
  base: "/",

  // Build output directory
  build: {
    outDir: "dist",
  },

  // Configure server settings
  // server: {
  //   port: 3000,
  // },

  // Additional resolve configuration
  resolve: {
    alias: {
      // Add your own aliases here if needed
    },
  },
});
