import { paths } from "./navLinks";
import { contactInfo } from "./contactInfo";

/**
 * Single site-wide footer. Identical on every route — no per-page variants.
 */
export const footerConfig = {
  tagline:
    "Canada's trusted platform for hospitality, healthcare, and other service careers. Connecting employers with the right talent, and job seekers with the right opportunities.",
  supportingLine: "Proudly supporting communities from coast to coast.",
  socials: [
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "Facebook", href: "https://facebook.com" },
    { name: "Instagram", href: "https://instagram.com" },
  ],
  columns: [
    {
      title: "Quick Links",
      links: [
        { label: "Browse Jobs", to: paths.browseJobs },
        { label: "Employers", to: paths.employers },
        { label: "Post a Job", to: paths.postAJob },
        { label: "About Us", to: paths.aboutUs },
        { label: "Contact Us", to: paths.contactUs },
      ],
    },
    {
      title: "For Job Seekers",
      links: [
        { label: "Create Account", to: paths.createAccount },
        { label: "Sign In", to: paths.signIn },
        { label: "Job Alerts", to: paths.jobAlerts },
        { label: "Career Resources", to: paths.careerResources },
        { label: "Help Centre", to: paths.helpCenter },
      ],
    },
    {
      title: "For Employers",
      links: [
        { label: "Post a Job", to: paths.postAJob },
        { label: "Why Hire With Us", to: paths.whyHireWithUs },
        { label: "Pricing", to: paths.employerPricing },
        { label: "Employer Resources", to: paths.employerResources },
        { label: "Contact Sales", to: paths.contactSales },
      ],
    },
  ],
  contactInfo: {
    address: contactInfo.address,
    email: contactInfo.email,
    phone: contactInfo.phone,
    hours: "Mon – Fri 8:00am – 6:00pm EST",
  },
  legal: [
    { label: "Privacy Policy", to: paths.privacy },
    { label: "Terms of Service", to: paths.terms },
    { label: "Accessibility", to: paths.accessibility },
  ],
};

/** @deprecated Identical to footerConfig — kept so older imports do not break. */
export const aboutPageFooterConfig = footerConfig;
export const browseJobsFooterConfig = footerConfig;
export const contactPageFooterConfig = footerConfig;
export const employersPageFooterConfig = footerConfig;
export const homePageFooterConfig = footerConfig;
export const postJobPageFooterConfig = footerConfig;

export function getFooterConfig() {
  return footerConfig;
}
