import { browseJobsContent } from "../../../data/browseJobsContent";
import Pill from "../../../components/Pill/Pill";
import styles from "./PopularSearches.module.css";

export default function PopularSearches({ onSelect, activeKeyword }) {
  return (
    <section className={styles.section} aria-label="Popular searches">
      <div className={`container ${styles.row}`}>
        <span className={styles.label}>Popular Searches:</span>
        <div className={styles.pills}>
          {browseJobsContent.popularSearches.map((term) => (
            <Pill
              key={term}
              tone="outlineLight"
              active={activeKeyword === term}
              onClick={() => onSelect(term)}
            >
              {term}
            </Pill>
          ))}
        </div>
      </div>
    </section>
  );
}
