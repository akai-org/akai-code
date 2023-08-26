import { Heading, Section, Text, Badge } from "components/ui";
import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <Section variant="blue" id="hero" className={styles.section}>
      <div className={styles.contentWrapper}>
        <div className={styles.logoWrapper}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.svg" alt="logo" className={styles.logo} />
        </div>
        <div>
          <Heading size="3xl" className={styles.title} withAccent>
            AKAI Camp 2023
          </Heading>
          <Text size="2xl" className={styles.subtitle}>
            Podtytuł
          </Text>
          <div className={styles.badgesContainer}>
            <div className={styles.badgeWrapper}>
              <Badge color="secondary" className={styles.badge}>
                Offline
              </Badge>
              <Text size="xl" className={styles.badgeDescription}>
                Data
              </Text>
            </div>
            <div className={styles.badgeWrapper}>
              <Badge color="secondary" className={styles.badge}>
                Miasto
              </Badge>
              <div className={styles.badgeDescription}>
                <Text size="xl">Centrum wykładowe</Text>
                <Text size="xl">PUT</Text>
                <Text size="xl">Kampus Piotrowo</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
