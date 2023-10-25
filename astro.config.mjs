import { defineConfig, squooshImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import behead from 'remark-behead';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  image: {
    service: squooshImageService(),
  },
  markdown: {
    remarkPlugins: [[behead, {
      depth: 1
    }]]
  }
});
