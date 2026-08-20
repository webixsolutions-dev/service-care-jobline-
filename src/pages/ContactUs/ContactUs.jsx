import { useRef } from "react";
import { Send, Briefcase } from "lucide-react";
import Hero from "../../components/Hero/Hero";
import InfoCard from "../../components/InfoCard/InfoCard";
import { contactPageContent } from "../../data/contactPageContent";
import ContactFormSection from "./sections/ContactFormSection";
import HelpSupportSection from "./sections/HelpSupportSection";
import FAQTeaser from "./sections/FAQTeaser";
import NeedHelpCTA from "./sections/NeedHelpCTA";
import LetsConnect from "./sections/LetsConnect";
import styles from "./ContactUs.module.css";

export default function ContactUs() {
  const formRef = useRef(null);
  const { hero } = contactPageContent;

  function scrollToForm() {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className={styles.page}>
      <Hero
        headingParts={[
          { text: `${hero.kicker} ${hero.title}`, color: "white", block: true },
          { text: hero.accent, color: "gold", block: true },
        ]}
        accentLine="teal"
        accentLinePosition="above"
        subtext={hero.description}
        primaryCta={{
          label: hero.primaryCta.label,
          href: "#contact-form",
          onClick: scrollToForm,
          icon: Send,
        }}
        secondaryCta={{ label: hero.secondaryCta.label, to: hero.secondaryCta.to, icon: Briefcase }}
        backgroundImage={hero.image}
        imageAlt={hero.imageAlt}
        backgroundFit="rightHalf"
        decor="integrated"
      />
      <section className={styles.belowHero}>
        <div className={`container ${styles.support}`}>
          {hero.supportCards.map((card) => (
            <InfoCard key={card.title} {...card} showAccent />
          ))}
        </div>
      </section>
      <ContactFormSection formRef={formRef} />
      <HelpSupportSection />
      <FAQTeaser />
      <NeedHelpCTA onScrollToForm={scrollToForm} />
      <LetsConnect onScrollToForm={scrollToForm} />
    </main>
  );
}
