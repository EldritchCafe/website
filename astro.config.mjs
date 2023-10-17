import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import behead from 'remark-behead';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [[behead, {
      depth: 1
    }]]
  }
});
