import { Briefcase, User } from "lucide-react";
import useScrollToSection from "../../hooks/useScrollToSection";
import Hero from "../../components/Hero/Hero";
import TrustBadgeStrip from "../../components/TrustBadgeStrip/TrustBadgeStrip";
import { postJobPageContent } from "../../data/postJobPageContent";
import JobPostingFormSection from "./sections/JobPostingFormSection";
import PostJobHowItWorks from "./sections/PostJobHowItWorks";
import PostingPlans from "./sections/PostingPlans";
import NeedHelpChoosingPlan from "./sections/NeedHelpChoosingPlan";
import PostJobTestimonials from "./sections/PostJobTestimonials";
import HireTopTalentCTA from "./sections/HireTopTalentCTA";
import styles from "./PostAJob.module.css";

export default function PostAJob() {
  const [formRef, scrollToForm] = useScrollToSection();
  const { hero } = postJobPageContent;

  return (
    <main className={styles.page}>
      <Hero
        headingParts={hero.lines.map((line) => ({
          text: line.text,
          color: line.color,
          block: true,
        }))}
        accentLine="teal"
        subtext={hero.description}
        primaryCta={{
          label: hero.primaryCta.label,
          onClick: scrollToForm,
          icon: Briefcase,
        }}
        secondaryCta={{
          label: hero.secondaryCta.label,
          to: hero.secondaryCta.to,
          icon: User,
        }}
        backgroundImage={hero.image}
        imageAlt={hero.imageAlt}
        backgroundFit="rightHalf"
        decor="postJob"
      />
      <section className={styles.belowHero}>
        <div className="container">
          <TrustBadgeStrip items={hero.trustBadges} variant="cards" showAccent />
        </div>
      </section>
      <JobPostingFormSection formRef={formRef} />
      <PostJobHowItWorks />
      <PostingPlans onSelectPlan={scrollToForm} />
      <NeedHelpChoosingPlan />
      <PostJobTestimonials />
      <HireTopTalentCTA onPostJob={scrollToForm} />
    </main>
  );
}
