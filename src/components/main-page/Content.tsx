import Head from "next/head";
import {
  Hero,
  EventDetailsExtended,
  Registration,
  About,
  Location,
  Partners,
  FAQ,
  Schedule,
} from ".";

export function Content() {
  return (
    <>
      <Head>
        <title>AKAI Code</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <EventDetailsExtended />
      <Registration />
      <About />
      <Location />
      <Schedule />
      <Partners />
      <FAQ />
    </>
  );
}
