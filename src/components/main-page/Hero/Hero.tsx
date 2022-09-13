import { Heading, Section, Text, Badge } from "components/ui";
import useTranslation from "translations/hooks/useTranslations";
import styles from "./Hero.module.scss";

export function Hero() {
  const { t } = useTranslation();

  return (
    <Section variant="blue" id="hero" className={styles.section}>
      <div className={styles.contentWrapper}>
        <div className={styles.logoWrapper}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.svg" alt="logo" className={styles.logo} />
        </div>
        <div>
          <Heading size="3xl" className={styles.title} withAccent>
            {t("hero.title")}
          </Heading>
          <Text size="2xl" className={styles.subtitle}>
            {t("hero.subtitle")}
          </Text>
          <div className={styles.badgesContainer}>
            <div className={styles.badgeWrapper}>
              <Badge color="secondary" className={styles.badge}>
                {t("hero.offline")}
              </Badge>
              <Text size="xl" className={styles.badgeDescription}>
                {t("hero.date")}
              </Text>
            </div>
            <div className={styles.badgeWrapper}>
              <Badge color="secondary" className={styles.badge}>
                {t("hero.city")}
              </Badge>
              <div className={styles.badgeDescription}>
                <Text size="xl">{t("hero.place.lectureCentre")}</Text>
                <Text size="xl">{t("hero.place.put")}</Text>
                <Text size="xl">{t("hero.place.piotrowoCampus")}</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
