import { paths } from "./navLinks";

/** Copy and config for the Post a Job page. */
export const postJobPageContent = {
  hero: {
    lines: [
      { text: "Post Hospitality and", color: "white" },
      { text: "Healthcare Jobs", color: "white" },
      { text: "Across Canada", color: "gold" },
    ],
    description:
      "Find the right talent for your team. Post jobs for nurses, caregivers, support workers, hotel staff, restaurant staff, and service professionals across Canada.",
    primaryCta: { label: "Create a Job Post" },
    secondaryCta: { label: "Browse Talent", to: paths.browseResumes },
    image: "/img14.webp",
    imageAlt:
      "Healthcare, hospitality, and culinary professionals standing together with the Toronto skyline at night",
    trustBadges: [
      {
        icon: "target",
        badgeColor: "teal",
        title: "Reach Qualified Candidates",
        description:
          "Connect with skilled hospitality and healthcare professionals who are actively looking for opportunities.",
      },
      {
        icon: "zap",
        badgeColor: "teal",
        title: "Fast and Easy Posting",
        description:
          "Create and publish your job post in minutes with our simple and streamlined process.",
      },
      {
        icon: "mapleLeaf",
        badgeColor: "teal",
        title: "Canada-Wide Visibility",
        description:
          "Get your jobs seen by candidates across provinces and attract top talent nationwide.",
      },
    ],
  },
  form: {
    heading: "Job Details",
    subtext: "Fill in the details below to post your job and connect with qualified talent.",
    submitLabel: "Continue / Submit Job Details",
    privacy: "Your job details are secure and will only be used to post your job.",
    fields: {
      companyName: {
        label: "Company Name",
        placeholder: "Enter your company name",
        required: true,
      },
      jobTitle: { label: "Job Title", placeholder: "Enter job title", required: true },
      category: { label: "Job Category", placeholder: "Select a category", required: true },
      location: {
        label: "Location",
        placeholder: "Enter city, province or postal code",
        required: true,
      },
      employmentType: {
        label: "Employment Type",
        placeholder: "Select employment type",
        required: true,
      },
      salaryRange: {
        label: "Salary Range (CAD)",
        placeholder: "Select salary range",
        required: false,
      },
      contactEmail: {
        label: "Contact Email",
        placeholder: "Enter contact email",
        required: true,
      },
      jobSummary: {
        label: "Job Summary",
        placeholder:
          "Write a short summary of the role, key responsibilities, and qualifications...",
        required: true,
      },
    },
    categories: ["Healthcare", "Hospitality", "Caregiver", "Other Services"],
    employmentTypes: ["Full-time", "Part-time", "Casual", "Contract"],
    salaryRanges: [
      "$20,000–$40,000",
      "$40,000–$60,000",
      "$60,000–$80,000",
      "$80,000–$100,000",
      "$100,000+",
    ],
  },
  whyPost: {
    heading: "Why post with us?",
    callout: "Proudly connecting employers and job seekers across Canada.",
  },
  howItWorks: {
    headingBefore: "How It",
    headingAccent: "Works",
    subtext:
      "Posting a job on ServiceCare Jobline is quick and easy. Connect with qualified talent in healthcare, hospitality, and the service industry across Canada.",
    steps: [
      {
        number: 1,
        icon: "filePen",
        title: "Create Your Listing",
        description: "Add your job details, requirements, and preferences in just a few simple steps.",
      },
      {
        number: 2,
        icon: "users",
        title: "Reach Qualified Candidates",
        description:
          "Your job will be seen by motivated professionals actively looking for healthcare and hospitality jobs.",
      },
      {
        number: 3,
        icon: "shieldCheck",
        title: "Hire with Confidence",
        description:
          "Review applications, connect with candidates, and hire the right fit for your team.",
      },
    ],
  },
  plans: {
    headingBefore: "Posting",
    headingAccent: "Plans",
    subtext:
      "Choose the right plan to find top talent in healthcare, hospitality, and the service industry. All plans are designed to help you hire faster and better across Canada.",
    highlights: [
      {
        icon: "target",
        title: "Targeted Reach",
        description: "Get your job in front of qualified candidates across Canada.",
      },
      {
        icon: "clock",
        title: "Save Time",
        description: "Streamline your hiring process and focus on what matters most.",
      },
      {
        icon: "shieldCheck",
        title: "Quality Talent",
        description: "Connect with skilled professionals who are ready to make an impact.",
      },
    ],
  },
  needHelp: {
    heading: "Need help choosing the right plan?",
    subtext: "Our team is here to help you find the best solution for your hiring needs.",
    ctaLabel: "Contact Us",
    ctaTo: paths.contactUs,
    phone: "1-800-123-4567",
    phoneHref: "tel:1-800-123-4567",
  },
  testimonials: {
    kicker: "Trusted by Employers Across Canada",
    heading: "What Employers Are Saying",
  },
  closingCta: {
    headingBefore: "Ready to Hire",
    headingAccent: "Top Service Talent",
    subtext:
      "Join hundreds of employers who trust ServiceCare Jobline to connect them with qualified healthcare and hospitality professionals across Canada.",
    primaryCta: { label: "Post a Job" },
    secondaryCta: { label: "Contact Our Team", to: paths.contactUs },
    backgroundImage: "/img13.webp",
  },
};
