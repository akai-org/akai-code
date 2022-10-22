import * as React from "react";
import styles from "./About.module.scss";
import { Section, Heading, Text } from "components/ui";
import { useTranslation, Trans } from "next-i18next";

type CoordinatorData = {
  title: string;
  description: string;
};

export function About() {
  const { t } = useTranslation();

  const paragraphs = t("about.paragraphs", { returnObjects: true }) as string[];
  const coordinators = t("about.coordinators", {
    returnObjects: true,
  }) as CoordinatorData[];

  return (
    <Section variant="white" id="about">
      <Heading withAccent>{t("about.title")}</Heading>

      <div className={styles.content}>
        <div className={styles.textContainer}>
          {paragraphs?.map((p: string, index: number) => (
            <Text key={index} className={styles.textField}>
              <Trans components={{ strong: <strong /> }}>{p}</Trans>
            </Text>
          ))}
          <ul className={styles.coordinatorList}>
            {coordinators?.map(({ title, description }: CoordinatorData) => (
              <li key={title} className={styles.coordinatorItem}>
                <Text className={styles.coordinatorTitle}>{title}</Text>
                <Text>{description}</Text>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.pictureWrapper}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/coordinators.jpg"
            alt="coordinators"
            className={styles.picture}
          />
          <a
            href="https://www.facebook.com/PROgressioPROmotio"
            target="_blank"
            rel="noreferrer noopener"
          >
            fot. Jakub Niklas OS PROgressio PROmotio
          </a>
        </div>
      </div>
    </Section>
  );
}
