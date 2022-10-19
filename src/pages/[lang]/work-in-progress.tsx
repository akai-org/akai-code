import {
  About,
  EventDetailsExtended,
  Hero,
  Location,
  Mentors,
  Registration,
  Partners,
  FAQ,
  Schedule,
} from "components/main-page";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { locales } from "translations";
import { getTranslationsProps } from "translations/getTranslationsProps";

const IndexPage: NextPage = () => (
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
    <Mentors />
    <Partners />
    <FAQ />
  </>
);

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      ...(await getTranslationsProps(ctx.params?.lang as string)),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: locales.map((lang) => ({ params: { lang } })),
  fallback: false,
});

export default IndexPage;
