import dayjs from "dayjs";
import classNames from "classnames";
import { Badge, Text } from "components/ui";
import styles from "./HackathonTimer.module.scss";
import { useIntervalUpdate } from "components/hooks/useIntervalTimer";

type ConfigItem = {
  unit: "d" | "h" | "m" | "s";
  text: string;
  modulo: number;
  className?: string;
};

const datesConfig: ConfigItem[] = [
  { unit: "d", text: "days", modulo: 365 },
  { unit: "h", text: "hours", modulo: 24 },
  { unit: "m", text: "minutes", modulo: 60 },
  { unit: "s", text: "seconds", modulo: 60, className: styles.seconds },
];

const hackathonStartDate = dayjs("2022-11-04T17:00:00Z");

export function HackathonTimer() {
  useIntervalUpdate();

  const now = dayjs();

  return (
    <div className={styles.wrapper}>
      {datesConfig.map(({ unit, text, modulo, className }) => {
        const value = Math.max(hackathonStartDate.diff(now, unit) % modulo, 0);

        return (
          <div key={unit} className={classNames(styles.item, className)}>
            <Badge color="secondary" className={styles.badge}>
              {value}
            </Badge>
            <Text size="xl">Rejestracja {text}</Text>
          </div>
        );
      })}
    </div>
  );
}
