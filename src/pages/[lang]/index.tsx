import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Content } from "components/main-page/Content";
import { locales } from "translations";
import { getTranslationsProps } from "translations/getTranslationsProps";

const IndexPage: NextPage = () => <Content />;

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
