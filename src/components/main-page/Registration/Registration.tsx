import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";
import { Button, Heading, Section } from "components/ui";
import styles from "./Registration.module.scss";

const registrationFormURL =
  "https://samorzad.put.poznan.pl/akai-rejestracja-zespolu";

const HackathonTimer = dynamic(
  () =>
    import("./HackathonTimer").then(
      ({ HackathonTimer }) => HackathonTimer,
    ) as Promise<React.FC>,
  {
    ssr: false,
  },
);

export function Registration() {
  const { t } = useTranslation();

  return (
    <Section variant="blue" id="registration" className={styles.section}>
      <Heading className={styles.heading} withAccent>
        {t("registration.title")}
      </Heading>
      <HackathonTimer />
      <div className={styles.buttonsContainer}>
        <Button href={registrationFormURL}>
          {t("registration.registration")}
        </Button>
      </div>
    </Section>
  );
}
