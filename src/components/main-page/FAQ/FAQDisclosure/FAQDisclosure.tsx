import { Disclosure } from "@headlessui/react";
import classNames from "classnames";
import { Icon } from "components/ui";
import styles from "./FAQDisclosure.module.scss";
import { chevron } from "components/ui/Icon/index";

interface Props {
  question: string;
  answer: string;
}

const FAQDisclosure = ({ question, answer }: Props) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <div
            className={classNames({
              [styles.buttonBackground]: open,
            })}
          >
            <Disclosure.Button className={styles.button}>
              {question}{" "}
              <Icon
                icon={chevron}
                className={classNames(styles.chevron, { [styles.open]: open })}
              />
            </Disclosure.Button>
          </div>
          <Disclosure.Panel
            className={classNames(styles.panel, { [styles.open]: open })}
          >
            {answer}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export { FAQDisclosure };
