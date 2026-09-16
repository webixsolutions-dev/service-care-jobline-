import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./ContentPage.module.css";

/**
 * Shared layout for legal, help, and resource pages.
 */
export default function ContentPage({
  kicker,
  title,
  intro,
  sections = [],
  faqs = [],
  links = [],
  ctas = [],
}) {
  return (
    <main className={styles.page}>
      <div className={`container ${styles.inner}`}>
        {kicker ? <p className={styles.kicker}>{kicker}</p> : null}
        <h1>{title}</h1>
        {intro ? <p className={styles.intro}>{intro}</p> : null}

        {sections.map((section) => (
          <section key={section.heading} className={styles.section}>
            <h2>{section.heading}</h2>
            {(section.paragraphs || []).map((text) => (
              <p key={text.slice(0, 40)}>{text}</p>
            ))}
          </section>
        ))}

        {faqs.length ? (
          <div className={styles.faqs}>
            {faqs.map((item) => (
              <article key={item.question} className={styles.faq}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        ) : null}

        {links.length ? (
          <ul className={styles.list}>
            {links.map((item) => (
              <li key={item.label}>
                <Link to={item.to}>{item.label}</Link>
                {item.note ? ` — ${item.note}` : null}
              </li>
            ))}
          </ul>
        ) : null}

        {ctas.length ? (
          <div className={styles.ctas}>
            {ctas.map((cta, i) => (
              <Button
                key={cta.label}
                to={cta.to}
                variant={cta.variant || (i === 0 ? "solid-teal" : "solid-gold")}
              >
                {cta.label}
              </Button>
            ))}
          </div>
        ) : null}
      </div>
    </main>
  );
}
