import classNames from "classnames";
import styles from "./ScheduleItem.module.scss";
import { Icon } from "../";
import { clock, qr, braces } from "../Icon";

export const iconsSet = {
  clock,
  qr,
  braces,
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
  theme = "blue",
  className,
}: Props) {
  return (
    <div className={classNames(styles.item, styles[theme], className)}>
      <div className={styles.iconContainer}>
        <Icon icon={iconsSet[icon]} className={styles.icon} />
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
