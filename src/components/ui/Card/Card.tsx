/* eslint-disable @next/next/no-img-element */
import styles from "./Card.module.scss";
import classNames from "classnames";

type CardType = {
  image?: string;
  name: string;
  company?: string;
  role: string;
  className?: string;
};

export function Card({
  image = "/images/person.png",
  name,
  company,
  role,
  className,
}: CardType) {
  return (
    <div className={classNames(className, styles.card)}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt={name} />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.mainText}>{name}</p>
        {company && <p>{company}</p>}
        <p className={classNames(company && styles.highlightedText)}>{role}</p>
      </div>
    </div>
  );
}
