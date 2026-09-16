import { Quote, Star } from "lucide-react";
import SmartImage from "../SmartImage";
import { getIcon } from "../icons";
import styles from "./TestimonialCard.module.css";

/**
 * Quote card used on About Us, Employers, Home, and Post a Job.
 * Optional `industry` renders a trailing hospitality/healthcare tag;
 * `quotePosition` / `starsPosition` control Home carousel layout.
 * `initialsTone="teal"` fills the initials circle (Post a Job).
 */
export default function TestimonialCard({
  quote,
  name,
  role,
  avatar,
  initials,
  avatarIcon,
  company,
  industry,
  showStars = true,
  starsPosition = "top",
  quotePosition = "left",
  initialsTone = "light",
}) {
  const IndustryIcon = industry?.icon ? getIcon(industry.icon) : null;
  const AvatarIcon = avatarIcon ? getIcon(avatarIcon) : null;
  const employerLayout = Boolean(industry || company);
  const homeLayout = starsPosition === "bottom" || quotePosition === "right";
  const initialsClass = `${styles.initials} ${
    initialsTone === "teal" ? styles.initialsTeal : ""
  }`;

  const stars = showStars ? (
    <div className={styles.stars} aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  ) : null;

  const avatarNode = initials ? (
    <span className={initialsClass} aria-hidden>
      {initials}
    </span>
  ) : AvatarIcon ? (
    <span className={styles.iconAvatar} aria-hidden>
      <AvatarIcon size={22} strokeWidth={2.1} />
    </span>
  ) : (
    <SmartImage src={avatar} alt="" className={styles.avatar} />
  );

  return (
    <article
      className={`${styles.card} ${employerLayout ? styles.employer : ""} ${
        homeLayout ? styles.home : ""
      } ${initialsTone === "teal" ? styles.tealInitials : ""}`}
    >
      {starsPosition === "top" ? (
        <div className={styles.top}>
          {quotePosition === "left" ? (
            <Quote className={styles.quoteIcon} size={32} strokeWidth={2.2} />
          ) : (
            <span />
          )}
          {stars}
          {quotePosition === "right" ? (
            <Quote className={styles.quoteIcon} size={32} strokeWidth={2.2} />
          ) : null}
        </div>
      ) : null}

      {homeLayout && quotePosition === "right" ? (
        <div className={styles.homeTop}>
          <div className={styles.person}>
            {avatarNode}
            <div className={styles.meta}>
              <p className={styles.name}>{name}</p>
              <p className={styles.role}>{role}</p>
            </div>
          </div>
          <Quote className={styles.quoteIcon} size={32} strokeWidth={2.2} />
        </div>
      ) : null}

      <p className={styles.quote}>&ldquo;{quote}&rdquo;</p>

      {employerLayout ? <span className={styles.divider} /> : null}

      {!homeLayout ? (
        <div className={styles.person}>
          {avatarNode}
          <div className={styles.meta}>
            <p className={styles.name}>{name}</p>
            <p className={styles.role}>{role}</p>
            {company ? <p className={styles.company}>{company}</p> : null}
          </div>
          {industry ? (
            <span
              className={`${styles.industry} ${
                industry.tone === "gold" ? styles.industryGold : styles.industryTeal
              }`}
            >
              {IndustryIcon ? <IndustryIcon size={13} strokeWidth={2.2} /> : null}
              {industry.label}
            </span>
          ) : null}
        </div>
      ) : null}

      {starsPosition === "bottom" && showStars ? (
        <div className={styles.bottomStars}>{stars}</div>
      ) : null}
    </article>
  );
}
