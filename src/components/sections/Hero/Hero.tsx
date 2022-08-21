import LocaleSwitcher from "../../../translations/components/LanguageSwitcher";
import useTranslation from "../../../translations/hooks/useTranslations";
import styles from "./Hero.module.scss";

export function Hero() {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className={styles.title}>{t("hero.title")}</h1>
      <LocaleSwitcher />
    </div>
  );
}
