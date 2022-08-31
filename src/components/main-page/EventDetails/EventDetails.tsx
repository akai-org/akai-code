import { Heading, Section, Text } from "components/ui";
import useTranslation from "translations/hooks/useTranslations";

export function EventDetails() {
  const { t } = useTranslation();

  return (
    <Section id="event-details">
      <Heading withAccent>{t("hero.title")}</Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
        commodi nulla obcaecati aliquid assumenda? Ut assumenda qui aspernatur
        cumque unde obcaecati. Velit eius aliquam assumenda a ea sit dolor,
        quasi corrupti numquam aut! Cupiditate dignissimos consequuntur
        consectetur sed voluptatum dolores fugit, maiores impedit quasi nesciunt
        ducimus ex numquam, veniam in illo suscipit et necessitatibus laudantium
        similique quisquam vel laborum voluptate ipsam qui! Iusto, fugit
        deserunt illum hic perferendis molestias labore adipisci, magni ullam
        dolorum ratione fugiat debitis quidem velit quo tempore aliquid ex
        temporibus dolores necessitatibus corrupti? Error, itaque! Hic
        repudiandae quae dicta commodi ab incidunt, earum et aperiam voluptatem
        esse veritatis atque eius pariatur possimus quos officia est voluptas
        tempore dolor distinctio voluptatum veniam ea eos reprehenderit!
        Nesciunt praesentium dicta facilis aperiam rem, accusamus eaque
        reiciendis molestiae asperiores, molestias odio ratione provident
        expedita doloribus eius dolor harum aspernatur minus? Ipsum praesentium
        incidunt obcaecati eius quisquam deserunt soluta, earum consequatur?
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
        commodi nulla obcaecati aliquid assumenda? Ut assumenda qui aspernatur
        cumque unde obcaecati. Velit eius aliquam assumenda a ea sit dolor,
        quasi corrupti numquam aut! Cupiditate dignissimos consequuntur
        consectetur sed voluptatum dolores fugit, maiores impedit quasi nesciunt
        ducimus ex numquam, veniam in illo suscipit et necessitatibus laudantium
        similique quisquam vel laborum voluptate ipsam qui! Iusto, fugit
        deserunt illum hic perferendis molestias labore adipisci, magni ullam
        dolorum ratione fugiat debitis quidem velit quo tempore aliquid ex
        temporibus dolores necessitatibus corrupti? Error, itaque! Hic
        repudiandae quae dicta commodi ab incidunt, earum et aperiam voluptatem
        esse veritatis atque eius pariatur possimus quos officia est voluptas
        tempore dolor distinctio voluptatum veniam ea eos reprehenderit!
        Nesciunt praesentium dicta facilis aperiam rem, accusamus eaque
        reiciendis molestiae asperiores, molestias odio ratione provident
        expedita doloribus eius dolor harum aspernatur minus? Ipsum praesentium
        incidunt obcaecati eius quisquam deserunt soluta, earum consequatur?
      </Text>
    </Section>
  );
}
