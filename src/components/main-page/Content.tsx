import Head from "next/head";
import {
  Hero,
  EventDetailsExtended,
  Registration,
  About,
  Location,
  Partners,
  FAQ,
  Mentors,
  Schedule,
} from ".";

export function Content() {
  return (
    <>
      <Head>
        <title>AKAI Camp 2023</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <EventDetailsExtended />
      <Registration />
      {/* <About /> */}
      <Location />
      {/* <Schedule /> */}
      {/* <Mentors /> */}
      <Partners />
      <FAQ />
    </>
  );
}
