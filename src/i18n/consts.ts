import type { Language, LocaleInfo } from './types';

export const LANGUAGES = ['pt', 'en'] as const;
export const DEFAULT_LANGUAGE = 'en' satisfies Language;

export const LOCALES_INFO: LocaleInfo = {
  en: {
    name: 'English',
    lang: 'en-US',
  },
  pt: {
    name: 'Português',
    lang: 'pt-BR',
  },
} as const;
