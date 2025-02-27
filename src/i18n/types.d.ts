import { LANGUAGES } from './consts';

export type Language = (typeof LANGUAGES)[number];
export type LocaleInfo = {
  [key in Language]: {
    name: string;
    lang: string;
  };
};
