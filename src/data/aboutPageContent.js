import { paths } from "./navLinks";

/**
 * Local content for the About Us page.
 * Images live in /public as img1–img9 (see user-provided assets).
 */
export const images = {
  hero: "/img1.png",
  healthcareEmployers: "/img2.png",
  hospitalityEmployers: "/img3.png",
  jobSeekers: "/img4.png",
  serviceProfessionals: "/img5.png",
  hiringTeam: "/img6.png",
  markD: "/img7.png",
  priyaS: "/img8.png",
  jamesL: "/img9.png",
};

export const aboutPageContent = {
  hero: {
    kicker: "About",
    title: "ServiceCare",
    accent: "Jobline",
    description:
      "Canada's trusted platform for hospitality jobs, healthcare jobs, and service careers. Connecting talent with employers across the country.",
    primaryCta: { label: "Browse Jobs", to: paths.browseJobs },
    secondaryCta: { label: "Post a Job", to: paths.postAJob },
    image: images.hero,
    imageAlt: "Healthcare, hospitality, and culinary professionals standing together",
  },

  connecting: {
    heading: "Connecting People with Meaningful",
    accent: "Service Careers",
    paragraphs: [
      "ServiceCare Jobline is dedicated to connecting job seekers with meaningful opportunities in hospitality, healthcare, and other service industries across Canada. We understand the vital role these industries play in strengthening communities and improving lives.",
      "Our platform makes it easy for employers to find qualified talent and for job seekers to discover roles that match their skills, experience, and career goals. Whether you're hiring or job hunting, we're here to support your success every step of the way.",
    ],
    features: [
      {
        icon: "shieldCheck",
        title: "Trusted by Employers",
        description: "Verified employers posting real opportunities across Canada.",
      },
      {
        icon: "users",
        title: "Opportunities Across Canada",
        description: "From coast to coast, find local jobs in hospitality and healthcare.",
      },
      {
        icon: "heartHandshake",
        title: "People First",
        description:
          "We're here to help job seekers and employers build stronger, more connected communities.",
      },
    ],
  },

  mission: {
    heading: "Our Mission and Vision",
    paragraphs: [
      "At ServiceCare Jobline, our mission is to connect talented professionals with meaningful opportunities across healthcare, hospitality, caregiving, hotels, restaurants, and other service sectors across Canada.",
      "Our vision is to be Canada's most trusted platform for service careers — where employers find the right people and professionals build fulfilling, long-term careers that strengthen communities from coast to coast.",
    ],
    values: [
      {
        icon: "shieldCheck",
        color: "teal",
        title: "Trust",
        description:
          "We build trust through transparency, verified employers, and a safe job search experience.",
      },
      {
        icon: "users",
        color: "teal",
        title: "Accessibility",
        description: "We make opportunities accessible to everyone, anywhere in Canada.",
      },
      {
        icon: "briefcase",
        color: "gold",
        title: "Quality Opportunities",
        description: "We connect you with quality jobs and top talent for long-term success.",
      },
      {
        icon: "heart",
        color: "gold",
        title: "Community Impact",
        description:
          "We support stronger communities by connecting people to careers that matter.",
      },
    ],
  },

  whoWeServe: {
    heading: "Who We Serve",
    underlineWord: "We",
    subtext:
      "ServiceCare Jobline connects employers and professionals across Canada's essential service sectors.",
    cards: [
      {
        image: images.healthcareEmployers,
        icon: "building2",
        title: "Healthcare Employers",
        description: "Find qualified healthcare professionals to deliver exceptional care.",
        to: paths.employers,
      },
      {
        image: images.hospitalityEmployers,
        icon: "bell",
        title: "Hospitality Employers",
        description: "Hire skilled staff for hotels, restaurants, resorts, and more.",
        to: paths.employers,
      },
      {
        image: images.jobSeekers,
        icon: "user",
        title: "Job Seekers",
        description: "Discover jobs that match your skills and career goals.",
        to: paths.browseJobs,
      },
      {
        image: images.serviceProfessionals,
        icon: "users",
        title: "Service Professionals",
        description: "Build a rewarding career and make a difference every day.",
        to: paths.browseJobs,
      },
    ],
  },

  whyMatters: {
    heading: "Why ServiceCare Jobline",
    accent: "Matters",
    description: "We connect people with purpose to the employers who keep Canada moving.",
    stats: [
      {
        icon: "briefcase",
        color: "teal",
        value: "8,750+",
        label: "Active Job Listings",
        description: "Fresh opportunities updated daily across hospitality & healthcare.",
      },
      {
        icon: "users",
        color: "gold",
        value: "2,300+",
        label: "Employers Served",
        description: "From local businesses to national brands trust our platform.",
      },
      {
        icon: "fileText",
        color: "teal",
        value: "156,000+",
        label: "Candidate Applications",
        description: "Skilled professionals connecting with the right opportunities.",
      },
      {
        icon: "mapleLeaf",
        color: "gold",
        value: "All Across Canada",
        label: "Nationwide Reach",
        description: "Jobs in every province and territory, coast to coast to coast.",
      },
    ],
  },

  journey: {
    heading: "Our Journey,",
    accent: "Our Mission",
    description: "Building stronger communities through better connections.",
    milestones: [
      {
        icon: "rocket",
        color: "teal",
        year: "2021",
        title: "Launch",
        description:
          "ServiceCare Jobline was founded with a mission to connect care and service professionals with meaningful work.",
      },
      {
        icon: "trendingUp",
        color: "gold",
        year: "2022",
        title: "Employer Growth",
        description:
          "Hundreds of employers joined, finding reliable talent faster and building stronger teams.",
      },
      {
        icon: "users",
        color: "teal",
        year: "2023",
        title: "Candidate Network",
        description:
          "Our candidate community grew across Canada, empowering more people to find rewarding careers.",
      },
      {
        icon: "mapleLeaf",
        color: "gold",
        year: "2024+",
        title: "Nationwide Expansion",
        description:
          "Expanding our reach and features to serve even more communities from coast to coast.",
      },
    ],
  },

  hiring: {
    image: images.hiringTeam,
    imageAlt: "Diverse hospitality and healthcare professionals collaborating around a laptop",
    heading: "Built for",
    accentWords: ["Hospitality", "Healthcare"],
    rest: "Hiring",
    features: [
      {
        icon: "shield",
        color: "teal",
        title: "Trusted by Employers",
        description:
          "We verify employers and job postings to ensure quality, safety, and peace of mind for every job seeker.",
      },
      {
        icon: "search",
        color: "gold",
        title: "Simple for Job Seekers",
        description:
          "Find jobs that fit your skills, schedule, and goals with an easy and intuitive search experience.",
      },
      {
        icon: "briefcase",
        color: "teal",
        title: "Easy for Employers",
        description: "Post jobs, screen candidates, and hire faster with tools designed for busy teams.",
      },
    ],
  },

  testimonials: {
    headingBefore: "Trusted by",
    employers: "Employers",
    and: "and",
    jobSeekers: "Job Seekers",
    headingAfter: "Across Canada",
    items: [
      {
        quote:
          "ServiceCare Jobline helped us find reliable and professional staff quickly. The platform is easy to use and connects us with great talent.",
        name: "Mark D.",
        role: "HR Manager, Mapleview Hotels",
        avatar: images.markD,
      },
      {
        quote:
          "I found my dream job in healthcare through ServiceCare Jobline. The process was simple, fast, and stress-free!",
        name: "Priya S.",
        role: "Registered Nurse, Toronto, ON",
        avatar: images.priyaS,
      },
      {
        quote:
          "We've hired amazing team members through ServiceCare Jobline. It's our go-to platform for quality hires.",
        name: "James L.",
        role: "Owner, Coastline Restaurant",
        avatar: images.jamesL,
      },
    ],
  },

  closingCta: {
    heading: "Ready to Explore",
    accentOne: "New Opportunities",
    middle: "or Hire",
    accentTwo: "Top Talent?",
    description:
      "Join thousands of employers and job seekers across Canada who trust ServiceCare Jobline to connect and grow.",
    primaryCta: { label: "Browse Jobs", to: paths.browseJobs },
    secondaryCta: { label: "Post a Job", to: paths.postAJob },
  },
};
