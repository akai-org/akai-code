import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Index } from "../../main-page/Index";
import { locales } from "../../translations/config";
import { getLocalizationProps } from "../../translations/context/LanguageContext";
import { Localization } from "../../translations/types";

const IndexPage: NextPage<{
  localization: Localization;
}> = ({}) => <Index />;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx);
  return {
    props: {
      localization,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: locales.map((lang) => ({ params: { lang } })),
  fallback: false,
});

export default IndexPage;
