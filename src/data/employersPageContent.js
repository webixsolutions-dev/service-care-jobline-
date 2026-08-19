import { paths } from "./navLinks";

/** Copy for Employers page sections that is not already in dedicated data files. */
export const employersPageContent = {
  hero: {
    badge: "Canada's Trusted Hiring Partner",
    lines: [
      { text: "Hire Hospitality &", color: "white" },
      { text: "Healthcare Talent", color: "white" },
      { text: "Faster", color: "gold" },
      { text: "Across Canada", color: "teal" },
    ],
    description:
      "Post jobs and connect with pre-screened candidates for nurses, caregivers, front desk staff, hotel staff, restaurant staff, and other service professionals across Canada.",
    primaryCta: { label: "Post a Job", to: paths.postAJob },
    secondaryCta: { label: "View Pricing" },
    note: "No hidden fees. Cancel anytime.",
    image: "/img12.png",
    imageAlt:
      "Hiring manager standing with hospitality and healthcare professionals in front of the Toronto skyline",
    trustBadges: [
      {
        icon: "shieldUser",
        title: "Verified Candidates",
        description: "Every candidate is verified and pre-screened for your peace of mind.",
      },
      {
        icon: "filePlus",
        title: "Easy Job Posting",
        description: "Post a job in minutes and start receiving qualified applications quickly.",
      },
      {
        icon: "mapleLeaf",
        title: "Canada-Wide Reach",
        description: "Access a diverse talent pool across all provinces and territories.",
      },
    ],
  },

  whyChoose: {
    badge: "Built for Employers Across Canada",
    heading: "Why Employers Choose",
    brand: "ServiceCare Jobline",
    subtext:
      "We make it simple to hire verified hospitality and healthcare professionals so you can focus on what matters most—your business and your clients.",
  },

  howItWorks: {
    heading: "How It Works",
  },

  midCta: {
    heading: "Ready to find qualified staff?",
    subtext: "Join thousands of employers who trust ServiceCare Jobline to hire better, faster.",
    cta: { label: "Post a Job", to: paths.postAJob },
  },

  pricing: {
    kicker: "For Employers",
    headingBefore: "Flexible Hiring Plans for",
    hospitality: "Hospitality",
    healthcare: "Healthcare",
    headingAfter: "Employers",
    subtext:
      "Choose the plan that fits your hiring needs. All plans include verified candidates, easy job posting, and Canada-wide visibility.",
    note: "No hidden fees. Cancel or change plans anytime.",
  },

  stats: [
    {
      icon: "users",
      value: "4,800+",
      label: "Active Candidates",
      description: "Pre-screened and ready to work",
    },
    {
      icon: "building2",
      value: "1,200+",
      label: "Employers Trust Us",
      description: "Across hospitality & healthcare",
    },
    {
      icon: "mapleLeaf",
      value: null,
      label: "Canada-Wide Reach",
      description: "Post jobs and connect with talent coast to coast",
    },
  ],

  roles: {
    heading: "Roles You Can Hire For",
    help: "Need help finding the right plan?",
    contactLabel: "Contact our team",
    contactTo: paths.contactUs,
  },

  testimonials: {
    kicker: "Employer Success",
    heading: "What Employers Say",
    subtext: "Trusted by hospitality and healthcare employers across Canada.",
    logosKicker: "Trusted by Employers Across Canada",
  },

  startHiring: {
    headingBefore: "Start Hiring With",
    brand: "ServiceCare Jobline",
    subtext:
      "Reach thousands of pre-screened hospitality and healthcare professionals across Canada and fill your open positions faster.",
    primaryCta: { label: "Post a Job", to: paths.postAJob },
    secondaryCta: { label: "Contact Us", to: paths.contactUs },
  },
};
