import {
  MapPin,
  Clock3,
  Headphones,
  UsersRound,
  Phone,
  Mail,
  Globe,
} from "lucide-react";

import { contactPageContent } from "../../../data/contactPageContent";
import styles from "./HelpSupportSection.module.css";

const cardIcons = [
  MapPin,
  Clock3,
  Headphones,
  UsersRound,
];

export default function HelpSupportSection() {
  const {
    kicker,
    heading,
    description,
    cards,
    office,
  } = contactPageContent.helpSupport;

  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    office.addressLines.join(", ")
  )}`;

  const websiteHref = office.website?.startsWith("http")
    ? office.website
    : `https://${office.website}`;

  return (
    <section
      className={styles.section}
      aria-labelledby="help-support-heading"
    >
      <div className="container">
        {/* =================================================
            TOP: INTRO + 4 HELP CARDS
        ================================================= */}

        <div className={styles.introRow}>
          {/* LEFT INTRO */}

          <div className={styles.intro}>
            <h2 id="help-support-heading">
              <span className={styles.kicker}>
                {kicker}
              </span>

              <span className={styles.heading}>
                {heading}
              </span>
            </h2>

            <p>{description}</p>
          </div>

          {/* RIGHT HELP CARDS */}

          <div className={styles.cards}>
            {cards.map((card, index) => {
              const Icon =
                cardIcons[index] || MapPin;

              const isGold =
                index === 1 || index === 3;

              return (
                <article
                  key={card.title}
                  className={styles.helpCard}
                >
                  <span
                    className={`${styles.cardIcon} ${
                      isGold
                        ? styles.goldIcon
                        : styles.tealIcon
                    }`}
                  >
                    <Icon
                      size={27}
                      strokeWidth={1.8}
                      aria-hidden
                    />
                  </span>

                  <h3>
                    {card.title}
                  </h3>

                  <p>
                    {card.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* =================================================
            MAP + TORONTO OFFICE DETAILS
        ================================================= */}

        <div className={styles.officePanel}>
          {/* LEFT MAP IMAGE */}

          <a
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
            className={styles.mapCol}
            aria-label="Open ServiceCare Toronto office in Google Maps"
          >
            <img
              src="/toronto-map.png"
              alt="Map showing ServiceCare Jobline Toronto office"
              className={styles.mapImage}
            />
          </a>

          {/* RIGHT OFFICE INFO */}

          <div className={styles.office}>
            {/* OFFICE ADDRESS */}

            <div className={styles.officeHead}>
              <MapPin
                size={25}
                strokeWidth={1.8}
                aria-hidden
              />

              <div className={styles.officeHeadContent}>
                <h3>
                  {office.title}
                </h3>

                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.address}
                >
                  {office.addressLines.map((line) => (
                    <span key={line}>
                      {line}
                    </span>
                  ))}
                </a>
              </div>
            </div>

            {/* PHONE / EMAIL / WEBSITE */}

            <ul className={styles.meta}>
              <li>
                <Phone
                  size={18}
                  strokeWidth={1.8}
                  aria-hidden
                />

                <a
                  href={`tel:${office.phone.replace(
                    /[^\d+]/g,
                    ""
                  )}`}
                >
                  {office.phone}
                </a>
              </li>

              <li>
                <Mail
                  size={18}
                  strokeWidth={1.8}
                  aria-hidden
                />

                <a
                  href={`mailto:${office.email}`}
                >
                  {office.email}
                </a>
              </li>

              <li>
                <Globe
                  size={18}
                  strokeWidth={1.8}
                  aria-hidden
                />

                <a
                  href={websiteHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  {office.website}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}