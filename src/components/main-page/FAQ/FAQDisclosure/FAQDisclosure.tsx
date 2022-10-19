import { Disclosure, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Icon } from "components/ui";
import styles from "./FAQDisclosure.module.scss";
import { chevron } from "components/ui/Icon/index";
import { Question } from "../FAQ";
import { Trans } from "next-i18next";

interface Props {
  FAQItem: Question;
}

export const FAQDisclosure = ({ FAQItem }: Props) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div>
          <Disclosure.Button className={styles.button}>
            {FAQItem.question}
            <Icon
              icon={chevron}
              className={classNames(styles.chevron, { [styles.open]: open })}
            />
          </Disclosure.Button>
          <Transition
            enter={styles.enter}
            enterFrom={styles.enterFrom}
            enterTo={styles.enterTo}
            leave={styles.leave}
            leaveFrom={styles.leaveFrom}
            leaveTo={styles.leaveTo}
          >
            <Disclosure.Panel
              className={classNames(styles.panel, { [styles.open]: open })}
            >
              <Trans components={{ a: <a /> }}>{FAQItem.answer}</Trans>
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
};
