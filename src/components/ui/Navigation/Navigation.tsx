import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import classNames from "classnames";
import { Section } from "components/main-page/types";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { locales } from "translations";

type SectionConfig = { key: string; url: `#${Section}`; hidden?: boolean };
const sections: readonly SectionConfig[] = [
  { key: "hero", url: "#hero", hidden: true },
  { key: "akaiCode", url: "#event-details" },
  { key: "registration", url: "#registration" },
  { key: "faq", url: "#faq" },
] as const;

export function Navigation() {
  const [activeSection, setActiveSection] = useState<string | undefined>(
    undefined,
  );

  const { t } = useTranslation();

  const { query } = useRouter();
  const activeLanguage = query?.lang === "en" ? "en" : "pl";

  const checkboxRef = useRef<HTMLInputElement | null>(null);

  function deselectNavigation() {
    if (checkboxRef?.current) {
      checkboxRef.current.checked = false;
    }
  }

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        // intersection observer is triggered initially on load with all registered sections
        // - preventing from evaluating the section to highlight for that case
        if (entries.length === sections.length) {
          return;
        }

        entries.forEach((entry) => {
          const { id } = entry.target;

          setActiveSection(id);
        });
      },
      // TODO: it may require to fine-tune the threshold for mobile breakpoints
      // in which some sections are larger, hence threhold needs to be lowered
      {
        threshold: 0.35,
        rootMargin: "-25% 0px -25%",
      },
    );
    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      sections.forEach((section) => sectionObserver.unobserve(section));
    };
  }, []);

  return (
    <nav className={classNames(styles.container)}>
      <div className={styles.innerContainer}>
        <a href="#" className={styles.logoWrapper}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.svg" alt="logo" className={styles.logo} />
        </a>
        <input
          ref={checkboxRef}
          id="nav-toggle"
          type="checkbox"
          className={styles.hamburger}
        />
        <div className={styles.linksWrapper}>
          <ul className={styles.links}>
            {sections
              .filter(({ hidden }) => !hidden)
              .map(({ key, url }) => (
                <li key={url}>
                  <a
                    href={url}
                    className={classNames(styles.link, {
                      [styles.active]: url === `#${activeSection}`,
                    })}
                    onClick={deselectNavigation}
                  >
                    {t(`navigation.${key}`)}
                  </a>
                </li>
              ))}
          </ul>
          <div className={styles.separator}></div>
          <ul className={styles.links}>
            {locales.map((locale) => (
              <div key={locale}>
                <Link href={`/${locale}`}>
                  <a
                    className={classNames(styles.link, {
                      [styles.active]: activeLanguage === locale,
                    })}
                    onClick={deselectNavigation}
                  >
                    {t(`language.${locale}`)}
                  </a>
                </Link>
              </div>
            ))}
          </ul>
        </div>
        <label htmlFor="nav-toggle" className={styles.hamburgerTrigger}>
          <span></span>
        </label>
      </div>
    </nav>
  );
}
