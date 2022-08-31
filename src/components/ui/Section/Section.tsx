import classNames from "classnames";
import * as React from "react";
import styles from "./Section.module.scss";

type SectionVariant = "blue" | "white";

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: SectionVariant;
};

export function Section({ children, className, variant = "white" }: Props) {
  return (
    <section className={classNames(styles.wrapper, styles[variant], className)}>
      <div className={styles.innerWrapper}>{children}</div>
    </section>
  );
}
