import { GetStaticProps, NextPage } from "next";
import { Content } from "components/main-page/Content";
import { getTranslationsProps } from "translations/getTranslationsProps";

const IndexPage: NextPage = () => <Content />;

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      ...(await getTranslationsProps(ctx.params?.lang as string)),
    },
  };
};

export default IndexPage;
