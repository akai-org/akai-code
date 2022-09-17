import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { locales } from "translations";
import { getTranslationsProps } from "translations/getTranslationsProps";
import { Index } from "../../components/main-page/Index";

const IndexPage: NextPage = () => <Index />;

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
