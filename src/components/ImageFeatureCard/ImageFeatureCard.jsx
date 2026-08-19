import IconBadge from "../IconBadge/IconBadge";
import { getIcon } from "../icons";
import SmartImage from "../SmartImage";
import styles from "./ImageFeatureCard.module.css";

export default function ImageFeatureCard({ image, icon, title, description }) {
  const Icon = getIcon(icon);

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <SmartImage src={image} alt="" />
        <span className={styles.badgeWrap}>
          <IconBadge icon={Icon} color="teal" size="md" />
        </span>
      </div>
      <div className={styles.body}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
