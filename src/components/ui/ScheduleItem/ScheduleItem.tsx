import classNames from "classnames";
import styles from "./ScheduleItem.module.scss";
import Icon from "@mdi/react";
import { mdiClock, mdiQrcode, mdiCodeBraces } from "@mdi/js";

const iconsSet = {
  clock: mdiClock,
  qr: mdiQrcode,
  braces: mdiCodeBraces,
};

type Props = {
  icon?: keyof typeof iconsSet;
  title: string;
  startDate: string;
  endDate: string;
  theme?: "lightBlue" | "blue" | "orange";
  className?: string;
};

export function ScheduleItem({
  icon = "clock",
  title,
  startDate,
  endDate,
  theme = "lightBlue",
  className,
}: Props) {
  return (
    <div className={classNames(styles.item, styles[theme], className)}>
      <div className={styles.iconContainer}>
        <Icon path={iconsSet[icon]} className={styles.icon} />
      </div>
      <div className={styles.textContainer}>
        <h4>{title}</h4>
        <p>
          {startDate} - {endDate}
        </p>
      </div>
    </div>
  );
}
