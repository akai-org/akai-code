import LocaleSwitcher from "../../translations/components/LanguageSwitcher";
import useTranslation from "../../translations/hooks/useTranslations";

export function Hero() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("hero.title")}</h1>
      <LocaleSwitcher />
    </div>
  );
}
