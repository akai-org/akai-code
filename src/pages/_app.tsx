import type { AppProps } from "next/app";
import { Footer, Navigation } from "components/ui";
import "styles/globals.css";
import "styles/variables.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
