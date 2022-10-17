import { useTranslation } from "next-i18next";
import { Section, Heading, Text, ScheduleItem } from "components/ui";
import { IconType } from "./../../ui/ScheduleItem/ScheduleItem";
import { scheduleList } from "./config";
import styles from "./Schedule.module.scss";
import dayjs from "dayjs";

type Agenda = {
  id: number;
  title: string;
  icon?: IconType;
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

function ScheduleElement({ item }: { item: Agenda }) {
  const timer = scheduleList.find((el) => el.id === item.id);

  let color: "blue" | "orange" | "lightBlue" = "blue";

  if (timer) {
    const timeStart = dayjs(timer.startTimestamp);
    const timeEnd = dayjs(timer.endTimestamp);
    const now = dayjs();

    if (timeEnd.isBefore(now)) color = "lightBlue";
    else if (timeStart.isBefore(now)) color = "orange";
  }

  return (
    <ScheduleItem
      title={item.title}
      icon={item.icon}
      startDate={item.start}
      endDate={item.end}
      theme={color}
      className={styles.scheduleItem}
    />
  );
}
