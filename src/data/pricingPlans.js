import { paths } from "./navLinks";

/** Static employer pricing — connect to a billing API when available. */
export const pricingPlans = [
  {
    id: "standard",
    name: "Standard",
    description: "Essential hiring tools to get started.",
    price: 129,
    period: "/30 days",
    priceTone: "gold",
    features: [
      "30-day job posting",
      "Basic job listing",
      "Access to candidate applications",
      "Email support",
    ],
    buttonVariant: "solid-gold",
    buttonTo: paths.postAJob,
    popular: false,
  },
  {
    id: "professional",
    name: "Professional",
    description: "More visibility. More qualified candidates.",
    price: 249,
    period: "/30 days",
    priceTone: "teal",
    features: [
      "30-day job posting",
      "Featured listing",
      "Candidate search (limited)",
      "Priority email & chat support",
    ],
    buttonVariant: "solid-teal",
    buttonTo: paths.postAJob,
    popular: true,
    popularLabel: "Most Popular",
  },
  {
    id: "premium",
    name: "Premium",
    description: "Maximum reach and priority hiring support.",
    price: 399,
    period: "/30 days",
    priceTone: "gold",
    features: [
      "30-day job posting",
      "Featured listing",
      "Unlimited candidate search",
      "Priority support & account manager",
    ],
    buttonVariant: "solid-gold",
    buttonTo: paths.postAJob,
    popular: false,
  },
];
