import { Heading, Section, Card } from "components/ui";
import styles from "./Mentors.module.scss";

export function Mentors() {
  return (
    <Section variant="blue" id="mentors">
      <Heading withAccent>Mentors & Jurors</Heading>
      <div className={styles.cardContainer}>
        <Card name="Some Name" company="Some Company" role="Some Role" />
        <Card name="Some Name" company="Some Company" role="Some Role" />
        <Card name="Some Name" company="Some Company" role="Some Role" />
        <Card name="Some Name" company="Some Company" role="Some Role" />
        <Card name="Some Name" company="Some Company" role="Some Role" />
        <Card name="Some Name" company="Some Company" role="Some Role" />
        <Card name="Some Name" company="Some Company" role="Some Role" />
        <Card name="Some Name" company="Some Company" role="Some Role" />
        <Card name="Some Name" company="Some Company" role="Some Role" />
        <Card name="Some Name" company="Some Company" role="Some Role" />
        <Card name="Some Name" company="Some Company" role="Some Role" />
        <Card name="Some Name" company="Some Company" role="Some Role" />
      </div>
    </Section>
  );
}
