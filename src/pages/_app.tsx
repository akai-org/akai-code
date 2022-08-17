import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LanguageProvider } from "../translations/context/LanguageContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider localization={pageProps.localization}>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
