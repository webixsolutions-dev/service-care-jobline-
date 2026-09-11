import { postJobPageContent } from "../../../data/postJobPageContent";
import { postingPlans } from "../../../data/postingPlans";
import PricingCard from "../../../components/PricingCard/PricingCard";
import IconBadge from "../../../components/IconBadge/IconBadge";
import { getIcon } from "../../../components/icons";
import styles from "./PostingPlans.module.css";

export default function PostingPlans({ onSelectPlan }) {
  const { headingBefore, headingAccent, subtext, highlights } = postJobPageContent.plans;

  function handleSelect(planId) {
    onSelectPlan?.(planId);
  }

  return (
    <section className={styles.section} aria-labelledby="posting-plans-heading">
      <div className={`container ${styles.layout}`}>
        <div className={styles.copy}>
          <h2 id="posting-plans-heading">
            {headingBefore} <span>{headingAccent}</span>
          </h2>
          <p>{subtext}</p>
          <ul className={styles.highlights}>
            {highlights.map((item) => {
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
        </div>

        <div className={styles.grid}>
          {postingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              theme="light"
              name={plan.name}
              description={plan.description}
              price={plan.price}
              period={plan.period}
              priceTone={plan.priceTone}
              features={plan.features}
              popular={plan.popular}
              popularLabel={plan.popularLabel}
              buttonVariant={plan.buttonVariant}
              buttonLabel={plan.buttonLabel}
              buttonIcon={null}
              checkIconColor={plan.checkIconColor}
              onSelect={() => handleSelect(plan.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
