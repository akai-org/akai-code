import { Heading, Section, Text } from "components/ui";
import { cog, hammerWrench, lightBulb } from "components/ui/Icon";
import { Category } from "./Category";
import styles from "./EventDetailsExtended.module.scss";

export function EventDetailsExtended() {
  return (
    <Section id="event-details" className={styles.section}>
      <Heading className={styles.heading} withAccent>
        AKAI Camp 2023
      </Heading>
      <Text className={styles.text}>Tekst</Text>
      <Text className={styles.text}>Tekst</Text>
      <Text className={styles.text}>Tekst</Text>

      <Heading size="xl" as="h3" className={styles.subtitle}>
        Tytuł
      </Heading>

      <Text className={styles.text}>Tekst</Text>
      <Text className={styles.text}>Tekst</Text>

      <Heading size="xl" as="h3" className={styles.subtitle}>
        Podtytuł
      </Heading>

      <div className={styles.categoriesContainer}>
        <Category icon={lightBulb} title={"Tytuł"} text={"Tekst"} />
        <Category icon={cog} title={"Tytuł"} text={"Tekst"} />
        <Category icon={hammerWrench} title={"Tytuł"} text={"Tekst"} />
      </div>
    </Section>
  );
}
