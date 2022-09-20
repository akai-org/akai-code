import { Hero } from "./Hero/Hero";
import { EventDetails } from "./EventDetails/EventDetails";
import { Registration } from "./Registration/Registration";
import Head from "next/head";
import { FAQ } from "./FAQ/FAQ";

export function Index() {
  return (
    <>
      <Head>
        <title>AKAI Code</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <EventDetails />
      <Registration />
      <FAQ />
    </>
  );
}
