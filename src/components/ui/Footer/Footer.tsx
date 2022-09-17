import { facebook, github, linkedin, twitter } from "../Icon";
import { useTranslations } from "next-intl";
import { Icon } from "components/ui";
import styles from "./Footer.module.scss";

const socialIcons = [
  {
    url: "https://www.facebook.com/akai.pp",
    icon: facebook,
    title: "Facebook",
  },
  {
    url: "https://twitter.com/akai_pp",
    icon: twitter,
    title: "Twitter",
  },
  {
    url: "https://github.com/akai-org",
    icon: github,
    title: "Github",
  },
  {
    url: "https://linkedin.com/company/akai-pp/",
    icon: linkedin,
    title: "Linkedin",
  },
] as const;

export function Footer({}) {
  const t = useTranslations();

  return (
    <footer className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.row}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.svg" alt="logo" className={styles.logo} />
          <div className={styles.socialIcons}>
            {socialIcons.map(({ url, icon, title }) => (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                key={url}
                title={title}
                className={styles.iconWrapper}
              >
                <Icon icon={icon} className={styles.icon} />
              </a>
            ))}
          </div>
        </div>
        <div className={styles.row}>
          <p>
            {t("footer.contact")}:{" "}
            <a href="mailto:kontakt@akai.org.pl">kontakt@akai.org.pl</a>
          </p>
          <p>&copy; 2022 {t("footer.akai")}</p>
        </div>
      </div>
    </footer>
  );
}
