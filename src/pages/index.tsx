import React from "react";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Index } from "components/main-page/Index";
import { defaultLocale } from "translations";

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

export default IndexPage;
