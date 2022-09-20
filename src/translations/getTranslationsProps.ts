import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { defaultLocale } from "translations";

export async function getTranslationsProps(locale: string = defaultLocale) {
  return await serverSideTranslations(locale);
}
