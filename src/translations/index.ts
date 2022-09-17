import { defaultLocale } from "translations/config";
import { Locale } from "translations/types";
import en from "./locales/en.json";
import pl from "./locales/pl.json";
import common from "./locales/common.json";

export const translations = {
  pl: { ...pl, ...common },
  en: { ...en, ...common },
};

export const getLocalizationProps = (ctx: { params?: { lang?: Locale } }) => {
  const lang = ctx.params?.lang || defaultLocale;

  return {
    locale: lang,
    translations: translations[lang],
  };
};
