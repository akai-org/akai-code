import { Heading, Section, Text } from "components/ui";
import useTranslation from "translations/hooks/useTranslations";
import styles from "./EventDetails.module.scss";

export function EventDetails() {
  const { t } = useTranslation();

  return (
    <Section id="event-details">
      <Heading className={styles.heading} withAccent>
        {t("eventDetails.title")}
      </Heading>
      <Text className={styles.text}>{t("eventDetails.description1")}</Text>
      <Text className={styles.text}>{t("eventDetails.description2")}</Text>
      <Text className={styles.text}>{t("eventDetails.description3")}</Text>
    </Section>
  );
}
