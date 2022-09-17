import React from "react";
import { GetStaticProps, NextPage } from "next";
import { Index } from "components/main-page/Index";
import { getTranslationsProps } from "translations/getTranslationsProps";

const IndexPage: NextPage = () => <Index />;

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      ...(await getTranslationsProps(ctx.params?.lang as string)),
    },
  };
};

export default IndexPage;
