import { Heading, Section } from "components/ui";
import { useTranslation } from "next-i18next";
import styles from "./FAQ.module.scss";
import { FAQDisclosure } from "./FAQDisclosure/FAQDisclosure";

type Question = {
  question: string;
  answer: string;
};

interface Section {
  title: string;
  questions: Question[];
}

const FAQ = () => {
  const { t } = useTranslation();
  const sections = t("faq.sections", { returnObjects: true }) as Section[];

  return (
    <Section variant="blue">
      <Heading className={styles.heading} withAccent>
        {t("faq.title")}
      </Heading>

      <div>
        {sections.map(({ title, questions }) => (
          <div className={styles.questionsContainer} key={title}>
            <p className={styles.sectionTitle}>{title}</p>
            {questions.map((question) => (
              <FAQDisclosure
                key={question.question}
                question={question.question}
                answer={question.answer}
              />
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
};

export { FAQ };
