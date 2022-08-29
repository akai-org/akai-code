import classNames from "classnames";
import { Section } from "components/main-page/types";
import styles from "./Section.module.scss";

type SectionVariant = "blue" | "white";

type Props = {
  id?: Section;
  children: React.ReactNode;
  className?: string;
  variant?: SectionVariant;
};

export function Section({ children, className, variant = "white", id }: Props) {
  return (
    <section
      className={classNames(
        styles.wrapper,
        styles[variant],
        className,
        id && "section",
      )}
      id={id}
    >
      <div className={styles.innerWrapper}>{children}</div>
    </section>
  );
}
