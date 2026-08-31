import { paths } from "./navLinks";

/** Copy and config for Home page sections. */
export const homePageContent = {
  hero: {
    badge: null,
    lines: [
      { text: "Find Hospitality &", color: "white" },
      { text: "Healthcare ", color: "white", inline: true },
      { text: "Jobs", color: "teal", inline: true },
      { text: "Across Canada", color: "gold" },
    ],
    description:
      "Discover healthcare jobs, hospitality jobs, caregiving roles, hotel jobs, restaurant jobs, and other service careers across Canada.",
    descriptionAccent: "Your next opportunity starts here.",
    primaryCta: { label: "Browse Jobs", to: paths.browseJobs },
    secondaryCta: { label: "Post a Job", to: paths.postAJob },
    image: "/img6.webp",
    imageAlt:
      "Healthcare and hospitality professionals with the Toronto skyline and maple leaf",
    trustBadges: [
      {
        icon: "shieldCheck",
        badgeColor: "tealOutline",
        title: "Verified Employers",
        description: "All employers are verified for your peace of mind.",
      },
      {
        icon: "mapleLeaf",
        badgeColor: "goldOutline",
        title: "Jobs Across Canada",
        description: "Find opportunities in every province and territory.",
      },
      {
        icon: "send",
        badgeColor: "tealOutline",
        title: "Easy Applications",
        description: "Apply quickly and connect with employers faster.",
      },
    ],
  },
  search: {
    keywordLabel: "Job Title or Keyword",
    keywordPlaceholder: "e.g. Nurse, Server, Caregiver",
    locationLabel: "Location",
    locationPlaceholder: "City, province, or postal code",
    categoryLabel: "Category",
    categories: [
      { value: "", label: "All Categories" },
      { value: "Healthcare", label: "Healthcare" },
      { value: "Hospitality", label: "Hospitality" },
      { value: "Caregiver", label: "Caregiver" },
      { value: "Other Services", label: "Other Services" },
    ],
    submitLabel: "Search Jobs",
  },
  categories: {
    heading: "Popular Hospitality & Healthcare Job Categories",
    subtext:
      "Explore top hospitality jobs, healthcare jobs, and caregiving jobs across Canada. Whether you're looking for hotel jobs, restaurant jobs, or",
    subtextAccent: "healthcare careers",
    subtextEnd: ", find the right opportunity to grow your career.",
  },
  featuredJobs: {
    heading: "Featured Jobs Across Canada",
    viewAllLabel: "View All Jobs",
    viewAllTo: paths.browseJobs,
  },
  howItWorks: {
    headingBefore: "How ServiceCare",
    brand: "Jobline",
    headingAfter: "Works",
    subtext:
      "Find healthcare jobs, hospitality careers, and caregiving opportunities in Canada—or hire skilled talent for your service team.",
  },
  whyChoose: {
    headingBefore: "Why Choose ServiceCare",
    brand: "Jobline",
    subtext:
      "A dedicated job platform for healthcare, hospitality, caregiving, and other service industry professionals.",
  },
  testimonials: {
    headingParts: [
      { text: "Trusted by", accent: null },
      { text: "Job Seekers", accent: "teal" },
      { text: "and", accent: null },
      { text: "Employers", accent: "gold" },
    ],
    subtext: "Real stories from people and organizations across Canada.",
  },
  nextStep: {
    headingBefore: "Ready to Take the",
    accent: "Next Step",
    subtext:
      "Browse thousands of jobs across Canada or post a job to find the perfect candidate for your team.",
    primaryCta: { label: "Browse Jobs", to: paths.browseJobs },
    secondaryCta: { label: "Post a Job", to: paths.postAJob },
  },
};
