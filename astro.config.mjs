import { defineConfig } from 'astro/config';
import codeblocks from "@thewebforge/astro-code-blocks";
import preload from "astro-preload";
import * as config from './src/config.js';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [preload(), codeblocks({
    // Copy Button Options
    copyButtonTitle: 'Copy',
    copyButtonTooltip: 'Copied to clipboard',
  }), mdx()],
  redirects: config.REDIRECTS,
});