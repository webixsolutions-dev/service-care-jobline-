import { NavLink } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { GiMapleLeaf } from "react-icons/gi";
import { paths } from "../../routes/paths";
import logo from "../../assets/logo.png";

const quickLinks = [
  { label: "Home", to: paths.home },
  { label: "Browse Jobs", to: paths.browseJobs },
  { label: "Employers", to: paths.employers },
  { label: "About Us", to: paths.aboutUs },
  { label: "Contact Us", to: paths.contactUs },
];

const employerLinks = [
  { label: "Post a Job", to: paths.postAJob },
  { label: "Browse Resumes", to: paths.browseJobs },
  { label: "Employer Pricing", to: paths.employers },
  { label: "Resources", to: paths.employers },
];

const seekerLinks = [
  { label: "Browse Jobs", to: paths.browseJobs },
  { label: "Create Resume", to: paths.dashboard },
  { label: "Career Advice", to: paths.dashboard },
  { label: "Job Alerts", to: paths.dashboard },
];

const socials = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white/80">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-2">
            <img src={logo} alt="ServiceCare Jobline" className="h-12 w-auto rounded-md" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Canada's trusted platform for hospitality, healthcare, and other service careers.
              Connecting employers with the right talent, and job seekers with the right
              opportunities.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-teal text-brand-teal transition-colors hover:bg-brand-teal hover:text-brand-navy"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <FooterColumn title="Quick Links" links={quickLinks} />
          {/* For Employers */}
          <FooterColumn title="For Employers" links={employerLinks} />
          {/* For Job Seekers */}
          <FooterColumn title="For Job Seekers" links={seekerLinks} />
        </div>

        {/* Contact block */}
        <div className="mt-10 grid grid-cols-1 gap-3 border-t border-white/10 pt-8 text-sm sm:grid-cols-3">
          <div className="flex items-start gap-2">
            <FiMapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
            <span className="text-white/60">123 Front St W, Suite 200, Toronto, ON M5J 2M2</span>
          </div>
          <div className="flex items-center gap-2">
            <FiPhone className="h-4 w-4 shrink-0 text-brand-teal" />
            <span className="text-white/60">1-800-123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <FiMail className="h-4 w-4 shrink-0 text-brand-teal" />
            <span className="text-white/60">info@servicecarejobline.ca</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-white/50 sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} ServiceCare Jobline. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/80">
              Privacy Policy
            </a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-white/80">
              Terms of Use
            </a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-white/80">
              Accessibility
            </a>
          </div>
          <GiMapleLeaf className="h-5 w-5 text-brand-teal" />
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <NavLink to={link.to} className="text-sm text-white/60 hover:text-brand-gold">
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
