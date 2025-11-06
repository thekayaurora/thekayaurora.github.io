import remarkBreaks from 'remark-breaks'; /* i shouldnt need to use a PLUGIN just to properly do a hard break ffs */
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  site: "http://kay.is-a.dev",
  markdown: {
    remarkPlugins: [remarkBreaks],
  },
});
