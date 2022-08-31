import React from "react";
import Link from "next/link";
import useTranslation from "translations/hooks/useTranslations";
import { locales } from "translations/config";

const LocaleSwitcher: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <label className="language-switcher">
        {locales.map((locale) => (
          <div key={locale}>
            <Link href={`/${locale}`}>{t(`language.${locale}`)}</Link>
          </div>
        ))}
      </label>
    </div>
  );
};

export default LocaleSwitcher;
