import { useTranslation } from "next-i18next";
import { Section, Heading, Text, ScheduleItem } from "components/ui";
import { scheduleList } from "./config";
import styles from "./Schedule.module.scss";
import dayjs from "dayjs";

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
          {Object.keys(day.eventNames).map((key) => {
            return (
              <ScheduleElement
                elementId={key}
                title={day.eventNames[key]}
                key={key}
              />
            );
          })}
        </div>
      ))}
      <Text size="m" className={styles.additionalInfo}>
        {t("schedule.info")}
      </Text>
    </Section>
  );
}

function ScheduleElement({
  elementId,
  title,
}: {
  elementId: string;
  title: string;
}) {
  const config = scheduleList.find((el) => el.name === elementId);

  let color: "blue" | "orange" | "lightBlue" = "blue";

  if (config) {
    const timeStart = dayjs(config.startTimestamp);
    const timeEnd = dayjs(config.endTimestamp);
    const now = dayjs();

    if (timeEnd.isBefore(now)) color = "lightBlue";
    else if (timeStart.isBefore(now)) color = "orange";
  }

  return (
    <ScheduleItem
      title={title}
      icon={config?.icon}
      startDate={config?.startTimeText || "XX:XX"}
      endDate={config?.endTimeText}
      theme={color}
      className={styles.scheduleItem}
    />
  );
}
