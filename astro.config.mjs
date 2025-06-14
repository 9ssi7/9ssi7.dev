import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare({
    platformProxy: {
      enabled: false,
    },
    imageService: "cloudflare",
  }),
  integrations: [mdx()],
  vite: {
    server: {
      watch: {
        ignored: ['**/node_modules/simple-icons-astro/**', '**/.simple-icons-cache/**'],
      },
    },
    plugins: [tailwindcss()],
  },
});
