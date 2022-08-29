import { Heading, Section, Text } from "components/ui";
import LocaleSwitcher from "translations/components/LanguageSwitcher";
import useTranslation from "translations/hooks/useTranslations";

export function Hero() {
  const { t } = useTranslation();

  return (
    <Section>
      <Heading withAccent>{t("hero.title")}</Heading>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis id
        quas quod inventore ipsa. Neque eligendi minus praesentium dolorum fuga
        quod ipsum illum qui eaque.
      </Text>
      <LocaleSwitcher />
    </Section>
  );
}
