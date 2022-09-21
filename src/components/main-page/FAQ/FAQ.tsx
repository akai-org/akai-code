import { Heading, Section } from "components/ui";
import useTranslation from "translations/hooks/useTranslations";
import styles from "./FAQ.module.scss";
import { FAQDisclosure } from "./FAQDisclosure/FAQDisclosure";

const FAQ = () => {
  const { t } = useTranslation();

  const sections = t("faq.x");

  console.log("Sections", sections);

  return (
    <Section variant="blue">
      <Heading className={styles.heading} withAccent>
        {t("faq.title")}
      </Heading>
      {t("faq.sections")}
      <div></div>
    </Section>
  );
};

export { FAQ };
