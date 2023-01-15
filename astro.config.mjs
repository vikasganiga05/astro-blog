import { defineConfig } from "astro/config";

import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

export default defineConfig({
  site: "https://astro-blog-cip.netlify.app/",
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    sitemap(),
    react(),
    tailwind(),
    partytown(),
  ],
});
