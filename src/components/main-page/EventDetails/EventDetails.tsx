import { Heading, Section, Text } from "components/ui";
import { useTranslations } from "next-intl";
import styles from "./EventDetails.module.scss";

export function EventDetails() {
  const t = useTranslations();

  return (
    <Section id="event-details" className={styles.section}>
      <Heading className={styles.heading} withAccent>
        {t("eventDetails.title")}
      </Heading>
      <Text className={styles.text}>{t("eventDetails.description1")}</Text>
      <Text className={styles.text}>{t("eventDetails.description2")}</Text>
      <Text className={styles.text}>{t("eventDetails.description3")}</Text>
    </Section>
  );
}
