import { useRef } from "react";
import {
  Send,
  Briefcase,
  Headphones,
  BriefcaseBusiness,
  UsersRound,
} from "lucide-react";

import Hero from "../../components/Hero/Hero";
import { contactPageContent } from "../../data/contactPageContent";

import ContactFormSection from "./sections/ContactFormSection";
import HelpSupportSection from "./sections/HelpSupportSection";
import FAQTeaser from "./sections/FAQTeaser";
import NeedHelpCTA from "./sections/NeedHelpCTA";
import LetsConnect from "./sections/LetsConnect";

import styles from "./ContactUs.module.css";

const supportCards = [
  {
    title: "Fast Support",
    description:
      "Our team responds quickly to help you get the answers you need, when you need them.",
    icon: Headphones,
  },
  {
    title: "Employer Assistance",
    description:
      "We support employers in finding qualified talent and growing their teams.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Job Seeker Help",
    description:
      "We're here to guide job seekers toward meaningful opportunities and career success.",
    icon: UsersRound,
  },
];

export default function ContactUs() {
  const formRef = useRef(null);

  const { hero } = contactPageContent;

  function scrollToForm() {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <main className={styles.page}>
      {/* =========================================
          HERO
      ========================================== */}

      <Hero
        headingParts={[
          {
            text: `${hero.kicker} ${hero.title}`,
            color: "white",
            block: true,
          },
          {
            text: hero.accent,
            color: "gold",
            block: true,
          },
        ]}
        subtext={hero.description}
        primaryCta={{
          label: hero.primaryCta.label,
          href: "#contact-form",
          onClick: scrollToForm,
          icon: Send,
        }}
        secondaryCta={{
          label: hero.secondaryCta.label,
          to: hero.secondaryCta.to,
          icon: Briefcase,
        }}
        backgroundImage={hero.image}
        imageAlt={hero.imageAlt}
        backgroundFit="rightHalf"
        decor="integrated"
      />

      {/* =========================================
          SUPPORT CARDS
      ========================================== */}

      <section className={styles.belowHero}>
        <div className={`container ${styles.support}`}>
          {supportCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className={styles.supportCard}
              >
                <div className={styles.supportIcon}>
                  <Icon
                    size={34}
                    strokeWidth={1.8}
                    aria-hidden
                  />
                </div>

                <div className={styles.supportContent}>
                  <h2>{card.title}</h2>

                  <span
                    className={styles.supportLine}
                    aria-hidden
                  />

                  <p>{card.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================================
          OTHER SECTIONS
      ========================================== */}

      <ContactFormSection formRef={formRef} />

      <HelpSupportSection />

      <FAQTeaser />

      <NeedHelpCTA
        onScrollToForm={scrollToForm}
      />

      <LetsConnect
        onScrollToForm={scrollToForm}
      />
    </main>
  );
}