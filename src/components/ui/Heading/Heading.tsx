import { ReactNode } from "react";
import classNames from "classnames";
import styles from "./Heading.module.scss";

type Props = {
  children: ReactNode;
  size?: "3xl" | "2xl" | "xl" | "l" | "m" | "s";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  withAccent?: boolean;
};

export function Heading({
  children,
  size = "2xl",
  as = "h2",
  className,
  withAccent = false,
}: Props) {
  const Component = as;
  return (
    <Component
      className={classNames(styles.heading, styles[`size-${size}`], className)}
    >
      {withAccent ? (
        <span className={styles.accent}>{children}</span>
      ) : (
        children
      )}
    </Component>
  );
}
