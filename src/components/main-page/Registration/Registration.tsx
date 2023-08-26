import dynamic from "next/dynamic";
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
  return (
    <Section variant="blue" id="registration" className={styles.section}>
      <Heading className={styles.heading} withAccent>
        AKAI Camp startuje za
      </Heading>
      <HackathonTimer />
      <div className={styles.buttonsContainer}>
        <Button href={registrationFormURL}>Rejestracja</Button>
      </div>
    </Section>
  );
}
