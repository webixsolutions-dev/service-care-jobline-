import { Mail, Phone } from "lucide-react";
import IconBadge from "../IconBadge/IconBadge";
import { icons } from "../icons";
import styles from "./ContactInfoCard.module.css";

/**
 * Support-channel card: category badge, copy, then email / phone / hours.
 */
export default function ContactInfoCard({
  icon,
  iconColor = "teal",
  accent = "teal",
  title,
  description,
  email,
  phone,
  hours,
}) {
  const Icon = typeof icon === "string" ? icons[icon] || icons.mail : icon;
  const phoneHref = `tel:${(phone || "").replace(/[^\d+]/g, "")}`;

  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <IconBadge icon={Icon} color={iconColor} />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.details}>
        {email ? (
          <a href={`mailto:${email}`} className={`${styles.row} ${styles[accent]}`}>
            <Mail size={16} strokeWidth={2.1} />
            <span>{email}</span>
          </a>
        ) : null}
        {phone ? (
          <a href={phoneHref} className={`${styles.row} ${styles[accent]}`}>
            <Phone size={16} strokeWidth={2.1} />
            <span>{phone}</span>
          </a>
        ) : null}
        {hours ? <p className={styles.hours}>{hours}</p> : null}
      </div>
    </article>
  );
}
