import classNames from "classnames";
import * as React from "react";
import styles from "./Section.module.scss";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Section({ children, className }: Props) {
  return (
    <section className={classNames(styles.wrapper, className)}>
      <div className={styles.innerWrapper}>{children}</div>
    </section>
  );
}
