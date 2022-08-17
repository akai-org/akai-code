import React from "react";
import { locales } from "../config";
import useTranslation from "../hooks/useTranslations";
import Link from "next/link";

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
