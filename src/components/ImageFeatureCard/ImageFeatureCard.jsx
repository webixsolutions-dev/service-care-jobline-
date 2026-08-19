import { Link } from "react-router-dom";
import IconBadge from "../IconBadge/IconBadge";
import { getIcon } from "../icons";
import SmartImage from "../SmartImage";
import styles from "./ImageFeatureCard.module.css";

export default function ImageFeatureCard({ image, icon, title, description, to }) {
  const Icon = getIcon(icon);
  const Wrapper = to ? Link : "article";
  const wrapperProps = to ? { to, className: styles.card } : { className: styles.card };

  return (
    <Wrapper {...wrapperProps}>
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
    </Wrapper>
  );
}
