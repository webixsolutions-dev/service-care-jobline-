import { MapPin } from "lucide-react";
import styles from "./MapPreview.module.css";

const STREETS = [
  { label: "Queen St W", top: "22%" },
  { label: "King St W", top: "46%" },
  { label: "Front St W", top: "70%" },
];

const AVENUES = [
  { label: "Bay St", left: "32%" },
  { label: "Yonge St", left: "62%" },
];

/**
 * Decorative Toronto service-area illustration. Pass `embedSrc` to use a verified map URL.
 */
export default function MapPreview({
  embedSrc = null,
  title = "ServiceCare Jobline Toronto office map",
}) {
  if (embedSrc) {
    return (
      <div className={styles.frame}>
        <iframe
          title={title}
          src={embedSrc}
          className={styles.embed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  return (
    <div className={styles.frame} role="img" aria-label={title}>
      <svg className={styles.grid} viewBox="0 0 640 420" preserveAspectRatio="none" aria-hidden>
        <rect width="640" height="420" fill="#081225" />
        {[80, 140, 200, 260, 320, 380].map((y) => (
          <line key={`h-${y}`} x1="0" y1={y} x2="640" y2={y} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        ))}
        {[90, 170, 250, 330, 410, 490, 570].map((x) => (
          <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="420" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        ))}
        <line x1="0" y1="96" x2="640" y2="96" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
        <line x1="0" y1="196" x2="640" y2="196" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
        <line x1="0" y1="296" x2="640" y2="296" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
        <line x1="210" y1="0" x2="210" y2="420" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
        <line x1="400" y1="0" x2="400" y2="420" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
      </svg>

      {STREETS.map((street) => (
        <span key={street.label} className={styles.streetH} style={{ top: street.top }}>
          {street.label}
        </span>
      ))}
      {AVENUES.map((ave) => (
        <span key={ave.label} className={styles.streetV} style={{ left: ave.left }}>
          {ave.label}
        </span>
      ))}

      <span className={styles.pin} aria-hidden>
        <MapPin size={48} strokeWidth={2.2} fill="rgba(20,184,166,0.18)" />
        <span className={styles.pulse} />
      </span>
      <span className={styles.city}>Toronto</span>
    </div>
  );
}
