import { useEffect, useRef } from "react";
import { Briefcase, Tag, CircleCheck, Users } from "lucide-react";
import Hero from "../../components/Hero/Hero";
import TrustBadgeStrip from "../../components/TrustBadgeStrip/TrustBadgeStrip";
import { employersPageContent } from "../../data/employersPageContent";
import WhyChooseUs from "./sections/WhyChooseUs";
import HowItWorks from "./sections/HowItWorks";
import MidCTA from "./sections/MidCTA";
import PricingPlans from "./sections/PricingPlans";
import EmployerTestimonials from "./sections/EmployerTestimonials";
import StartHiringCTA from "./sections/StartHiringCTA";
import styles from "./Employers.module.css";

export default function Employers() {
  const pricingRef = useRef(null);
  const { hero } = employersPageContent;

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      if (hash === "#pricing") {
        pricingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const timer = window.setTimeout(scrollToHash, 50);
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  function scrollToPricing() {
    pricingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className={styles.page}>
      <Hero
        eyebrow={hero.badge}
        eyebrowIcon={Users}
        headingParts={hero.lines.map((line) => ({
          text: line.text,
          color: line.color,
          block: true,
        }))}
        subtext={hero.description}
        primaryCta={{
          label: hero.primaryCta.label,
          to: hero.primaryCta.to,
          icon: Briefcase,
          variant: "solid-gold",
        }}
        secondaryCta={{
          label: hero.secondaryCta.label,
          href: "#pricing",
          onClick: scrollToPricing,
          icon: Tag,
          variant: "outline-teal",
        }}
        note={hero.note}
        noteIcon={CircleCheck}
        backgroundImage={hero.image}
        imageAlt={hero.imageAlt}
        backgroundFit="rightHalf"
        decor="goldRings"
      />
      <section className={styles.belowHero}>
        <div className="container">
          <TrustBadgeStrip items={hero.trustBadges} />
        </div>
      </section>
      <div className={styles.light}>
        <WhyChooseUs />
        <HowItWorks />
        <MidCTA />
      </div>
      <PricingPlans sectionRef={pricingRef} />
      <EmployerTestimonials />
      <StartHiringCTA />
    </main>
  );
}
