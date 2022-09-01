import React, { ReactNode } from "react";
import classNames from "classnames";
import styles from "./Text.module.scss";

type Props = {
  children: ReactNode;
  size?: "xxl" | "xl" | "l" | "m" | "s";
  className?: string;
};

export function Text({ children, size = "s", className }: Props) {
  return (
    <p className={classNames(styles.text, styles[size], className)}>
      {children}
    </p>
  );
}
