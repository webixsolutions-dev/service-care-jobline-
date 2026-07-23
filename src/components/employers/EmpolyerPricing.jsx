import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBriefcase,
  FaCheckCircle,
  FaShieldAlt,
  FaUsers,
  FaBuilding,
  FaCanadianMapleLeaf,
  FaUserCircle,
  FaArrowRight,
  FaStethoscope,
  FaHandHoldingHeart,
  FaHeartbeat,
  FaConciergeBell,
  FaBed,
  FaBell
} from 'react-icons/fa';
import { GiChefToque } from 'react-icons/gi';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const plans = [
  {
    name: 'Standard',
    tagline: 'Essential hiring tools to get started.',
    price: '129',
    period: '/30 days',
    priceColor: 'text-amber-400',
    features: ['30-day job posting', 'Basic job listing', 'Access to candidate applications', 'Email support'],
    button: 'bg-amber-400 hover:bg-amber-300 text-slate-900',
    highlighted: false
  },
  {
    name: 'Professional',
    tagline: 'More visibility. More qualified candidates.',
    price: '249',
    period: '/30 days',
    priceColor: 'text-cyan-400',
    features: ['30-day job posting', 'Featured listing', 'Candidate search (limited)', 'Priority email & chat support'],
    button: 'bg-cyan-400 hover:bg-cyan-300 text-slate-900',
    highlighted: true
  },
  {
    name: 'Premium',
    tagline: 'Maximum reach and priority hiring support.',
    price: '399',
    period: '/30 days',
    priceColor: 'text-amber-400',
    features: ['30-day job posting', 'Featured listing', 'Unlimited candidate search', 'Priority support & account manager'],
    button: 'bg-amber-400 hover:bg-amber-300 text-slate-900',
    highlighted: false
  }
];

const stats = [
  {
    icon: FaUsers,
    boxed: true,
    value: '4,800+',
    label: 'Active Candidates',
    description: 'Pre-screened and ready to work'
  },
  {
    icon: FaBuilding,
    boxed: true,
    value: '1,200+',
    label: 'Employers Trust Us',
    description: 'Across hospitality & healthcare'
  },
  {
    icon: FaCanadianMapleLeaf,
    boxed: false,
    value: null,
    label: 'Canada-Wide Reach',
    description: 'Post jobs and connect with talent coast to coast'
  }
];

const roles = [
  { icon: FaStethoscope, label: 'Nurse' },
  { icon: FaHandHoldingHeart, label: 'Caregiver' },
  { icon: FaHeartbeat, label: 'Personal Support Worker' },
  { icon: FaConciergeBell, label: 'Server' },
  { icon: GiChefToque, label: 'Cook' },
  { icon: FaBed, label: 'Housekeeper' },
  { icon: FaBell, label: 'Front Desk' }
];

const EmployerPricing = () => {
  return (
    <section className="bg-slate-900 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-cyan-400 text-xs sm:text-sm font-bold tracking-[0.2em] mb-3">FOR EMPLOYERS</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Flexible Hiring Plans for
            <br />
            <span className="text-amber-400">Hospitality</span> &amp; <span className="text-cyan-400">Healthcare</span> Employers
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Choose the plan that fits your hiring needs. All plans include verified candidates, easy job
            posting, and Canada-wide visibility.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start mb-6 md:mb-8"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`relative bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border ${
                plan.highlighted
                  ? 'border-cyan-400/70 md:-translate-y-3 shadow-lg shadow-cyan-500/10'
                  : 'border-slate-700/60'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-400 text-slate-900 text-xs font-bold tracking-wider px-4 py-1.5 rounded-full whitespace-nowrap">
                  MOST POPULAR
                </span>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{plan.tagline}</p>
              </div>

              <div className="text-center mb-6">
                <span className={`text-2xl sm:text-3xl font-bold align-top ${plan.priceColor}`}>$</span>
                <span className={`text-4xl sm:text-5xl font-bold ${plan.priceColor}`}>{plan.price}</span>
                <span className="text-gray-400 text-sm sm:text-base ml-1">{plan.period}</span>
              </div>

              <ul className="flex flex-col gap-3 mb-8">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-center gap-3 text-sm sm:text-base text-gray-200">
                    <FaCheckCircle className="text-cyan-400 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-xl transition-colors ${plan.button}`}
              >
                <FaBriefcase />
                Post a Job
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-10 md:mb-12"
        >
          <FaShieldAlt className="text-cyan-400" />
          No hidden fees. Cancel or change plans anytime.
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/60 rounded-2xl p-6 sm:p-8 mb-6 md:mb-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-700/60">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className={`flex items-center gap-4 ${i > 0 ? 'pt-8 sm:pt-0 sm:pl-6 lg:pl-10' : ''}`}
                >
                  {s.boxed ? (
                    <div className="w-14 h-14 shrink-0 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                      <Icon className="text-cyan-400 text-2xl" />
                    </div>
                  ) : (
                    <Icon className="text-cyan-400 text-4xl shrink-0" />
                  )}
                  <div>
                    {s.value && <p className="text-2xl sm:text-3xl font-bold text-cyan-400 leading-tight">{s.value}</p>}
                    <p className={`font-semibold text-white ${s.value ? '' : 'text-lg sm:text-xl text-cyan-400'}`}>
                      {s.label}
                    </p>
                    <p className="text-sm text-gray-400">{s.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Roles you can hire for */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/60 rounded-2xl p-6 sm:p-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
            <div className="flex items-center gap-4 shrink-0">
              <div className="w-14 h-14 rounded-full border border-cyan-400/60 flex items-center justify-center">
                <FaUserCircle className="text-cyan-400 text-2xl" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white leading-tight">
                Roles You
                <br />
                Can Hire For
              </h4>
            </div>

            <div className="flex flex-wrap gap-3 flex-1">
              {roles.map((role, i) => {
                const Icon = role.icon;
                return (
                  <span
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-200 border border-slate-600/60 rounded-full px-4 py-2"
                  >
                    <Icon className="text-amber-400" />
                    {role.label}
                  </span>
                );
              })}
            </div>

            <div className="shrink-0 text-center lg:text-left border-t lg:border-t-0 lg:border-l border-slate-700/60 pt-6 lg:pt-0 lg:pl-8">
              <p className="text-cyan-400 font-semibold leading-snug mb-1">
                Need help finding
                <br />
                the right plan?
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-white text-sm font-medium hover:text-cyan-400 transition-colors">
                Contact our team <FaArrowRight className="text-xs" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmployerPricing;


