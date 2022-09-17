import { Heading, Section, Text } from "components/ui";
import { useTranslation, Trans } from "next-i18next";
import styles from "./EventDetails.module.scss";

export function EventDetails() {
  const { t } = useTranslation();

  return (
    <Section id="event-details" className={styles.section}>
      <Heading className={styles.heading} withAccent>
        {t("eventDetails.title")}
      </Heading>
      <Text className={styles.text}>
        <Trans
          i18nKey="eventDetails.description.main"
          components={{ b: <b /> }}
        />
      </Text>
      <Text className={styles.text}>
        <Trans
          i18nKey="eventDetails.description.idea"
          components={{ b: <b /> }}
        />
      </Text>
      <Text className={styles.text}>
        <Trans
          i18nKey="eventDetails.description.categories"
          components={{ b: <b /> }}
        />
      </Text>
    </Section>
  );
}
