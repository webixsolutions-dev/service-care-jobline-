import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FiClock, FiArrowLeft } from "react-icons/fi";
import { paths } from "../routes/paths";

export default function ComingSoon({ title }) {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-5 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center"
      >
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy/5">
          <FiClock className="h-8 w-8 text-brand-gold" />
        </div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-teal">
          {title}
        </p>
        <h1 className="mb-4 text-4xl font-bold text-brand-navy sm:text-5xl">Coming Soon</h1>
        <p className="mb-8 max-w-md text-base text-slate-500">
          We're building this page. Check back soon for the full {title.toLowerCase()}{" "}
          experience.
        </p>
        <NavLink
          to={paths.home}
          className="flex items-center gap-2 rounded-lg bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-goldLight"
        >
          <FiArrowLeft className="h-4 w-4" />
          Back to Home
        </NavLink>
      </motion.div>
    </section>
  );
}
