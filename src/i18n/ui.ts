import type { Language } from './types';

export const UI: {
  readonly [key in Language]: Record<string, string>;
} = {
  en: {
    'routing.redirect': 'Redirect...',
  },
  pt: {
    'routing.redirect': 'Redirecionando...',
  },
} as const;
