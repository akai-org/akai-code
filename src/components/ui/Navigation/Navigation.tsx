import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { Section } from "components/main-page/types";
import styles from "./Navigation.module.scss";

type SectionConfig = {
  key: string;
  name?: string;
  url: `#${Section}`;
  hidden?: boolean;
};
const sections: readonly SectionConfig[] = [
  { key: "hero", url: "#hero", hidden: true },
  { key: "akaiCode", name: "AKAI Camp", url: "#event-details" },
  { key: "registration", name: "Rejestracja", url: "#registration" },
  { key: "partners", name: "Partnerzy", url: "#partners" },
  { key: "faq", name: "FAQ", url: "#faq" },
] as const;

export function Navigation() {
  const [activeSection, setActiveSection] = useState<string | undefined>(
    undefined,
  );

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
              .map(({ name, url }) => (
                <li key={url}>
                  <a
                    href={url}
                    className={classNames(styles.link, {
                      [styles.active]: url === `#${activeSection}`,
                    })}
                    onClick={deselectNavigation}
                  >
                    {name}
                  </a>
                </li>
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
