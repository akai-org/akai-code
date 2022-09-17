import type { AppProps } from "next/app";
import { Footer, Navigation } from "components/ui";
import "styles/globals.css";
import "styles/variables.css";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default appWithTranslation(App);
