import type { AppProps } from "next/app";
import { Footer, Navigation } from "components/ui";
import "styles/globals.css";
import "styles/variables.css";
import { NextIntlProvider } from "next-intl";
import { defaultLocale } from "translations/config";
import { translations as translationsData } from "translations";
import { Locale } from "translations/types";

function App({
  Component,
  pageProps: {
    locale = defaultLocale,
    translations = translationsData[locale as Locale],
    ...pageProps
  },
}: AppProps) {
  return (
    <NextIntlProvider
      messages={translations}
      locale={locale}
      defaultTranslationValues={{ b: (children) => <b>{children}</b> }}
    >
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </NextIntlProvider>
  );
}

export default App;
