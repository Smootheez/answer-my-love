import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/answer-my-love/",
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: "src/main.tsx",
        yes: "src/yes.tsx",
      },
    },
  },
});
