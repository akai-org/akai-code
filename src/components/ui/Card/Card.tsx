import styles from "./Card.module.scss";
import Image from "next/image";
import classNames from "classnames";

type CardType = {
  image?: string;
  name: string;
  role: string;
  className?: string;
};

export function Card({
  image = "/images/person.png",
  name,
  role,
  className,
}: CardType) {
  return (
    <div className={classNames(className, styles.card)}>
      <div className={styles.imageDiv}>
        <Image className={styles.image} src={image} alt={name} layout="fill" />
      </div>
      <div className={styles.textDiv}>
        <p className={styles.textName}>{name}</p>
        <p className="role">{role}</p>
      </div>
    </div>
  );
}
