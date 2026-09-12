import { Search, Briefcase } from "lucide-react";

import Hero from "../../components/Hero/Hero";
import { aboutPageContent } from "../../data/aboutPageContent";

import ConnectingPeople from "./sections/ConnectingPeople";
import MissionVision from "./sections/MissionVision";
import WhyMatters from "./sections/WhyMatters";
import Testimonials from "./sections/Testimonials";
import ClosingCTA from "./sections/ClosingCTA";

import styles from "./AboutUs.module.css";

export default function AboutUs() {
  const { hero } = aboutPageContent;

  return (
    <main className={styles.page}>
      {/* HERO */}
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
          to: hero.primaryCta.to,
          icon: Search,
        }}
        secondaryCta={{
          label: hero.secondaryCta.label,
          to: hero.secondaryCta.to,
          icon: Briefcase,
        }}
        backgroundImage={hero.image}
        imageAlt={hero.imageAlt}
        backgroundFit="rightHalf"
        decor="maple"
      />

      {/* KEEP */}
      <ConnectingPeople />

      {/* KEEP: Our Mission and Vision */}
      <MissionVision />

      {/* KEEP: Built for Hospitality and Healthcare Hiring */}
      <WhyMatters />

      {/* KEEP */}
      <Testimonials />

      {/* KEEP */}
      <ClosingCTA />
    </main>
  );
}