import classNames from "classnames";
import styles from "./ScheduleItem.module.scss";
import { AiFillClockCircle, AiOutlineQrcode } from "react-icons/ai";
import { BsBraces } from "react-icons/bs";

const iconsSet = {
  clock: AiFillClockCircle,
  qr: AiOutlineQrcode,
  braces: BsBraces,
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
  const CustomIcon = iconsSet[icon];

  return (
    <div className={classNames(styles.item, styles[theme], className)}>
      <div className={styles.iconContainer}>
        <CustomIcon />
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
