import {
  BriefcaseBusiness,
  Users,
  FileText,
  Rocket,
  ChartNoAxesCombined,
} from "lucide-react";

import { GiMapleLeaf } from "react-icons/gi";

import styles from "./MissionVision.module.css";

const stats = [
  {
    value: "8,750+",
    label: "Active Job Listings",
    description:
      "Fresh opportunities updated daily across hospitality & healthcare.",
    icon: BriefcaseBusiness,
    color: "teal",
  },
  {
    value: "2,300+",
    label: "Employers Served",
    description:
      "From local businesses to national brands trust our platform.",
    icon: Users,
    color: "gold",
  },
  {
    value: "156,000+",
    label: "Candidate Applications",
    description:
      "Skilled professionals connecting with the right opportunities.",
    icon: FileText,
    color: "teal",
  },
  {
    value: "All Across Canada",
    label: "Nationwide Reach",
    description:
      "Jobs in every province and territory, coast to coast to coast.",
    icon: GiMapleLeaf,
    color: "gold",
  },
];

const journeyItems = [
  {
    year: "2021",
    title: "Launch",
    description:
      "ServiceCare Jobline was founded with a mission to connect care and service professionals with meaningful work.",
    icon: Rocket,
    color: "teal",
  },
  {
    year: "2022",
    title: "Employer Growth",
    description:
      "Hundreds of employers joined, finding reliable talent faster and building stronger teams.",
    icon: ChartNoAxesCombined,
    color: "gold",
  },
  {
    year: "2023",
    title: "Candidate Network",
    description:
      "Our candidate community grew across Canada, empowering more people to find rewarding careers.",
    icon: Users,
    color: "teal",
  },
  {
    year: "2024+",
    title: "Nationwide Expansion",
    description:
      "Expanding our reach and features to serve even more communities from coast to coast.",
    icon: GiMapleLeaf,
    color: "gold",
  },
];

export default function MissionVision() {
  return (
    <section
      className={styles.section}
      aria-labelledby="why-servicecare-heading"
    >
      <div className="container">
        {/* =========================================
            WHY SERVICECARE JOBLINE MATTERS
        ========================================== */}

        <div className={styles.top}>
          <div className={styles.intro}>
            <h2 id="why-servicecare-heading">
              <span>Why ServiceCare</span>
              <span>Jobline</span>
              <strong>Matters</strong>
            </h2>

            <span className={styles.bar} aria-hidden />

            <p>
              We connect people with purpose to the employers
              who keep Canada moving.
            </p>
          </div>

          <div className={styles.stats}>
            {stats.map((item) => {
              const Icon = item.icon;
              const isGold = item.color === "gold";

              return (
                <article
                  key={item.label}
                  className={styles.statCard}
                >
                  <span
                    className={`${styles.statIcon} ${
                      isGold
                        ? styles.goldIcon
                        : styles.tealIcon
                    }`}
                  >
                    <Icon
                      size={21}
                      strokeWidth={1.8}
                      aria-hidden
                    />
                  </span>

                  <h3
                    className={
                      isGold
                        ? styles.gold
                        : styles.teal
                    }
                  >
                    {item.value}
                  </h3>

                  <h4>{item.label}</h4>

                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>

        {/* =========================================
            OUR JOURNEY / OUR MISSION
        ========================================== */}

        <div className={styles.journey}>
          <div className={styles.journeyIntro}>
            <h2>
              Our Journey,
              <br />
              <span>Our Mission</span>
            </h2>

            <span
              className={styles.journeyBar}
              aria-hidden
            />

            <p>
              Building stronger communities
              <br />
              through better connections.
            </p>
          </div>

          <div className={styles.timeline}>
            {journeyItems.map((item, index) => {
              const JourneyIcon = item.icon;
              const isGold = item.color === "gold";

              return (
                <article
                  key={item.year}
                  className={styles.milestone}
                >
                  {index < journeyItems.length - 1 ? (
                    <span
                      className={styles.track}
                      aria-hidden
                    />
                  ) : null}

                  <span
                    className={`${styles.journeyIcon} ${
                      isGold
                        ? styles.goldIcon
                        : styles.tealIcon
                    }`}
                  >
                    <JourneyIcon
                      size={20}
                      strokeWidth={1.8}
                      aria-hidden
                    />
                  </span>

                  <span
                    className={`${styles.year} ${
                      isGold
                        ? styles.gold
                        : styles.teal
                    }`}
                  >
                    {item.year}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}