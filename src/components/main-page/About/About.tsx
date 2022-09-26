import * as React from "react";
import styles from "./About.module.scss";
import { Section, Heading, Text, Card } from "components/ui";
import { useTranslation, Trans } from "next-i18next";

export function About() {
  const { t } = useTranslation();

  const paragraphs = t("about.paragraphs", { returnObjects: true }) as string[];

  return (
    <Section variant="white" id="about">
      <Heading withAccent>{t("about.title")}</Heading>
      <div className={styles.textContainer}>
        {paragraphs?.map((p: string, index: number) => (
          <Text key={index} className={styles.textField}>
            <Trans components={{ strong: <strong /> }}>{p}</Trans>
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
