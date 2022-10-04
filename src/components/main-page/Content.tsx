import Head from "next/head";
import { Hero, EventDetails, Registration } from ".";

export function Content() {
  return (
    <>
      <Head>
        <title>AKAI Code</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <EventDetails />
      <Registration />
    </>
  );
}
