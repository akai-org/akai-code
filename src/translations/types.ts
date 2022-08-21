import { locales } from "./config";

export type Locale = typeof locales[number];

export interface Translations {
  [key: string]: string;
}

export type Localization = {
  locale: Locale;
  translations: Translations;
};

export function isLocale(tested: string): tested is Locale {
  return locales.some((locale) => locale === tested);
}
