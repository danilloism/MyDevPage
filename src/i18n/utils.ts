import { DEFAULT_LANGUAGE } from './consts';
import type { Language } from './types';
import { UI } from './ui';

export function getLangFromUrl(url: URL) {
  //use Astro.currentLocale instead
  const [, language] = url.pathname.split('/');
  if (language in UI) return language as keyof typeof UI;
  return DEFAULT_LANGUAGE;
}

export function useTranslations(language: Language) {
  return function t(key: keyof (typeof UI)[typeof DEFAULT_LANGUAGE]) {
    return UI[language][key] || UI[DEFAULT_LANGUAGE][key];
  };
}
