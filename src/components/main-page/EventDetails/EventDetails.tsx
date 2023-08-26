import { Heading, Section, Text } from "components/ui";
import styles from "./EventDetails.module.scss";

export function EventDetails() {
  return (
    <Section id="event-details" className={styles.section}>
      <Heading className={styles.heading} withAccent>
        Tytuł
      </Heading>
      <Text className={styles.text}>Tekst</Text>
      <Text className={styles.text}>Tekst</Text>
      <Text className={styles.text}>Tekst</Text>
    </Section>
  );
}
