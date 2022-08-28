import React from "react";
import { GetStaticProps, NextPage } from "next";
import { Localization } from "translations/types";
import { Index } from "main-page/Index";
import { getLocalizationProps } from "translations/context/LanguageContext";

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

export default IndexPage;
