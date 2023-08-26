import { Heading, Section } from "components/ui";
import styles from "./FAQ.module.scss";
import { FAQDisclosure } from "./FAQDisclosure/FAQDisclosure";

export type Question = {
  question: string;
  answer: string;
};

interface Section {
  title?: string;
  questions: Question[];
}

export const FAQ = () => {
  const sections = [
    {
      title: "Tytuł",
      questions: [{ question: "Pytanie", answer: "Odpowiedź" }],
    },
  ];

  return (
    <Section id="faq" variant="blue">
      <Heading className={styles.heading} withAccent>
        FAQ
      </Heading>

      <div>
        {sections.map(({ title, questions }, index: number) => (
          <div className={styles.questionsContainer} key={title || index}>
            {title && <p className={styles.sectionTitle}>{title}</p>}
            {questions.map((question) => (
              <FAQDisclosure key={question.question} FAQItem={question} />
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
};
