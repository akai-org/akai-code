import { useTranslation } from "next-i18next";
import { Section, Heading, Text } from "components/ui";
import styles from "./Schedule.module.scss";
import dynamic from "next/dynamic";
import React from "react";

const ScheduleElement = dynamic(
  () =>
    import("./ScheduleElement").then(
      ({ ScheduleElement }) => ScheduleElement,
    ) as Promise<
      React.FC<{
        elementId: string;
        title: string;
      }>
    >,
  {
    ssr: false,
  },
);

export function Schedule() {
  const { t } = useTranslation();

  const days = t("schedule.days", {
    returnObjects: true,
  }) as { name: string; eventNames: { [key: string]: string } }[];

  return (
    <Section id="schedule">
      <Heading withAccent>{t("schedule.title")}</Heading>
      {days.map((day) => (
        <div key={day.name}>
          <Text size="xl" className={styles.dayTitle}>
            {day.name}
          </Text>
          {Object.keys(day.eventNames).map((key) => (
            <ScheduleElement
              elementId={key}
              title={day.eventNames[key]}
              key={key}
            />
          ))}
        </div>
      ))}
      <Text size="m" className={styles.additionalInfo}>
        {t("schedule.info")}
      </Text>
    </Section>
  );
}
