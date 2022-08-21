import React from "react";
import { useRouter } from "next/router";
import { isLocale, Localization, Locale } from "../types";
import translations from "../locales";
import { defaultLocale } from "../config";

interface ContextProps {
  readonly localization: Localization;
  readonly setLocale: (localization: Localization) => void;
}

export const LanguageContext = React.createContext<ContextProps>({
  localization: {
    locale: defaultLocale,
    translations: translations[defaultLocale],
  },
  setLocale: () => null,
});

export const LanguageProvider: React.FC<{
  localization: Localization;
  children: React.ReactNode;
}> = ({ localization, children }) => {
  const [localizationState, setLocalizationState] = React.useState({
    locale: localization?.locale,
    translations: localization?.translations,
  });
  const { query } = useRouter();

  React.useEffect(() => {
    if (
      typeof query.lang === "string" &&
      isLocale(query.lang) &&
      localization?.locale !== query.lang
    ) {
      setLocalizationState({
        locale: localization?.locale,
        translations: localization?.translations,
      });
    }
  }, [
    query.lang,
    localizationState,
    localization?.locale,
    localization?.translations,
  ]);

  return (
    <LanguageContext.Provider
      value={{ localization, setLocale: setLocalizationState }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const getLocalizationProps = (ctx: { params?: { lang?: Locale } }) => {
  const lang = ctx.params?.lang || defaultLocale;

  return {
    locale: lang,
    translations: translations[lang],
  };
};
