import type { AppProps } from "next/app";
import { Footer, Navigation } from "components/ui";
import "styles/globals.css";
import "styles/variables.css";
import { NextIntlProvider } from "next-intl";

function App({ Component, pageProps }: AppProps) {
  const { locale, translations } = pageProps.localization;

  return (
    <NextIntlProvider messages={translations} locale={locale}>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </NextIntlProvider>
  );
}

export default App;
