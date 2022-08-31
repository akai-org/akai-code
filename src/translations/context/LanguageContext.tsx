import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { defaultLocale } from "translations/config";
import translations from "translations/locales";
import { Localization, isLocale, Locale } from "translations/types";

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

const defaultLocalization = {
  locale: defaultLocale,
  translations: translations[defaultLocale],
};

type Props = {
  children: ReactNode;
  localization?: Localization;
};

export const LanguageProvider = ({
  localization = defaultLocalization,
  children,
}: Props) => {
  const [localizationState, setLocalizationState] = useState({
    locale: localization.locale,
    translations: localization.translations,
  });
  const { query } = useRouter();

  useEffect(() => {
    if (
      typeof query.lang === "string" &&
      isLocale(query.lang) &&
      localization.locale !== query.lang
    ) {
      setLocalizationState({
        locale: localization.locale,
        translations: localization.translations,
      });
    }
  }, [
    query.lang,
    localizationState,
    localization.locale,
    localization.translations,
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
