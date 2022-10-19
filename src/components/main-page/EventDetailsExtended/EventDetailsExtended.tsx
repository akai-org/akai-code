import { Heading, Section, Text } from "components/ui";
import { cog, hammerWrench, lightBulb } from "components/ui/Icon";
import { useTranslation, Trans } from "next-i18next";
import { Category } from "./Category";
import styles from "./EventDetailsExtended.module.scss";

export function EventDetailsExtended() {
  const { t } = useTranslation();

  return (
    <Section id="event-details" className={styles.section}>
      <Heading className={styles.heading} withAccent>
        {t("eventDetails.title")}
      </Heading>
      <Text className={styles.text}>
        <Trans
          i18nKey="eventDetails.description.main"
          components={{ strong: <strong /> }}
        />
      </Text>
      <Text className={styles.text}>
        <Trans
          i18nKey="eventDetails.description.idea"
          components={{ strong: <strong /> }}
        />
      </Text>
      <Text className={styles.text}>
        <Trans
          i18nKey="eventDetails.description.categories"
          components={{ strong: <strong /> }}
        />
      </Text>

      <Heading size="xl" as="h3" className={styles.subtitle}>
        {t("eventDetails.topic.title")}
      </Heading>

      <Text className={styles.text}>
        <Trans
          i18nKey="eventDetails.topic.topic"
          components={{ strong: <strong /> }}
        />
      </Text>
      <Text className={styles.text}>
        <Trans
          i18nKey="eventDetails.topic.topicDescription"
          components={{ strong: <strong />, br: <br /> }}
        />
      </Text>

      <Heading size="xl" as="h3" className={styles.subtitle}>
        {t("eventDetails.categories.title")}
      </Heading>

      <div className={styles.categoriesContainer}>
        <Category
          icon={lightBulb}
          title={t("eventDetails.categories.bestIdea.title")}
          text={t("eventDetails.categories.bestIdea.description")}
        />
        <Category
          icon={cog}
          title={t("eventDetails.categories.bestPrototype.title")}
          text={t("eventDetails.categories.bestPrototype.description")}
        />
        <Category
          icon={hammerWrench}
          title={t("eventDetails.categories.bestTechnology.title")}
          text={t("eventDetails.categories.bestTechnology.description")}
        />
      </div>
    </Section>
  );
}
