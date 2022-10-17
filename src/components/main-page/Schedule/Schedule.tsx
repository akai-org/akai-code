import { useTranslation } from "next-i18next";
import { Section, Heading, Text, ScheduleItem } from "components/ui";
import { iconsSet } from "./../../ui/ScheduleItem/ScheduleItem";
import { scheduleList } from "./config";
import styles from "./Schedule.module.scss";

type Agenda = {
  id: number;
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
            <ScheduleElement item={item} key={item.title} />
          ))}
        </div>
      ))}
    </Section>
  );
}

function ScheduleElement({ item }: { item: Agenda }): JSX.Element {
  const timer = scheduleList.find((el) => el.id === item.id);

  let color: "blue" | "orange" | "lightBlue" = "blue";

  if (timer) {
    if (timer?.endTimestamp.getTime() < new Date().getTime())
      color = "lightBlue";
    else if (timer?.startTimestamp?.getTime() < new Date().getTime())
      color = "orange";
  }

  return (
    <ScheduleItem
      title={item.title}
      icon={item.icon as keyof typeof iconsSet}
      startDate={item.start}
      endDate={item.end}
      theme={color}
      className={styles.scheduleItem}
    />
  );
}
