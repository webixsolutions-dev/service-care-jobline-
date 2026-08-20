import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { contactPageContent } from "../../../data/contactPageContent";
import { paths } from "../../../data/navLinks";
import InfoCard from "../../../components/InfoCard/InfoCard";
import MapPreview from "../../../components/MapPreview/MapPreview";
import IconBadge from "../../../components/IconBadge/IconBadge";
import styles from "./HelpSupportSection.module.css";

export default function HelpSupportSection() {
  const { kicker, heading, description, cards, office } = contactPageContent.helpSupport;
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    office.addressLines.join(", ")
  )}`;

  return (
    <section className={styles.section} aria-labelledby="help-support-heading">
      <div className="container">
        <div className={styles.introRow}>
          <div className={styles.intro}>
            <h2 id="help-support-heading">
              <span className={styles.kicker}>{kicker}</span>
              <span className={styles.heading}>{heading}</span>
            </h2>
            <p>{description}</p>
          </div>
          <div className={styles.cards}>
            {cards.map((card) => (
              <InfoCard key={card.title} {...card} className={styles.helpCard} />
            ))}
          </div>
        </div>

        <div className={styles.officePanel}>
          <a
            className={styles.mapCol}
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Toronto office location in Google Maps"
          >
            <MapPreview />
          </a>
          <div className={styles.office}>
            <div className={styles.officeHead}>
              <IconBadge icon={MapPin} color="teal" />
              <h3>{office.title}</h3>
            </div>
            <p className={styles.address}>
              <a href={mapsHref} target="_blank" rel="noreferrer">
                {office.addressLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </a>
            </p>
            <ul className={styles.meta}>
              <li>
                <Phone size={18} />
                <a href={`tel:${office.phone.replace(/[^\d+]/g, "")}`}>{office.phone}</a>
              </li>
              <li>
                <Mail size={18} />
                <a href={`mailto:${office.email}`}>{office.email}</a>
              </li>
              <li>
                <Globe size={18} />
                <Link to={paths.home}>{office.website}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
