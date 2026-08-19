import { paths } from "./navLinks";

export const browseJobsContent = {
  hero: {
    line1: "Browse Hospitality &",
    line2: "Healthcare Jobs",
    line3: "Across Canada",
    description:
      "Find healthcare jobs, hospitality jobs, caregiver roles, hotel jobs, restaurant jobs, and rewarding service careers in communities across Canada. New opportunities added daily.",
    image: "/img10.webp",
    imageAlt: "ServiceCare Jobline heart, cross, and service bell mark",
  },
  search: {
    keywordLabel: "Job Title or Keyword",
    keywordPlaceholder: "e.g. Nurse, Server, Caregiver",
    locationLabel: "Location",
    locationPlaceholder: "City, Province or Postal Code",
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
  popularSearches: ["Nurse", "PSW", "Caregiver", "Housekeeper", "Front Desk", "Server", "Cook"],
  listings: {
    heading: "Explore Jobs Across Canada",
    subtext: "Showing the latest opportunities",
    sortOptions: [
      { value: "recent", label: "Most Recent" },
      { value: "newest", label: "Newest" },
      { value: "salary", label: "Salary" },
    ],
  },
  quickFilters: [
    { id: "full-time", label: "Full-time", icon: "briefcase" },
    { id: "part-time", label: "Part-time", icon: "clock" },
    { id: "on-site", label: "On-site", icon: "mapPin" },
    { id: "contract", label: "Contract", icon: "fileText" },
    { id: "healthcare", label: "Healthcare", icon: "heart" },
    { id: "hospitality", label: "Hospitality", icon: "bell" },
  ],
  trustedEmployers: {
    heading: "Trusted Employers in Healthcare & Hospitality",
    viewAllLabel: "View All Employers",
    viewAllTo: paths.employers,
  },
  alerts: {
    line1: "Get Hospitality &",
    line2: "Healthcare",
    accent: "Job Alerts",
    subtext: "Sign up and be the first to know about new opportunities that match your skills.",
    placeholder: "Enter your email address",
    submitLabel: "Subscribe",
    privacy: "We respect your privacy. Unsubscribe anytime.",
  },
  trustBadges: [
    {
      icon: "shieldCheck",
      color: "teal",
      title: "Verified Employers",
      text: "All employers are vetted for trust and authenticity.",
    },
    {
      icon: "mapleLeaf",
      color: "gold",
      title: "Canada-Wide Opportunities",
      text: "Discover jobs in communities across Canada.",
    },
    {
      icon: "fileCheck",
      color: "teal",
      title: "Easy Applications",
      text: "Apply quickly and connect with employers faster.",
    },
  ],
  salary: { min: 20000, max: 120000, step: 1000 },
  extraLocations: [
    { id: "Edmonton, AB", label: "Edmonton, AB", count: 380 },
    { id: "Winnipeg, MB", label: "Winnipeg, MB", count: 290 },
    { id: "Halifax, NS", label: "Halifax, NS", count: 210 },
    { id: "Kelowna, BC", label: "Kelowna, BC", count: 165 },
  ],
};

export const filterGroups = {
  category: {
    id: "category",
    title: "Category",
    icon: "layoutGrid",
    allId: "all-categories",
    options: [
      { id: "all-categories", label: "All Categories", count: 4860 },
      { id: "Healthcare", label: "Healthcare", count: 2456 },
      { id: "Hospitality", label: "Hospitality", count: 1892 },
      { id: "Caregiver", label: "Caregiver", count: 1278 },
      { id: "Other Services", label: "Other Services", count: 1034 },
    ],
  },
  jobType: {
    id: "jobType",
    title: "Job Type",
    icon: "briefcase",
    allId: "all-types",
    options: [
      { id: "all-types", label: "All Job Types", count: null },
      { id: "Full-time", label: "Full-time", count: 2980 },
      { id: "Part-time", label: "Part-time", count: 1345 },
      { id: "Casual", label: "Casual", count: 345 },
      { id: "Contract", label: "Contract", count: 190 },
    ],
  },
  location: {
    id: "location",
    title: "Location",
    icon: "mapPin",
    options: [
      { id: "Toronto, ON", label: "Toronto, ON", count: 1240 },
      { id: "Vancouver, BC", label: "Vancouver, BC", count: 980 },
      { id: "Calgary, AB", label: "Calgary, AB", count: 720 },
      { id: "Montreal, QC", label: "Montreal, QC", count: 640 },
      { id: "Ottawa, ON", label: "Ottawa, ON", count: 420 },
    ],
  },
  shift: {
    id: "shift",
    title: "Shift",
    icon: "clock",
    allId: "all-shifts",
    options: [
      { id: "all-shifts", label: "All Shifts", count: null },
      { id: "Day Shift", label: "Day Shift", count: 2430 },
      { id: "Evening Shift", label: "Evening Shift", count: 1210 },
      { id: "Night Shift", label: "Night Shift", count: 860 },
      { id: "Rotating Shifts", label: "Rotating Shifts", count: 360 },
    ],
  },
};
