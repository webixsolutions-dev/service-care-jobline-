import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FiBriefcase, FiUser } from "react-icons/fi";
import { paths } from "../../routes/paths";
import logo from "../../assets/logo.png";

const navLinks = [
  { label: "Home", to: paths.home },
  { label: "Browse Jobs", to: paths.browseJobs },
  { label: "Employers", to: paths.employers },
  { label: "About Us", to: paths.aboutUs },
  { label: "Contact Us", to: paths.contactUs },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative pb-1 text-[15px] font-medium transition-colors ${
      isActive
        ? "text-brand-gold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-brand-gold"
        : "text-white/90 hover:text-brand-gold"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-navy border-b border-white/5">
      <nav className="mx-auto flex w-full max-w-full items-center justify-between gap-4 px-[10%] py-4">
        {/* Logo */}
        <NavLink to={paths.home} className="shrink-0" onClick={() => setOpen(false)}>
          <img src={logo} alt="ServiceCare Jobline" className="h-12 w-auto rounded-md" />
        </NavLink>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <NavLink
            to={paths.postAJob}
            className="flex items-center gap-2 rounded-lg bg-brand-gold px-5 py-2.5 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-goldLight"
          >
            <FiBriefcase className="h-4 w-4" />
            Post a Job
          </NavLink>
          <NavLink
            to={paths.signIn}
            className="flex items-center gap-2 rounded-lg border border-brand-gold px-5 py-2.5 text-sm font-semibold text-brand-gold transition-colors hover:bg-brand-gold hover:text-brand-navy"
          >
            <FiUser className="h-4 w-4" />
            Sign In
          </NavLink>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-white lg:hidden"
        >
          {open ? <HiX className="h-7 w-7" /> : <HiMenu className="h-7 w-7" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/5 lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-md px-3 py-2.5 text-[15px] font-medium ${
                        isActive ? "bg-white/5 text-brand-gold" : "text-white/90"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 px-5 pb-5">
              <NavLink
                to={paths.postAJob}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-brand-gold px-5 py-2.5 text-sm font-semibold text-brand-navy"
              >
                <FiBriefcase className="h-4 w-4" />
                Post a Job
              </NavLink>
              <NavLink
                to={paths.signIn}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg border border-brand-gold px-5 py-2.5 text-sm font-semibold text-brand-gold"
              >
                <FiUser className="h-4 w-4" />
                Sign In
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
