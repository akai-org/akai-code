import { Heading, Section } from "components/ui";
import useTranslation from "translations/hooks/useTranslations";
import styles from "./FAQ.module.scss";
import { FAQDisclosure } from "./FAQDisclosure/FAQDisclosure";

const FAQ = () => {
  const { t } = useTranslation();

  return (
    <Section variant="blue">
      <Heading className={styles.heading} withAccent>
        {t("faq.title")}
      </Heading>
      <div>
        <FAQDisclosure
          question="Lorem ipsum dolor sit amet consectetur adipisicing elit?"
          answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo corrupti tenetur perferendis, voluptatibus accusantium distinctio dolores blanditiis quas, vitae veritatis corporis! Modi sed nostrum commodi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo corrupti tenetur perferendis, voluptatibus accusantium distinctio dolores blanditiis quas, vitae veritatis corporis! Modi sed nostrum commodi."
        />
      </div>
    </Section>
  );
};

export { FAQ };
