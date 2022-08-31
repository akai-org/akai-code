import type { AppProps } from "next/app";
import { LanguageProvider } from "translations/context/LanguageContext";
import { Footer, Navigation } from "components/ui";
import "styles/globals.css";
import "styles/variables.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider localization={pageProps.localization}>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
