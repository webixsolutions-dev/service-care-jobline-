import { Globe, ShieldCheck, Headphones, UsersRound } from "lucide-react";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { contactPageContent } from "../../../data/contactPageContent";
import usePublicDataset from "../../../hooks/usePublicDataset";
import styles from "./HelpSupportSection.module.css";

const cardIcons = [Globe, ShieldCheck, Headphones, UsersRound];

function portalUrl(domain) {
  if (!domain) return "";
  return domain.startsWith("http://") || domain.startsWith("https://")
    ? domain
    : `https://${domain}`;
}

export default function HelpSupportSection() {
  const { kicker, heading, description, cards } = contactPageContent.helpSupport;
  const { dataset, loading, error } = usePublicDataset();
  const site = dataset?.site;
  const href = portalUrl(site?.domain);

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
            {cards.map((card, index) => {
              const Icon = cardIcons[index] || Globe;
              const isGold = index === 1 || index === 3;
              return (
                <article key={card.title} className={styles.helpCard}>
                  <span className={`${styles.cardIcon} ${isGold ? styles.goldIcon : styles.tealIcon}`}>
                    <Icon size={27} strokeWidth={1.8} aria-hidden />
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className={styles.officePanel}>
          {loading ? <LoadingSpinner label="Loading portal information" /> : null}
          {!loading && error ? <p role="status">{error}</p> : null}
          {!loading && !error && site ? (
            <div className={`${styles.office} ${styles.portalOffice}`}>
              <div className={styles.officeHead}>
                <Globe size={25} strokeWidth={1.8} aria-hidden />
                <div className={styles.officeHeadContent}>
                  <h3>{site.name}</h3>
                  {href ? (
                    <a href={href} target="_blank" rel="noreferrer" className={styles.address}>
                      <span>{site.domain}</span>
                    </a>
                  ) : (
                    <span className={styles.address}>Portal domain is managed in the shared site registry.</span>
                  )}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
