import { getRelativeLocaleUrl } from 'astro:i18n';
import { DEFAULT_LANGUAGE, LANGUAGES } from './consts';
import type { Language } from './types';
import { UI } from './ui';

export function useTranslations(language: Language) {
  return function t(key: keyof (typeof UI)[typeof DEFAULT_LANGUAGE]) {
    return UI[language][key] || UI[DEFAULT_LANGUAGE][key];
  };
}

/**
 * @author Akira HIRATA
 * @license Copyright (c) 2024 Akira HIRATA. Licensed under MIT.
 * @see https://github.com/psephopaiktes/astro-i18n-starter
 */
export function getLocalePaths(url: URL): LocalePath[] {
  return LANGUAGES.map(lang => {
    return {
      lang: lang as Language,
      path: getRelativeLocaleUrl(
        lang,
        url.pathname.replace(/^\/[a-zA-Z-]+/, '')
      ),
    };
  });
}

/**
 * @author Akira HIRATA
 * @license Copyright (c) 2024 Akira HIRATA. Licensed under MIT.
 * @see https://github.com/psephopaiktes/astro-i18n-starter
 */
type LocalePath = {
  lang: Language;
  path: string;
};

/**
 * Copyright (c) 2024 Akira HIRATA. Licensed under MIT.
 * Original: 'localeParams'
 * Adapted by Danillo Ilggner.
 */
export const pageParamsObjects = LANGUAGES.map(lang => ({
  params: { lang },
}));
