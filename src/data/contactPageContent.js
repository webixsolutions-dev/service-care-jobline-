import { paths } from "./navLinks";

/**
 * Copy and structured content for the Contact Us page.
 * Category cards and FAQs live in their own data files for reuse.
 */
export const contactPageContent = {
  hero: {
    kicker: "Contact",
    title: "ServiceCare",
    accent: "Jobline",
    description:
      "Get in touch with Canada's trusted hospitality and healthcare job platform. Whether you are hiring qualified staff or searching for your next opportunity, our team is here to help.",
    primaryCta: { label: "Send a Message" },
    secondaryCta: { label: "Post a Job", to: paths.postAJob },
    image: "/img11.webp",
    imageAlt:
      "Healthcare, hospitality, and culinary professionals standing together in front of the Toronto skyline",
    supportCards: [
      {
        icon: "headphones",
        iconColor: "teal",
        title: "Fast Support",
        description: "Our team responds quickly to help you get the answers you need, when you need them.",
      },
      {
        icon: "briefcase",
        iconColor: "teal",
        title: "Employer Assistance",
        description: "We support employers in finding qualified talent and growing their teams.",
      },
      {
        icon: "users",
        iconColor: "teal",
        title: "Job Seeker Help",
        description: "We're here to guide job seekers toward meaningful opportunities and career success.",
      },
    ],
  },

  form: {
    heading: "Contact Us",
    subtext:
      "Reach our team for hiring support, job posting assistance, candidate questions, and platform guidance across Canada.",
    submitLabel: "Submit Inquiry",
    privacy: "Your information is secure and will only be used to respond to your inquiry.",
    fields: {
      name: { label: "Name", placeholder: "Enter your full name", required: true },
      email: { label: "Email", placeholder: "Enter your email address", required: true },
      phone: { label: "Phone", placeholder: "Enter your phone number", required: false },
      subject: { label: "Subject", placeholder: "Select a subject", required: true },
      message: { label: "Message", placeholder: "How can we help you?", required: true },
    },
    subjects: [
      { value: "General Inquiry", label: "General Inquiry" },
      { value: "Employer Support", label: "Employer Support" },
      { value: "Job Seeker Support", label: "Job Seeker Support" },
      { value: "Partnership", label: "Partnership" },
      { value: "Other", label: "Other" },
    ],
  },

  helpSupport: {
    kicker: "We're Here to",
    heading: "Help & Support",
    description:
      "Have a question or need assistance? Our team is here to help employers and job seekers connect with confidence.",
    cards: [
      {
        icon: "mapPin",
        iconColor: "tealOutline",
        title: "Portal Support",
        description: "Use the configured portal contact channel for account and platform support.",
      },
      {
        icon: "clock",
        iconColor: "goldOutline",
        title: "Secure Access",
        description: "Account and application data is handled through the shared authenticated backend.",
      },
      {
        icon: "headphones",
        iconColor: "tealOutline",
        title: "Live Employer Help",
        description: "Get support for posting, managing jobs, and more.",
      },
      {
        icon: "users",
        iconColor: "goldOutline",
        title: "Job Seeker Guidance",
        description: "We're here to help you find the right opportunity.",
      },
    ],
  },

  faq: {
    heading: "Frequently Asked Questions",
    subtext: "Quick answers to common questions.",
  },

  needHelp: {
    heading: "Need help right away?",
    description: "Our team is ready to support your hiring or job search journey.",
    primaryCta: { label: "Contact Our Team" },
    secondaryCta: { label: "Browse Jobs", to: paths.browseJobs },
  },

  letsConnect: {
    heading: "Let's",
    accent: "Connect",
    description:
      "ServiceCare Jobline connects hospitality and healthcare employers with qualified talent across Canada. Contact us for support, questions, or hiring assistance.",
    primaryCta: { label: "Send a Message" },
    secondaryCta: { label: "Post a Job", to: paths.postAJob },
  },
};
