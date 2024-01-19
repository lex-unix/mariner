import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite';

const env = loadEnv("", process.cwd(), "STORYBLOK")

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        'page': 'storyblok/Page',
        'marina': 'storyblok/Item',
        'marinaList': 'storyblok/MarinaList',
        'apartment': 'storyblok/Item',
        'apartmentList': 'storyblok/ApartmentList',
        'navigationList': 'storyblok/NavigationList',
        'navigation': 'storyblok/Navigation',
        'navigationSection': 'storyblok/NavigationSection'
      },
      apiOptions: {
        region: 'eu'
      }
    })
  ]
});
