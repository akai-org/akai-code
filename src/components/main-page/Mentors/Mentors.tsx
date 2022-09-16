import { Heading, Section, Card } from "components/ui";
import useTranslation from "translations/hooks/useTranslations";
import styles from "./Mentors.module.scss";

export function Mentors() {
  const { t } = useTranslation();

  return (
    <Section variant="blue" id="mentors">
      <Heading withAccent>{t("mentors.title")}</Heading>
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
