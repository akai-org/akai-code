import dynamic from "next/dynamic";
import { Heading, Section, Button } from "components/ui";
import useTranslation from "translations/hooks/useTranslations";
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
      <div className={styles.linksContainer}>
        <Button href={registrationFormURL}>
          {t("registration.registration")}
        </Button>
      </div>
    </Section>
  );
}
