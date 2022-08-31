import * as React from "react";
import classNames from "classnames";
import styles from "./Badge.module.scss";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  size?: "sm" | "normal";
  color?: "primary" | "secondary";
  className?: string;
  link?: string;
};

export function Badge({
  children,
  size = "sm",
  color = "primary",
  className,
  link,
}: Props) {
  if (link) {
    return (
      <Link href={link}>
        <a
          className={classNames(
            styles.badge,
            styles[size],
            styles[color],
            className,
          )}
        >
          {children}
        </a>
      </Link>
    );
  }
  return (
    <p
      className={classNames(
        styles.badge,
        styles[size],
        styles[color],
        className,
      )}
    >
      {children}
    </p>
  );
}
