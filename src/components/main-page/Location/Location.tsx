import { Heading, Section, Text, Badge, Icon } from "components/ui";
import useTranslation from "translations/hooks/useTranslations";
import styles from "./Location.module.scss";
import { mapMarker } from "components/ui/Icon";
import dynamic from "next/dynamic";

const LocationMap = dynamic(
  () =>
    import("./LocationMap").then(
      ({ LocationMap }) => LocationMap,
    ) as Promise<React.FC>,
  {
    ssr: false,
  },
);

export function Location() {
  const { t } = useTranslation();

  return (
    <Section variant="blue" id="location" className={styles.section}>
      <Heading className={styles.sectionHeading} withAccent>
        Location
      </Heading>
      <div className={styles.wrapper}>
        <LocationMap />
        <div className={styles.content}>
          <div className={styles.contentWrapper}>
            <div className={styles.iconWrapper}>
              <Icon className={styles.icon} icon={mapMarker} />
            </div>
            <div className={styles.headingWrapper}>
              <p className={styles.heading}>
                <span className={styles.bold}>
                  Centrum Wykładowe <br></br>Politechniki Poznańskiej<br></br>
                </span>
                Kampus piotrowo, Poznań
              </p>
            </div>
          </div>
          <div className={styles.textWrapper}>
            <p className={styles.text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo corrupti tenetur perferendis, voluptatibus accusantium
              distinctio dolores blanditiis quas, vitae veritatis corporis! Modi
              sed nostrum commodi.
            </p>
            <p className={styles.text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo corrupti tenetur perferendis, voluptatibus accusantium
              distinctio dolores blanditiis quas, vitae veritatis corporis! Modi
              sed nostrum commodi.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
