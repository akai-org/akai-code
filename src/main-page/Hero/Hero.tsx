import { Section } from "components/Section/Section";
import LocaleSwitcher from "translations/components/LanguageSwitcher";
import useTranslation from "translations/hooks/useTranslations";
import styles from "./Hero.module.scss";

export function Hero() {
  const { t } = useTranslation();

  return (
    <Section>
      <h1 className={styles.title}>{t("hero.title")}</h1>
      <LocaleSwitcher />
    </Section>
  );
}
