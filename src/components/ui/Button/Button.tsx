import classNames from "classnames";
import React from "react";
import styles from "./Button.module.scss";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "discord";
  onClick?: () => void;
  href?: string;
};

const variants = {
  primary: styles.primary,
  discord: styles.discord,
} as const;

export function Button({
  children,
  variant = "primary",
  onClick,
  href,
}: Props) {
  const classes = classNames(styles.button, variants[variant]);

  if (href) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
