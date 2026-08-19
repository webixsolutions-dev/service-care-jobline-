import { CircleCheck, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import { employersPageContent } from "../../../data/employersPageContent";
import { pricingPlans } from "../../../data/pricingPlans";
import { hireableRoles } from "../../../data/hireableRoles";
import PricingCard from "../../../components/PricingCard/PricingCard";
import Pill from "../../../components/Pill/Pill";
import IconBadge from "../../../components/IconBadge/IconBadge";
import { getIcon } from "../../../components/icons";
import styles from "./PricingPlans.module.css";

export default function PricingPlans({ sectionRef }) {
  const { kicker, headingBefore, hospitality, healthcare, headingAfter, subtext, note } =
    employersPageContent.pricing;
  const stats = employersPageContent.stats;
  const roles = employersPageContent.roles;

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="pricing-heading"
    >
      <div className="container">
        <p className={styles.kicker}>{kicker}</p>
        <h2 id="pricing-heading">
          {headingBefore}
          <br />
          <span className={styles.gold}>{hospitality}</span> &amp;{" "}
          <span className={styles.teal}>{healthcare}</span> {headingAfter}
        </h2>
        <p className={styles.sub}>{subtext}</p>

        <div className={styles.grid}>
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              name={plan.name}
              description={plan.description}
              price={plan.price}
              period={plan.period}
              priceTone={plan.priceTone}
              features={plan.features}
              popular={plan.popular}
              popularLabel={plan.popularLabel}
              buttonVariant={plan.buttonVariant}
              buttonTo={plan.buttonTo}
            />
          ))}
        </div>

        <p className={styles.note}>
          <CircleCheck size={16} strokeWidth={2.4} aria-hidden />
          {note}
        </p>

        <ul className={styles.stats}>
          {stats.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <li key={item.label}>
                <span className={styles.statIcon}>
                  <Icon size={26} />
                </span>
                <div>
                  {item.value ? <p className={styles.value}>{item.value}</p> : null}
                  <p className={item.value ? styles.label : styles.value}>{item.label}</p>
                  <p className={styles.statDesc}>{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className={styles.roles}>
          <div className={styles.rolesLabel}>
            <IconBadge icon={User} color="tealOutline" size="lg" />
            <h3>
              Roles You
              <br />
              Can Hire For
            </h3>
          </div>
          <div className={styles.pills}>
            {hireableRoles.map((role) => {
              const Icon = getIcon(role.icon);
              return (
                <Pill key={role.label} as="span" tone="navy" icon={Icon}>
                  {role.label}
                </Pill>
              );
            })}
          </div>
          <div className={styles.help}>
            <p>{roles.help}</p>
            <Link to={roles.contactTo}>
              {roles.contactLabel} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
