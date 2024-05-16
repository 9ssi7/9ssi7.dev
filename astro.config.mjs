import mdx from '@astrojs/mdx';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: node({
        mode: 'standalone'
    }),
    integrations: [tailwind(), mdx()],
    vite: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
                "~": path.resolve(__dirname, "./"),
            }
        }
    }
});
