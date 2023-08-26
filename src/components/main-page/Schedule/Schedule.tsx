import { Section, Heading, Text } from "components/ui";
import styles from "./Schedule.module.scss";
import React from "react";

export function Schedule() {
  return (
    <Section id="schedule">
      <Heading withAccent>Tytuł</Heading>

      <Text size="m" className={styles.additionalInfo}>
        Info
      </Text>
    </Section>
  );
}
