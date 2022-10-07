import { useTranslation } from "next-i18next";
import { Section, Heading, Text, ScheduleItem } from "components/ui";
import { iconsSet } from "./../../ui/ScheduleItem/ScheduleItem";
import styles from "./Schedule.module.scss";

type Agenda = {
  title: string;
  icon?: string;
  start: string;
  end: string;
};

export function Schedule() {
  const { t } = useTranslation();

  const days = t("schedule.days", {
    returnObjects: true,
  }) as { name: string; agenda: Agenda[] }[];

  return (
    <Section id="schedule">
      <Heading withAccent>{t("schedule.title")}</Heading>
      {days.map((day) => (
        <div key={day.name}>
          <Text size="xl" className={styles.dayTitle}>
            {day.name}
          </Text>
          {day.agenda.map((item) => (
            <ScheduleItem
              title={item.title}
              icon={item.icon as keyof typeof iconsSet}
              startDate={item.start}
              endDate={item.end}
              key={item.title}
              className={styles.scheduleItem}
            />
          ))}
        </div>
      ))}
    </Section>
  );
}
