import {
  CircleHelp,
  MessageCircleMore,
  BriefcaseBusiness,
  UsersRound,
} from "lucide-react";

import { Link } from "react-router-dom";

import { contactPageContent } from "../../../data/contactPageContent";
import { contactFAQs } from "../../../data/contactFAQs";
import { paths } from "../../../data/navLinks";

import styles from "./FAQTeaser.module.css";

const faqIcons = [
  MessageCircleMore,
  BriefcaseBusiness,
  UsersRound,
];

export default function FAQTeaser() {
  const { heading, subtext } = contactPageContent.faq;

  return (
    <section
      className={styles.section}
      id="faq"
      aria-labelledby="faq-teaser-heading"
    >
      <div className="container">
        <div className={styles.panel}>
          {/* =========================================
              LEFT FAQ INTRO
          ========================================== */}

          <div className={styles.label}>
            <span className={styles.mainIcon}>
              <CircleHelp
                size={18}
                strokeWidth={1.9}
                aria-hidden
              />
            </span>

            <div className={styles.labelContent}>
              <h2 id="faq-teaser-heading">
                {heading}
              </h2>

              <p>{subtext}</p>

              <Link
                to={paths.helpCenter}
                className={styles.more}
              >
                View Help Centre →
              </Link>
            </div>
          </div>

          {/* =========================================
              FAQ ITEMS
          ========================================== */}

          <div className={styles.questions}>
            {contactFAQs.slice(0, 3).map((item, index) => {
              const Icon =
                faqIcons[index] || CircleHelp;

              const isGold = index === 1;

              const title =
                item.question ??
                item.title ??
                "";

              const answer =
                item.answer ??
                item.description ??
                item.text ??
                "";

              return (
                <article
                  key={item.id}
                  className={styles.item}
                >
                  <h3>
                    {title}
                  </h3>

                  <div className={styles.answer}>
                    <span
                      className={`${styles.answerIcon} ${
                        isGold
                          ? styles.gold
                          : styles.teal
                      }`}
                    >
                      <Icon
                        size={25}
                        strokeWidth={1.8}
                        aria-hidden
                      />
                    </span>

                    <p>
                      {answer}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}