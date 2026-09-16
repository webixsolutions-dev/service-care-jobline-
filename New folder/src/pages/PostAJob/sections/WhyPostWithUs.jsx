import { GiMapleLeaf } from "react-icons/gi";
import { postJobPageContent } from "../../../data/postJobPageContent";
import { whyPostWithUsItems } from "../../../data/whyPostWithUsItems";
import IconBadge from "../../../components/IconBadge/IconBadge";
import { getIcon } from "../../../components/icons";
import styles from "./WhyPostWithUs.module.css";

export default function WhyPostWithUs() {
  const { heading, callout } = postJobPageContent.whyPost;

  return (
    <aside className={styles.panel} aria-labelledby="why-post-heading">
      <h2 id="why-post-heading">{heading}</h2>
      <span className={styles.bar} />
      <ul className={styles.list}>
        {whyPostWithUsItems.map((item) => {
          const Icon = getIcon(item.icon);
          return (
            <li key={item.title}>
              <IconBadge icon={Icon} color="tealSoft" size="md" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <p className={styles.callout}>
        <GiMapleLeaf aria-hidden />
        {callout}
      </p>
    </aside>
  );
}
