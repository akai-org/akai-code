import * as React from "react";
import styles from "./About.module.scss";
import { Section, Heading, Text, Card } from "components/ui";
import useTranslation from "translations/hooks/useTranslations";

export function About() {
  const { t } = useTranslation();

  const paragraphs = t("about.paragraphs") as string[];

  return (
    <Section variant="white" id="about">
      <Heading withAccent>{t("about.title")}</Heading>
      <div className={styles.textContainer}>
        {paragraphs?.length > 0 &&
          paragraphs.map((p: string, index: number) => (
            <Text className={styles.textField} key={index}>
              {p}
            </Text>
          ))}
      </div>

      <div className={styles.cardContainer}>
        <Card name="Some name" role="Some role" />
        <Card name="Some name" role="Some role" />
        <Card name="Some name" role="Some role" />
        <Card name="Some name" role="Some role" />
      </div>
    </Section>
  );
}
