// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import { LANGUAGES, DEFAULT_LANGUAGE, LOCALES_INFO } from './src/i18n/consts';

// https://astro.build/config
export default defineConfig({
  site: 'https://danilloism.dev',
  output: 'static',
  i18n: {
    locales: [...LANGUAGES],
    defaultLocale: DEFAULT_LANGUAGE,
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    icon(),
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LANGUAGE,
        locales: Object.fromEntries(
          Object.entries(LOCALES_INFO).map(([key, value]) => [key, value.lang])
        ),
      },
    }),
  ],
});
