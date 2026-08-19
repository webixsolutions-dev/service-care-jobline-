import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Search, Briefcase } from "lucide-react";
import Hero from "../../components/Hero/Hero";
import TrustBadgeStrip from "../../components/TrustBadgeStrip/TrustBadgeStrip";
import { homePageContent } from "../../data/homePageContent";
import { paths } from "../../data/navLinks";
import PopularCategories from "./sections/PopularCategories";
import FeaturedJobs from "./sections/FeaturedJobs";
import HowItWorksHome from "./sections/HowItWorksHome";
import WhyChooseHome from "./sections/WhyChooseHome";
import HomeTestimonials from "./sections/HomeTestimonials";
import NextStepCTA from "./sections/NextStepCTA";
import HomeSearchBar from "./sections/HomeSearchBar";
import styles from "./Home.module.css";

export default function Home() {
  const navigate = useNavigate();
  const { hero } = homePageContent;
  const [searchValues, setSearchValues] = useState({
    keyword: "",
    location: "",
    category: "",
  });

  function handleSearch(values) {
    const params = new URLSearchParams();
    if (values.keyword) params.set("keyword", values.keyword);
    if (values.location) params.set("location", values.location);
    if (values.category) params.set("category", values.category);
    const query = params.toString();
    navigate(query ? `${paths.browseJobs}?${query}` : paths.browseJobs);
  }

  return (
    <main className={styles.page}>
      <Hero
        eyebrow={hero.badge}
        eyebrowIcon={MapPin}
        headingParts={[
          { text: "Find Hospitality &", color: "white", block: true },
          { text: "Healthcare ", color: "white" },
          { text: "Jobs", color: "teal" },
          { text: "Across Canada", color: "gold", block: true },
        ]}
        subtext={hero.description}
        subtextAccent={hero.descriptionAccent}
        primaryCta={{ label: hero.primaryCta.label, to: hero.primaryCta.to, icon: Search }}
        secondaryCta={{ label: hero.secondaryCta.label, to: hero.secondaryCta.to, icon: Briefcase }}
        backgroundImage={hero.image}
        imageAlt={hero.imageAlt}
        backgroundFit="rightHalf"
      />
      <section className={styles.belowHero}>
        <div className="container">
          <HomeSearchBar
            values={searchValues}
            onChange={setSearchValues}
            onSearch={handleSearch}
            connected
          />
          <TrustBadgeStrip items={hero.trustBadges} connected />
        </div>
      </section>
      <PopularCategories />
      <FeaturedJobs />
      <HowItWorksHome />
      <WhyChooseHome />
      <HomeTestimonials />
      <NextStepCTA />
    </main>
  );
}
