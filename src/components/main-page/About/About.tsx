import * as React from "react";
import styles from "./About.module.scss";
import { Section, Heading, Text, Card } from "components/ui";

export function About() {
  return (
    <Section variant="white" id="about">
      <Heading withAccent>About us</Heading>
      <div className={styles.textContainer}>
        <Text className={styles.textField}>
          The first edition of the AKAI Code hackathon organized by AKAI -
          Akademickie Koło Aplikacji Internetowych - takes place at the Poznań
          University of Technology.
        </Text>
        <Text className={styles.textField}>
          The idea of an event is simple! You code an application related to the
          topic within 24 hours and then the jury decides which team will win.
        </Text>
        <Text className={styles.textField}>
          There are three categories to compete in - Best Idea, Best Prototype
          and Best use of technology. What&rsquo;s the topic? You&rsquo;ll find
          out soon!
        </Text>
      </div>

      <div className={styles.cardContainer}>
        <Card name="Some name" role="Some role" />
        <Card name="Some name" role="Some role" />
        <Card name="Some name" role="Some role" />
        <Card name="Some name" role="Some role" />
      </div>
    </Section>
  );
}
