import { Fragment } from "react";
import { Heading, Section, Card } from "components/ui";
import { mentorsData } from "./config";
import styles from "./Mentors.module.scss";

export function Mentors() {
  return (
    <Section variant="blue" id="mentors">
      {mentorsData.map((elem) => (
        <Fragment key={elem.group}>
          <Heading withAccent>Mentorzy</Heading>
          <div className={styles.cardContainer}>
            {elem.data.map((person) => (
              <Card
                name={person.name}
                company={person.company}
                role={"Rola"}
                image={person.image}
                className={styles.card}
                key={person.name}
              />
            ))}
          </div>
        </Fragment>
      ))}
    </Section>
  );
}
