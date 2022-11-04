import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import dayjs from "dayjs";
import classNames from "classnames";
import { Badge, Text } from "components/ui";
import styles from "./HackathonTimer.module.scss";

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

  const { t } = useTranslation();

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
            <Text size="xl">{t(`registration.${text}`)}</Text>
          </div>
        );
      })}
    </div>
  );
}

function useIntervalUpdate(interval = 1000) {
  const [, setState] = useState({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      setState({});
    }, interval);
    return () => clearInterval(intervalId);
  });
}
