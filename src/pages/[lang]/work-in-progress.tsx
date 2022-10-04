import {
  About,
  EventDetails,
  Hero,
  Location,
  Mentors,
  Registration,
} from "components/main-page";
import { FAQ } from "components/main-page/FAQ/FAQ";
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
    <EventDetails />
    <Registration />
    <About />
    <Location />
    <Mentors />
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
