import { Link } from "react-router-dom";
import { paths } from "../../data/navLinks";
import IconBadge from "../IconBadge/IconBadge";
import { getIcon } from "../icons";
import styles from "./CategoryCard.module.css";

/** White category tile with icon, title, description, and explore link. */
export default function CategoryCard({ icon, title, description, slug }) {
  const Icon = typeof icon === "string" ? getIcon(icon) : icon;
  const href = `${paths.browseJobs}?category=${slug}`;

  return (
    <Link to={href} className={styles.card}>
      <IconBadge icon={Icon} color="tealSoftOutline" size="lg" />
      <h3>{title}</h3>
      <p>{description}</p>
      <span className={styles.link}>Explore Jobs →</span>
    </Link>
  );
}
