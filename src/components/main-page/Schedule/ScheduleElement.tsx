import { ScheduleItem } from "components/ui";
import { scheduleList } from "./config";
import styles from "./Schedule.module.scss";
import dayjs from "dayjs";
import { useIntervalUpdate } from "components/hooks/useIntervalTimer";

export function ScheduleElement({
  elementId,
  title,
}: {
  elementId: string;
  title: string;
}) {
  useIntervalUpdate();

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
