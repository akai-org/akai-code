import type { AppProps } from "next/app";
import { LanguageProvider } from "translations/context/LanguageContext";
import "styles/globals.css";
import "styles/variables.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider localization={pageProps.localization}>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default App;
