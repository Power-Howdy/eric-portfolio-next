import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import ContactMe from "@/components/contact/ContactMe";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <Skills />
      <Projects />
      <ContactMe />
      <ScrollToTopButton />
    </div>
  );
}
