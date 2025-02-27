import { type Language } from './types';

export const UI: {
  readonly [key in Language]: Record<string, string>;
} = {
  en: {
    'teste.teste': '',
  },
  pt: {
    'teste.teste': '',
  },
} as const;
