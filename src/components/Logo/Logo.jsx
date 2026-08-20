import styles from "./Logo.module.css";

/** Heart + medical cross + service bell brand mark. */
export default function LogoMark({ className = "", size = 52 }) {
  return (
    <svg
      className={`${styles.mark} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M32 56C32 56 8 40.5 8 24.5C8 16.5 14 11 21.2 11C26.2 11 29.8 13.8 32 18C34.2 13.8 37.8 11 42.8 11C50 11 56 16.5 56 24.5C56 40.5 32 56 32 56Z"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinejoin="round"
        className={styles.heart}
      />
      <path
        d="M24.5 18.5H30.5V13.5H35.5V18.5H41.5V23.5H35.5V28.5H30.5V23.5H24.5V18.5Z"
        fill="#FFFFFF"
      />
      <g className={styles.bell}>
        <path d="M22 46.5C22 46.5 24.5 41 32 41C39.5 41 42 46.5 42 46.5C43.8 46.5 45 47.6 45 49.2C45 50.8 43.6 52 41.8 52H22.2C20.4 52 19 50.8 19 49.2C19 47.6 20.2 46.5 22 46.5Z" fill="#F5A623" />
        <ellipse cx="32" cy="41.2" rx="7.2" ry="3.2" fill="#F5A623" />
        <circle cx="32" cy="37.6" r="1.6" fill="#F5A623" />
        <path d="M26.5 47.2C27.8 44.6 29.6 43.4 32 43.4C34.4 43.4 36.2 44.6 37.5 47.2" stroke="rgba(255,255,255,0.45)" strokeWidth="1.4" fill="none" />
      </g>
    </svg>
  );
}

export function Wordmark({ stacked = true, className = "" }) {
  return (
    <span className={`${styles.wordmark} ${stacked ? styles.stacked : ""} ${className}`}>
      <span className={styles.service}>ServiceCare</span>
      <span className={styles.jobline}>Jobline</span>
    </span>
  );
}
