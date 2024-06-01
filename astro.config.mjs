import { defineConfig } from 'astro/config';
import codeblocks from "@thewebforge/astro-code-blocks";
import preload from "astro-preload";
import orama from '@orama/plugin-astro';
import * as config from './src/config.js';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [preload(),
  orama({
    // We can generate more than one DB, with different configurations
    mydb: {
      // Required. Only pages matching this path regex will be indexed
      pathMatcher: /resources|turorials|api\/[0-9]{4}\/[0-9]{2}\/[0-9]{2}\/.+|spec|\/overview$/,

      // Optional. ['body'] by default. Use it to constraint what is used to
      // index a page.
      contentSelectors: ['.content'],
    },
    }), mdx()],
  redirects: config.REDIRECTS,
});