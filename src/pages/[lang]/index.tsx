import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { defaultLocale, locales } from "translations";
import { Index } from "../../components/main-page/Index";

const IndexPage: NextPage = () => <Index />;

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(
        (ctx.params?.lang as string) || defaultLocale,
      )),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: locales.map((lang) => ({ params: { lang } })),
  fallback: false,
});

export default IndexPage;
