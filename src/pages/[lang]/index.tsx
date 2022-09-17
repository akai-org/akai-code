import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getLocalizationProps } from "translations";
import { Index } from "../../components/main-page/Index";
import { locales } from "../../translations/config";
import { Localization } from "../../translations/types";

const IndexPage: NextPage<{
  localization: Localization;
}> = () => <Index />;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { locale, translations } = getLocalizationProps(ctx);
  return {
    props: { locale, translations },
  };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: locales.map((lang) => ({ params: { lang } })),
  fallback: false,
});

export default IndexPage;
