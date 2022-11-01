import { Heading, Section, Card } from "components/ui";
import { useTranslation } from "next-i18next";
import { mentorsData } from "./config";
import styles from "./Mentors.module.scss";

export function Mentors() {
  const { t } = useTranslation();

  return (
    <Section variant="blue" id="mentors">
      <Heading withAccent>{t("mentors.title")}</Heading>
      <div className={styles.cardContainer}>
        {mentorsData.map((person) => (
          <Card
            name={person.name}
            company={person.company}
            role={
              typeof person.role === "object"
                ? person.role.reduce(
                    (prev: string, next: string) =>
                      `${t("mentors.roles." + prev)}/${t(
                        "mentors.roles." + next,
                      )}`,
                  )
                : t("mentors.roles." + person.role)
            }
            image={person.image}
            className={styles.card}
            key={person.name}
          />
        ))}
      </div>
    </Section>
  );
}
