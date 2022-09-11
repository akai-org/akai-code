import { Heading, Section, Icon } from "components/ui";
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
        {t("location.title")}
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
                  <p>{t("location.location1")}</p>
                  <p>{t("location.location2")}</p>
                </span>
                {t("location.location3")}
              </p>
            </div>
          </div>
          <div className={styles.textWrapper}>
            <p className={styles.text}>{t("location.description1")}</p>
            <p className={styles.text}>{t("location.description2")}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
