import { paths } from "./navLinks";

export const infoPages = {
  helpCenter: {
    kicker: "Support",
    title: "Help Centre",
    intro:
      "Get answers about job applications, employer postings, and using ServiceCare Jobline. If you still need a person, our team is one message away.",
    faqs: [
      {
        question: "How do I apply for a job?",
        answer:
          "Open Browse Jobs, choose a listing, and select Apply Now. Create a free job-seeker account if you do not have one yet.",
      },
      {
        question: "How do I post a job?",
        answer:
          "Go to Post a Job, complete the listing form, and choose a plan. Our team can also help you write the posting.",
      },
      {
        question: "How fast will I receive a reply?",
        answer: "We aim to respond to Help Centre and Contact inquiries within one business day.",
      },
      {
        question: "Can I set up job alerts?",
        answer:
          "Yes. On Browse Jobs, scroll to Get Job Alerts, enter your email, and we will notify you about matching hospitality and healthcare roles.",
      },
    ],
    links: [
      { label: "Contact Us", to: paths.contactUs, note: "send a message to our team" },
      { label: "Browse Jobs", to: paths.browseJobs, note: "search current openings" },
      { label: "Post a Job", to: paths.postAJob, note: "start an employer listing" },
      { label: "Sign In", to: paths.signIn, note: "access your account" },
    ],
    ctas: [
      { label: "Contact Us", to: paths.contactUs },
      { label: "Browse Jobs", to: paths.browseJobs },
    ],
  },

  careerResources: {
    kicker: "Job Seekers",
    title: "Career Resources",
    intro:
      "Practical next steps for hospitality and healthcare professionals looking for work across Canada.",
    sections: [
      {
        heading: "Start your search",
        paragraphs: [
          "Browse current openings, filter by city and role, and save listings that match your experience. Healthcare, caregiving, hotels, and restaurants are updated regularly.",
        ],
      },
      {
        heading: "Get discovered",
        paragraphs: [
          "Create a free account so employers can connect with you. Keep your contact details current and turn on job alerts for new matches.",
        ],
      },
    ],
    links: [
      { label: "Browse Jobs", to: paths.browseJobs, note: "see live listings" },
      { label: "Create Account", to: paths.signUp, note: "set up a job-seeker profile" },
      { label: "Job Alerts", to: paths.jobAlerts, note: "get emailed openings" },
      { label: "Contact Us", to: paths.contactUs, note: "ask for job-search guidance" },
    ],
    ctas: [
      { label: "Browse Jobs", to: paths.browseJobs },
      { label: "Create Account", to: paths.signUp },
    ],
  },

  employerResources: {
    kicker: "Employers",
    title: "Employer Resources",
    intro:
      "Tools and next steps for hotels, restaurants, clinics, and care providers hiring across Canada.",
    sections: [
      {
        heading: "Hire with ServiceCare Jobline",
        paragraphs: [
          "Post a role, choose a visibility plan, and reach candidates who already work in hospitality and healthcare. Our team can help you write the listing and review applicants.",
        ],
      },
    ],
    links: [
      { label: "Post a Job", to: paths.postAJob, note: "create a listing" },
      { label: "Why Hire With Us", to: paths.whyHireWithUs, note: "see how the platform works" },
      { label: "Pricing", to: paths.employerPricing, note: "compare posting plans" },
      { label: "Contact Sales", to: paths.contactSales, note: "talk with our hiring team" },
    ],
    ctas: [
      { label: "Post a Job", to: paths.postAJob },
      { label: "View Pricing", to: paths.employerPricing },
    ],
  },

  browseResumes: {
    kicker: "Employers",
    title: "Browse Resumes",
    intro:
      "Review qualified hospitality and healthcare candidates through ServiceCare Jobline. Start by posting a role or speaking with our employer team.",
    sections: [
      {
        heading: "How to reach candidates",
        paragraphs: [
          "Featured and Premium plans include stronger candidate access. Contact sales if you need help shortlisting applicants for a specific city or role.",
        ],
      },
    ],
    links: [
      { label: "Post a Job", to: paths.postAJob, note: "start receiving applications" },
      { label: "Pricing", to: paths.employerPricing, note: "see plans with candidate search" },
      { label: "Contact Sales", to: paths.contactSales, note: "request candidate support" },
      { label: "Create Employer Account", to: paths.signUp, note: "sign up as an employer" },
    ],
    ctas: [
      { label: "Post a Job", to: paths.postAJob },
      { label: "Contact Sales", to: paths.contactUs },
    ],
  },

  createResume: {
    kicker: "Job Seekers",
    title: "Create Resume",
    intro:
      "Create a free job-seeker account to apply faster, save listings, and receive job alerts for hospitality and healthcare roles.",
    sections: [
      {
        heading: "What happens next",
        paragraphs: [
          "After you sign up, you can apply from any job details page and keep your contact information ready for employers.",
        ],
      },
    ],
    links: [
      { label: "Create Account", to: paths.signUp, note: "start your profile" },
      { label: "Browse Jobs", to: paths.browseJobs, note: "find roles to apply for" },
      { label: "Career Resources", to: paths.careerResources, note: "more job-seeker tips" },
    ],
    ctas: [
      { label: "Create Account", to: paths.signUp },
      { label: "Browse Jobs", to: paths.browseJobs },
    ],
  },

  privacy: {
    kicker: "Legal",
    title: "Privacy Policy",
    intro:
      "ServiceCare Jobline respects your privacy. This policy explains what information we collect on the site and how we use it to connect job seekers and employers.",
    sections: [
      {
        heading: "Information we collect",
        paragraphs: [
          "We collect details you submit through forms, including your name, email, phone number, account type, job-post content, and messages sent through Contact Us.",
          "We also collect basic usage data such as pages visited so we can keep the platform working and improve search results.",
        ],
      },
      {
        heading: "How we use your information",
        paragraphs: [
          "We use your information to create accounts, display job listings, send job alerts you request, respond to inquiries, and support hiring between employers and candidates.",
          "We do not sell personal information. We only share it with the parties needed to deliver the service you asked for, such as an employer receiving an application.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "Questions about this policy can be sent through our Contact Us page or emailed to info@servicecarejobline.ca.",
        ],
      },
    ],
    ctas: [
      { label: "Contact Us", to: paths.contactUs },
      { label: "Back to Home", to: paths.home },
    ],
  },

  terms: {
    kicker: "Legal",
    title: "Terms of Service",
    intro:
      "By using ServiceCare Jobline you agree to these terms. The platform helps Canadian hospitality and healthcare employers and job seekers connect.",
    sections: [
      {
        heading: "Using the site",
        paragraphs: [
          "You must provide accurate information when creating an account, posting a job, or applying for a role. You are responsible for the content you submit.",
          "Job listings and candidate details are provided for legitimate hiring and job-search purposes only.",
        ],
      },
      {
        heading: "Accounts and listings",
        paragraphs: [
          "We may remove listings or accounts that are misleading, discriminatory, or unrelated to hospitality and healthcare employment.",
          "Paid posting plans are described on the Employers and Post a Job pages. Fees are charged for the listing period shown on each plan.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "If you have questions about these terms, reach us through Contact Us or info@servicecarejobline.ca.",
        ],
      },
    ],
    ctas: [
      { label: "Contact Us", to: paths.contactUs },
      { label: "Back to Home", to: paths.home },
    ],
  },

  accessibility: {
    kicker: "Legal",
    title: "Accessibility",
    intro:
      "ServiceCare Jobline is committed to an accessible experience for job seekers and employers, including people who use assistive technologies.",
    sections: [
      {
        heading: "Our commitment",
        paragraphs: [
          "We aim to meet WCAG 2.2 Level AA practices where possible: keyboard access, visible focus, sufficient colour contrast, and labelled form fields.",
          "If you find a barrier on the site, tell us. We will work to provide the information or service another way while we fix the issue.",
        ],
      },
      {
        heading: "Request support",
        paragraphs: [
          "Use Contact Us, call 1-800-123-4567, or email info@servicecarejobline.ca with the page URL and a short description of the barrier.",
        ],
      },
    ],
    ctas: [
      { label: "Contact Us", to: paths.contactUs },
      { label: "Browse Jobs", to: paths.browseJobs },
    ],
  },
};
