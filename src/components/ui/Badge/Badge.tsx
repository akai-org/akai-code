import * as React from "react";
import classNames from "classnames";
import styles from "./Badge.module.scss";

type Props = {
  children: React.ReactNode;
  size?: "sm" | "normal";
  color?: "primary" | "secondary";
  className?: string;
  link?: string;
};

export function Badge({ children, color = "primary", className }: Props) {
  return (
    <p className={classNames(styles.badge, styles[color], className)}>
      {children}
    </p>
  );
}
